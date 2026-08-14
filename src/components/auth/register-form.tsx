"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createUser } from "@/actions/users";
import { SubmitButton } from "@/components/form-inputs/submit-button";
import { TextInput } from "@/components/form-inputs/text-input";
import { type RegisterInputProps, registerSchema } from "@/lib/validations";

interface RegisterFormProps {
	plan?: string;
	role?: string;
}

export function RegisterForm({ plan, role }: RegisterFormProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterInputProps>({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = async (data: RegisterInputProps) => {
		setIsLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			const result = await createUser(
				data,
				role === "doctor" ? { plan, role: "DOCTOR" } : undefined,
			);
			if (result.status === 201) {
				toast.success(result.message);
				if (result.data) {
					router.push(`/verify-account/${result.data.id}`);
				}
			} else {
				toast.error(result.message);
			}
		} catch (error) {
			console.error("Lỗi đăng ký:", error);
			toast.error("Đã xảy ra lỗi, vui lòng thử lại!");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
			<TextInput
				errors={errors}
				isLoading={isLoading}
				label="Họ và tên"
				name="fullName"
				page="register"
				register={register}
			/>

			<TextInput
				errors={errors}
				isLoading={isLoading}
				label="Email"
				name="email"
				page="register"
				register={register}
				type="email"
			/>

			<TextInput
				errors={errors}
				isLoading={isLoading}
				label="Số điện thoại"
				name="phone"
				page="register"
				register={register}
				type="tel"
			/>

			<TextInput
				errors={errors}
				isLoading={isLoading}
				label="Mật khẩu"
				name="password"
				onTogglePassword={() => setShowPassword(!showPassword)}
				page="register"
				register={register}
				showPassword={showPassword}
				type="password"
			/>

			<TextInput
				errors={errors}
				isLoading={isLoading}
				label="Xác nhận mật khẩu"
				name="confirmPassword"
				onTogglePassword={() => setShowPassword(!showPassword)}
				page="register"
				register={register}
				showPassword={showPassword}
				type="password"
			/>

			<div className={`${isLoading ? "pointer-events-none opacity-50" : ""}`}>
				<div className="flex items-center gap-2">
					<input
						className="cursor-pointer rounded border-gray-300"
						disabled={isLoading}
						id="terms"
						type="checkbox"
						{...register("terms")}
					/>
					<label
						className="cursor-pointer text-gray-600 text-sm"
						htmlFor="terms"
					>
						Tôi đồng ý với{" "}
						<Link
							className={`text-blue-600 hover:underline ${isLoading ? "cursor-not-allowed" : ""}`}
							href="/terms"
							tabIndex={isLoading ? -1 : 0}
						>
							Điều khoản dịch vụ
						</Link>
					</label>
				</div>
				<div className="h-3">
					{errors.terms && (
						<p className="text-red-600 text-xs">{errors.terms.message}</p>
					)}
				</div>
			</div>

			<SubmitButton
				isLoading={isLoading}
				loadingTitle="Đang đăng ký..."
				title="Đăng ký"
			/>

			<p
				className={`text-center text-gray-600 text-sm ${isLoading ? "pointer-events-none opacity-50" : ""}`}
			>
				Đã có tài khoản?{" "}
				<Link
					className={`text-blue-600 hover:underline ${isLoading ? "cursor-not-allowed" : ""}`}
					href="/login"
					tabIndex={isLoading ? -1 : 0}
				>
					Đăng nhập
				</Link>
			</p>
		</form>
	);
}
