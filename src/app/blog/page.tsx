import { sanityFetch } from "../../../sanity/lib/fetch";
import { postsQuery } from "../../../sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "../components/posts";
import styles from "./blog.module.css";

export default async function Blog() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <div className={styles.wrap__blog}>
      <h1>Blog</h1>
      <div className={styles.wrap__posts}>
        <Posts posts={posts} />
      </div>
    </div>
  );
}
