import React from 'react';
import {Card as ShadCard} from '@repo/ui/components/card';

interface CardProps{
    className?: string;
    children: React.ReactNode;
}
export const Card = ({...props}:CardProps) => {

    return (
        <ShadCard className={props.className}>
            {props.children}
        </ShadCard>
    )
}