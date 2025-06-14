import { Tabs, TabsList, TabsTrigger } from "@/components/ui/shadcn/layout/tabs";

interface ServicesFilterProps {
  categories: string[];
  categoryLabels: Record<string, string>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export function ServicesFilter({ 
  categories, 
  categoryLabels,
  activeCategory, 
  setActiveCategory 
}: ServicesFilterProps) {
  return (
    <div className="w-full mb-6 flex justify-center">
      <Tabs 
        value={activeCategory} 
        onValueChange={setActiveCategory} 
        className="w-full max-w-4xl"
      >
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:w-fit lg:mx-auto gap-1">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="text-sm font-medium"
            >
              {categoryLabels[category] || category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
