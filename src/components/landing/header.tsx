
"use client";

import { useState } from 'react';
import { Menu, Code, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useTheme } from 'next-themes';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#recommender', label: 'AI Recommender' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#contact', label: 'Contact' },
];

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
  
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label="Toggle theme"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <Code className="h-6 w-6 text-primary" />
          ImmaraApps
        </a>

        <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-6 text-base font-medium">
            {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors text-muted-foreground hover:text-primary">
                {link.label}
                </a>
            ))}
            </nav>
            <ThemeToggle />
            <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px]">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex flex-col p-6">
                    <a href="/" className="flex items-center gap-2 mb-8 font-bold text-lg" onClick={() => setIsOpen(false)}>
                    <Code className="h-6 w-6 text-primary" />
                    ImmaraApps
                    </a>
                    <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        >
                        {link.label}
                        </a>
                    ))}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
