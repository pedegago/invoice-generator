import useData from "../dataProvider/useData";
import Input from "../input/Input";
import style from "./items.module.scss";

function Items({ className }) {
    const { items, addItem, removeItem, updateItem } = useData();

    const handleChange = (e, i) => {
        const item = items[i];

        item[e.target.name] = e.target.value;

        updateItem(i, item);
    };

    return (
        <div className={`${style.items} ${className ?? ""}`}>
            <table>
                <thead>
                    <tr>
                        <th width="20%">
                            <Input defaultValue="ID" />
                        </th>
                        <th width="40%">
                            <Input defaultValue="Description" />
                        </th>
                        <th width="20%">
                            <Input defaultValue="Quantity" />
                        </th>
                        <th width="20%">
                            <Input defaultValue="Price" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => (
                        <tr key={i}>
                            <td width="20%">
                                <Input>{item.id}</Input>
                            </td>
                            <td width="40%">
                                <Input>Item description</Input>
                            </td>
                            <td width="20%">
                                <Input
                                    type="number"
                                    name="quantity"
                                    value={item.quantity}
                                    onChange={(e) => handleChange(e, i)}
                                >
                                    0
                                </Input>
                            </td>
                            <td width="20%">
                                <Input
                                    name="price"
                                    value={item.price}
                                    onChange={(e) => handleChange(e, i)}
                                >
                                    $0.00
                                </Input>
                                <button
                                    type="button"
                                    aria-label="remove"
                                    title="remove"
                                    onClick={() => removeItem(i)}
                                >
                                    <img
                                        src="https://cdn2.hubspot.net/hub/53/file-1134457772.svg"
                                        alt=""
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className={style.add} onClick={addItem}>
                <span>+ Add More</span>
            </button>
        </div>
    );
}

export default Items;
