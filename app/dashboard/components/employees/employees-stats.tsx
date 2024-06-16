import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangleIcon, BadgeCheckIcon, LaptopIcon, PartyPopperIcon, UserCheck2Icon, UserIcon, UserRoundXIcon } from "lucide-react"
import Link from "next/link"
import WorkLocationTrends from "./work-location-trends"

const EmployeesStats = () => {
  const totalEmployees = 100
  const employeesPresent = 68
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Total Employees</CardTitle>
          </CardHeader>

          <CardContent className="flex justify-between">
            <div className="flex items-center gap-2">
              <UserIcon />
              <div className="text-4xl font-bold">{totalEmployees}</div>
            </div>
            <div>
              <Button asChild size="xs" >
                <Link href="/dashboard/employees">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Employees Present</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-between">

            <div className="flex items-center gap-2">
              {employeesPresentPercentage > 75 ? <UserCheck2Icon /> : <UserRoundXIcon />}
              <div className="text-4xl font-bold">{employeesPresent}</div>
            </div>

          </CardContent>
          <CardFooter>
            <span className={`flex items-center gap-1 text-xs ${employeesPresentPercentage > 75 ? "text-green-400" : "text-red-400"} `}>
              {employeesPresentPercentage > 75 ? <BadgeCheckIcon /> : <AlertTriangleIcon />}

              {employeesPresentPercentage}% of employees are present</span>
          </CardFooter>
        </Card>


        <Card className="border-pink-500 flex flex-col ">
          <CardHeader>
            <CardTitle className="text-base">Employee of the Month</CardTitle>
          </CardHeader>

          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <AvatarFallback className="bg-pink-600">CM</AvatarFallback>
            </Avatar>
            <h3 className="text-lg">Collin Murray</h3>
          </CardContent>

          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-pink-500" />
            <span>Congratulations Collin</span>
          </CardFooter>
        </Card>
      </div>

      {/* Chart */}
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon />
            <span >Employee work location trends</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>

      </Card>
    </>
  )
}

export default EmployeesStats