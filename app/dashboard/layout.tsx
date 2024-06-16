'use client'
import { MenuIcon } from "lucide-react"
import MainMenu from "./components/main-menu"
import MenuTitle from "./components/menu-title"
import { useMediaQuery } from "@/hooks/use-media-query"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from "react"


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {
        !isDesktop && (
          <div className="sticky top-0 left-0 bg-background flex md:hidden justify-between border-b border-border p-4 ">
            <MenuTitle />
            <Drawer 
            direction="right" 
            open={mobileMenuOpen} 
            onOpenChange={(open) => setMobileMenuOpen(open)} 
            onClose={() => setMobileMenuOpen(false)}
            >
              <DrawerTrigger>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent>
                <MainMenu />
              </DrawerContent>

            </Drawer>
          </div>
        )
      }
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Nick</h1>
        {children}</div>
    </div>
  )
}

export default DashboardLayout