"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			// TODO: Triển khai chức năng tìm kiếm
			console.log("Tìm kiếm:", searchQuery);
		}
	};

	return (
		<form className="w-full max-w-2xl" onSubmit={handleSearch}>
			<div className="relative flex items-center">
				<div className="relative w-full">
					<input
						aria-label="Tìm kiếm bác sĩ hoặc chuyên khoa"
						className="w-full rounded-full border-2 border-gray-200 px-6 py-4 pr-14 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Tìm bác sĩ, chuyên khoa, triệu chứng..."
						type="text"
						value={searchQuery}
					/>
					<div className="absolute top-1/2 right-2 -translate-y-1/2">
						<button
							aria-label="Tìm kiếm"
							className="rounded-full bg-primary p-3 text-white transition-colors duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							type="submit"
						>
							<Search className="h-5 w-5" />
						</button>
					</div>
				</div>
			</div>

			{/* Gợi ý tìm kiếm nhanh */}
			<div className="mt-4 flex flex-wrap gap-2">
				<span className="text-gray-500 text-sm">Phổ biến:</span>
				{["Tim mạch", "Da liễu", "Nhi khoa", "Thần kinh"].map((specialty) => (
					<button
						className="rounded-full bg-primary/10 px-3 py-1 text-primary text-sm transition-colors duration-200 hover:bg-primary/20 hover:text-primary/80"
						key={specialty}
						onClick={() => setSearchQuery(specialty)}
						type="button"
					>
						{specialty}
					</button>
				))}
			</div>
		</form>
	);
}
