"use client";

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          href={"/category/men"}
          className="m-2 p-2 rouded-md transition-all hover:border-gray-100"
        >
          Hombres
        </Link>
        <Link
          href={"/category/women"}
          className="m-2 p-2 rouded-md transition-all hover:border-gray-100"
        >
          Mujeres
        </Link>
        <Link
          href={"/category/kid"}
          className="m-2 p-2 rouded-md transition-all hover:border-gray-100"
        >
          Niños
        </Link>
      </div>
      {/* Search, CArt, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="w-5 h-5">
          <IoSearchOutline />
        </Link>
        <div className="relative mx-2">
          <span className="absolute text-xs rounded-full px-1 font-bold -top-3 -right-2 bg-blue-700 text-white ">
            3
          </span>
          <Link href="/cart" className="w-5 h-5">
            <IoCartOutline />
          </Link>
        </div>
        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
