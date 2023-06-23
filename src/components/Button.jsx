import React from "react";

interface Props {
    children: string
    onClick: () => void;
}

const Button = ({children}: Props) => {
    return (
        <button className="button" onClick={onClick}>{children}</button>
    )
}

export default Button