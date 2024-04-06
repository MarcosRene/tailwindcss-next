'use client'

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { TabIntem } from './TabIntem'

export function SettingTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabIntem
          value="tab1"
          title="My details"
          isSelected={currentTab === 'tab1'}
        />
        <TabIntem
          value="tab2"
          title="Profile"
          isSelected={currentTab === 'tab2'}
        />
        <TabIntem
          value="tab3"
          title="Password"
          isSelected={currentTab === 'tab3'}
        />
        <TabIntem
          value="tab4"
          title="Team"
          isSelected={currentTab === 'tab4'}
        />
        <TabIntem
          value="tab5"
          title="Plan"
          isSelected={currentTab === 'tab5'}
        />
        <TabIntem
          value="tab6"
          title="Billing"
          isSelected={currentTab === 'tab6'}
        />
        <TabIntem
          value="tab7"
          title="Email"
          isSelected={currentTab === 'tab7'}
        />
        <TabIntem
          value="tab8"
          title="Noficitions"
          isSelected={currentTab === 'tab8'}
        />
        <TabIntem
          value="tab9"
          title="Integrations"
          isSelected={currentTab === 'tab9'}
        />
        <TabIntem
          value="tab10"
          title="API"
          isSelected={currentTab === 'tab10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
