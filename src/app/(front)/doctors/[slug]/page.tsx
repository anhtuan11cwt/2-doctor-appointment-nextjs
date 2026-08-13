"use client";

import { ArrowLeft, MapPin, Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { DoctorDetails } from "@/components/frontend/doctor-details";
import { FixedBookButton } from "@/components/frontend/fixed-book-button";
import { doctors } from "../../../../../public/assets";

export default function DoctorPage() {
	const params = useParams();
	const slug = params.slug as string;

	const doctor = doctors.find((doc) => doc._id === slug);

	if (!doctor) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<div className="text-center">
					<h1 className="mb-4 font-bold text-2xl text-gray-900">
						Không tìm thấy bác sĩ
					</h1>
					<Link className="text-blue-600 hover:underline" href="/">
						Quay về trang chủ
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-blue-50 pb-24">
			<div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
				{/* Nút quay lại */}
				<Link
					className="mb-6 inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
					href="/"
				>
					<ArrowLeft className="h-4 w-4" />
					Quay lại
				</Link>

				{/* Thẻ thông tin bác sĩ */}
				<div className="rounded-lg bg-white p-6 shadow-lg">
					<div className="flex flex-col gap-6 md:flex-row">
						{/* Ảnh bác sĩ */}
						<div className="flex-shrink-0">
							<Image
								alt={doctor.name}
								className="h-36 w-36 rounded-lg object-cover"
								height={144}
								priority
								src={doctor.image}
								width={144}
							/>
						</div>

						{/* Thông tin bác sĩ */}
						<div className="flex-1 space-y-4">
							<h1 className="font-bold text-2xl text-gray-900 uppercase tracking-wide">
								{doctor.name}
							</h1>

							<div className="flex items-center gap-2 text-gray-600">
								<Stethoscope className="h-5 w-5" />
								<span>{doctor.speciality}</span>
							</div>

							<div className="flex items-center gap-2 text-gray-600">
								<MapPin className="h-5 w-5" />
								<span>
									{doctor.address.line1}, {doctor.address.line2}
								</span>
							</div>

							<div className="flex items-center gap-2 text-blue-600">
								<Video className="h-5 w-5" />
								<span>Khám qua video</span>
							</div>

							<div className="flex items-center gap-4">
								<div className="rounded-full bg-green-100 px-3 py-1">
									<span className="font-medium text-green-800 text-xs uppercase">
										Sẵn sàng hôm nay
									</span>
								</div>
								<span className="font-bold text-gray-900 text-xl">
									{new Intl.NumberFormat("vi-VN").format(doctor.fees)}₫
								</span>
							</div>

							<div className="text-gray-600">
								<p>
									<strong>Kinh nghiệm:</strong> {doctor.experience}
								</p>
								<p>
									<strong>Bằng cấp:</strong> {doctor.degree}
								</p>
							</div>
						</div>
					</div>

					{/* Các tab chi tiết bác sĩ */}
					<DoctorDetails />
				</div>
			</div>

			{/* Nút đặt lịch cố định */}
			<FixedBookButton price={doctor.fees} />
		</div>
	);
}
