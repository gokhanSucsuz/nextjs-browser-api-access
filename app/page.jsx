import Image from "next/image";
import Geolocation from "./geolocation/page";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center  p-24">
			Main Page
			<Link href="/geolocation">Get Location</Link>
			<Link href="/storage">Storage</Link>
			<Link href="/audio">Audio Page</Link>
		</main>
	);
}
