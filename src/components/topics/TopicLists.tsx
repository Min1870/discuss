import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import path from "@/path";

const TopicLists = async () => {
  const topics = await db.topic.findMany();
  // console.log(topics);

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={path.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row gap-2 flex-wrap">{renderedTopics}</div>;
};

export default TopicLists;
