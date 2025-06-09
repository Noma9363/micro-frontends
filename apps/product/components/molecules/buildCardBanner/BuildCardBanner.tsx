import React from 'react';
import {Card} from "@/components/atoms/card/Card.tsx";
import {CardDescription, CardFooter, CardHeader, CardTitle} from "../../../../../packages/ui/components/ui/card.tsx";
import {Button} from "../../../../../packages/ui/components/ui/button.tsx";
import clsN from "classnames";
import styles from './styles/BuildCardBanner.module.scss'

interface BuildCardBannerProps{
    bannerTitle?: string;
    bannerDescription?: string;
    onButtonClick?: ()=>void;
}

export const BuildCardBanner = ({onButtonClick,bannerTitle, bannerDescription}:BuildCardBannerProps) => {
    return(
        <Card className={clsN(styles['card--container'])}>
            {(bannerTitle || bannerDescription) && (
                    <CardHeader className={clsN(styles['card__header'])}>
                        {bannerTitle && <CardTitle>{bannerTitle}</CardTitle>}
                        {bannerDescription && <CardDescription>{bannerDescription}</CardDescription>}
                    </CardHeader>
            )}
            <CardFooter className={clsN(styles['card__footer'])}>
                <Button onClick={onButtonClick}>view all builds</Button>
            </CardFooter>
        </Card>
    )
}