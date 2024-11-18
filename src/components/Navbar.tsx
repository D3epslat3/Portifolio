'use client'

import React from 'react'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const handleSkillsClick = () => {
    window.location.href = "#skills";
  }

  return (
    <div className='flex flex-row w-full justify-between bg-transparent h-16 px-5 absolute fixed top-0 '>
      <Image
        src="/deep_logo.svg"
        alt="Deep Logo"
        width={32}
        height={32}
      />

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className='flex flex-row gap-5'>
            <NavigationMenuLink 
              onClick={handleSkillsClick}
              href="#skills"
              className='text-sm cursor-pointer p-2 rounded-md font-medium hover:bg-[#5f5f5f67] text-white'
            >
              Skills
            </NavigationMenuLink>
            
            <NavigationMenuLink 
              href="#projetos"
              className='text-sm cursor-pointer p-2 rounded-md font-medium hover:bg-[#5f5f5f67] text-white'
            >
              Projetos
            </NavigationMenuLink>
            
            <NavigationMenuLink 
              href="#contatos"
              className='text-sm cursor-pointer p-2 rounded-md font-medium hover:bg-[#5f5f5f67] text-white'
            >
              Contatos
            </NavigationMenuLink>
            
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
