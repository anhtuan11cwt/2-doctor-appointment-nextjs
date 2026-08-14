"use client";

import { Check, Clock, FileText } from "lucide-react";
import Image from "next/image";
import { CommandMenu } from "@/components/command-menu";
import { assets } from "../../../public/assets";
import { TransitionText } from "./transition-text";

const professionalTitles = [
	"bác sĩ tổng quát",
	"bác sĩ da liễu",
	"bác sĩ nhi",
	"bác sĩ thần kinh",
	"bác sĩ tim mạch",
];

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white pt-20 pb-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
					{/* Left content */}
					<div className="space-y-8">
						<h1 className="font-bold text-4xl text-gray-900 leading-tight md:text-5xl lg:text-6xl">
							Đặt lịch với{" "}
							<span className="text-primary">
								<TransitionText
									className="text-primary"
									interval={3000}
									texts={professionalTitles}
								/>
							</span>
							<br />
							của bạn
						</h1>
						<p className="max-w-xl text-gray-600 text-lg">
							Đặt lịch khám bệnh trực tuyến nhanh chóng và tiện lợi. Kết nối với
							hàng nghìn bác sĩ uy tín trên toàn quốc.
						</p>

						{/* Search Bar */}
						<CommandMenu variant="hero" />

						{/* CTA Buttons */}
						<div className="flex flex-wrap gap-4">
							<button
								className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
								type="button"
							>
								<Clock className="h-5 w-5" />
								Cần khám gấp
							</button>
							<button
								className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
								type="button"
							>
								<FileText className="h-4 w-4" />
								Cần kê đơn thuốc
							</button>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-8 pt-8">
							<div className="text-center">
								<div className="font-bold text-3xl text-primary">1.800+</div>
								<div className="text-gray-500 text-sm">Bệnh nhân</div>
							</div>
							<div className="text-center">
								<div className="font-bold text-3xl text-primary">120+</div>
								<div className="text-gray-500 text-sm">Chuyên gia</div>
							</div>
							<div className="text-center">
								<div className="font-bold text-3xl text-primary">98%</div>
								<div className="text-gray-500 text-sm">Hài lòng</div>
							</div>
						</div>
					</div>

					{/* Right content - Image */}
					<div className="relative hidden lg:block">
						<div className="relative">
							<Image
								alt="Bác sĩ tư vấn"
								className="h-auto w-full"
								height={500}
								priority
								src={assets.header_img}
								width={600}
							/>
							{/* Floating elements */}
							<div className="absolute top-10 left-10 animate-bounce rounded-xl bg-white p-4 shadow-lg">
								<div className="flex items-center space-x-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
										<Check className="h-5 w-5 text-green-600" />
									</div>
									<div>
										<div className="font-medium text-gray-900 text-sm">
											Đặt lịch thành công
										</div>
										<div className="text-gray-500 text-xs">Hôm nay</div>
									</div>
								</div>
							</div>
							<div className="absolute right-10 bottom-10 rounded-xl bg-white p-4 shadow-lg">
								<div className="flex items-center space-x-3">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
										<Clock className="h-5 w-5 text-blue-600" />
									</div>
									<div>
										<div className="font-medium text-gray-900 text-sm">
											Nhắc lịch hẹn
										</div>
										<div className="text-gray-500 text-xs">Trước 24h</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Background decoration */}
			<div className="pointer-events-none absolute top-0 left-0 h-full w-full">
				<div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-blue-100 opacity-70 mix-blend-multiply blur-xl filter" />
				<div className="absolute top-40 right-10 h-72 w-72 animate-pulse rounded-full bg-purple-100 opacity-70 mix-blend-multiply blur-xl filter delay-1000" />
			</div>
		</section>
	);
}
