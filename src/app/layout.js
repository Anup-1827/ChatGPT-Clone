import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./ui/Sidebar";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "./ui/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGPT Clone",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SessionProvider session={session}>
          {!session ? (
            <>
              <Login />
            </>
          ) : (
            <div className="flex">
              <div className="h-screen z-10 hidden md:block">
                <Sidebar />
              </div>
              <div className="flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
