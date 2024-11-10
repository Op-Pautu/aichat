"use client";

import { IKImage } from "imagekitio-next";
import { Loader } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Upload } from "./upload/upload";
import Markdown from "react-markdown";

import model from "../lib/gemini";

interface ImageState {
	isLoading: boolean;
	error: string;
	dbData: {
		filePath?: string;
	};
}
export const NewPrompt = () => {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;
	const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;
	const endRef = useRef<HTMLDivElement>(null);

	const [image, setImage] = useState<ImageState>({
		isLoading: false,
		error: "",
		dbData: {},
	});
	useEffect(() => {
		if (endRef.current) {
			endRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [question, answer, image.dbData]);

	const add = async (textValue: string) => {
		setQuestion(textValue);

		const result = await model.generateContent(textValue);
		const response = result.response;
		setAnswer(response.text());
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const text = form.elements.namedItem("text") as HTMLInputElement;
		const textValue = text.value;
		if (!textValue) return;

		add(textValue);
	};
	return (
		<>
			{image.isLoading && (
				<Loader className="size-6 animate-spin text-muted-foreground" />
			)}
			{image.dbData?.filePath && (
				<IKImage
					urlEndpoint={urlEndpoint}
					path={image.dbData?.filePath}
					alt={"image"}
					width={380}
					transformation={[{ width: "380" }]}
				/>
			)}
			{question && <div className="p-5">{question}</div>}
			{answer && (
				<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
					<Markdown>{answer}</Markdown>
				</div>
			)}
			<div className="pb-[100px]" ref={endRef}></div>
			<form
				onSubmit={handleSubmit}
				className="w-1/2 absolute bottom-0 bg-[#2c2937] rounded-[20px] flex items-center gap-5 px-5 mb-5"
			>
				<Upload setImage={setImage} />
				<input
					type="file"
					multiple={false}
					hidden
					id="file"
					className="flex-1 p-5 border-none outline-none bg-transparent text-[#ececec]"
				/>
				<input
					type="text"
					name="text"
					className="flex-1 p-5 border-none outline-none bg-transparent text-[#ececec]"
					placeholder="Ask anything..."
				/>
				<button className="rounded-[50%] bg-[#605e68] border-none p-2.5 flex items-center justify-center cursor-pointer">
					<img src="/arrow.png" alt="arrow" className="size-4" />
				</button>
			</form>
		</>
	);
};
