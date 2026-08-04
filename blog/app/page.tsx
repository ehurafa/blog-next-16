import { Suspense } from "react";
import { SpinLoader } from "./components/SpinLoader";
import { PostsList } from "./components/PostsList";

export default async function Home() {


  return (
    <div>
      <header>
        <h1 className='text-6x1 font-bold text-center py-8'>Aqui é o header</h1>
      </header>
      <Suspense fallback={<SpinLoader className="h-10 w-10" />}>
        <PostsList />
      </Suspense>
      <footer><h1 className='text-6x1 font-bold text-center py-8'>footer</h1></footer>
    </div>
  );
}
