import React, {ComponentProps} from 'react';
import {Card, CardFooter, CardTitle} from "@repo/ui/components/card.tsx";
import {Avatar, AvatarImage, AvatarFallback} from "@repo/ui/components/avatar.tsx";
import {IconBadge} from "@/components/molecules/iconBadge/IconBadge.tsx";
import {FlameIcon, LucideIcon, TimerIcon, UsersIcon} from "lucide-react";
import {LaneBuildItemTagList} from "@/types/builds/laneBuildItem";
import clsN from "classnames";
import styles from './styles/BuildItemPreview.module.scss';

interface BuildItemPreviewProps{
    title: string;
    icon: LucideIcon;
    tagListItems : LaneBuildItemTagList;
    likes: number;
    uploadDate: Date;
}

export const BuildItemPreview = (
    {
        title,
        icon: IconComponent,
        tagListItems,
        likes,
        uploadDate
    }:BuildItemPreviewProps) => {

    const tagSetUpConfig = {
        timeLine:{
            icon : TimerIcon,
            getTitle: (value: string)=> value,
            badgeProps: {variant: "default"}
        },
        members:{
            icon: UsersIcon,
            getTitle: (value: number) => `${value}`,
            badgeProps: {variant: 'default'}
        },
        difficulty:{
            icon: FlameIcon,
            getTitle: (value: LaneBuildItemTagList['difficulty']) => {
                switch(value){
                    case 'easy': return 'EZ';
                    case 'normal': return 'SOSO';
                    case 'hard': return 'HELL';
                    default : return 'unknown';
                }
            },
            badgeProps: {variant: 'default'}
        }
    }

    return (
        <Card className={clsN(styles.card)}>
            <Card className={clsN(styles['card--container'])}>
                <Avatar>
                    <AvatarImage>
                        <IconComponent/>
                    </AvatarImage>
                    <AvatarFallback>
                        PreviewAvatar
                    </AvatarFallback>
                </Avatar>
            </Card>
            <Card className={clsN(styles['card--container'])}>
                <CardTitle>{title}</CardTitle>
                {
                    Object.entries(tagListItems).map(([key,value])=>{
                        const tagListConfig = tagSetUpConfig[key as keyof typeof tagSetUpConfig];
                        if(!tagListConfig || value == undefined){
                            return null;
                        }
                        const IconComponent = tagListConfig.icon;
                        const titleText = tagListConfig.getTitle(value as string);
                        return(
                            <IconBadge
                                key={key}
                                icon={IconComponent}
                                title={titleText}
                                badgeProps={tagListConfig.badgeProps}
                            />
                        )
                    })
                }
                <CardFooter>{`${likes} Likes • ${uploadDate} Ago`}</CardFooter>
            </Card>
        </Card>
    )
}