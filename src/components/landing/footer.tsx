import { Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          <p className="font-semibold">ImmaraApps</p>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ImmaraApps. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
