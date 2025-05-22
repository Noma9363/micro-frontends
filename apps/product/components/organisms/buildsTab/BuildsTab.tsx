import React, {useEffect, useState} from 'react';
import {Tabs, TabsContent} from "@repo/ui/components/tabs.tsx";
import {FilterTab} from "@/components/molecules/filterTab/FilterTab.tsx";
import {BuildTabState, useBuildTabStore} from "@/store/zustand/productStore";
import {LaneBuildItem } from "@/types/builds/laneBuildItem";
import {BuildCardBanner} from "@/components/molecules/buildCardBanner/BuildCardBanner.tsx";
import {Card} from "@/components/atoms/card/Card.tsx";
import clsN from "classnames";
import styles from "./styles/BuildsTab.module.scss";
import {BuildItemPreview} from "@/components/molecules/buildItemPreview/BuildItemPreview.tsx";
import {TimerIcon} from "lucide-react";

interface BuildsTabProps{

}

export const BuildsTab = ({...props}:BuildsTabProps)=>{
    /** zustand store data */
    const {
        tabValueList,
        activeTab,
        setActiveTab,
        activeTabDescription,
        isLoading,
        error,
        tabItems,
        filteredTabItems,
        isLoadingTabItems,
        errorTabItems,
        fetchTabValues,
        fetchTabItems,
        fetchTabDescriptions
    }= useBuildTabStore();

    const [currentBannerTitle,  setCurrentBannerTitle] = React.useState<string|undefined>('');
    const [currentBannerDescription,setCurrentBannerDescription] = React.useState<string|undefined>('')

    const currentItem = tabItems.find(item=> item.value===activeTab);
    const currentDescription = activeTabDescription.find(desc=> desc.value === activeTab);

    // banner update
    useEffect(()=>{
        // title update
        const foundItem = tabItems.find(item=>item.value===activeTab);
        setCurrentBannerTitle(foundItem?.title);
        // desc update
        const foundDesc = activeTabDescription.find(desc=>desc.value === activeTab);
        setCurrentBannerDescription(foundDesc?.desc);
    },[activeTab, tabItems,activeTabDescription])

    useEffect(() => {
        setActiveTab('All');
        // helper
        fetchTabValues();
        fetchTabItems();
        fetchTabDescriptions();
    }, [fetchTabValues, fetchTabItems,fetchTabDescriptions, setActiveTab]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    const handleShowDetailClick = () => {
        console.log(`you clicked ${currentItem?.value}`)
        // router logic...
    }

    if(isLoading){
        return <div>Loading...</div>;
    }
    if(error || errorTabItems){
        return <div>Error : {error || errorTabItems}</div>
    }
    if(filteredTabItems.length === 0 && activeTab !== 'All'){
        return <div>No data available for the selected tab.</div>
    }

    return(
        <Card className={clsN(styles['card-root'])}>
            <Tabs value={activeTab} onValueChange={handleTabChange}>
                <FilterTab tabValueList={tabValueList} value={activeTab} />
                <TabsContent value={activeTab}>
                    <BuildCardBanner
                        bannerTitle={currentBannerTitle}
                        bannerDescription={currentBannerDescription}
                        onButtonClick={handleShowDetailClick}
                    />
                </TabsContent>

                <Card>
                    {
                        filteredTabItems.map(item => {
                            // TODO: const icon mapping set =...
                            return(
                                <BuildItemPreview
                                    title={item.title}
                                    icon={TimerIcon}
                                    tagListItems={item.tagList}
                                    likes={item.likes}
                                    uploadDate={item.uploadDate}
                                />
                            )
                        })
                    }
                </Card>
            </Tabs>
        </Card>
    )
}
