import { Suspense } from "react";
import { SpinLoader } from "./components/SpinLoader";
import { PostsList } from "./components/PostsList";
import { Container } from "./components/Container";
import Header from "./components/Header";
import { PostFeatured } from "./components/PostFeatured";

export default async function Home() {


  return (
    <Container>
        <Header />

        <Suspense fallback={<SpinLoader className="h-10 w-10" />}>
          <PostFeatured />
        </Suspense>

        <Suspense fallback={<SpinLoader className="h-10 w-10" />}>
          <PostsList />
        </Suspense>
        <footer><h1 className='text-6x1 font-bold text-center py-8'>footer</h1></footer>
    </Container>
  );
}
