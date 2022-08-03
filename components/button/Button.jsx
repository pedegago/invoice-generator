import style from "./button.module.scss";

function Button({ children, className, ...props }) {
    return (
        <button
            type="button"
            className={`${style.Button} ${className ?? ""}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
