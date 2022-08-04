import Input from "../input/Input";
import useData from "../dataProvider/useData";
import style from "./summary.module.scss";
import { useState } from "react";

function Summary({ className }) {
    const [state, setState] = useState({ tax: "", discount: "" });
    const { items } = useData();

    const getSubtotal = () => {
        return items.reduce((prev, curr) => {
            return prev + (curr.price * curr.quantity || 0);
        }, 0);
    };

    const handleChange = (e, i) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={`${style.summary} ${className ?? ""}`}>
            <div className={style.notes}>
                <label>Notes:</label>
                <Input
                    type="textarea"
                    rows={2}
                    placeholder="Any additional comments"
                />
            </div>
            <table className={style.table}>
                <tbody>
                    <tr>
                        <td>
                            <Input defaultValue="Subtotal:" />
                        </td>
                        <td>{getSubtotal().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>
                            <Input defaultValue="Tax:" />
                        </td>
                        <td>
                            ${" "}
                            <Input
                                name="tax"
                                value={state.tax}
                                onChange={handleChange}
                            >
                                0
                            </Input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Input defaultValue="Discount:" />
                        </td>
                        <td>
                            ${" "}
                            <Input
                                name="discount"
                                value={state.discount}
                                onChange={handleChange}
                            >
                                0
                            </Input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} />
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>
                            {getSubtotal() +
                                (state.tax * 1 || 0) -
                                (state.discount * 1 || 0)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Summary;
