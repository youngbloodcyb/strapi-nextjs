import Link from "next/link"

export default function Nav() {
    return (
        <header aria-label="Site Header" className="mb-10 flex justify-center">
        <div
            className="lg:w-2/3 md:w-3/4 w-full flex h-16 items-center justify-between px-4"
        >
            <div className="flex items-center gap-4">
            <Link href="/">
                <span className="sr-only">Logo</span>
                <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-vector-pen" viewBox="0 0 16 16">
                 <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                <path fillRule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>                    
                </svg>
            </Link>

            
            </div>

            <nav
            aria-label="Site Nav"
            className="hidden items-center justify-end gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
            >
            <Link className="text-gray-900" href="/posts">posts</Link>
            <Link className="text-gray-900" href="/about">about</Link>
            </nav>
        </div>

        <div className="border-t border-gray-100 lg:hidden">
            <nav
            className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
            >
            <Link className="flex-shrink-0 pl-4 text-gray-900" href="/posts">posts</Link>
            <Link className="flex-shrink-0 pl-4 text-gray-900" href="/about">about</Link>
            </nav>
        </div>
        </header>
    )
}



