import { AlertCircle, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";
import { getUserById } from "@/actions/users";
import { VerifyTokenForm } from "@/components/frontend/verify-token-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function VerifyAccountPage({ params }: PageProps) {
	const { id } = await params;
	const result = await getUserById(id);

	if (!result.data) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
				<div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg">
					<Alert variant="destructive">
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Lỗi</AlertTitle>
						<AlertDescription>{result.message}</AlertDescription>
					</Alert>
					<Link
						className="block text-center text-blue-600 hover:underline"
						href="/register"
					>
						Quay lại trang đăng ký
					</Link>
				</div>
			</div>
		);
	}

	if (result.data.isVerified) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
				<div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg">
					<Alert>
						<CheckCircle className="h-4 w-4 text-green-600" />
						<AlertTitle>Đã xác minh</AlertTitle>
						<AlertDescription>
							Tài khoản của bạn đã được xác minh trước đó.
						</AlertDescription>
					</Alert>
					<Link
						className="block text-center text-blue-600 hover:underline"
						href="/login"
					>
						Đi đến trang đăng nhập
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
			<div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg">
				<div className="space-y-2 text-center">
					<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
						<Mail className="h-6 w-6 text-blue-600" />
					</div>
					<h1 className="font-bold text-2xl text-gray-900">
						Xác minh tài khoản
					</h1>
					<p className="text-gray-500 text-sm">
						Nhập mã xác thực 6 chữ số đã được gửi đến email của bạn
					</p>
				</div>

				<VerifyTokenForm
					userId={result.data.id}
					userToken={result.data.token || ""}
				/>
			</div>
		</div>
	);
}
