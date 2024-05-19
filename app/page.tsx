'use client'

import Hero from "@/components/Hero";
import InfoSidebar from "@/components/InfoSidebar";
import Preloader from "@/components/Preloader";
import ScrolllingText from "@/components/ScrolllingText";
import React from 'react'

export default function Home() {
	const [loading, setLoading] = React.useState<any>(false)

	React.useEffect(() => {
		setTimeout(() => setLoading(true), 4000)
	}, [])

	return (
		<div>
			{loading ? (
				<section className="min-h-screen grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
					<div className="relative min-h-screen md:col-span-2 ">
						<div className="hidden md:inline min-h-screen absolute z-50 right-0 top-0">
							<ScrolllingText />
						</div>
						<Hero />
					</div>
					<div className="relative min-h-screen md:col-span-1">
						<div className="min-h-screen ">
							<InfoSidebar />
						</div>
					</div>
				</section>
			) : < Preloader /> 
			}

		</div>

	);
}
