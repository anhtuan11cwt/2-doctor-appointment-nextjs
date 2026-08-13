"use client";

import { useState } from "react";
import {
	FaMicroscope,
	FaStethoscope,
	FaSyringe,
	FaUserMd,
} from "react-icons/fa";
import { LinkCard } from "./link-card";
import { ServiceCard } from "./service-card";
import type { ServiceProps } from "./types";

const services: ServiceProps[] = [
	{
		image: "/General_physician.svg",
		slug: "general-physician",
		title: "Bác sĩ tổng quát",
	},
	{
		image: "/Dermatologist.svg",
		slug: "dermatologist",
		title: "Bác sĩ da liễu",
	},
	{
		image: "/Pediatricians.svg",
		slug: "pediatricians",
		title: "Bác sĩ nhi",
	},
	{
		image: "/Neurologist.svg",
		slug: "neurologist",
		title: "Bác sĩ thần kinh",
	},
	{
		image: "/Gastroenterologist.svg",
		slug: "gastroenterologist",
		title: "Bác sĩ tiêu hóa",
	},
	{
		image: "/Gynecologist.svg",
		slug: "gynecologist",
		title: "Bác sĩ phụ khoa",
	},
];

const doctors = [
	{ href: "/doctors/general-physician", title: "Bác sĩ tổng quát" },
	{ href: "/doctors/dermatologist", title: "Bác sĩ da liễu" },
	{ href: "/doctors/pediatrician", title: "Bác sĩ nhi" },
	{ href: "/doctors/neurologist", title: "Bác sĩ thần kinh" },
	{ href: "/doctors/cardiologist", title: "Bác sĩ tim mạch" },
	{ href: "/doctors/gastroenterologist", title: "Bác sĩ tiêu hóa" },
];

const specialists = [
	{ href: "/specialties/general-physician", title: "Tổng quát" },
	{ href: "/specialties/dermatologist", title: "Da liễu" },
	{ href: "/specialties/pediatricians", title: "Nhi khoa" },
	{ href: "/specialties/neurologist", title: "Thần kinh" },
	{ href: "/specialties/cardiologist", title: "Tim mạch" },
	{ href: "/specialties/gastroenterologist", title: "Tiêu hóa" },
];

const symptoms = [
	{ href: "/symptoms/headache", title: "Đau đầu" },
	{ href: "/symptoms/fever", title: "Sốt" },
	{ href: "/symptoms/stomach-ache", title: "Đau bụng" },
	{ href: "/symptoms/fatigue", title: "Mệt mỏi" },
	{ href: "/symptoms/cough", title: "Ho" },
	{ href: "/symptoms/sore-throat", title: "Đau họng" },
];

const tabs = [
	{ icon: FaStethoscope, id: "services", label: "Dịch vụ phổ biến" },
	{ icon: FaUserMd, id: "doctors", label: "Bác sĩ" },
	{ icon: FaMicroscope, id: "specialists", label: "Chuyên khoa" },
	{ icon: FaSyringe, id: "symptoms", label: "Triệu chứng" },
];

export function TabbedItems() {
	const [activeTab, setActiveTab] = useState("services");

	return (
		<section className="py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mb-8 text-center font-bold text-2xl text-gray-900 md:text-3xl">
					Dịch vụ phổ biến
				</h2>

				{/* Nút tab */}
				<div className="mb-8 flex flex-wrap justify-center gap-2">
					{tabs.map((tab) => {
						const Icon = tab.icon;
						return (
							<button
								className={`flex items-center gap-2 rounded-md px-4 py-2 font-medium text-sm transition-all duration-300 ${
									activeTab === tab.id
										? "bg-primary text-white"
										: "bg-gray-100 text-gray-700 hover:bg-gray-200"
								}`}
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								type="button"
							>
								<Icon className="h-4 w-4" />
								{tab.label}
							</button>
						);
					})}
				</div>

				{/* Nội dung tab */}
				<div className="transition-all duration-300">
					{activeTab === "services" && (
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{services.map((service) => (
								<ServiceCard key={service.slug} service={service} />
							))}
						</div>
					)}

					{activeTab === "doctors" && (
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{doctors.map((doctor) => (
								<LinkCard
									className="bg-slate-800 text-slate-50"
									href={doctor.href}
									key={doctor.href}
									title={doctor.title}
								/>
							))}
						</div>
					)}

					{activeTab === "specialists" && (
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{specialists.map((specialist) => (
								<LinkCard
									className="bg-blue-900 text-blue-50"
									href={specialist.href}
									key={specialist.href}
									title={specialist.title}
								/>
							))}
						</div>
					)}

					{activeTab === "symptoms" && (
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{symptoms.map((symptom) => (
								<LinkCard
									className="bg-purple-950 text-purple-50"
									href={symptom.href}
									key={symptom.href}
									title={symptom.title}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
