import { Clock, MapPin, Stethoscope, Video } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface DoctorProps {
	_id: string;
	address: {
		line1: string;
		line2: string;
	};
	experience: string;
	fees: number;
	image: string | StaticImageData;
	name: string;
	speciality: string;
}

interface DoctorCardProps {
	doctor: DoctorProps;
	isInPerson?: boolean;
}

const timeSlots = [
	{ period: "SA", time: "09:00" },
	{ period: "SA", time: "10:00" },
	{ period: "SA", time: "11:00" },
	{ period: "CH", time: "14:00" },
	{ period: "CH", time: "15:00" },
];

export function DoctorCard({ doctor, isInPerson = false }: DoctorCardProps) {
	return (
		<Link
			className="group block rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-gray-400 hover:shadow-md"
			href={`/doctors/${doctor._id}`}
		>
			{/* Doctor Image */}
			<div className="relative mb-4 overflow-hidden rounded-md">
				<Image
					alt={doctor.name}
					className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
					height={207}
					src={doctor.image}
					width={243}
				/>
			</div>

			{/* Doctor Info */}
			<div className="space-y-2">
				<h3 className="font-bold text-gray-900 text-lg uppercase tracking-wide">
					{doctor.name}
				</h3>

				<div className="flex items-center gap-2 text-gray-600">
					<Stethoscope className="h-4 w-4" />
					<span className="text-sm">{doctor.speciality}</span>
				</div>

				{/* Location or Video icon */}
				{isInPerson ? (
					<div className="flex items-center gap-2 text-gray-600">
						<MapPin className="h-4 w-4" />
						<span className="text-sm">{doctor.address.line1}</span>
					</div>
				) : (
					<div className="flex items-center gap-2 text-blue-600">
						<Video className="h-4 w-4" />
						<span className="text-sm">Khám qua video</span>
					</div>
				)}

				{/* Available Today badge */}
				<div className="inline-block rounded-full bg-green-100 px-3 py-1">
					<span className="font-medium text-green-800 text-xs uppercase">
						Sẵn sàng hôm nay
					</span>
				</div>

				{/* Price and Date */}
				<div className="flex items-center justify-between pt-2">
					<div className="flex items-center gap-1 text-gray-600">
						<Clock className="h-4 w-4" />
						<span className="text-sm">Hôm nay</span>
					</div>
					<span className="font-bold text-gray-900">
						{new Intl.NumberFormat("vi-VN").format(doctor.fees)}₫
					</span>
				</div>

				{/* Time slots */}
				<div className="grid grid-cols-3 gap-2 pt-2">
					{timeSlots.slice(0, 5).map((slot) => (
						<button
							className="rounded bg-blue-600 px-2 py-1 text-center text-white text-xs transition-colors hover:bg-blue-700"
							key={`${slot.period}-${slot.time}`}
							type="button"
						>
							{slot.time} {slot.period}
						</button>
					))}
					<button
						className="rounded bg-blue-900 px-2 py-1 text-center text-white text-xs transition-colors hover:bg-blue-800"
						type="button"
					>
						Thêm
					</button>
				</div>
			</div>
		</Link>
	);
}
