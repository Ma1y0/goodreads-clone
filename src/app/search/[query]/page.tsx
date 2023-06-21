import { prisma } from "@/lib/prisma";
import Image from "next/image";
import type { Author, Book as PBook } from "@prisma/client";

interface Props {
	params: {
		query: string;
	};
}

type Book = {
	id: string;
	title: string;
	rating: number;
	ISBN: string;
	description: string | null;
	cover: string | null;
	createdAt: Date;
	updatedAt: Date;
	authorId: string | null;
	author: {
		name: string;
	};
};

export default async function Search({ params }: Props) {
	const results = await prisma.book.findMany({
		where: { title: { contains: params.query, mode: "insensitive" } },
		take: 200,
		include: {
			author: {
				select: {
					name: true,
				},
			},
		},
	});

	const resultsT = results as Book[];

	return (
		<main>
			<div>
				{resultsT.length > 0 ? (
					<ul className="flex flex-col mx-10 mt-6 gap-3">
						{resultsT.map((result: Book) => (
							<li key={result.id}>
								<ResultCard result={result} />
							</li>
						))}
					</ul>
				) : null}
			</div>
		</main>
	);
}

function ResultCard({ result }: { result: Book }) {
	return (
		<div className="card card-side bg-base-200 shadow-xl py-3">
			<figure className="flex justify-center items-center ml-4">
				<Image
					src={result.cover ?? "/placeholder_avatar.png"}
					alt="author picture"
					width={100}
					height={200}
				/>
			</figure>
			<div className="card-body">
				<h2 className="text-2xl card-title">{result.title}</h2>
				<p>{result.author.name}</p>
				<p className="w-[80%]">{result.description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Watch</button>
				</div>
			</div>
		</div>
	);
}
