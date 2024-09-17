import Link from "next/link";
import React from "react";
import ThemeToggle from "./theme-toggle";

// Change / delete colors to your liking, the colors on the header is just temporary.
// If I want a different hover color you can write this: "dark:hover:'color'"
// Just use the dark class.

// hidden sm:block

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 p-6 background/75 backdrop-blur-sm z-50 ">
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Header Logo
          </Link>
        </div>

        <ul className="flex flex-row text-muted-foreground gap-6 ">
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

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
