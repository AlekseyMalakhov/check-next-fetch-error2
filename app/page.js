import itemsAPI from "@/lib/itemsAPI";
import Link from "next/link";

export default async function Home() {
    const items = await itemsAPI.getItems();
    return (
        <main className="m-4">
            {items.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
            <Link href="/add-item">
                <button className="bg-lime-400 mt-4">Add item</button>
            </Link>
        </main>
    );
}
