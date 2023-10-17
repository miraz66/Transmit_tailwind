import { PauseIcon, PlayIcon } from "@/assets/Icon/svg";

function AudioPlayer({ isPlaying, setIsPlaying, currentSong }) {
  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-[29.3rem] lg:right-[15px] xl:left-120">
        <div className="flex items-center gap-6 bg-white/90 px-4 py-4 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6">
          <div className="hidden md:block">
            <button
              onClick={playPause}
              type="button"
              className="group relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 md:h-14 md:w-14"
              aria-label="Play"
            >
              <div className="absolute -inset-3 md:hidden"></div>
              {!isPlaying ? (
                <PlayIcon className="h-5 w-5 fill-white group-active:fill-white/80 md:h-7 md:w-7" />
              ) : (
                <PauseIcon className="h-5 w-5 fill-white group-active:fill-white/80 md:h-6 md:w-6" />
              )}
            </button>
          </div>

          <div className="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1">
            <a
              className="truncate text-center text-sm font-bold leading-6 md:text-left"
              title="5: Bill Lumbergh"
              href="/5"
            >
              {currentSong.id}: {currentSong.title}
            </a>
            <div className="flex justify-between gap-6">
              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
                  aria-label="Mute"
                >
                  <div className="absolute -inset-4 md:hidden"></div>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
                  >
                    <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
                    <path
                      d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17"
                      fill="none"
                    ></path>
                    <path
                      d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5"
                      fill="none"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-none items-center gap-4">
                <button
                  type="button"
                  className="group relative rounded-full focus:outline-none"
                  aria-label="Rewind 10 seconds"
                >
                  <div className="absolute -inset-4 -right-2 md:hidden"></div>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"
                  >
                    <path d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"></path>
                    <path d="M5 15V19"></path>
                    <path d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"></path>
                  </svg>
                </button>
                <div className="md:hidden">
                  <button
                    type="button"
                    className="group relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 md:h-14 md:w-14"
                    aria-label="Play"
                  >
                    <div className="absolute -inset-3 md:hidden"></div>
                    <svg
                      viewBox="0 0 36 36"
                      aria-hidden="true"
                      className="h-5 w-5 fill-white group-active:fill-white/80 md:h-7 md:w-7"
                    >
                      <path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path>
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  className="group relative rounded-full focus:outline-none"
                  aria-label="Fast-forward 10 seconds"
                >
                  <div className="absolute -inset-4 -left-2 md:hidden"></div>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700"
                  >
                    <path
                      d="M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 15V19"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                role="group"
                id="react-aria4609042221-:r0:"
                aria-labelledby="react-aria4609042221-:r1:"
                className="absolute inset-x-0 bottom-full flex flex-auto touch-none items-center gap-6 md:relative"
              >
                <label className="sr-only" id="react-aria4609042221-:r1:">
                  Current time
                </label>
                <div
                  className="relative w-full bg-slate-100 md:rounded-full"
                  style={{ position: "relative", touchAction: "none" }}
                >
                  <div
                    className="h-2 md:rounded-l-xl md:rounded-r-md bg-slate-700"
                    style={{ width: `${currentSong.progress}%` }}
                  ></div>
                  <div
                    className="absolute top-1/2 -translate-x-1/2"
                    style={{ left: `${currentSong.progress}%` }}
                  >
                    <div
                      className="h-4 rounded-full w-1 bg-slate-700"
                      style={{
                        position: "absolute",
                        transform: "translate(-50%, -50%)",
                        touchAction: "none",
                        left: "50%",
                      }}
                    >
                      <div
                        style={{
                          border: " 0px",
                          clip: "rect(0px, 0px, 0px, 0px)",
                          clipPath: "inset(50%)",
                          height: "1px",
                          margin: "-1px",
                          overflow: "hidden",
                          padding: "0px",
                          position: "absolute",
                          width: "1px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <input
                          tabindex="0"
                          id="react-aria4609042221-:r1:-0"
                          aria-labelledby="react-aria4609042221-:r1:"
                          min="0"
                          max="64"
                          step="1"
                          aria-orientation="horizontal"
                          aria-valuetext="0 hours, 0 minutes, 0 seconds"
                          type="range"
                          value="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                  <output
                    for="react-aria4609042221-:r1:-0"
                    aria-live="off"
                    className="hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 md:block text-slate-500"
                  >
                    00:00
                  </output>
                  <span
                    className="text-sm leading-6 text-slate-300"
                    aria-hidden="true"
                  >
                    /
                  </span>
                  <span className="hidden rounded-md px-1 py-0.5 font-mono text-sm leading-6 text-slate-500 md:block">
                    {currentSong.length}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="relative flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    aria-label="Playback rate"
                  >
                    <div className="absolute -inset-4 md:hidden"></div>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-4 w-4"
                    >
                      <path
                        d="M13 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V3C15 1.89543 14.1046 1 13 1Z"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="2"
                      ></path>
                      <path d="M3.75 7.25L5.25 5.77539V11.25"></path>
                      <path d="M8.75 7.75L11.25 10.25"></path>
                      <path d="M11.25 7.75L8.75 10.25"></path>
                    </svg>
                  </button>
                </div>
                <div className="hidden items-center md:flex">
                  <button
                    type="button"
                    className="group relative rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none"
                    aria-label="Mute"
                  >
                    <div className="absolute -inset-4 md:hidden"></div>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700"
                    >
                      <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
                      <path
                        d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17"
                        fill="none"
                      ></path>
                      <path
                        d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5"
                        fill="none"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
      <div>audio</div>
    </>
  );
}

export default AudioPlayer;
