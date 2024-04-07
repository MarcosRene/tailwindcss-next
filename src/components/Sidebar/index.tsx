/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'

import * as Collapsible from '@radix-ui/react-collapsible'

import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Button } from '../Button'

export function Sidebar() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return

  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />

        <div className="flex gap-4">
          {resolvedTheme === 'dark' ? (
            <Button
              variant="ghost"
              aria-label="Sun"
              onClick={() => setTheme('light')}
            >
              <img src="sun.png" alt="Sun Icon" className="size-6" />
            </Button>
          ) : (
            <Button
              variant="ghost"
              aria-label="Moon"
              onClick={() => setTheme('dark')}
            >
              <img src="moon.png" alt="Moon Icon" className="size-6" />
            </Button>
          )}

          <Collapsible.Trigger asChild className="lg:hidden">
            <Button variant="ghost">
              <Menu className="size-6" />
            </Button>
          </Collapsible.Trigger>
        </div>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search className="size-5 text-zinc-500" />
          </InputPrefix>

          <InputControl placeholder="Search" />
        </InputRoot>

        <MainNavigation />

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
