import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page', 'Emmanuel', 'Info']
};

export default function AboutPage() {
    return (
        <h1 className="text-7xl">About</h1>
    )
}