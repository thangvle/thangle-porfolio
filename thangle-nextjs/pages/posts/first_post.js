import Link from 'next/link'

export default function firstPost() {
    return (
        <div> 
        <h1> This is First post </h1>
        <h2> <Link href="/"> Back to Home</Link></h2>

        <Image></Image>
        </div>
    )
}