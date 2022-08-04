import { useState } from "react";
import style from "./options.module.scss";

function Options({ className }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${style.options} ${className ?? ""}`}>
            <button
                type="button"
                aria-label="toggle options"
                title="Toggle options"
                className={`${style.toggle} ${
                    isOpen ? style["toggle-open"] : ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <img
                    src="https://cdn2.hubspot.net/hubfs/53/invoice%20generator/toolset.svg"
                    alt=""
                />
            </button>
            {[
                {
                    label: "clear all data",
                    type: "reset",
                    icon: "https://cdn2.hubspot.net/hubfs/53/invoice%20generator/clear.svg",
                },
                {
                    label: "color picker",
                    type: "button",
                    icon: "https://cdn2.hubspot.net/hubfs/53/invoice%20generator/paintbrush.svg",
                },
            ].map((option) => (
                <button
                    key={option.label}
                    type={option.type}
                    aria-label={option.label}
                    title={option.label}
                    className={`${style.option} ${
                        isOpen ? style["option-open"] : ""
                    }`}
                >
                    <img src={option.icon} alt="" />
                </button>
            ))}
        </div>
    );
}

export default Options;
