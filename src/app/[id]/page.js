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
                                    He’s going to need you to go ahead and come
                                    in on Saturday, but there’s a lot more to
                                    the story than you think.
                                  </p>
                                </header>
                                <hr className="my-12 border-gray-200" />

                                <div class="prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:bg-gray-400 [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5">
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

                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>

                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
                              <div>dsfsdfsd</div>
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
