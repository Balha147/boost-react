interface CheckBoxProps {
    checked: boolean;
    label: string;
    id: string;
    onChange: (s: boolean) => void;
}

export function Checkbox({ checked, label, onChange, id }: CheckBoxProps) {
    return (
        <div className="form-check">
            <input 
                type="checkbox"
                id={id}
                className="form-check-input"
                checked={checked}
                onChange={(event) => onChange(event.target.checked)} 
            />
            <label htmlFor={id} className="form-check-label">{label}</label>
        </div>
    );
}