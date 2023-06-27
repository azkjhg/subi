
import LoginBtn from "./LoginBtn";
import "./globals.css";
import { Open_Sans, Roboto, Gowun_Batang } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Link from "next/link";
import { MyContextProvider } from '@/components/Context';
import Image from "next/image";
import { Analytics } from '@vercel/analytics/react';

const sans = Open_Sans({ subsets: ["latin"] });
const pretendard = Gowun_Batang({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "제주도 부동산 - 양수비 공인중개사 사무소",
  description: "제주도의 부동산을 소개합니다.",
  icons: { icon: "/favicon.ico" },
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  return (
    
    <html lang="ko" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <header className="flex justify-between items-center px-4 py-2 sticky top-0  z-[9999] bg-green-50">
          <Link href="/" >
            <Image src={"/images/긴로고투명.png"} width={180} height={32} alt="logo"/>
          </Link>
          {session ? <nav className="flex gap-6">
            <Link href="/list">List</Link>
            <Link href="/write">Write</Link>
            <LoginBtn session={session}></LoginBtn>
          </nav> : null}
          
        </header>
        <MyContextProvider>
        {children}
        </MyContextProvider>
        <p className="bg-slate-900 text-white py-2 text-sm text-center"><LoginBtn session={session}>{"Copyright © 2023 양수비공인중개사사무소"}</LoginBtn></p>
        {/* <header className="flex justify-center items-center p-4  top-0 bg-slate-100 z-10">

        <p >
          Copyright © 2023 양수비공인중개사사무소
          </p>
        </header> */}
      <Analytics />
      </body>
    </html>
   
  );
}
