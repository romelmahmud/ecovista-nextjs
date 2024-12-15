import Card from "@/components/Card";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function TemperaturePage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved?.lat} lon={resolved?.lon} />;
  } else {
    return <Card>NO location info</Card>;
  }
}
