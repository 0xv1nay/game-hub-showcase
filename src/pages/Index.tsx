import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import CategoryFilter from "@/components/CategoryFilter";
import GamesGrid from "@/components/GamesGrid";
import Footer from "@/components/Footer";
import gamesData from "@/data/games.json";
import { Game } from "@/types/game";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const games: Game[] = gamesData;

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(games.map((game) => game.category))];
    return cats.sort();
  }, [games]);

  // Filter games based on search and category
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch =
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [games, searchQuery, selectedCategory]);

  // Get featured games
  const featuredGames = useMemo(() => {
    return games.filter((game) => game.featured);
  }, [games]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="flex-1">
        <HeroSection />
        
        <FeaturedSection games={featuredGames} />

        {/* Games Section */}
        <section id="games" className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                All Games
              </h2>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            <GamesGrid games={filteredGames} searchQuery={searchQuery} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
