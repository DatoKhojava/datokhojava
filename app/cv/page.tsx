import { loadCV } from "lib/mdx";

export default async function CVPage() {
    const { Content } = await loadCV();

    return (
        <div className="prose">
            {Content}

            <a
                href="/cv/pdf"
                className="inline-block mt-8 py-2 bg-black text-white rounded"
            >
                Download as PDF
            </a>
        </div>
    );
}
