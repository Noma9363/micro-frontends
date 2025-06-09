import React from 'react';
import {Card as ShadCard} from '../../../../../packages/ui/components/ui/card.tsx';

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