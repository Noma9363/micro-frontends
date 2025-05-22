import {Button} from "../components/atoms/button/Button.tsx"
import {NewsFeed} from "@/components/molecules/feedItem/newsFeed/NewsFeed.tsx";
import {NewsFeedFront, NewsFeedItems} from "@/components/organisms/newsFeedItems/NewsFeedItems.tsx";
import {BuildsTab} from "@/components/organisms/buildsTab/BuildsTab.tsx";
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
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="container flex flex-col items-center text-center gap-4">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl mb-1">
          Product Application
        </h2>
        <p className="max-w-3xl text-lg text-muted-foreground">
          This is the product application that maintained by the{" "}
          <strong>Product Team</strong>

        </p>
      </div>
      <Button/>
        <NewsFeedItems
            newsIFeeds={newsFeedItems}
        />
        <BuildsTab/>
    </main>
  );
}
