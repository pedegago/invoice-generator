import style from "./container.module.scss";

function Container({ children, as, className, ...props }) {
    const Element = as ?? "div";

    return (
        <Element className={`${style.container} ${className ?? ""}`} {...props}>
            {children}
        </Element>
    );
}

export default Container;
