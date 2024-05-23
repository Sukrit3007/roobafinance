'use client'

import Hero from "@/components/Hero";
import InfoSidebar from "@/components/InfoSidebar";
import Preloader from "@/components/Preloader";
import ScrolllingText from "@/components/ScrolllingText";
import React, { useState, useEffect } from 'react';

export default function Home() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(true), 4000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			{loading ? (
				<section className="min-h-screen grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
					<div className="relative min-h-screen md:col-span-2">
						<div className="hidden lg:inline min-h-screen absolute z-50 right-0 top-0">
							<ScrolllingText />
						</div>
						<Hero />
					</div>
					<div className="relative bg-[#15181B] min-h-screen md:col-span-1 z-40">
						<InfoSidebar />
					</div>
				</section>
			) : (
				<Preloader />
			)}
		</div>
	);
}
