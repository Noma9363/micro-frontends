import React, {ComponentProps} from 'react';
import {Card, CardDescription, CardFooter, CardTitle} from "@repo/ui/components/card.tsx";
import {Avatar, AvatarImage, AvatarFallback} from "@repo/ui/components/avatar.tsx";
import {IconBadge} from "@/components/molecules/iconBadge/IconBadge.tsx";
import {FlameIcon, LucideIcon, TimerIcon, UsersIcon} from "lucide-react";
import {LaneBuildItemTagList} from "@/types/builds/laneBuildItem";
import {timeAgo} from "@/utils/timeAgo.ts";
import clsN from "classnames";
import styles from './styles/BuildItemPreview.module.scss';

interface BuildItemPreviewProps{
    title: string;
    icon: LucideIcon;
    tagListItems : LaneBuildItemTagList;
    likes: number;
    uploadDate: Date;
}
type TagTypeKey = keyof LaneBuildItemTagList;
type GetTitleFunction<T> = (value: T) => string;

interface TagConfigItem<T extends TagTypeKey>{
    icon: LucideIcon;
    getTitle: GetTitleFunction<LaneBuildItemTagList[T] | undefined>;
    badgeProps: {variant: "default"}
}

type TagSetUpConfig = {
    [K in TagTypeKey]: TagConfigItem<K>
}

export const BuildItemPreview = (
    {
        title,
        icon: IconComponent,
        tagListItems,
        likes,
        uploadDate
    }:BuildItemPreviewProps) => {

    const tagSetUpConfig: TagSetUpConfig = {
        timeLine:{
            icon : TimerIcon,
            getTitle: (value)=> String(value), // type is LaneBuildItemTagList['timeLine']
            badgeProps: {variant: "default"}
        },
        members:{
            icon: UsersIcon,
            getTitle: (value) => `${value}`,
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
            badgeProps: {variant: 'default' }
        }
    } as const;

    return (
        <Card className={clsN(styles.card)}>
            <Card className={clsN(styles['card--container'], clsN(styles['card__avatar']))}>
                <Avatar className={clsN(styles['avatar'])}>
                    <AvatarImage className={clsN(styles['avatar--image'])}>
                        <IconComponent/>
                    </AvatarImage>
                    <AvatarFallback className={clsN(styles['avatar--fallback'])}>
                        IconArea
                    </AvatarFallback>
                </Avatar>
            </Card>
            <Card className={clsN(styles['card--container'], styles['card__content'])}>
                <CardTitle className={clsN(styles['card__title'])}>{title}</CardTitle>
                <CardDescription className={clsN(styles['card__badge'])}>
                    {
                        Object.entries(tagListItems).map(([key,rawValue])=>{
                            if(!(key in tagSetUpConfig)){
                                return null;
                            }
                            const typedKey = key as TagTypeKey;
                            const tagListConfig = tagSetUpConfig[typedKey];

                            if(rawValue === undefined || rawValue === null){
                                return null;
                            }
                            // make value matched as individual keys
                            const value = rawValue;

                            const IconComponent = tagListConfig.icon;
                            const titleText = tagListConfig.getTitle(value);

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
                </CardDescription>
                <CardFooter className={clsN(styles['card__footer'])}>{`${likes} Likes • ${timeAgo(uploadDate)} Ago`}</CardFooter>
            </Card>
        </Card>
    )
}