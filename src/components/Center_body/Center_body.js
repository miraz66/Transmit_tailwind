"use client";

import { useState } from "react";
import Image from "next/image";
import CenterImage from "@/assets/poster.png";
import { ApplePodCast, OverCast, Spotify } from "@/assets/Icon/svg";

function Center_body() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="">
        <div class="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
          <div className="flex border border-slate-300 rounded-2xl shadow-xl">
            <Image
              src={CenterImage}
              alt="posterImage"
              height={100}
              width={400}
              style={{
                borderRadius: "1rem",
                border: "1rem",
                borderColor: "gray",
              }}
            />
          </div>
          <a
            class="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
            aria-label="Homepage"
            href="/"
          >
            <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"></div>
          </a>
          <div class="mt-10 text-center lg:mt-12 lg:text-left">
            <p class="text-xl font-bold text-slate-900">
              <a href="/">Their Side</a>
            </p>
            <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
              Conversations with the most tragically misunderstood people of our
              time.
            </p>
          </div>
          <section class="mt-12 hidden lg:block">
            <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
              <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5">
                <path
                  d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                  class="fill-violet-300"
                ></path>
                <path
                  d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                  class="fill-pink-300"
                ></path>
              </svg>
              <span class="ml-2.5">About</span>
            </h2>
            <p
              class={
                show
                  ? "mt-2 text-base leading-7 text-slate-700"
                  : "mt-2 text-base leading-7 text-slate-700 lg:line-clamp-4"
              }
            >
              In this show, Eric and Wes dig deep to get to the facts with
              guests who have been labeled villains by a society quick to judge,
              without actually getting the full story. Tune in every Thursday to
              get to the truth with another misunderstood outcast as they share
              the missing context in their tragic tale.
            </p>
            <button
              onClick={() => setShow(true)}
              type="button"
              class={
                show
                  ? "mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                  : "mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
              }
            >
              Show more
            </button>
          </section>
          <section class="mt-10 lg:mt-12">
            <h2 class="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
              <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5">
                <path
                  d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                  class="fill-indigo-300"
                ></path>
                <path
                  d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                  class="fill-blue-300"
                ></path>
              </svg>
              <span class="ml-2.5">Listen</span>
            </h2>
            <div class="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden"></div>
            <ul
              role="list"
              class="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
            >
              <li class="flex">
                <a
                  class="group flex items-center"
                  aria-label="Spotify"
                  href="/"
                >
                  <Spotify className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                  <span class="hidden sm:ml-3 sm:block">Spotify</span>
                </a>
              </li>
              <li class="flex">
                <a
                  class="group flex items-center"
                  aria-label="Apple Podcast"
                  href="/"
                >
                  <ApplePodCast className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                  <span class="hidden sm:ml-3 sm:block">Apple Podcast</span>
                </a>
              </li>
              <li class="flex">
                <a
                  class="group flex items-center"
                  aria-label="Overcast"
                  href="/"
                >
                  <OverCast className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                  <span class="hidden sm:ml-3 sm:block">Overcast</span>
                </a>
              </li>
              <li class="flex">
                <a
                  class="group flex items-center"
                  aria-label="RSS Feed"
                  href="/"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    class="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.5 4h15A4.5 4.5 0 0 1 28 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 23.5v-15A4.5 4.5 0 0 1 8.5 4ZM13 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-6a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Zm5.74-4.858A15 15 0 0 0 7 10V7a18 18 0 0 1 18 18h-3a15 15 0 0 0-9.26-13.858Z"
                    ></path>
                  </svg>
                  <span class="hidden sm:ml-3 sm:block">RSS Feed</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Center_body;
