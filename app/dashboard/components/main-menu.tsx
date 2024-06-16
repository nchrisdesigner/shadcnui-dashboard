import Toggle from "@/components/ui/toggle"
import MenuItem from "./menu-item"
import MenuTitle from "./menu-title"
import { AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"

const MainMenu = ({className}: {className?: string}) => {
  return (
    <div className={`md:bg-muted overflow-auto p-4 flex flex-col ${className}`}>

      <div className="hidden md:block border-b dark:border-b-black border-b-zince-300 pb-4">
        <MenuTitle />
      </div>

      <div className="flex flex-col gap-2 py-4 grow">
        <MenuItem href="/dashboard">My Dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>

      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-700">CN</AvatarFallback>
        </Avatar>
        <Link href="/" className="font-bold hover:underline">Logout</Link>
        <Toggle className="ml-auto" />
      </div>
    </div>
  )
}

export default MainMenu