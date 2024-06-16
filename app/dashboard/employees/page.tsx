import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { employees } from "@/data/employees"
import { setTimeout } from "timers/promises"
import { columns } from "./columns"

const EmployeesPage = async () => {
  await setTimeout(2000)
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            Employees
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-[1fr] gap-4 items-center">
          <DataTable data={employees} columns={columns} />
        </CardContent>

      </Card>
    </div>
  )
}

export default EmployeesPage