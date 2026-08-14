"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SubmitButton } from "@/components/form-inputs/submit-button";
import { TextInput } from "@/components/form-inputs/text-input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { type LoginInputProps, loginSchema } from "@/lib/validations";

export function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
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
		setError(null);
		try {
			const { signIn } = await import("next-auth/react");
			const result = await signIn("credentials", {
				email: data.email,
				password: data.password,
				redirect: false,
			});

			if (result?.error) {
				setError(result.error);
			} else {
				toast.success("Đăng nhập thành công!");
				router.push("/dashboard");
				router.refresh();
			}
		} catch {
			setError("Đã xảy ra lỗi, vui lòng thử lại!");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="space-y-4">
			{error && (
				<Alert variant="destructive">
					<AlertCircle className="size-4" />
					<AlertTitle>Đăng nhập thất bại</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
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
					page="login"
					register={register}
					type="password"
				/>

				<SubmitButton
					isLoading={isLoading}
					loadingTitle="Đang đăng nhập..."
					title="Đăng nhập"
				/>
			</form>

			<p className="text-center text-gray-600 text-sm">
				Chưa có tài khoản?{" "}
				<Link className="text-blue-600 hover:underline" href="/register">
					Đăng ký
				</Link>
			</p>
		</div>
	);
}
