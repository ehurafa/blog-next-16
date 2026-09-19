import { Suspense } from "react";
import { SpinLoader } from "./components/SpinLoader";
import { PostsList } from "./components/PostsList";
import { Container } from "./components/Container";
import Header from "./components/Header";
import { PostHeading } from "./components/PostHeading";
import { PostCoverImage } from "./components/PostCoverImage";

export default async function Home() {


  return (
    <Container>
        <Header />

        <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>

          <PostCoverImage
            linkProps={{
              href: "#"
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


            <PostHeading url="#" as='h1'>
              Return
            </PostHeading>

            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
        </section>

        <Suspense fallback={<SpinLoader className="h-10 w-10" />}>
          <PostsList />
        </Suspense>
        <footer><h1 className='text-6x1 font-bold text-center py-8'>footer</h1></footer>
    </Container>
  );
}
