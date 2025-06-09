import React from 'react';
import {NavigationLink} from "@/components/atoms/navigationLink/NavigationLink.tsx";

interface ListItemProps extends React.ComponentPropsWithoutRef<"li">{
    href: string;
    title?: string;
    description?: string;
    asChild?: boolean | undefined;
}

export const ListItem = ({href,title,description, children,asChild, ...props}:ListItemProps) => {

    return(
        <li className="list-none" {...props}>
            <NavigationLink href={href} title={title} asChild={asChild}>{children}</NavigationLink>
        </li>
    )
}