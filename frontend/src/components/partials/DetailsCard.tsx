type DetailsTypes = {
  title?: string,
  performers?: string,
  date?: string,
  venue?: string
}

export default function DetailsCard({ title, performers, date, venue }: DetailsTypes) {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">
        {performers}
        {date}
        {venue}
      </p>
    </div>
  );
}
