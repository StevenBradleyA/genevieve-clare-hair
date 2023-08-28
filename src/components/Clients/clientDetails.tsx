import Image from "next/image";
import { DotLoader } from "react-spinners";
import { api } from "~/utils/api";

export default function ClientDetails({ userId }: { userId: string }) {
    // TODO ALLOW ADMIN to edit and update notes
    // TODO maybe allow geni to give admin permission here very easy to do
    // TODO potential poggywoggy refactor there is prob a better way
    const { data: user, isLoading } = api.user.getUserById.useQuery(userId);

    if (isLoading)
        return (
            <div className=" mt-10 flex flex-col items-center justify-center gap-16">
                <div className="text-lg text-white">Loading User</div>{" "}
                <DotLoader size={50} color={"#ffffff"} loading={isLoading} />
            </div>
        );

    if (!user) return <div>Oops</div>;

    return (
        <div className=" mb-20 min-w-full  px-10">
            <div className=" flex flex-col items-center justify-center rounded-2xl bg-glass p-10 text-white shadow-2xl">
                <div className="mb-5 flex gap-5 text-5xl font-bold">
                    <div>{user.firstName}</div>
                    <div>{user.lastName}</div>
                </div>
                {user.images && user.images.length > 0 && (
                    <div className="flex items-center justify-center gap-5">
                        {user.images.map((e, i) => (
                            <div key={i}>
                                <Image
                                    src={e.link}
                                    alt="client"
                                    width={200}
                                    height={200}
                                    className="w-40"
                                />
                            </div>
                        ))}
                    </div>
                )}
                <div className="mt-5 text-5xl font-bold">Contact</div>
                <div className=" mt-3 text-2xl">{user.email}</div>

                <div className="mt-5 flex gap-5 text-5xl font-bold">
                    Notes{" "}
                    <button className="rounded-full bg-glass p-2 px-3 text-3xl shadow-sm">
                        🧐
                    </button>
                </div>
                <div className=" mt-3 w-3/4 rounded-2xl bg-chillPurple p-6 ">
                    {/* <p className="text-xl ">{user.notes}</p> */}
                    {user.notes &&
                        user.notes.split("poggywoggy").map((line, index) => (
                            <p key={index} className="text-xl">
                                {line}
                            </p>
                        ))}
                </div>
            </div>
        </div>
    );
}
