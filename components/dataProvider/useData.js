import { useContext } from "react";
import { context } from "./DataProvider";

function useData() {
    const { items, setItems } = useContext(context);

    const addItem = (e) => {
        e.preventDefault();

        let maxId = -1;
        if (items.length > 0) {
            maxId = Math.max(...items.map((item) => item.id));
        }

        setItems([
            ...items,
            {
                id: `${maxId + 1}`.padStart(2, "0"),
                description: "",
                quantity: 1,
                price: "",
            },
        ]);
    };

    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);

        setItems(newItems);
    };

    const updateItem = (index, value) => {
        const newItems = [...items];
        newItems.splice(index, 1, value);

        setItems(newItems);
    };

    return {
        items,
        addItem,
        removeItem,
        updateItem,
    };
}

export default useData;
