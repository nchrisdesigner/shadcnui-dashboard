import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmployeesStats from "./components/employees/employees-stats"
import TeamStats from "./components/teams/team-stats"

const DashboardPage = () => {
  return (
    <Tabs defaultValue="employees" >
  <TabsList className="mb-4">
    <TabsTrigger value="employees">Employees Stas</TabsTrigger>
    <TabsTrigger value="teams">Team Stats</TabsTrigger>
  </TabsList>
  <TabsContent value="employees">
    <EmployeesStats />
  </TabsContent>
  <TabsContent value="teams"><TeamStats /></TabsContent>
</Tabs>

  )
}

export default DashboardPage