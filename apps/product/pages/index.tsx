import {Button} from "../../../packages/ui/components/ui/button.tsx"
import {NewsFeed} from "@/components/molecules/feedItem/newsFeed/NewsFeed.tsx";
import {NewsFeedFront, NewsFeedItems} from "@/components/organisms/newsFeedItems/NewsFeedItems.tsx";
import {BuildsTab} from "@/components/organisms/buildsTab/BuildsTab.tsx";
import {Divider} from "@/components/atoms/divider/Divider.tsx";
import clsN from "classnames";
import styles from './dummyIndex.module.scss';
import {Card} from "../../../packages/ui/components/ui/card.tsx";
import {HeaderNavigation} from "@/components/molecules/navigation/headerNavigation/HeaderNavigation.tsx";
import {HeaderMenu} from "@/components/commons/navigation/headerMenu/HeaderMenu.tsx";
export default function Home() {

    const newsFeedItems: NewsFeedFront[] = [
        {
            title: 'Patch v1.2',
            date: new Date("10 10 2000"),
            description: "0 Likes • 0 Comments"
        },
        {
            title: 'Patch v1.1',
            date: new Date("10 10 2000"),
            description: "0 Likes • 0 Comments"
        },
        {
            title: 'Patch v1.0',
            date: new Date("10 10 2000"),
            description: "0 Likes • 0 Comments"
        }
    ];
  return (
    <main className={clsN("flex min-h-screen flex-col items-center justify-center p-24", styles['main'])}>
        <HeaderNavigation/>
        <HeaderMenu/>
        <div className="container flex flex-col items-center text-center gap-4">
        <h2 className="text-left font-bold leading-tight tracking-tighter md:text-3xl mb-1">
          TITLE_HERE
        </h2>
        <p className="text-lg text-muted-foreground">
          <strong>RPG FPS TPS MMO</strong>
        </p>
        <p className="text-lg text-muted-foreground py-10 text-left">
            Lorem ipsum dolor sit amet consectetur. Pellentesque adipiscing ultrices tortor tincidunt tincidunt etiam a eu. Sit ipsum aliquam id vel eu tempor faucibus nisl at.
        </p>
        </div>
        <Card className={styles['button-place']}>
            <Button variant="destructive" >START NOW!</Button>
            <Button variant="secondary" >CLASS</Button>
            <Button variant="secondary" >ITEMS</Button>
        </Card>
      <NewsFeedItems
          newsIFeeds={newsFeedItems}
      />
      <Divider/>
      <BuildsTab/>
    </main>
  );
}
