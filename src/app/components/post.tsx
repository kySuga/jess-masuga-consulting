"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
      <h3>{post.publishedAt}</h3>
      {post?.mainImage ? (
        <Image
          src={builder.image(post.mainImage).width(300).height(300).url()}
          alt={post?.mainImage?.alt}
          width={300}
          height={300}
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} /> : null}
    </>
  );
};

export default Post;
