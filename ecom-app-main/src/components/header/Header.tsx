"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import Menu from "./Menu";
import { useScrollPosition } from "./useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className="mb-23" >
      <nav>
        <div
          className={classNames(
            scrollPosition > 10
              ? "bg-white text-black shadow-2xl"
              : "bg-gray-300  text-white  ",
            "  fixed z-40 transition ease-in-out duration-500  w-full flex justify-between text-xs p-4"
          )}
        >

          <div>
            <Link
              href="/shop"
              className="btn font-boogaloo btn-ghost normal-case  hover:text-purple-600 "
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="btn btn-ghost normal-case  hover:text-purple-600 "
            >
              About
            </Link>
            <Link
              href="/collect"
              className="btn btn-ghost normal-case  hover:text-purple-600 "
            >
              Pick up Points
            </Link>
          </div>
          <Link href="/" className="Jolly  normal-case text-4xl font-mono  ">
            ReciclArt
          </Link>

          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
