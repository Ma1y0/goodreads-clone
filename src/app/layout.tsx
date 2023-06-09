import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/NavBar/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider>
			<html lang="en">
				<body className={inter.className}>
					<header>
						<NavBar />
					</header>
					{children}
				</body>
			</html>
		</AuthProvider>
	);
}
