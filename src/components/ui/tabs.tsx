import { cn } from '@/lib/utils'
import { FC, useState } from 'react'

export interface Tab {
  name: string
  value: string
}

interface Props {
  tabs: Tab[]
  renderTab: (value: string) => JSX.Element | undefined
}

const Tabs: FC<Props> = ({ tabs, renderTab }) => {
  const [selected, setSelected] = useState(tabs[0].value)
  return (
    <>
      <nav className="w-full flex space-x-4 mb-3" aria-label="Tabs">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            className={cn(
              'rounded-md px-3 py-2 text-sm font-medium cursor-pointer',
              tab.value === selected ? 'bg-primary' : 'text-secondary-text hover:text-primary-text',
            )}
            onClick={() => setSelected(tab.value)}
          >
            {tab.name}
          </a>
        ))}
      </nav>
      {renderTab(selected)}
    </>
  )
}

export default Tabs
