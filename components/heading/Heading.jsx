import style from "./heading.module.scss";

function Heading({ children, level, className, ...props }) {
    const Tag = `h${level}`;

    return (
        <Tag className={style.heading} {...props}>
            {children}
        </Tag>
    );
}

export default Heading;
