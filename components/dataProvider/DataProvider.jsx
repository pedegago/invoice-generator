import { createContext, useState } from "react";

const InitialState = [
    {
        id: "00",
        description: "",
        quantity: 1,
        price: "",
    },
];

export const context = createContext();

function DataProvider({ children }) {
    const [items, setItems] = useState(InitialState);

    return (
        <context.Provider
            value={{
                items,
                setItems,
            }}
        >
            {children}
        </context.Provider>
    );
}

export default DataProvider;
