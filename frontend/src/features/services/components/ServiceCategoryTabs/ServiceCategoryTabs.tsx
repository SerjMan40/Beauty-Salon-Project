import './ServiceCategoryTabs.scss'

interface ServiceCategoryTabsProps {
  categories: string[]
  activeCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export function ServiceCategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: ServiceCategoryTabsProps) {
  return (
    <div className="service-category-tabs" role="tablist" aria-label="Категории услуг">
      <button
        type="button"
        className={
          activeCategory === null
            ? 'service-category-tabs__button service-category-tabs__button--active'
            : 'service-category-tabs__button'
        }
        role="tab"
        aria-selected={activeCategory === null}
        onClick={() => onCategoryChange(null)}
      >
        Все
      </button>

      {categories.map((category) => {
        const isActive = category === activeCategory

        return (
          <button
            key={category}
            type="button"
            className={
              isActive
                ? 'service-category-tabs__button service-category-tabs__button--active'
                : 'service-category-tabs__button'
            }
            role="tab"
            aria-selected={isActive}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
