"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { updateUserById } from "@/actions/users";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";

const formSchema = z.object({
	token: z.string().min(6, "Mã xác thực phải có 6 ký tự"),
});

type FormValues = z.infer<typeof formSchema>;

interface VerifyTokenFormProps {
	userId: string;
	userToken: string;
}

export function VerifyTokenForm({ userId, userToken }: VerifyTokenFormProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [showNotification, setShowNotification] = useState(false);
	const [tokenValue, setTokenValue] = useState("");
	const router = useRouter();

	const {
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: { token: "" },
		resolver: zodResolver(formSchema),
	});

	const handleTokenChange = (value: string) => {
		setTokenValue(value);
		setValue("token", value);
	};

	const onSubmit = async (data: FormValues) => {
		setIsLoading(true);
		setShowNotification(false);

		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			const enteredToken = Number.parseInt(data.token, 10);
			const storedToken = Number.parseInt(userToken, 10);

			if (enteredToken !== storedToken) {
				setShowNotification(true);
				setIsLoading(false);
				return;
			}

			const result = await updateUserById(userId);

			if (result.status === 200) {
				toast.success("Xác minh tài khoản thành công!");
				router.push("/login");
			} else {
				setShowNotification(true);
			}
		} catch {
			setShowNotification(true);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
			<div
				className={`space-y-2 ${isLoading ? "pointer-events-none opacity-50" : ""}`}
			>
				<InputOTP
					className={isLoading ? "cursor-not-allowed" : ""}
					containerClassName="justify-center"
					disabled={isLoading}
					maxLength={6}
					onChange={handleTokenChange}
					value={tokenValue}
				>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
				{errors.token && (
					<p className="text-red-600 text-sm">{errors.token.message}</p>
				)}
			</div>

			{showNotification && (
				<Alert variant="destructive">
					<AlertTitle>Lỗi</AlertTitle>
					<AlertDescription>
						Mã xác thực không chính xác. Vui lòng kiểm tra lại email của bạn.
					</AlertDescription>
				</Alert>
			)}

			<Button className="w-full" disabled={isLoading} type="submit">
				{isLoading ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Đang xác minh...
					</>
				) : (
					"Xác minh tài khoản"
				)}
			</Button>

			<p
				className={`text-center text-gray-500 text-sm ${isLoading ? "pointer-events-none opacity-50" : ""}`}
			>
				Chưa nhận được mã?{" "}
				<button
					className={`text-blue-600 hover:underline ${isLoading ? "cursor-not-allowed" : ""}`}
					disabled={isLoading}
					type="button"
				>
					Gửi lại
				</button>
			</p>
		</form>
	);
}
