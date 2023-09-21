import Image from "next/image";
import lsp1 from "@public/1.png";
import lsp2 from "@public/2.png";
import lsp3 from "@public/3.png";
import holo from "@public/geniWithText.png";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
// import blonding from "@public/svgs/blonding.svg";
// import mensCuts from "@public/svgs/mensCuts.svg";
// import vivids from "@public/svgs/Vivids.svg";

import downArrow from "@public/svgs/angles-down-solid.svg";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
    // TODO 3D 3 picture carosuel that has a review under it
    // as each photo is click review under it changes

    // right side this slogan which links to portfolio

    // Your pretty when you get here
    // youre prettier when you leave

    // another page length below

    // a little more personal about me section

    // very bottom of page
    // logos of hair product companies she uses

    // ----------------------------------------------------------------------------------------------------------------
    // console.log(blonding);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const images = [lsp1, lsp2, lsp3];
    const script = ["mens cuts", "blonding", "vivids", "color correction"];

    const handleCarouselClick = (index: number): void => {
        if (index !== currentIndex) {
            setCurrentIndex(index);
        }
    };

    const [currentScriptIndex, setCurrentScriptIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScriptIndex((prevIndex) =>
                prevIndex === script.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const bounceVariants = {
        initial: { opacity: 1, y: 20, rotate: 0 },
        bobble: {
            opacity: 1,
            y: [0, 10, 0],
            rotate: [0, -5, 0],
            transition: { duration: 2, yoyo: "loop", repeat: 7 },
        },
        exit: { opacity: 1, y: -20, rotate: 5 },
    };

    return (
        <div className=" flex w-full flex-col items-center px-10 text-white">
            <div className="relative flex w-full justify-end gap-5 rounded-2xl bg-lightPurple py-10 ">
                <Image
                    src={holo}
                    alt="geni"
                    width={600}
                    height={600}
                    className=" absolute left-0 top-0 mr-5 flex w-1/3 justify-center rounded-3xl object-cover p-10"
                    style={{ borderRadius: "60px" }}
                />

                <div className="flex w-3/4 justify-end">
                    <Spline
                        scene="https://draft.spline.design/jLVrvSOfFRqjjTzB/scene.splinecode"
                        // className=" border border-dotted border-green-400"
                    />
                </div>
            </div>
            <motion.div
                className="mt-3 flex items-center gap-2"
                initial="initial"
                animate="bobble"
                exit="exit"
                variants={bounceVariants}
            >
                <div>scroll down </div>
                <Image
                    src={downArrow as string}
                    alt="down arrow"
                    className="w-3"
                />
            </motion.div>
            <div className="mt-32 flex w-full">
                <div className=" relative flex h-96 w-3/4">
                    {images.map((image, index) => {
                        const distanceFromCenter = index - currentIndex;
                        let translateX = 0;
                        if (distanceFromCenter === 0) {
                            translateX = -33;
                        } else if (
                            distanceFromCenter === 1 ||
                            distanceFromCenter === -2
                        ) {
                            translateX = 50;
                        } else if (
                            distanceFromCenter === -1 ||
                            distanceFromCenter === 2
                        ) {
                            translateX = -50;
                        }

                        const zIndex = distanceFromCenter === 0 ? 1 : 0;
                        const scale = distanceFromCenter === 0 ? 1 : 0.8;
                        const opacity = scale === 1 ? 1 : 0.4;

                        return (
                            <Image
                                key={index}
                                src={image}
                                width={600}
                                height={600}
                                alt={`review photo ${index + 1}`}
                                className={` w-1/3 cursor-pointer transition-transform duration-300 ${
                                    distanceFromCenter === 0 ? "active" : ""
                                }`}
                                style={{
                                    transform: `translateX(${translateX}%) scale(${scale})`,
                                    zIndex,
                                    opacity,
                                    position: "absolute",
                                    left: "50%",
                                    top: "0%",
                                    marginLeft:
                                        distanceFromCenter === 0
                                            ? "-10%"
                                            : "-20%",
                                    transformOrigin: "center center",
                                }}
                                onClick={() => handleCarouselClick(index)}
                            />
                        );
                    })}
                </div>

                <div className="flex w-1/4 items-center justify-center font-grand-hotel text-6xl">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        // className="hover:underline"
                    >
                        <Link href="/portfolio" aria-label="Portfolio">
                            Youre Pretty when you get here, Prettier when you
                            leave
                        </Link>
                    </motion.button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentScriptIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 1 }}
                    className="text-6xl"
                >
                    {script[currentScriptIndex]}
                </motion.div>
            </AnimatePresence>

            <div>
                {" "}
                that says color corrections, then mens cuts, then all services
                etc.{" "}
            </div>

            <div>Need something that says book now or something</div>
            <h1 className="m-20 mt-44 font-quattrocento text-8xl">
                {" "}
                hi, im geni and I do hair stuff
            </h1>
            <div className="mb-32 flex p-10  ">
                <div className=" mx-40 font-quattrocento text-4xl">
                    Genevieve (Geni) Evanson is a hairstylist based out of
                    Bellevue, Washington and has been styling hair
                    professionally since 2017. Whilst she completed cosmetology
                    school in Washington, she went through specialized training
                    in Dallas, Texas. After her move back to Washington in 2020,
                    Geni took on the daunting task of covid color corrections.
                    During this time, she became an expert at being able to
                    match the color, style, and flow of ones hair to the person;
                    not the trends. Geni has always believed that your hair
                    should be a reflection of who you are, not always what's
                    popular. With extensive experience in carving and sculpting
                    hair in her cutting techniques, Geni finds great joy in all
                    things hair. Picture your dream look, and let Genevieve
                    Clare Hair make that dream your reality.
                </div>

                <Image
                    src={holo}
                    alt="geni"
                    width={600}
                    height={600}
                    className="object-cover"
                    style={{ borderRadius: "60px" }}
                />
            </div>

            <div>
                {" "}
                Products maybe a section about what products I use and why?{" "}
            </div>
        </div>
    );
}
