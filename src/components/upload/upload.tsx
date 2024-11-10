"use client";
import React, { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { ImageKitProvider, IKImage, IKUpload } from "imagekitio-next";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const authenticator = async () => {
	try {
		const response = await fetch("http://localhost:3000/api/upload");

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Request failed with status ${response.status}: ${errorText}`
			);
		}

		const data = await response.json();
		const { signature, expire, token } = data;
		return { signature, expire, token };
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Authentication request failed: ${error.message}`);
		} else {
			throw new Error("Authentication request failed with an unknown error.");
		}
	}
};

interface UploadProps {
	setImage: Dispatch<
		SetStateAction<{ isLoading: boolean; error: string; dbData: {} }>
	>;
}

export function Upload({ setImage }: UploadProps) {
	const ikUploadRef = useRef<any>(null);
	const onError = (err: unknown): void => {
		console.error("Error", err);
	};

	const onSuccess = (res: IKUploadResponse) => {
		console.log("Success", res);
		setImage((prev) => ({
			...prev,
			isLoading: false,
			dbData: res,
		}));
	};
	const onUploadProgress = (
		progress: ProgressEvent<XMLHttpRequestEventTarget>
	) => {
		console.log("Progress", progress);
	};

	const onUploadStart = (evt: ChangeEvent<HTMLInputElement>): void => {
		console.log("Start", evt);
		setImage((prev) => ({
			...prev,
			isLoading: true,
		}));
	};

	return (
		<ImageKitProvider
			publicKey={publicKey}
			urlEndpoint={urlEndpoint}
			authenticator={authenticator}
		>
			<IKUpload
				fileName="test-upload.png"
				onError={onError}
				onSuccess={onSuccess}
				useUniqueFileName={true}
				onUploadProgress={onUploadProgress}
				onUploadStart={onUploadStart}
				style={{ display: "none " }}
				ref={ikUploadRef}
			/>
			{
				<label
					onClick={() => ikUploadRef?.current?.click()}
					className="rounded-[50%] bg-[#605e68] border-none p-2.5 flex items-center justify-center cursor-pointer"
				>
					<img src="/attachment.png" alt="attachment" className="size-4" />
				</label>
			}
		</ImageKitProvider>
	);
}
