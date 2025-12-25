import { Gamepad2, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-bold text-gradient">
              ARCADIA
            </span>
          </div>

          {/* Made with love */}
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-secondary text-secondary" /> for retro gaming fans
          </p>

          {/* Links */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
