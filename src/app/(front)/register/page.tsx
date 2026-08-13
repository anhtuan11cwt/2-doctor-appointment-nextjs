import Image from "next/image";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
	return (
		<div className="flex min-h-[calc(100vh-4rem)] items-start justify-center bg-gray-50 p-4 pt-8 md:items-center md:pt-4">
			<div className="w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl">
				<div className="grid grid-cols-1 md:grid-cols-2">
					{/* Hình ảnh */}
					<div className="relative hidden bg-blue-600 md:block">
						<Image
							alt="Đăng ký"
							className="h-full w-full object-cover"
							fill
							priority
							sizes="(max-width: 768px) 0vw, 50vw"
							src="/header_img.png"
						/>
						<div className="absolute inset-0 bg-blue-600/50" />
						<div className="absolute bottom-8 left-8 text-white">
							<h2 className="mb-2 font-bold text-2xl">Tạo tài khoản mới</h2>
							<p className="text-blue-100">
								Đăng ký để trải nghiệm dịch vụ y tế tốt nhất
							</p>
						</div>
					</div>

					{/* Biểu mẫu */}
					<div className="flex items-center p-8">
						<div className="w-full">
							<div className="mb-8">
								<h1 className="font-bold text-2xl text-gray-900">Đăng ký</h1>
								<p className="mt-2 text-gray-600 text-sm">
									Tạo tài khoản để đặt lịch khám bệnh
								</p>
							</div>

							<RegisterForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
