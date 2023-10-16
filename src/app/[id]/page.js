import Center_body from "@/components/Center_body";
import { HeaderSvg, PlayIcon } from "@/assets/Icon/svg";
import { Data } from "@/assets/EpisodData/Data";

export default function page({ params }) {
  const url = parseInt(params.id);

  return (
    <>
      {Data
        ? Data.map(({ id, title, date, description }) =>
            id === url ? (
              <div className="flex justify-between" key={id}>
                <div className="bg-slate-50 w-[42rem] min-h-screen overflow-y-auto">
                  <Center_body />
                </div>

                <div className="h-screen overflow-y-auto w-full">
                  <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:border-t-0">
                    <HeaderSvg className="absolute left-0 top-0 h-20 w-full" />

                    <div className="relative">
                      <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
                        <article className="pt-20">
                          <div className="lg:px-8">
                            <div className="lg:max-w-4xl">
                              <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                                <header className="flex flex-col">
                                  <div className="flex items-center gap-6">
                                    <button
                                      type="button"
                                      aria-label="Play episode 5: Bill Lumbergh"
                                      className="group relative flex p-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-4"
                                    >
                                      <PlayIcon className="h-9 w-9 fill-white group-active:fill-white/80" />
                                    </button>

                                    <div className="flex flex-col">
                                      <h1 className="mt-2 text-4xl font-bold text-slate-900">
                                        {id}: {title}
                                      </h1>
                                      <time
                                        dateTime="2022-02-24T00:00:00.000Z"
                                        className="order-first font-mono text-sm leading-7 text-slate-500"
                                      >
                                        {date}
                                      </time>
                                    </div>
                                  </div>
                                  <p className="ml-24 mt-3 text-lg font-light leading-8 text-slate-900">
                                    {description}
                                  </p>
                                </header>
                                <hr className="my-12 border-gray-200" />

                                <div className="prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-light [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>ul]:font-light [&>ul]:text-stone-950">
                                  <h2 id="topics">Topics</h2>
                                  <ul>
                                    <li>
                                      Quibusdam saepe veritatis unde ea omnis
                                      repudiandae neque unde sapiente
                                    </li>
                                    <li>Praesentium velit ratione</li>
                                    <li>Deserunt ullam sit perspiciatis</li>
                                    <li>
                                      Omnis occaecati tempore numquam delectus
                                      iste iste odio
                                    </li>
                                    <li>
                                      Est qui consequuntur quis quia quod ipsum
                                      consectetur ad aperiam
                                    </li>
                                    <li>
                                      Voluptate laborum cum dignissimos esse
                                      debitis incidunt tempore
                                    </li>
                                  </ul>

                                  <h2 id="sponsors">Sponsors</h2>
                                  <ul>
                                    <li>
                                      <a href="#">Initech</a> — Pioneers of the
                                      TPS report, Initech is actively looking
                                      for job-seekers with people skills who can
                                      work with customers to gather
                                      specifications and deliver them to the
                                      software people.
                                    </li>
                                    <li>
                                      <a href="#">Globex Corporation</a> — Just
                                      a friendly and innocent high-tech company,
                                      with a casual work environment and an
                                      office without walls. Anything you’ve
                                      heard about a “doomsday device” is pure
                                      conjecture and not based in fact.
                                    </li>
                                  </ul>

                                  <h2 id="links">Links</h2>
                                  <ul>
                                    <li>
                                      <a href="#">Quis laboriosam</a> molestiae
                                      tempore necessitatibus
                                    </li>
                                    <li>
                                      <a href="#">Sit autem</a> neque minima
                                      itaque sit commodi
                                    </li>
                                    <li>
                                      Eos ratione <a href="#">blanditiis</a>
                                    </li>
                                    <li>
                                      Eius a <a href="#">qui quasi</a>
                                    </li>
                                    <li>
                                      Laborum laudantium sunt{" "}
                                      <a href="#">mollitia aliquam</a> corporis
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
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
