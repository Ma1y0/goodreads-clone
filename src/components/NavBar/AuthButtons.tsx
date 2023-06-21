"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function SignInButton() {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "authenticated") {
		return (
			<Image
				src={session.user?.image ?? "/placeholder_avatar.png"}
				alt="user image"
				width={40}
				height={40}
				className="rounded-full"
			/>
		);
	}

	return <button onClick={() => signIn()}>Sign In</button>;
}

export function SignOutButton() {
	return <button onClick={() => signOut()}>Sign Out</button>;
}
