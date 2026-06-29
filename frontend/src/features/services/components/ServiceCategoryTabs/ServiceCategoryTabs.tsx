interface ServiceCategoryTabsProps {
  categories: string[]
  activeCategory: string | null
  onChange: (category: string | null) => void
}

export function ServiceCategoryTabs({
  categories,
  activeCategory,
  onChange,
}: ServiceCategoryTabsProps) {
  return (
    <div className="service-category-tabs" role="tablist" aria-label="Категории услуг">
      <button
        type="button"
        role="tab"
        aria-selected={activeCategory === null}
        onClick={() => onChange(null)}
      >
        Все
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={activeCategory === category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
