'use client'

import { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { MoonIcon, SunIcon } from "lucide-react"

type Props = {
  className?: string;
}


const Toggle = ({ className }: Props) => {
  const [isDark, setIsDark] = useState(true)

  const handleToggleMode = () => {
    setIsDark(prev => !prev)
    document.body.classList.toggle('dark')
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={handleToggleMode}>
          {isDark ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          <p>{isDark ? "Enable Light" : "Enable Dark"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}

export default Toggle