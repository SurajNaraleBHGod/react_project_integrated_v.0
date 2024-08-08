import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { UserContext } from '../main.jsx';




export default function NavBar(){
  
const user=useContext(UserContext);

    return(
        <div>
        <nav className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex items-center justify-between text-blue-gray-900">
    <a
      className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
      href="#"
    >
    {user[0].message}
    </a>
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <Link
            className="flex items-center transition-colors hover:text-blue-500"
            to="/"
          >
            ToDoList
          </Link>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a
            className="flex items-center transition-colors hover:text-blue-500"
            href="/stopwatch"
          >
          stopwatch
          </a>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a
            className="flex items-center transition-colors hover:text-blue-500"
            href="/password"
          >
            password
          </a>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <a
            className="flex items-center transition-colors hover:text-blue-500"
            href="#"
          >
            Docs
          </a>
        </li>
      </ul>
    </div>
    <button
      className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button"
    >
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  </div>
</nav>

       
        </div>
    );
}