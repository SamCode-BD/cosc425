"use client"

import "./Right.css"
import React, {useState} from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
 
function Right() {
    let toolbarSubContext = useState("main");
    return(
    <div className = "flex flex-col h-screen col-span-2 lg:col-span-4">
        
        <div className="w-full flex h-[10%]">Header</div>

        <div className="w-full flex-1 large-5xl px-20 bg-white">
            <Tabs className="relative w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="measurements">Measurements</TabsTrigger>
                    <TabsTrigger value="taxonomy">Taxonomy</TabsTrigger>
                    <TabsTrigger value="locality">Locality</TabsTrigger>
                </TabsList>
                    <TabsContent value="measurements">
                        <div className="absolute w-full h-[750px] bg-gray-100 border-2 border-gray-300">
                            <div className="flex items-center space-x-4 h-[75px] border-b-2 border-gray-300">
                                <p className="ml-2 flex-shrink-0">    Maximum Length  </p>
                                <Input className="flex-grow-0 max-w-sm bg-white"></Input>
                                <Button variant= "outline">Info</Button>
                            </div>
                            <div className="flex items-center gap-4 h-[75px] border-b-2 border-gray-300">
                                <p className="ml-2 flex-shrink-0"> Bicondylar Length </p>
                                <Input className="flex-grow-0 max-w-sm bg-white"></Input>
                                <Button variant= "outline">Info</Button>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="taxonomy">
                        <div>

                        </div>
                    </TabsContent>
                    <TabsContent value = "locality">
                        <div>

                        </div>
                    </TabsContent>
            </Tabs>
        </div>

    </div>  
    );
}
export default Right