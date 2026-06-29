import { useId } from 'react'

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  disabled?: boolean
}

interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onChange: (id: string) => void
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  const uid = useId()
  const selected = tabs.find(({ id }) => id === activeTab)

  return (
    <div className="tabs">
      <div role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`${uid}-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={tab.id === activeTab}
            aria-controls={`${uid}-panel-${tab.id}`}
            disabled={tab.disabled}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {selected && (
        <div
          id={`${uid}-panel-${selected.id}`}
          role="tabpanel"
          aria-labelledby={`${uid}-tab-${selected.id}`}
        >
          {selected.content}
        </div>
      )}
    </div>
  )
}
