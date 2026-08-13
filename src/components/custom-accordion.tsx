"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
	answer: string;
	question: string;
}

interface CustomAccordionProps {
	items: FAQItem[];
}

export function CustomAccordion({ items }: CustomAccordionProps) {
	return (
		<Accordion className="w-full">
			{items.map((item) => (
				<AccordionItem key={item.question} value={item.question}>
					<AccordionTrigger className="text-left font-medium text-gray-900">
						{item.question}
					</AccordionTrigger>
					<AccordionContent className="text-gray-600">
						{item.answer}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
