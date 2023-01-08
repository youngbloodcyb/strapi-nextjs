import React from "react";
import Link from "next/link";

export default function Blog({title, slug, description, publishedAt}) {
    const date = new Date(publishedAt).toLocaleDateString();
    return (
        <div className="text-black bg-white rounded-lg transition-all duration-300 ease-in-out hover:p-2 border border-black">
            <Link href={`/posts/${slug}`}>
                <div className="max-w-4xl px-10 py-6 mx-auto rounded-lg bg-white">
                    <div className="flex items-center justify-between">
                        <span className="text-sm">{date}</span>
                        <div className="px-2 py-1 uppercase rounded text-gray-900">#LABEL</div>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="mt-2">{description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <span className="">Read more</span>
                        <div>
                            <div href="#" className="flex items-center">
                                <span className="">Author Contributor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
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