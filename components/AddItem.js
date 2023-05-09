"use client";
import itemsAPI from "@/lib/itemsAPI";

export default function AddItem() {
    const add = async () => {
        const res = await itemsAPI.createItem({ title: "New Title" });
        if (!res.ok) {
            throw new Error("Failed to add data");
        }
    };
    return (
        <div>
            <button className="bg-lime-400 mt-4" onClick={add}>
                Add New Title
            </button>
        </div>
    );
}
