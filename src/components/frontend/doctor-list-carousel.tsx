"use client";

import type { StaticImageData } from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DoctorCard } from "./doctor-card";

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

interface DoctorListCarouselProps {
	doctors: DoctorProps[];
	isInPerson?: boolean;
}

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 1,
	},
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
	},
};

export function DoctorListCarousel({
	doctors,
	isInPerson = false,
}: DoctorListCarouselProps) {
	return (
		<Carousel
			arrows
			autoPlaySpeed={3000}
			centerMode={false}
			className="gap-4"
			containerClass="carousel-container"
			dotListClass="custom-dot-list-style"
			draggable
			focusOnSelect={false}
			infinite={false}
			itemClass="px-2"
			keyBoardControl
			minimumTouchDrag={80}
			partialVisible={false}
			pauseOnHover
			renderArrowsWhenDisabled={false}
			renderButtonGroupOutside={false}
			renderDotsOutside={false}
			responsive={responsive}
			rewind={false}
			rewindWithAnimation={false}
			rtl={false}
			shouldResetAutoplay
			showDots={false}
			sliderClass=""
			slidesToSlide={1}
			ssr
			swipeable
		>
			{doctors.map((doctor) => (
				<DoctorCard doctor={doctor} isInPerson={isInPerson} key={doctor._id} />
			))}
		</Carousel>
	);
}
