import NextLink from "next/link";
import style from "./link.module.scss";

function Link({ children, href, className, ...props }) {
    const cls = `${style.link} ${className ?? ""}`;
    const client = href.startsWith("/");

    if (client) {
        return (
            <NextLink href={href}>
                <a className={cls} {...props}>
                    {children}
                </a>
            </NextLink>
        );
    }

    return (
        <a className={cls} href={href} {...props}>
            {children}
        </a>
    );
}

export default Link;
