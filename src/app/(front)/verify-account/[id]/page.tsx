import { AlertCircle, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";
import { getUserById } from "@/actions/users";
import { VerifyTokenForm } from "@/components/frontend/verify-token-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function VerifyAccountPage({ params }: PageProps) {
	const { id } = await params;
	const result = await getUserById(id);

	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
			<div className="w-full max-w-md">
				{!result.data ? (
					<Card>
						<CardContent className="space-y-4 pt-6">
							<Alert variant="destructive">
								<AlertCircle className="size-4" />
								<AlertTitle>Lỗi</AlertTitle>
								<AlertDescription>{result.message}</AlertDescription>
							</Alert>
							<Link
								className="block text-center text-primary text-sm hover:underline"
								href="/register"
							>
								Quay lại trang đăng ký
							</Link>
						</CardContent>
					</Card>
				) : result.data.isVerified ? (
					<Card>
						<CardContent className="space-y-4 pt-6">
							<Alert>
								<CheckCircle className="size-4 text-green-600" />
								<AlertTitle>Đã xác minh</AlertTitle>
								<AlertDescription>
									Tài khoản của bạn đã được xác minh trước đó.
								</AlertDescription>
							</Alert>
							<Link
								className="block text-center text-primary text-sm hover:underline"
								href="/login"
							>
								Đi đến trang đăng nhập
							</Link>
						</CardContent>
					</Card>
				) : (
					<Card>
						<CardHeader className="items-center text-center">
							<div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10">
								<Mail className="size-6 text-primary" />
							</div>
							<CardTitle className="font-bold text-2xl">
								Xác minh tài khoản
							</CardTitle>
							<CardDescription>
								Nhập mã xác thực 6 chữ số đã được gửi đến email{" "}
								<span className="font-medium text-foreground">
									{result.data.email}
								</span>
							</CardDescription>
						</CardHeader>
						<CardContent>
							<VerifyTokenForm
								userId={result.data.id}
								userToken={result.data.token || ""}
							/>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	);
}
