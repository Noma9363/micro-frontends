import React from 'react';
import {Card} from "@/components/atoms/card/Card.tsx";
import {CardDescription, CardFooter, CardHeader, CardTitle} from "@repo/ui/components/card.tsx";
import {Button} from "@repo/ui/components/button.tsx";

interface BuildCardBannerProps{
    bannerTitle?: string;
    bannerDescription?: string;
    onButtonClick?: ()=>void;
}

export const BuildCardBanner = ({onButtonClick,bannerTitle, bannerDescription}:BuildCardBannerProps) => {
    return(
        <Card>
            {(bannerTitle || bannerDescription) && (
                    <CardHeader>
                        {bannerTitle && <CardTitle>{bannerTitle}</CardTitle>}
                        {bannerDescription && <CardDescription>{bannerDescription}</CardDescription>}
                    </CardHeader>
            )}
            <CardFooter>
                <Button onClick={onButtonClick}>view all builds</Button>
            </CardFooter>
        </Card>
    )
}