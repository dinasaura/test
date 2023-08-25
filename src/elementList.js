import { useState } from "react";

export function ElementList({title, checked}){
    const [isChecked, setIsChecked] = useState(checked);

    const isCheckedCheckbox = () => {
        setIsChecked(!isChecked)
    };

    return (
        <div>
            <li style={{textDecoration: isChecked ? 'line-through' : 'none' }}>{title}</li>
            <input type="checkbox" id="checkbox"/>

        </div>
    )
}