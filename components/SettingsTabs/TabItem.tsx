'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps{
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({value, title, isSelected = false }:TabItemProps){
  return(
        <Tabs.Trigger value={value} className='relative px-1 pb-4 text-sm font-medium  dark:text-zinc-300 text-zinc-500 hover:text-violet-400 data-[state=active]:text-violet-500'>
          <span>{title}</span>
          {
            isSelected && (
              <motion.div layoutId='activeTab' className='absolute -bottom-px right-0 left-0 h-0.5 bg-violet-600'></motion.div>
            )
          }
        </Tabs.Trigger>
  )
}