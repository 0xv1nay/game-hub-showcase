import { ChevronRight, Sparkles } from "lucide-react";
import { Game } from "@/types/game";

interface FeaturedSectionProps {
  games: Game[];
}

const FeaturedSection = ({ games }: FeaturedSectionProps) => {
  if (games.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-8 sm:py-12">
      {/* Background Glow */}
      <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mb-6 flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-secondary" />
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Featured Games
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <a
              key={game.id}
              href={game.url}
              className="group relative flex gap-4 overflow-hidden rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm card-glow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Game Image */}
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted/30">
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-center">
                <span className="mb-1 w-fit rounded-full bg-secondary/20 px-2 py-0.5 text-xs font-medium text-secondary">
                  {game.category}
                </span>
                <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {game.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                  {game.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
