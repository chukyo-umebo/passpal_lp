import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "フィードバック",
};

export default function FeedbackPage() {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeu7t-Z3PgwvG0aKY4XCSz160FyjE03SNUyu7Qhq11F_2Z_Dg/viewform";

    redirect(formURL);
}
