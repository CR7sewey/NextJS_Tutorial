import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchData = async (): Promise<Tour[]> => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000); // needs to be in a Promeise to affect (time) the follwoing Promises (await)
  });
  console.log("a 1");
  const response = await fetch(url);
  console.log("a 2");

  const data: Tour[] = await response.json();
  console.log("a 3");

  return data;
};

async function ToursPage() {
  // fectch this data directly from a backend and not send some js code to the front to fetch (for that needs to be a client server (using use effect or reqctQuer))
  /*const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log(data);*/
  const data = await fetchData();
  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((tour) => {
          return (
            <div key={tour.id} className="hover:text-blue-500">
              <Link href={`/tours/${tour.id}`}>
                Go to Page - <h2>{tour.name}</h2>
              </Link>
              <div className="relative h-48 mb-2">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover rounded"
                ></Image>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default ToursPage;
