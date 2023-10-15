import Center_body from "@/components/Center_body";
import { HeaderSvg } from "@/assets/Icon/svg";

const data = [1, 2, 3, 4];

export default function page({ params }) {
  const id = parseInt(params.id);

  return (
    <>
      {data
        ? data.map((e) =>
            e === id ? (
              <div className="flex justify-between" key={e}>
                <Center_body />

                <div className="h-screen overflow-y-auto w-full">
                  <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:border-t-0">
                    <HeaderSvg className="absolute left-0 top-0 h-20 w-full" />

                    <div className="relative">
                      <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
                        <div className="lg:px-8">
                          <article className="">
                            <div className="lg:px-8">
                              <div className="lg:max-w-4xl">
                                <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                                  <header className="flex flex-col">
                                    <div className="flex items-center gap-6">
                                      <button
                                        type="button"
                                        aria-label="Play episode 5: Bill Lumbergh"
                                        className="group relative flex h-18 w-18 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-4"
                                      >
                                        <svg
                                          viewBox="0 0 36 36"
                                          aria-hidden="true"
                                          className="h-9 w-9 fill-white group-active:fill-white/80"
                                        >
                                          <path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path>
                                        </svg>
                                      </button>
                                      <div className="flex flex-col">
                                        <h1 className="mt-2 text-4xl font-bold text-slate-900">
                                          5: Bill Lumbergh
                                        </h1>
                                        <time
                                          dateTime="2022-02-24T00:00:00.000Z"
                                          className="order-first font-mono text-sm leading-7 text-slate-500"
                                        >
                                          February 24, 2022
                                        </time>
                                      </div>
                                    </div>
                                    <p className="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">
                                      He’s going to need you to go ahead and
                                      come in on Saturday, but there’s a lot
                                      more to the story than you think.
                                    </p>
                                  </header>
                                  <hr className="my-12 border-gray-200" />
                                  <div className="prose prose-slate mt-14 [&amp;>h2:nth-of-type(3n)]:before:bg-violet-200 [&amp;>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&amp;>h2]:mt-12 [&amp;>h2]:flex [&amp;>h2]:items-center [&amp;>h2]:font-mono [&amp;>h2]:text-sm [&amp;>h2]:font-medium [&amp;>h2]:leading-7 [&amp;>h2]:text-slate-900 [&amp;>h2]:before:mr-3 [&amp;>h2]:before:h-3 [&amp;>h2]:before:w-1.5 [&amp;>h2]:before:rounded-r-full [&amp;>h2]:before:bg-cyan-200 [&amp;>ul]:mt-6 [&amp;>ul]:list-['\2013\20'] [&amp;>ul]:pl-5">
                                    <h2 id="topics">Topics</h2>
                                    <ul>
                                      <li>
                                        What are TPS reports exactly, and what’s
                                        the motivation for adding the cover
                                        sheet?
                                      </li>
                                      <li>
                                        How Bill preserves such a cool and calm
                                        demeanor, despite the extreme
                                        consequences Initech faces for not
                                        finishing their Y2K upgrades on time,
                                        and why it’s important to protect the
                                        staff from that stress
                                      </li>
                                      <li>
                                        Why suspenders and belts aren’t enough
                                        on their own, and should be used
                                        together
                                      </li>
                                      <li>
                                        The backstory behind how Bill purchased
                                        his Porsche 911
                                      </li>
                                      <li>
                                        The real reason he needed the red
                                        stapler for himself
                                      </li>
                                    </ul>
                                    <h2 id="sponsors">Sponsors</h2>
                                    <ul>
                                      <li>
                                        <a href="#">Initech</a> — Pioneers of
                                        the TPS report, Initech is actively
                                        looking for job-seekers with people
                                        skills who can work with customers to
                                        gather specifications and deliver them
                                        to the software people.
                                      </li>
                                      <li>
                                        <a href="#">Globex Corporation</a> —
                                        Just a friendly and innocent high-tech
                                        company, with a casual work environment
                                        and an office without walls. Anything
                                        you’ve heard about a “doomsday device”
                                        is pure conjecture and not based in
                                        fact.
                                      </li>
                                    </ul>
                                    <h2 id="links">Links</h2>
                                    <ul>
                                      <li>
                                        Bill Lumbergh’s{" "}
                                        <a href="#">Twitter profile</a>
                                      </li>
                                      <li>
                                        Bill Lumbergh’s{" "}
                                        <a href="#">personal website</a>
                                      </li>
                                      <li>
                                        “What’s happening?”, Bill’s new book on
                                        effective management{" "}
                                        <a href="#">on Amazon</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
            ) : null
          )
        : null}
    </>
  );
}
