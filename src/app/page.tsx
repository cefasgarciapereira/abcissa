import PostCard from "@/components/molecules/PostCard";

import { createClient } from "@/prismicio";

export default async function Home() {
  const client = createClient();
  const posts = await client.getAllByType("post")

  return (
    <div>
      {
        posts.map(post => (
          <PostCard
            key={post.uid}
            title={post.data.title || ""}
            datetime={post.data.datetime || ""}
            slug={post.uid}
            description={post.data.description || ""}
          />
        ))
      }
    </div>
  );
}
