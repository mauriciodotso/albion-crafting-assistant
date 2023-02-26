// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "bg-red-800"
      : "border-transparent hover:bg-red-800";
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <nav class="bg-neutral-900 flex justify-between items-center text-gray-200">
              <div class="flex items-center justify-center p-4 grow relative">
                <h2 class="p-4 font-mono font-bold tracking-widest absolute left-0"><A href="/">Albion Crafting Assistant</A></h2>
                <ul class="flex items-center">
                  <li class={`${active("/")} mx-1 px-5 py-3 transition rounded-full`}>
                    <A href="/">Home</A>
                  </li>
                  <li class={`${active("/crafting")} mx-1 px-5 py-3 transition rounded-full`}>
                    <A href="/crafting">Crafting</A>
                  </li>
                  <li class={`${active("/gathering")} mx-1 px-5 py-3 transition rounded-full`}>
                    <A href="/gathering">Gathering</A>
                  </li>
                  <li class={`${active("/transporting")} mx-1 px-5 py-3 transition rounded-full`}>
                    <A href="/transporting">Transporting</A>
                  </li>
                </ul>
                <ul class="flex items-center p-4 absolute right-0">
                  <li class={`${active("/about")} mx-1 px-5 py-3 transition rounded-full`}>
                    <A href="/about">About</A>
                  </li>
                </ul>
              </div>
            </nav>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
