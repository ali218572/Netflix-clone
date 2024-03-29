"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import Input from "../../components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div
      className=" relative h-full w-full bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(/images/hero.jpg)` }}
    >
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <div className="relative h-12 w-24">
            <Image
              src="/images/logo.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8  font-semibold">
              {variant === "login" ? "Sign-in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => {
                    setName(ev.target.value);
                  }}
                  id="name"
                  type="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => {
                  setEmail(ev.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="password"
                onChange={(ev: any) => {
                  setPassword(ev.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>

            <p className="text-neutral-500 mt-12 whitespace-nowrap">
              {variant === 'login' ? 'First time using Netflix?' : 'Already have account ? '}
              
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === 'register' ? 'Login' : 'Create an account'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
