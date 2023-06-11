"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";

const LoginBtn = ({ session }) => {
  return (
    <>
      {session ? (
        <button
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </button>
      ) : (
        <button
          onClick={() => {
            signIn();
          }}
        >
          Copyright © 2023 양수비공인중개사사무소
        </button>
      )}
    </>
  );
};

export default LoginBtn;
