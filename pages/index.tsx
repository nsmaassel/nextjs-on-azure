import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Define the shape of the time data we expect from the server.
interface TimeData {
    currentTime: string;
}

// This function runs on the server-side for each request.
export async function getServerSideProps() {
    // We create a data object and serialize it because the server can only send strings to the client.
    const serializedTimeData = JSON.stringify({currentTime: new Date().toISOString()});

    // The serialized data is included in the props sent to the client.
    return {props: {serializedTimeData}};
}

export default function Home({serializedTimeData}: { serializedTimeData: string }) {
    // On the client side, we receive the serialized data and need to deserialize it to use as an object.
    const timeData: TimeData = JSON.parse(serializedTimeData);

    // Format the date string using toLocaleString
    const formattedTime = new Date(timeData.currentTime).toLocaleString();

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {/*We are able to showcase server-side rendering by displaying the server's current time.*/}
                    Welcome to <a href="https://nextjs.org">Next.js!</a> The server time is {formattedTime}
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}