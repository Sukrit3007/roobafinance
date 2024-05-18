import Hero from "@/components/Hero";
import InfoSidebar from "@/components/InfoSidebar";
import VerticalText from "@/components/VerticalText";

export default function Home() {
	return (
		<section className="min-h-screen grid grid-cols-1 lg:grid-cols-3">
			<div className="relative h-full md:col-span-2 ">
				<div className="hidden md:inline absolute z-50 right-0 top-0">
					<VerticalText />
				</div>
				<Hero/>
			</div>
			<div className="relative h-full md:col-span-1">
				<div className="h-full ">
					<InfoSidebar />
				</div>
			</div>
		</section>
	);
}
