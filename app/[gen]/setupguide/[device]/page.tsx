import React from "react";
import DeviceCard from "@/app/components/DeviceCard";
import deviceData, { deviceParam, deviceParams } from "./deviceData";
import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import LearnProtection from "@/app/components/LearnProtection";
import Link from "next/link";

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
  return (
    <div className="flex flex-col items-center justify-center my-8 gap-8 ">
      <DeviceCard {...params} />
      {/* <div className="w-full "><Steps activeGen={params.gen} /></div> */}
      <div className="flex justify-center items-center">
        <iframe
          src="https://player.vimeo.com/video/1003172023?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          id="player"
          className="w-full md:w-[500px] lg:w-[750px] h-full md:h-72 lg:h-96 "
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <Link
        href={`/${params.gen}/setupguide/${params.device}/step1`}
        className="flex items-center justify-center w-auto h-8 md:h-12 px-3 md:px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-bright-green hover:bg-teal-600 focus:shadow-outline focus:outline-none"
      >
        <p>إبدأ في الخطوات</p>
      </Link>

      <LearnProtection />
    </div>
  );
}

type DevicePageProps = {
  params: {
    device: deviceName;
    gen: genName;
  };
};

export default Page;

export async function generateStaticParams() {
  return gensParams.flatMap((gen: genParam) =>
    deviceData[gen.gen].map((device: deviceParams) => ({
      gen: gen.gen,
      device: device.device,
    }))
  );
}
