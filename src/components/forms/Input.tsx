
interface InputProps {
    placeholder: string;
    value: string;
    onChange: (s: string) => void;
}

export function Input({ placeholder, value, onChange }: InputProps) {
    return (
        <div>
            <input 
                type="text"
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)} 
            />
        </div>
    );
}