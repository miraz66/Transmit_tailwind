import AudioPlayer from "@/components/AudioPlayer";
import Center_body from "@/components/Center_body";
import Main_Body from "@/components/Main_Body";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-between">
        <div className="bg-slate-50 w-[42rem] min-h-screen overflow-y-auto">
          <Center_body />
        </div>

        <div className="h-screen overflow-y-auto w-full relative">
          <Main_Body />

        </div>
      </div>
    </main>
  );
}
