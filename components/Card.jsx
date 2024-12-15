export default function Card({ children }) {
  return (
    <div class="col-span-12 lg:col-span-4 2xl:col-span-6">
      <div class="card">{children}</div>
    </div>
  );
}
