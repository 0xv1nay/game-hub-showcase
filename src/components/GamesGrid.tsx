import { Gamepad2 } from "lucide-react";
import { Game } from "@/types/game";
import GameCard from "./GameCard";

interface GamesGridProps {
  games: Game[];
  searchQuery: string;
}

const GamesGrid = ({ games, searchQuery }: GamesGridProps) => {
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Gamepad2 className="mb-4 h-16 w-16 text-muted-foreground/50" />
        <h3 className="font-display text-xl font-bold text-foreground">
          No games found
        </h3>
        <p className="mt-2 text-muted-foreground">
          {searchQuery
            ? `No results for "${searchQuery}"`
            : "Try selecting a different category"}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {games.map((game, index) => (
        <GameCard key={game.id} game={game} index={index} />
      ))}
    </div>
  );
};

export default GamesGrid;
