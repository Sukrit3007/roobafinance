import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import {  lexend } from "@/config/fonts";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen  bg-[#15181B] lexend",
					lexend.className
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
							{children}
							<Analytics />
				</Providers>
			</body>
		</html>
	);
}
