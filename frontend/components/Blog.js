import React from "react";
import Link from "next/link";

export default function Blog({title, slug, description, publishedAt}) {
    const date = new Date(publishedAt).toLocaleDateString();
    return (
        <Link href={`/posts/${slug}`}>
            <div className="bg-gray-800 text-gray-100 rounded-lg">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{date}</span>
                        <div className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</div>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="mt-2">{description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-violet-400">Read more</span>
                        <div>
                            <div href="#" className="flex items-center">
                                <span className="text-gray-400">Author: Contributor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}


// export default function Blog({title, slug, description}) {
//     return (
//         <Link href={`/posts/${slug}`}>
//             <div className="">
//                 <h2>{title}</h2>
//                 <p className="">{description}</p>
//             </div>
//         </Link>
//     )
// }