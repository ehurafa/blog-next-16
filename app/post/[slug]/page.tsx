import { findPostBySlugCached } from "@/app/lib/post/queries";
import notFound from "@/app/not-found";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

  let post;

  try {
    post = await findPostBySlugCached(slug);
  } catch {
    post = undefined;
  }

  if (!post) notFound();

  return (
    <div>
      <p>{post?.title}</p>
  </div>
  )
}
