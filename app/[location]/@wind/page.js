import Card from "@/components/Card";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function WindPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <Card>NO location info</Card>;
  }
}
