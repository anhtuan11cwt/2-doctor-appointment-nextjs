import { z } from "zod";

// Biểu thức chính quy cho họ tên tiếng Việt
// Cho phép: ký tự tiếng Việt (có dấu), khoảng trắng, dấu gạch ngang
// Mẫu: chữ cái (bao gồm tiếng Việt) + khoảng trắng/dấu gạch ngang tùy chọn giữa các từ
const vietnameseNameRegex =
	/^[a-zA-ZÀ-ỹĂăÂâÊêÔôƠơƯưĐđ]+([ \-'][a-zA-ZÀ-ỹĂăÂâÊêÔôƠơƯưĐđ]+)*$/;

// Biểu thức chính quy cho số điện thoại Việt Nam
// Phải đúng 10 chữ số, bắt đầu bằng 0
// Đầu số hợp lệ: 03, 05, 07, 08, 09 (các nhà mạng Việt Nam)
const vietnamesePhoneRegex = /^0(3|5|7|8|9)[0-9]{8}$/;

// Các biểu thức chính quy cho mật khẩu
const hasUpperCase = /[A-Z]/;
const hasLowerCase = /[a-z]/;
const hasNumber = /[0-9]/;
const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/;
const hasWhiteSpace = /\s/;

export const registerSchema = z
	.object({
		confirmPassword: z.string().min(1, "Xác nhận mật khẩu là bắt buộc"),
		email: z.string().min(1, "Email là bắt buộc").email("Email không hợp lệ"),
		fullName: z
			.string()
			.min(1, "Họ và tên là bắt buộc")
			.min(2, "Họ và tên phải có ít nhất 2 ký tự")
			.max(100, "Họ và tên không được quá 100 ký tự")
			.regex(
				vietnameseNameRegex,
				"Họ và tên chỉ được chứa chữ cái, khoảng trắng và dấu gạch ngang",
			)
			.refine(
				(value) => {
					const words = value.trim().split(/\s+/);
					return words.length >= 2;
				},
				{
					message: "Họ và tên phải có ít nhất 2 từ (họ và tên)",
				},
			)
			.refine(
				(value) => {
					const dangerousPatterns = [/<script/i, /javascript:/i, /on\w+\s*=/i];
					return !dangerousPatterns.some((pattern) => pattern.test(value));
				},
				{
					message: "Họ và tên chứa ký tự không hợp lệ",
				},
			),
		password: z
			.string()
			.min(1, "Mật khẩu là bắt buộc")
			.min(8, "Mật khẩu phải có ít nhất 8 ký tự")
			.max(128, "Mật khẩu không được quá 128 ký tự")
			.refine((value) => hasUpperCase.test(value), {
				message: "Mật khẩu phải có ít nhất 1 chữ hoa (A-Z)",
			})
			.refine((value) => hasLowerCase.test(value), {
				message: "Mật khẩu phải có ít nhất 1 chữ thường (a-z)",
			})
			.refine((value) => hasNumber.test(value), {
				message: "Mật khẩu phải có ít nhất 1 chữ số (0-9)",
			})
			.refine((value) => hasSpecialChar.test(value), {
				message: "Mật khẩu phải có ít nhất 1 ký tự đặc biệt (!@#$%^&*...)",
			})
			.refine((value) => !hasWhiteSpace.test(value), {
				message: "Mật khẩu không được chứa khoảng trắng",
			}),
		phone: z
			.string()
			.min(1, "Số điện thoại là bắt buộc")
			.regex(
				vietnamesePhoneRegex,
				"Số điện thoại không hợp lệ (phải bắt đầu bằng 03, 05, 07, 08 hoặc 09)",
			),
		terms: z.boolean().refine((val) => val === true, {
			message: "Bạn phải đồng ý với Điều khoản dịch vụ",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Mật khẩu xác nhận không khớp",
		path: ["confirmPassword"],
	});

export type RegisterInputProps = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
	email: z.string().min(1, "Email là bắt buộc").email("Email không hợp lệ"),
	password: z.string().min(1, "Mật khẩu là bắt buộc"),
});

export type LoginInputProps = z.infer<typeof loginSchema>;
