import { Suspense } from "react";
import { SpinLoader } from "./components/SpinLoader";
import { PostsList } from "./components/PostsList";
import { Container } from "./components/Container";
import Header from "./components/Header";
import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "./components/PostHeading";

export default async function Home() {


  return (
    <Container>
        <Header />

        <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
          <Link className='w-full h-full overflow-hidden rounded-xl' href="#">
            <Image
              src="/images/bryen_1.png"
              className="w-full h-full group-hover:scale-105 object-cover object-center
              transition"
              width={1200}
              height={720}
              alt="Título do Post"
              priority
            />
          </Link>
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
