import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const numberOfPosts = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  return (
    <>
      {/* <p>{numberOfPosts}</p> */}
      {posts.map((post) => (
        <Link key={post._id} href={post.slug.current}>
          {post?.mainImage ? (
            <Image
              src={builder.image(post.mainImage).width(300).height(300).url()}
              alt={post?.mainImage?.alt}
              width={300}
              height={300}
            />
          ) : null}
          <h2>{post.title}</h2>
        </Link>
      ))}
    </>
  );
};

export default Posts;
