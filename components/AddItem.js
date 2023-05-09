"use client";
import itemsAPI from "@/lib/itemsAPI";

export default function AddItem() {
    const add = async () => {
        await itemsAPI.createItem({ title: "New Title" });
    };
    return (
        <div>
            <button className="bg-lime-400 mt-4" onClick={add}>
                Add New Title
            </button>
        </div>
    );
}
