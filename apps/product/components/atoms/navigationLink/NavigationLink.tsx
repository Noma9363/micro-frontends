import React from 'react';
import {NavigationMenuLink} from "@repo/ui/components/ui/navigation-menu.tsx";
import Link from "next/link";

interface NavigationLinkProps{
    href: string;
    title?: string;
    children?: React.ReactNode;
    asChild?: boolean | undefined;
    className?: string;
}
export const NavigationLink = ({href, title,children,className, asChild}:NavigationLinkProps)=>{
    return(
        <NavigationMenuLink asChild={asChild} className={className}>
            <Link href={href}>
                {title && <div>{title}</div>}
                {children && <p>{children}</p>}
            </Link>
        </NavigationMenuLink>
    )
}