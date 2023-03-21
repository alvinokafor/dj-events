import Link from "next/link";

export default function NavBar() {
  return (
    <header className="mx-auto">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              DJ Events
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {/* <a
              href="#"
              className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </a> */}
            <Link href="/saved-events">
              <button className="text-white bg-blue-600 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
                Saved Events
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
