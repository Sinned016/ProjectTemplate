import GitHub from "@/public/icons/github";
import LinkedIn from "@/public/icons/linkedin";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between container">
        <div className="flex items-center justify-center ">
          <p className="text-xs text-muted-foreground">
            DB. All rights reserved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            className="text-muted-foreground hover:text-foreground"
            href="https://github.com/Sinned016"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHub className="h-7 w-7" />
          </a>

          <a
            className="text-muted-foreground hover:text-foreground"
            href="https://www.linkedin.com/in/dennis-blomberg-378ba1198/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedIn className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}
