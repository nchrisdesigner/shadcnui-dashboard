"use client"

import { Badge } from "@/components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"

export type Employee = {
  id: number
  firstName: string
  lastName: string
  teamName: string
  isTeamLeader: boolean
  avatar?: string
}

export const columns: ColumnDef<Employee>[] = [

  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "teamName",
    header: "Team",
  },
  {
    accessorKey: "isTeamLeader",
    header: "",
    cell: ({row}) => {
      const isTeamLeader:boolean = row.getValue("isTeamLeader")
      return isTeamLeader 
      ? 
      <Badge variant="success">Team Leader</Badge> : null
        }
  },
]
