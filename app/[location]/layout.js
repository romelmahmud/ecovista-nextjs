import "../globals.css";

export const metadata = {
  title: "EcoVista",
  description: "One Place Dashboard for Eco Information",
};

export default function RootLayout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className="wrapper">
      {children}
      {aqi}
      {temperature}
      {weather}
      {wind}
    </div>
  );
}
