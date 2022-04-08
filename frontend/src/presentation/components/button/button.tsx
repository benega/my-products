import React from 'react'
import './button.css';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<Props> = ({ children, ...props }: Props) => {
    return (
        <div className="Button">
            <button {...props}>{children}</button>
        </div>
    )
}

export default Button
