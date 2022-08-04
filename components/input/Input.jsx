import style from "./input.module.scss";

function Input({ children, type, size, className, ...props }) {
    const InputTag = type === "textarea" ? "textarea" : "input";

    return (
        <InputTag
            type={type !== "textarea" ? type : undefined}
            className={`${style.input} ${size ? style[`input-${size}`] : ""} ${
                className ?? ""
            }`}
            placeholder={children}
            {...props}
        />
    );
}

export default Input;
