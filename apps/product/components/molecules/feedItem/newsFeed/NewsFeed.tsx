import React from 'react';
import {Card} from '@/components/atoms/card/Card';
import {CardHeader, CardTitle, CardDescription, CardContent} from "@repo/ui/components/card.tsx";
import clsN from 'classnames';
import styles from './styles/NewsFeed.module.scss';


interface NewsFeedProps{
    className?: string;
    title?: string;
    date?: Date;
    children?: React.ReactNode;
}

export const NewsFeed = ({...props}: NewsFeedProps) => {

    return (
        <Card className={clsN(styles['card'], props.className)}>
            <CardHeader className={clsN(styles['card-header'])}>
                <CardTitle className={clsN(styles['card__title'])}>
                    {props?.title}
                </CardTitle>
                <CardDescription className={clsN(styles['card__description'])}>
                    {props.date?.toDateString()}
                </CardDescription>
            </CardHeader>
            <CardContent className={clsN(styles['card-content'])}>
                {props?.children}
            </CardContent>
        </Card>
    )
}