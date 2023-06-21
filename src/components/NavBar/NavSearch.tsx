"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavSearch() {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/search/${query}`);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				value={query}
				type="text"
				placeholder="Search"
				className="input input-bordered w-24 md:w-auto"
				onChange={onChange}
			/>
		</form>
	);
}
