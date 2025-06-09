import React from 'react';
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@repo/ui/components/ui/navigation-menu.tsx";
import {ListItem} from "@/components/molecules/listItem/ListItem.tsx";
import Link from "next/link";
import {NavigationLink} from "@/components/atoms/navigationLink/NavigationLink.tsx";
import {HeaderMainNavigationItem} from "../../../../../../packages/interfaces/navigation/navigation.interface.ts";
interface HeaderMenuProps{

}

const components: HeaderMainNavigationItem[] = [
    {
        id: 'gamelist',
        title:'GameList',
        href: '/',
        hasDropDown: true,
        children: [
            {
                id: 'lol',
                title: 'League of Legends',
                description: 'what is this lol',
                href: '',
            },
            {
                id: 'cod-warzone',
                title: 'Call of duty: WarZone',
                description: 'american sudden attack',
                href: '',
            },
            {
                id: 'elden-ring',
                title: 'Elden Ring: Nightreign',
                description: "where's Miyazaki???",
                href: '',
            }
        ]
    },
    {
        id: 'news',
        title: 'News',
        href: '/'
    },
    {
        id: 'about',
        title: 'About',
        href: '/'
    },
    {
        id: 'support',
        title: 'Support',
        href: '/support',
        hasDropDown: true,
        children: [
            {
                id: 'support-option-1',
                title: 'option-1',
                href: '/support/option-1',
            },
            {
                id: 'support-option-2',
                title: 'option-2',
                href: '/support/option-2',
            },
            {
                id: 'support-option-3',
                title: 'option-3',
                href: '/support/option-3',
            }
        ]
    }
]

export const HeaderMenu = ({}:HeaderMenuProps) => {
    const navigationHeader : HeaderMainNavigationItem[] = components;

    // component factor function
    const renderNavigationItem = (menuItem : HeaderMainNavigationItem) => {

        const {id, hasDropDown,href, title, children} = menuItem;
        if(hasDropDown && children?.length){
            return(
                <NavigationMenuItem className="relative" key={id} id={id}>
                    <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {
                            children?.map(item=>{
                                const {id, title, description, href} = item;
                                return(
                                    <ListItem key={id} id={id} href={href||'#'} title={title} description={description}/>
                                )
                            })
                        }
                    </NavigationMenuContent>
                </NavigationMenuItem>
            )
        }
        return (
            <NavigationMenuItem id={id}>
                <NavigationLink href={href||'#'} className={navigationMenuTriggerStyle()}>{title}</NavigationLink>
            </NavigationMenuItem>
        )

    }

    return(
        <NavigationMenu orientation="vertical">
            <NavigationMenuList>
                {
                    navigationHeader.map(item => (
                        renderNavigationItem(item)
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}