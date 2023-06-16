import Link from "next/link"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import CoffeeButton from './BuyCoffeeButton'


export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Cooper Wallace</Link>
                </h1>
                <div className="flex flex-row place-content-center justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/cooper-wallace-0a572a158">
                        <FaLinkedin />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/coopdloop">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://twitter.com/CyberCooper">
                        <FaTwitter />
                    </Link>
                </div>
                {/* <CoffeeButton  /> */}
            </div>
        </nav>
    )
}