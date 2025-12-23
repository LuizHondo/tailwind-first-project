'use client'

import * as Tabs from '@radix-ui/react-tabs'

export function SettingsTabs(){
  return(
      <Tabs.Root>
        <Tabs.List className='mt-6 flex items-center gap-4 border-b border-zinc-200'>
          <Tabs.Trigger value='my-details' className='px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-400'>
            <span>My details</span>
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
  )
}