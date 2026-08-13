"use server";

import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/email";
import { type RegisterInputProps, registerSchema } from "@/lib/validations";

export async function createUser(data: RegisterInputProps) {
	try {
		// Kiểm tra dữ liệu với Zod
		const validationResult = registerSchema.safeParse(data);
		if (!validationResult.success) {
			return {
				data: null,
				message: validationResult.error.issues[0].message,
				status: 400,
			};
		}

		// Kiểm tra người dùng đã tồn tại chưa
		const existingUser = await prisma.user.findUnique({
			where: { email: data.email },
		});

		if (existingUser) {
			return {
				data: null,
				message: "Email này đã được đăng ký",
				status: 400,
			};
		}

		// Mã hóa mật khẩu
		const hashedPassword = await bcrypt.hash(data.password, 10);

		// Tạo mã xác thực
		const token = Math.floor(100000 + Math.random() * 900000).toString();

		// Tạo người dùng
		const user = await prisma.user.create({
			data: {
				email: data.email,
				name: data.fullName,
				password: hashedPassword,
				phone: data.phone,
				token: token,
			},
		});

		// Gửi email xác thực qua Gmail SMTP
		const emailResult = await sendVerificationEmail({
			name: user.name,
			to: user.email,
			token: token,
		});

		if (!emailResult.success) {
			console.error("Gửi email xác thực thất bại");
		}

		return {
			data: user,
			message: "Đăng ký thành công! Vui lòng kiểm tra email để xác thực.",
			status: 201,
		};
	} catch (error) {
		console.error("Lỗi khi tạo người dùng:", error);
		return {
			data: null,
			message: "Đã xảy ra lỗi khi đăng ký",
			status: 500,
		};
	}
}

export async function getUserById(id: string) {
	try {
		const user = await prisma.user.findUnique({
			where: { id },
		});

		if (!user) {
			return {
				data: null,
				message: "Không tìm thấy người dùng",
				status: 404,
			};
		}

		return {
			data: user,
			message: "Lấy thông tin người dùng thành công",
			status: 200,
		};
	} catch (error) {
		console.error("Lỗi khi lấy thông tin người dùng:", error);
		return {
			data: null,
			message: "Đã xảy ra lỗi",
			status: 500,
		};
	}
}

export async function updateUserById(id: string) {
	try {
		const user = await prisma.user.update({
			data: { isVerified: true },
			where: { id },
		});

		return {
			data: user,
			message: "Xác minh tài khoản thành công",
			status: 200,
		};
	} catch (error) {
		console.error("Lỗi khi cập nhật người dùng:", error);
		return {
			data: null,
			message: "Đã xảy ra lỗi khi xác minh",
			status: 500,
		};
	}
}
