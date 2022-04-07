import React from 'react';
import './input-search.css';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputSearch: React.FC<Props> = (props) => {
    return (
        <div className="InputSearch">
            <input {...props} type={'text'} placeholder="Type the name of the product" />
        </div>
    );
}

export default InputSearch;