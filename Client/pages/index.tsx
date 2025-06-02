import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Weather App</title>
                <meta name="weather app" content="shows weather conditions across a variety of cities"/>
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>

            <h1>Hello</h1>
        </div>
    )
}