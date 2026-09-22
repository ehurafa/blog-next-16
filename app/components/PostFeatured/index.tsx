import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPosts } from "@/app/lib/post/queries";

export async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];

  const slug = 'slug';
  const postLink = `/post/${slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>

          <PostCoverImage
            linkProps={{
              href: postLink
            }}
            imageProps={{
              src: post.coverImageUrl,
              width: 1200,
              height: 720,
              alt: post.title,
              priority: true
            }}
          />

          <PostSummary
            postLink={postLink}
            postHeading='h1'
            createdAt={post.createdAt}
            title={post.title}
            excerpt={post.excerpt}
          />
        </section>
  )
}
