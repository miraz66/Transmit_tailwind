import Center_body from "@/components/Center_body";
import Main_Body from "@/components/Main_Body";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-between">
        <div className="flex flex-cols">
          <div className="bg-slate-50 min-h-screen border-r">
            <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
              <span className="font-mono text-slate-500">Hosted by</span>
              <span className="mt-6 flex gap-6 font-medium text-slate-900 tracking-wide">
                Eric Gordon
                <span
                  aria-hidden="true"
                  className="text-slate-400 tracking-wide"
                >
                  /
                </span>
                Wes Mantooth
              </span>
            </div>
          </div>
          <div className="bg-slate-50 w-[26rem] h-screen overflow-y-auto">
            <Center_body />
          </div>
        </div>

        <div className="h-screen overflow-y-auto w-full">
          <Main_Body />
        </div>
      </div>
    </main>
  );
}
