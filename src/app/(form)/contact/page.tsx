import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "お問い合わせ",
};

export default function ContactPage() {
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScnnbnSoIpNizG1gU_pDVuDq9GifE1EeevYd3-n4Uy1fGAQiw/viewform";

    redirect(formURL);
}
