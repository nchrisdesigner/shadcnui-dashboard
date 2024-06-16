import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { employees } from "@/data/employees"

const loading = () => {

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Employees
        </CardTitle>
      </CardHeader>

      <CardContent className="grid grid-cols-[60px_1fr_1fr_1fr] gap-4 items-center">
        {employees.map((item) => {
          return (
            <>
              <Skeleton className="bg-slate-600 size-10 rounded-full" />
              <Skeleton className="bg-slate-600 w-full h-8 rounded-sm" />
              <Skeleton className="bg-slate-600 w-full h-8 rounded-sm" />
              <Skeleton className="bg-slate-600 w-full h-8 rounded-sm" />
            </>
          )
        })}
      </CardContent>

    </Card>
  )
}

export default loading