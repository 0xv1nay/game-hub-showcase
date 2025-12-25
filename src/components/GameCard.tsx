import { Play, Star } from "lucide-react";
import { Game } from "@/types/game";

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
  return (
    <a
      href={game.url}
      className="group relative block overflow-hidden rounded-xl border border-border/50 bg-card card-glow"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Featured Badge */}
      {game.featured && (
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-secondary/90 px-2 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm">
          <Star className="h-3 w-3 fill-current" />
          Featured
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm glow-cyan">
            <Play className="h-7 w-7 fill-current ml-1" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-muted/80 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            {game.category}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {game.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
          {game.description}
        </p>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};

export default GameCard;
