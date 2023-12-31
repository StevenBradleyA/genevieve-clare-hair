import { useState, type ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import AdminLayout from "./layout";
import { useSession } from "next-auth/react";
import { displaySvg } from "~/components/Svgs";
import Custom404 from "../404";
import Image from "next/image";
import logo from "@public/icons/heart.png";
import { motion } from "framer-motion";
import ModalDialog from "~/components/Modal";
import EditUserNotes from "~/components/Clients/updateNotes";

const AdminPage: NextPageWithLayout = () => {
    const { data: session } = useSession();

    const accessDenied = !session || !session.user.isAdmin;

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (accessDenied) {
        return <Custom404 />;
    }

    return (
        <div className="flex w-2/3 flex-col items-center text-2xl text-white ">
            <div className="flex items-center gap-5">
                <div className="font-grand-hotel text-8xl">Admin </div>
                <Image src={logo} alt="logo" width={100} height={100} />
            </div>

            {session && session.user && (
                <div className="w-full rounded-2xl bg-glass p-10 shadow-lg">
                    <div className="relative flex w-full justify-center">
                        <div className=" text-3xl">
                            {" "}
                            {session.user.firstName} notes
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute   right-0 rounded-xl bg-glass shadow-md"
                            onClick={openModal}
                        >
                            {displaySvg("adminEdit")}
                        </motion.button>
                    </div>
                    <ModalDialog isOpen={isModalOpen} onClose={closeModal}>
                        <EditUserNotes closeModal={closeModal} />
                    </ModalDialog>

                    <div className="mt-1 w-full rounded-2xl bg-darkGlass p-6 text-xl">
                        {session.user.notes &&
                            session.user.notes
                                .split("\n")
                                .map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                    </div>
                </div>
            )}
        </div>
    );
};

AdminPage.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};

export default AdminPage;
