import { findPostBySlugCached } from "@/app/lib/post/queries";
import notFound from "@/app/not-found";
import { Metadata } from "next";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug).catch(() => undefined);

  if (!post) notFound();

  return (
    <div>
      <p>{post?.title}</p>
  </div>
  )
}
