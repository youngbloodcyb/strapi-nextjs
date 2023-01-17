import Link from "next/link"

export default function Nav() {
    return (
        <nav x-data="{ isOpen: false }" className="relative bg-white">
            <div className="px-6 py-3 md:flex">
                <div className="flex items-center justify-between">
                    <div>
                    <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                    <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
                    </svg>
                    </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                    
                            <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
                    <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                        <Link href="/posts" className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg md:mx-2">Posts</Link>
                        <Link href="/about" className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg md:mx-2">About</Link>
                    </div>

                    <div className="relative mt-4 md:mt-0">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>

                        <input type="text" className="w-full py-2 pl-10 pr-4 bg-white border rounded-lg text-black focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}