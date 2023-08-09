import { useSession } from "next-auth/react";
import { useState } from "react";
import { api } from "~/utils/api";
import React from "react";
import CreateImage from "~/components/Images/Create";
import { uploadFileToS3 } from "~/pages/api/aws/utils";




interface StarProps {
    rating: number;
    starRating: number;
    hover: number;
    starHover: (rating: number) => void;
    onClick: (rating: number) => void;
}

const Star = ({ rating, starRating, hover, starHover, onClick }: StarProps) => {
    const filled = "cursor-pointer text-image";
    const empty = "cursor-pointer star-image opacity-50";

    const starClasses = rating <= starRating ? filled : empty;
    const hoverClasses = hover ? (rating <= hover ? filled : empty) : false;

    return (
        <div
            className={`h-6 w-6 ${hoverClasses || starClasses}`}
            onMouseEnter={() => starHover(rating)}
            onMouseLeave={() => starHover(0)}
            onClick={() => onClick(rating)}
        >
            ⭐️
        </div>
    );
};

export default function CreateReview() {
    // TODO feeling tired but how can I access the review Id before it is created? Should the image upload be a second part of the modal? they submit the review then add the images? idk
    // TODO will need to be refactored to where images and review submit at same time so that reviewId can be created first maybe? idk
    // TODO may want separate image component and limit files to 3
    // TODO does the backend API have to return the reviewID then I can access it?

    
    const [text, setText] = useState("");
    const [starRating, setStarRating] = useState(0);
    const [hover, setHover] = useState(0);
    const { data: session } = useSession();
    const [hasSubmittedImages, setHasSubmittedImages] =
        useState<boolean>(false);

    const ctx = api.useContext();

    const { mutate } = api.review.create.useMutation({
        onSuccess: () => {
            // api.image.create.useMutation()
            void ctx.review.getAll.invalidate();
            void ctx.review.hasReviewed.invalidate();
        },
    });

    const starHover = (rating: number) => {
        setHover(rating);
    };

    const starClick = (rating: number) => {
        setStarRating(rating);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        if (session && session.user && session.user.id) {
            const data = {
                text,
                starRating,
                userId: session.user.id,
                // images: ImageURL[]
            };

            setText("");
            setStarRating(0);
            setHover(0);

            console.log(mutate(data));
        } else {
            throw new Error("Session expired");
        }
    };

    return (
        <form
            className="flex flex-col items-center gap-5 text-white"
            onSubmit={submit}
        >
            <div className="font-grand-hotel text-6xl text-white">
                Leave a Review
            </div>
            <textarea
                value={text}
                placeholder="What did you think of my work?"
                onChange={(e) => setText(e.target.value)}
                className=" h-40 w-96 rounded-md bg-glass p-2 text-xl text-purple-300 placeholder:text-purple-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
            <div className="flex items-center text-white ">
                <span className="font-quattrocento text-3xl">Star Rating</span>
                <div className="m-2 flex items-center">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <Star
                            key={rating}
                            rating={rating}
                            starRating={starRating}
                            hover={hover}
                            starHover={starHover}
                            onClick={starClick}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center font-grand-hotel text-6xl">
                Show Off Your Awesome Hair!
            </div>
            {!hasSubmittedImages ? (
                <CreateImage
                    setHasSubmittedImages={setHasSubmittedImages}
                    resourceType={"REVIEW"}
                    resourceId=""
                />
            ) : (
                <div>{`You're a star! Now submit that review and shine ⭐️`}</div>
            )}
            <button
                disabled={starRating && text ? false : true}
                className={`transform rounded-md bg-glass px-4 py-2 shadow-md transition-transform hover:scale-105 active:scale-95 ${
                    starRating && text ? "text-purple-300" : "text-slate-300"
                }`}
            >
                Submit Review
            </button>
        </form>
    );
}
