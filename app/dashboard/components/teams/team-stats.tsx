import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { teamLeaders } from "@/data/teamLeaders"
import {  ListChecksIcon, PieChartIcon, StarIcon, UsersIcon } from "lucide-react"
import Link from "next/link"
import TeamDistribution from "./team-distribution"
import LineGraph from "./line-graph"

const TeamStats = () => {
  return (
    <>
    <div className="grid lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Total Teams</CardTitle>
        </CardHeader>

        <CardContent className="flex justify-between">
          <div className="flex items-center gap-2">
            <UsersIcon />
            <div className="text-4xl font-bold">100</div>
          </div>
          <div>
            <Button asChild size="xs" >
              <Link href="/dashboard/teams">View All</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between gap-2">
            <span>Team Leaders</span>
            <StarIcon className="text-yellow-400" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2 items-center">
        {teamLeaders.map((teamLeader) => {
            return (
              <TooltipProvider key={`${teamLeader.firstName} ${teamLeader.lastName}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                    <AvatarFallback className="uppercase cursor-pointer bg-pink-500 font-semibold">{teamLeader.avatar}</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                  {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
         })}

        </CardContent>
       
      </Card>


      <Card className="flex flex-col ">
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between gap-2">
            <span>Team Distribution</span>
            <PieChartIcon/>
          </CardTitle>
        </CardHeader>

        <CardContent >
         <TeamDistribution />
        </CardContent>

      </Card>
    </div>

    {/* Chart */}
    <Card className="my-4">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <ListChecksIcon />
          <span >Support the tickets resolved</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="pl-0">
        <LineGraph />
      </CardContent>

    </Card>
  </>
  )
}

export default TeamStats