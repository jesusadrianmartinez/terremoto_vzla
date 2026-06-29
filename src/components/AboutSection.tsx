"use client";

import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { emergencyData, storyData, missionData } from "@/data/sections/about";

export const AboutSection = () => {
  const language =
    useAppSelector((state) => state.languageReducer.language) || "es";

  const currentEmergency = emergencyData[language] || emergencyData.es;
  const currentStory = storyData[language] || storyData.es;
  const currentMission = missionData[language] || missionData.es;

  return (
    <section className="py-8 md:py-10 bg-[#fcfbf7]">
      <div className="container-page px-4 grid gap-6 md:grid-cols-12 items-stretch">
        {/* Emergencia Humanitaria */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-teal/10 rounded-full text-teal">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h2 className="text-sm font-black uppercase tracking-wider text-navy">
                {currentEmergency.title}
              </h2>
            </div>
            <div className="space-y-3 text-xs leading-relaxed text-navy/80">
              {currentEmergency.paragraphs?.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Mi Historia */}
        <div className="md:col-span-5 border-x border-navy/10 px-0 md:px-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-1 grid grid-cols-1 gap-2 self-center">
            <Image
              src="/jym.jpeg"
              alt={currentStory.altImage1 || "Coordinadores"}
              width={400}
              height={300}
              className="w-full h-auto aspect-4/3 object-cover border border-navy/10 shadow-sm rounded-lg"
            />
            <Image
              src="/jym2.jpeg"
              alt={currentStory.altImage2 || "Soporte"}
              width={400}
              height={300}
              className="w-full h-auto aspect-4/3 object-cover border border-navy/10 shadow-sm rounded-lg"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col justify-center">
            <h2 className="text-sm font-black uppercase tracking-wider text-navy mb-2">
              {currentStory.title}
            </h2>
            <div className="text-xs leading-relaxed text-navy/80 space-y-2">
              <p>
                {currentStory.verb} <strong>{currentStory.author}</strong>,{" "}
                {currentStory.context}
              </p>
              <p className="line-clamp-4">{currentStory.details?.[0]}</p>
              <p className="line-clamp-3">{currentStory.details?.[1]}</p>
              <p className="line-clamp-3">{currentStory.details?.[3]}</p>
              <p className="text-teal font-bold">{currentStory.highlight}</p>
            </div>
          </div>
        </div>

        {/* Nuestra Misión */}
        <div className="md:col-span-3 flex flex-col justify-between bg-sand/10 p-4 rounded-2xl border border-sand/30">
          <div>
            <div className="flex items-center gap-2 mb-3 text-teal">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h2 className="text-sm font-black uppercase tracking-wider text-navy">
                {currentMission.title}
              </h2>
            </div>
            <p className="text-xs font-medium leading-relaxed text-navy/90">
              {currentMission.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
