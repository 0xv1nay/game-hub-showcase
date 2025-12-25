import { Gamepad2, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-float rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 animate-float rounded-full bg-secondary/5 blur-3xl" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative mx-auto px-4 text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm animate-pulse-glow">
          <Gamepad2 className="h-10 w-10 text-primary" />
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-gradient">RETRO ARCADE</span>
          <br />
          <span className="text-foreground">COLLECTION</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Relive the golden age of gaming. Classic games, 
          <span className="text-primary"> instant play</span>, pure nostalgia.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#games"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-all hover:scale-105 glow-cyan"
          >
            <Zap className="h-4 w-4" />
            Start Playing
          </a>
          <span className="text-sm text-muted-foreground">
            No download required
          </span>
        </div>

        {/* Stats */}
        <div className="mt-12 flex items-center justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-primary sm:text-3xl">50+</div>
            <div className="text-sm text-muted-foreground">Games</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-secondary sm:text-3xl">Free</div>
            <div className="text-sm text-muted-foreground">Forever</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="font-display text-2xl font-bold text-neon-orange sm:text-3xl">0</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
