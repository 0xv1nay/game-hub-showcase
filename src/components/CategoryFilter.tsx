interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange("All")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
          selectedCategory === "All"
            ? "bg-primary text-primary-foreground glow-cyan"
            : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        All Games
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            selectedCategory === category
              ? "bg-primary text-primary-foreground glow-cyan"
              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
