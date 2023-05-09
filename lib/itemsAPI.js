const getItems = async () => {
    const res = await fetch("http://localhost:3000/api/items", { next: { revalidate: 5 } });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

const createItem = (data) => {
    return fetch("http://localhost:3000/api/item", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};

const itemsAPI = {
    getItems,
    createItem,
};

export default itemsAPI;
