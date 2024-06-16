'use client'

import { DrawerContext } from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react"

type Props = {
  children: React.ReactNode,
  href: string
}

const MenuItem = ({ children, href }: Props) => {
  const { onClose } = useContext(DrawerContext)
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} 
    className={
      cn("hover:bg-white dark:hover:bg-zinc-700 rounded-sm text-muted-foreground hover:text-foreground px-2 py-1",
        isActive && "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground"
      )
    }
    onClick={onClose}
    >
      {children}
    </Link>
  )
}

export default MenuItem