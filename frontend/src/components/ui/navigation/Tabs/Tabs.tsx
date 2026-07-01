
import './Tabs.scss'
import type { TabsProps } from './types'

export const Tabs = ({
  items,
  activeTab,
  onChange,
  className = '',
}: TabsProps) => {
  const tabsClassName = ['tabs', className].filter(Boolean).join(' ')

  return (
    <div className={tabsClassName}>
      <div className="tabs__list" role="tablist">
        {items.map((item) => {
          const isActive = item.value === activeTab

          return (
            <button
              key={item.value}
              type="button"
              className={[
                'tabs__button',
                isActive && 'tabs__button--active',
              ]
                .filter(Boolean)
                .join(' ')}
              role="tab"
              aria-selected={isActive}
              disabled={item.disabled}
              onClick={() => onChange(item.value)}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}