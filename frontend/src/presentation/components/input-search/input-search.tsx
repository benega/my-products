import React from 'react';
import './input-search.css';

type Props = {
    onChange: (value: string) => void;
}

const InputSearch: React.FC<Props> = () => {
    return (
        <div className="InputSearch">
            <input type={'text'} placeholder="Type the name of the product"/>
        </div>
    );
}

export default InputSearch;