import React, {ComponentProps} from 'react';

import {Badge} from "@repo/ui/components/ui/badge.tsx";
import {LucideIcon} from "lucide-react";
import clsN from 'classnames';
import styles from './styles/IconBadge.module.scss';

interface IconBadgeProps {
    icon?: LucideIcon;
    title?: string;
    badgeProps?: ComponentProps<typeof Badge>;
}

export const IconBadge =({icon: Icon, title, badgeProps}:IconBadgeProps)=>{
    return(
        <Badge className={clsN(styles.badge)} {...badgeProps}>
            {Icon && (<Icon/>)}
            {title && <div className={clsN(styles.badge__title)}>{title}</div>}
        </Badge>
    )
}