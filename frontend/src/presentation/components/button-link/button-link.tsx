import React from 'react'
import './button-link.css';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonLink: React.FC<Props> = ({ children, ...props }: Props) => {
    return (
        <div className="ButtonLink">
            <button type="button" {...props}>{children}</button>
        </div>
    )
}

export default ButtonLink
