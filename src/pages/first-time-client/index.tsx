import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
    ServiceOptions,
    ColorHistory,
    ChemHair,
    CurrentColor,
    TimeSlots,
    ExtraDetails,
} from "~/components/NewClientForm";

export default function FirstTimeClient() {
    const [page, setPage] = useState<number>(0);
    const [serviceNotes, setServiceNotes] = useState<string>("");
    const [colorHistoryNotes, setColorHistoryNotes] = useState<string>("");
    const [chemNotes, setChemNotes] = useState<string>("");
    const [currentColorNotes, setCurrentColorNotes] = useState<string>("");
    const [timeNotes, setTimeNotes] = useState<string>("");
    const [extraNotes, setExtraNotes] = useState<string>("");
    const [ready, setReady] = useState(true);
    const { data: session } = useSession();
    const router = useRouter();

    const isNew = session?.user.isNew;

    useEffect(() => {
        async function redirectIfNotNew() {
            if (!isNew) {
                try {
                    await router.push("/");
                } catch (error) {
                    console.error("Error while redirecting:", error);
                }
            }
        }
        void redirectIfNotNew();
    }, [isNew]);

    const changePages = (num: number) => {
        const newNum = page + num;

        if (newNum < form.length && newNum >= 0) {
            setPage(newNum);
        } else newNum < 0 ? setPage(0) : setPage(form.length - 1);
    };

    const form = [
        <ServiceOptions
            key={0}
            setReady={setReady}
            setNotes={setServiceNotes}
        />,
        <ColorHistory
            key={1}
            setReady={setReady}
            setNotes={setColorHistoryNotes}
        />,
        <ChemHair key={2} setReady={setReady} setNotes={setChemNotes} />,
        <CurrentColor
            key={3}
            setReady={setReady}
            setNotes={setCurrentColorNotes}
        />,
        <TimeSlots key={4} setReady={setReady} setNotes={setTimeNotes} />,
        <ExtraDetails
            key={5}
            extraNotes={extraNotes}
            setExtraNotes={setExtraNotes}
            serviceNotes={serviceNotes}
            colorHistoryNotes={colorHistoryNotes}
            chemNotes={chemNotes}
            currentColorNotes={currentColorNotes}
            timeNotes={timeNotes}
        />,
    ];

    return isNew ? (
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="font-grand-hotel text-white mobile:text-3xl sm:text-8xl">
                First Time Client
            </h1>

            <div className="w-full">
                <div className="flex w-full flex-col items-center px-10">
                    {form[page]}
                </div>

                <div className="mb-20 mt-10 flex items-center justify-center gap-10  text-white mobile:text-sm sm:text-lg full:text-2xl">
                    <button
                        onClick={() => changePages(-1)}
                        className="transform rounded-md bg-glass px-4 py-2 text-purple-300 shadow-md transition-transform hover:scale-105 active:scale-95"
                    >
                        Back
                    </button>

                    {page === form.length - 1 ? null : (
                        <button
                            onClick={() => changePages(1)}
                            className="transform rounded-md bg-glass px-4 py-2 text-violet-300 shadow-md transition-transform hover:scale-105 active:scale-95"
                            disabled={!ready}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    ) : (
        <div className="mt-20 text-3xl text-white">
            {" "}
            New Client Form Completed 😊
        </div>
    );
}
