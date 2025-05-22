import React from 'react';
import clsN from "classnames";
import {TabsContent} from "@repo/ui/components/tabs.tsx";

interface FilterTabContentProps{
    tabsValue: string;
    children: React.ReactNode;
}
export const FilterTabContent = ({tabsValue, children}:FilterTabContentProps) => {
    return(
        <TabsContent value={tabsValue} >
                {children}
        </TabsContent>
    )
}