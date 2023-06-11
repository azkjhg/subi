import Link from 'next/link'
import React from 'react'
import LoginBtn from './LoginBtn'
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const layout = async ({ children }) => {
      let session = await getServerSession(authOptions);
  return (
    <>
    <nav className="w-full flex justify-between items-center p-4 fixed top-0  z-[99999] bg-green-50">
          <Link href="/admin/" >
            관리자페이지
          </Link>
          <nav className="flex gap-6">
            <Link href="/admin/list">List</Link>
            <Link href="/admin/write">Write</Link>
            <LoginBtn session={session}></LoginBtn>
          </nav>
        </nav>
        {children}
    </>
  )
}

export default layout