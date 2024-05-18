import InfoSidebar from "@/components/InfoSidebar";
import MainBlock from "@/components/MainBlock";

export default function Home() {
	return (
		<section className="min-h-screen grid grid-cols-1 lg:grid-cols-3">
			<div className="h-full md:col-span-2 border border-red-400">
				<MainBlock/>	
			</div>
			<div className="h-full md:col-span-1  border border-red-400">
				<div className="h-full ">
					<InfoSidebar/>
				</div>
			</div>
		</section>
	);
}
