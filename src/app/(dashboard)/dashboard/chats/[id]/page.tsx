import { NewPrompt } from "@/components/new-prompt";

const ChatPage = () => {
	return (
		<div className="h-full flex flex-col items-center relative">
			<div className="flex-1 overflow-y-scroll w-full flex justify-center">
				<div className="w-1/2 flex flex-col">
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from user
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from usuer
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from user
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from usuer
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from user
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from usuer
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from user
					</div>
					<div className="p-5">Text message from ai</div>
					<div className="p-5 bg-[#2c2937] rounded-[20px] max-w-[80%] self-end">
						Text message from usuer
					</div>
					<NewPrompt />
				</div>
			</div>
		</div>
	);
};

export default ChatPage;
