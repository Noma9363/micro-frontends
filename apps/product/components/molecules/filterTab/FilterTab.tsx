import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import {Tabs, TabsList, TabsTrigger} from "@repo/ui/components/tabs.tsx";
import clsN from 'classnames';
import styles from './styles/FilterTab.module.scss';


interface FilterTabProps extends React.ComponentPropsWithoutRef<typeof TabsTrigger>{
    tabValueList : string[];
}

export const FilterTab = ({...props}:FilterTabProps)=>{
    return (
        <TabsList>
            {props.tabValueList.map((tabValue)=> (
                <TabsTrigger value={tabValue}>{tabValue}</TabsTrigger>
                )
            )}
        </TabsList>
    )

}