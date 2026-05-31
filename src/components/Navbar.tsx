export default function Navbar() {
  return (
    <nav className="flex w-full justify-center border-b-2 border-amber-400 bg-amber-200 p-1">
      <ul className="flex space-x-6">
        <li>
          <a
            href="#"
            className="font-semibold text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-3"
          >
            Laboratory
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-semibold text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-3"
          >
            ERD
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-semibold text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-3"
          >
            Tech stack
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-semibold text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-3"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
