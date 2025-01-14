import AQIComponent from "@/components/AQIComponent";
import Card from "@/components/Card";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function AQIPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <Card>NO location info</Card>;
  }
}
