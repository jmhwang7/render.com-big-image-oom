import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
    return (
        <div className="container">
            <Image
                src="/big-image.png"
                priority
                width={500}
                height={500}
                />
        </div>
    )
}
