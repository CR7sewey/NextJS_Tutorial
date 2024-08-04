import React from "react";
import mapsImg from "@/images/maps.jpg"; // gigant image, we need to reduce it
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

// to get a specif item for example - basic a placeholder
function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID : {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* Local Image */}
        <div>
          <Image
            src={mapsImg}
            alt="maps"
            priority={true}
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Local Image</h2>
        </div>
        {/* Remote Image - weight and height mandatory */}
        <div>
          <Image
            src={url}
            alt="maps2"
            priority={true}
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Remote</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
