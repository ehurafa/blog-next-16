import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = 'slug';
  const postLink = `/post/${slug}`;
  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>

          <PostCoverImage
            linkProps={{
              href: postLink
            }}
            imageProps={{
              src: "/images/bryen_1.png",
              width: 1200,
              height: 720,
              alt: "Título do Post",
              priority: true
            }}
          />

          <div className="flex flex-col gap-4 sm:justify-center">
            <time className="text-slate-600 text-sm/tight" dateTime="2023-03-12">12/03/2023 10:00</time>


            <PostHeading url={postLink} as='h1'>
              Return
            </PostHeading>

            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
        </section>
  )
}
