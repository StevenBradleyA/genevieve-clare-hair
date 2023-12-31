import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import gif from "@public/Gifs/gch-404.gif";

export default function Custom404() {
    return (
        <div className="flex w-2/3 flex-col items-center justify-center text-4xl text-white">
            <Image src={gif} alt="404" className="w-3/4" />
            <div className="mt-5 flex flex-col items-center rounded-2xl bg-glass p-5 shadow-xl">
                <div className="mb-2 ">
                    Uh oh! Looks like you got lost
                </div>
                <div className="mb-5 ">
                    No worries, the homepage is just a click away.
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className=" rounded-3xl bg-blue-200 px-6 py-2 text-3xl shadow-md "
                >
                    <Link href="/">click me!</Link>
                </motion.button>
            </div>
        </div>
    );
}
