import { sanityFetch } from "../../../sanity/lib/fetch";
import { postsQuery } from "../../../sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "../components/posts";

export default async function Blog() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <>
      <h1>My Blog</h1>
      <Posts posts={posts} />
    </>
  );
}
