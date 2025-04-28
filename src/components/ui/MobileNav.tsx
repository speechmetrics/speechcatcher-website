import React, { useState } from "react";
import { cn } from "../../lib/utils";

// Navigation links to be shared between desktop and mobile
const navLinks = [
  { href: "#features", text: "Features" },
  { href: "#users", text: "Who It's For" },
  { href: "#how-it-works", text: "How It Works" },
  { href: "#testimonials", text: "Testimonials" },
  { href: "#faq", text: "FAQ" },
  { href: "#contact", text: "Contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        className="border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground flex h-10 w-10 items-center justify-center rounded-md border p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen ? "rotate-90" : "",
          )}
        >
          {isOpen ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M4 12h16M4 6h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "bg-background/80 fixed inset-0 z-50 backdrop-blur-sm transition-all",
          isOpen ? "block" : "hidden",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "bg-background fixed top-0 right-0 z-50 h-full w-3/4 max-w-sm shadow-lg transition-transform duration-300 ease-in-out",
          isOpen
            ? "translate-x-0"
            : "pointer-events-none translate-x-full opacity-0",
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <button
            className="text-muted-foreground hover:bg-accent hover:text-accent-foreground ml-auto rounded-md p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-primary block py-2 text-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t pt-6">
            <a
              href="#"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-9 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:ring-1 focus-visible:outline-none"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
