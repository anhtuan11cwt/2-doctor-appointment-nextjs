"use client";

import { format } from "date-fns";
import { vi } from "date-fns/locale";
import dynamic from "next/dynamic";
import { useState } from "react";

const Calendar = dynamic(
	() => import("@/components/ui/calendar").then((mod) => mod.Calendar),
	{ ssr: false },
);

interface AvailabilityProps {
	timeSlots?: string[];
}

const defaultTimeSlots = [
	"08:00",
	"08:30",
	"09:00",
	"09:30",
	"10:00",
	"10:30",
	"11:00",
	"11:30",
	"14:00",
	"14:30",
	"15:00",
	"15:30",
	"16:00",
	"16:30",
	"17:00",
];

export function Availability({
	timeSlots = defaultTimeSlots,
}: AvailabilityProps) {
	const [bookDate, setBookDate] = useState<Date | undefined>(new Date());
	const [selectedTime, setSelectedTime] = useState<string | undefined>();

	const formattedDate = bookDate
		? format(bookDate, "EEEE, dd MMMM yyyy", { locale: vi })
		: "";

	return (
		<div className="mt-6">
			<h2 className="mb-4 font-bold text-slate-500 text-sm uppercase tracking-wide">
				Chọn ngày và giờ khám
			</h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{/* Calendar */}
				<div>
					<Calendar
						className="rounded-md border"
						disabled={{ before: new Date() }}
						locale={vi}
						mode="single"
						onSelect={setBookDate}
						selected={bookDate}
					/>
				</div>

				{/* Time slots */}
				<div>
					{bookDate && (
						<div className="mb-4 rounded-md border border-blue-500 bg-blue-50 p-3">
							<p className="font-medium text-blue-700">{formattedDate}</p>
						</div>
					)}

					<div className="grid grid-cols-3 gap-2">
						{timeSlots.map((time) => (
							<button
								className={`rounded-md px-3 py-2 text-center text-sm transition-all ${
									selectedTime === time
										? "bg-blue-600 text-white"
										: "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
								}`}
								key={time}
								onClick={() => setSelectedTime(time)}
								type="button"
							>
								{time}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
