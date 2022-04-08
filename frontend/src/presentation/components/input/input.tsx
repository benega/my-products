import React from 'react'
import './input.css';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
    return (
        <div className="Input">
            <input {...props} />
        </div>
    )
}

export default Input
