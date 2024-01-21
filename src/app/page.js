import Header from "@/app/ui/Header";
import Image from "next/image";
import ChatGPTLogo from "./ui/svg/ChatGPTLogo";
import UpArrow from "./ui/svg/UpArrow";
import SuggestedSearches from "./ui/SuggestedSearches";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="h-full max-w-[700px] mx-auto">
        <div className="center-element flex-col h-full">
          <div className="h-16 w-16 center-element border border-solid border-mainColor rounded-full mb-3">
            <ChatGPTLogo />
          </div>
          <div className="text-xl font-bold">How can I help you today?</div>
        </div>
      </div>
      <div className=" max-w-[700px] mx-auto">
        <SuggestedSearches />
        <div className="h-10 mb-3 w-full px-2 relative">
          <input
            className="text-black border border-solid border-mainColor rounded-2xl w-full p-3 text-sm outline-none"
            type="text"
            placeholder="Message ChatGPT..."
          />

          <div className="absolute top-2 right-[20px] cursor-pointer center-element bg-black text-white rounded-md p-1 scale-90">
            <UpArrow />
          </div>
        </div>
      </div>
    </main>
  );
}
