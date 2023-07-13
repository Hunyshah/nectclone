"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Input from "../components/input";
type Props = {};

const AuthPAge = (props: Props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setvariant] = useState("login");
  const togglevariant = useCallback(() => {
    setvariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  console.log(email + "<><><><>");
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className=" bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-10 py-5">
          <Image src={"/images/logo.png"} alt="Logo" width={100} height={20} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 rounded-md lg:max-w-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  value={username}
                  id="username"
                  label="Username"
                  type="string"
                  onchange={(e: any) => {
                    setUsername(e.target.value);
                  }}
                />
              )}
              <Input
                value={email}
                id="email"
                label="Email"
                type="string"
                onchange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />

              <Input
                value={password}
                id="Password"
                label="password"
                type="password"
                onchange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="bg-red-500 text-white rounded-md w-full mt-10 py-3 hover:bg-red-700 transition">
              {variant === "login" ? "Sign in" : "Sign Up"}
            </button>
            <p className="mt-12 text-neutral-500 ">
              if u have any account?{" "}
              <span
                onClick={togglevariant}
                className="text-white hover:underline cursor-pointer ml-1"
              >
                {variant === "login" ? "Create Account" : "login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPAge;
