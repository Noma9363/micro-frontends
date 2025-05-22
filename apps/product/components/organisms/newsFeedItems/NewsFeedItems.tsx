import React from 'react';
import clsN from 'classnames';
import styles from './styles/NewsFeedItems.module.scss';
import {NewsFeed} from "@/components/molecules/feedItem/newsFeed/NewsFeed.tsx";


export interface NewsFeedFront{
    title: string;
    date: Date;
    description: React.ReactNode;
}

interface NewsFeedItemsProps{
    newsIFeeds: NewsFeedFront[];
}

export const NewsFeedItems = ({...props}: NewsFeedItemsProps) => {

    /** JSX */
    const HeadLine = (
        <h1 className={clsN(styles['wrapper__headline'])}>
            News
        </h1>
    )

    return(
        <div className={clsN(styles['wrapper'])}>
            {HeadLine}
            <div className={clsN(styles['wrapper__newsfeed-cont'])}>
                {(props.newsIFeeds).map((feed)=>{
                    return(
                        <NewsFeed
                            className={clsN(styles['newsfeed-item'])}
                            title={feed.title}
                            date={feed.date}
                            children={feed.description}/>
                    )
                })}
            </div>
        </div>
    )
}