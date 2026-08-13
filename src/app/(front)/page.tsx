import { Brands } from "@/components/frontend/brands";
import { DoctorList } from "@/components/frontend/doctor-list";
import { DoctorListCarousel } from "@/components/frontend/doctor-list-carousel";
import { Hero } from "@/components/frontend/hero";
import { TabbedItems } from "@/components/frontend/tabbed-items";
import { doctors } from "../../../public/assets";

export default function HomePage() {
	return (
		<div>
			<Hero />
			<Brands />
			<TabbedItems />

			{/* Video Consultation Doctors */}
			<DoctorList className="bg-gray-50" href="/doctors" title="Khám qua video">
				<DoctorListCarousel doctors={doctors.slice(0, 6)} />
			</DoctorList>

			{/* In-Person Doctors */}
			<DoctorList href="/doctors" title="Khám trực tiếp">
				<DoctorListCarousel doctors={doctors.slice(6, 12)} isInPerson />
			</DoctorList>
		</div>
	);
}
