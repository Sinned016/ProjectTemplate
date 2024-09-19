"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Close } from "@/public/icons/close";
import { Menu } from "@/public/icons/menu";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Menu
        className="w-10 h-10 sm:hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {isOpen ? (
        <div className="fixed right-0 top-0 p-6 w-72 h-screen bg-gray-300 dark:bg-gray-700 shadow-sm ">
          <h3 className="text-center text-xl font-bold">Menu</h3>

          <ul className="flex flex-col items-center gap-4 mt-10">
            <li className="transition-colors hover:text-foreground ">
              <Link href="/">Home</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/about">About</Link>
            </li>
            <li className="transition-colors hover:text-foreground">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <Close
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 absolute top-5 right-5 cursor-pointer"
          />
        </div>
      ) : null}
    </div>
  );
}
