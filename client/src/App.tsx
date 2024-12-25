import { useState } from 'react'
import './App.css'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Skeleton } from "@/components/ui/skeleton"


function App() {

  return (
    <>
    <HoverCard>
      <HoverCardTrigger className="text-3xl font-bold underline">WebPulse</HoverCardTrigger>
      <HoverCardContent >
      Tool for quick and accurate website speed monitoring and performance insights.
      </HoverCardContent>
    </HoverCard>

    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  
    </>
  )
}

export default App
