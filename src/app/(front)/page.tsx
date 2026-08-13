import { Brands } from "@/components/frontend/brands";
import { Hero } from "@/components/frontend/hero";
import { TabbedItems } from "@/components/frontend/tabbed-items";

export default function HomePage() {
	return (
		<div>
			<Hero />
			<Brands />
			<TabbedItems />
		</div>
	);
}
