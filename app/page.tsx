import { Suspense } from "react";
import { SpinLoader } from "./components/SpinLoader";
import { PostsList } from "./components/PostsList";
import { PostFeatured } from "./components/PostFeatured";

export default async function Home() {

  return (
    <>
      <Suspense fallback={<SpinLoader className="h-10 w-10" />}>
          <PostFeatured />
        </Suspense>

        <Suspense fallback={<SpinLoader className="h-10 w-10" />}>
          <PostsList />
        </Suspense>
    </>
  );
}
