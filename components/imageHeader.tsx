import Link from "next/link";
import React from "react";
import ThemeToggle from "./theme-toggle";
import MenuButton from "./menuButton";

// Change / delete colors to your liking, the colors on the header is just temporary.
// If I want a different hover color for dark mode you can write this: "dark:hover:'color'"
// Just use the dark class.

// hidden sm:block

export default function Header() {
  const headerStyle: React.CSSProperties = {
    backgroundImage: "url(/pictures/forest-road.jpg)", // Path relative to public folder
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };

  return (
    <header
      className="w-full z-50 py-6 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] xl:h-[1000px] 2xl:[1200px] "
      style={headerStyle}
    >
      <nav className="flex items-center justify-between container">
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
