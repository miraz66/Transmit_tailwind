"use client";

import { PlayIcon, PauseIcon } from "@/assets/Icon/svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Article({
  id,
  title,
  date,
  description,
  isPlaying,
  setIsPlaying,
  selectSong,
  currentSong,
}) {
  const router = useRouter();
  const [localId, setLocalId] = useState();

  return (
    <>
      <article aria-label="episode-5-title" className="py-10 sm:py-12">
        <div className="lg:px-8">
          <div className="lg:max-w-4xl">
            <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
              <div className="flex flex-col items-start">
                <h2
                  id="episode-5-title"
                  className="mt-2 text-lg font-bold text-slate-900"
                >
                  <button onClick={() => router.push("/" + id)}>
                    {id}: {title}
                  </button>
                </h2>
                <time
                  dateTime="2022-02-24T00:00:00.000Z"
                  className="order-first font-mono text-sm leading-7 text-slate-500"
                >
                  {date}
                </time>
                <p className="mt-1 text-base leading-7 text-slate-700">
                  {description}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <button
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      selectSong(id);
                      setLocalId(id);
                    }}
                    type="button"
                    aria-label="Play episode 5: Bill Lumbergh"
                    className="flex items-center gap-x-3 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                  >
                    {currentSong.id === localId && isPlaying ? (
                      <PauseIcon className="h-2.5 w-2.5 fill-current" />
                    ) : (
                      <PlayIcon className="h-2.5 w-2.5 fill-current" />
                    )}

                    <span aria-hidden="true">Listen</span>
                  </button>
                  <span
                    aria-hidden="true"
                    className="text-sm font-bold text-slate-400"
                  >
                    /
                  </span>
                  <a
                    className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                    aria-label="Show notes for episode 5: Bill Lumbergh"
                    href="/5"
                  >
                    Show notes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Article;
