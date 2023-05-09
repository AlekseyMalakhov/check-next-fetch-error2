"use client";
import itemsAPI from "@/lib/itemsAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItem() {
    const router = useRouter();
    const [title, setTitle] = useState("");

    const send = async () => {
        const response = await itemsAPI.createItem({ title });
        if (response.ok) {
            router.push("/");
        }
    };

    return (
        <div className="m-4">
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="bg-lime-100" />
            <button className="bg-lime-400 ml-4" onClick={send}>
                Add item
            </button>
        </div>
    );
}
