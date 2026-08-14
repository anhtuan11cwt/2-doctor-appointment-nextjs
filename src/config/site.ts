export type SiteConfig = {
	name: string;
	description: string;
	url: string;
	ogImage: string;
	links: {
		facebook?: string;
		github?: string;
	};
};

export const siteConfig: SiteConfig = {
	description:
		"Hệ thống đặt lịch khám bệnh trực tuyến. Kết nối với hàng nghìn bác sĩ uy tín trên toàn quốc.",
	links: {
		facebook: "https://facebook.com",
		github: "https://github.com",
	},
	name: "Đặt Lịch Khám",
	ogImage: "/header_img.png",
	url: process.env.NEXTAUTH_URL || "http://localhost:3000",
};
