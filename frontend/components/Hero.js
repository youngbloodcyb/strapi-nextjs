const imgPath = "https://images.unsplash.com/photo-1583913836387-ab656f4e0457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";

const imgHeight = window.screen.height / 2

import Image from "next/image"

export default function Hero(props) {
    return (
        <section className="w-screen flex justify-center">
            <div className="">
                <Image src={imgPath} width={window.screen.width} height={500} alt="typewriter on a table with a blank piece of paper in it"/>
            </div>
            {/* <div>
                <h1 className="text-5xl font-bold">Hello there</h1>
            </div> */}
        </section>
    )
}

