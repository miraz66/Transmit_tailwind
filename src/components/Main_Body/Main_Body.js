"use client";

import { useRef, useState, useEffect } from "react";
import { Data } from "@/assets/EpisodData/Data";
import { HeaderSvg } from "@/assets/Icon/svg";
import Article from "../Article";
import AudioPlayer from "../AudioPlayer";

function Main_Body() {
  const [currentSong, setCurrentSong] = useState(Data[4]);
  const [isPlaying, setIsPlaying] = useState();
  const audioElam = useRef();

  // console.log(audioElam);

  useEffect(() => {
    if (isPlaying) {
      audioElam.current.play();
    } else {
      audioElam.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = (e) => {
    const duration = audioElam.current.duration;
    const currentTime = audioElam.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (currentTime / duration) * 100,
      length: duration,
    });
  };

  // const selectSong = (song) => {
  //   Data.map((data) => (song === data.id ? setCurrentSong(data) : null));
  // };

  return (
    <>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:border-t-0">
        <HeaderSvg className="absolute left-0 top-0 h-20 w-full" />

        <div className="relative">
          <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
            <div className="lg:px-8">
              <div className="lg:max-w-4xl">
                <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                  <h1 className="text-2xl font-bold leading-7 text-slate-900">
                    Episodes
                  </h1>
                </div>
              </div>
            </div>
            <div className="divide-y relative divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
              {Data
                ? Data.slice()
                    .reverse()
                    .map((data) => (
                      <div key={data.id}>
                        <Article
                          {...data}
                          isPlaying={isPlaying}
                          setIsPlaying={setIsPlaying}
                          audioElam={audioElam}
                          onPlaying={onPlaying}
                          // selectSong={selectSong}
                          currentSong={currentSong}
                        />
                      </div>
                    ))
                : null}
              <audio src={currentSong.audio} ref={audioElam} />
              <AudioPlayer
                audioElam={audioElam}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main_Body;
