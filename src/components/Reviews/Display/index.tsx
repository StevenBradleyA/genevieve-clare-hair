import { api } from "~/utils/api";
import type { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

export type ReviewWithUser = Review & { user: { name: string | null } };

export default function DisplayReviews() {
    const { data: reviews, isLoading } =
        api.review.getAll.useQuery();

    if (isLoading) return <div>Loading All Reviews...</div>;

    if (!reviews) return <div>Oops</div>;

    return (
        <div className="">
            {reviews.map((review: ReviewWithUser, i: number) => {
                return <ReviewCard key={i} review={review} />;
            })}
        </div>
    );
}
