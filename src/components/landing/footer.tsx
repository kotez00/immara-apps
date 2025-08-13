export default function Footer() {
  return (
    <footer className="py-6 border-t bg-background">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Immara Showcase. All rights reserved.</p>
      </div>
    </footer>
  );
}
