"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SubmitButton } from "@/components/form-inputs/submit-button";
import { TextInput } from "@/components/form-inputs/text-input";
import { type LoginInputProps, loginSchema } from "@/lib/validations";

export function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputProps>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginInputProps) => {
		setIsLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			const { signIn } = await import("next-auth/react");
			const result = await signIn("credentials", {
				email: data.email,
				password: data.password,
				redirect: false,
			});

			if (result?.error) {
				toast.error(result.error);
			} else {
				toast.success("Đăng nhập thành công!");
				router.push("/dashboard");
			}
		} catch {
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
				label="Email"
				name="email"
				register={register}
				type="email"
			/>

			<TextInput
				errors={errors}
				isLoading={isLoading}
				label="Mật khẩu"
				name="password"
				register={register}
				type="password"
			/>

			<div
				className={`flex items-center justify-between ${isLoading ? "pointer-events-none opacity-50" : ""}`}
			>
				<label className="flex items-center gap-2">
					<input
						className="rounded border-gray-300"
						disabled={isLoading}
						type="checkbox"
					/>
					<span className="text-gray-600 text-sm">Ghi nhớ đăng nhập</span>
				</label>
				<Link
					className={`text-blue-600 text-sm hover:underline ${isLoading ? "cursor-not-allowed" : ""}`}
					href="/forgot-password"
					tabIndex={isLoading ? -1 : 0}
				>
					Quên mật khẩu?
				</Link>
			</div>

			<SubmitButton
				isLoading={isLoading}
				loadingTitle="Đang đăng nhập..."
				title="Đăng nhập"
			/>

			<p
				className={`text-center text-gray-600 text-sm ${isLoading ? "pointer-events-none opacity-50" : ""}`}
			>
				Chưa có tài khoản?{" "}
				<Link
					className={`text-blue-600 hover:underline ${isLoading ? "cursor-not-allowed" : ""}`}
					href="/register"
					tabIndex={isLoading ? -1 : 0}
				>
					Đăng ký
				</Link>
			</p>
		</form>
	);
}
