"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

export default function LocationDetector() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathName, searchParams, router]);
  return (
    <div className="flex  justify-center items-center h-screen bg-slate-700 text-white w-full">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="Loading...."
            height={500}
            width={500}
            className="border rounded-md my-4"
            unoptimized
          />
          <p className="text-4xl text-center">Deleting Location....</p>
        </>
      )}
    </div>
  );
}