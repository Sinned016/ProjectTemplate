import Link from "next/link";
import React from "react";
import ThemeToggle from "./theme-toggle";
import MenuButton from "./menuButton";

// Change / delete colors to your liking, the colors on the header is just temporary.
// If I want a different hover color for dark mode you can write this: "dark:hover:'color'"
// Just use the dark class.

// hidden sm:block

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 py-6 background/75 backdrop-blur-sm z-50 container ">
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>
        </div>

        <ul className="hidden sm:flex flex-row text-muted-foreground gap-6 ">
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

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <MenuButton />
        </div>
      </nav>
    </header>
  );
}
