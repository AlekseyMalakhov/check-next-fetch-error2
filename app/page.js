import AddItem from "@/components/AddItem";
import itemsAPI from "@/lib/itemsAPI";

export default async function Home() {
    const items = await itemsAPI.getItems();
    return (
        <main className="m-4">
            {items.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
            <AddItem />
        </main>
    );
}
