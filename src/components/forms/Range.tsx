interface RangeProps {
    min: number;
    max: number;
    label: string;
    value: number;
    onChange: (value: number) => void;
}

export function Range({ min, max, label, value, onChange }: RangeProps) {
    return (
        <>
            <label htmlFor="customRange1" className="form-label">{label}</label>
            <input 
                type="range" 
                className="form-range" 
                id="customRange1" 
                min={min} 
                max={max} 
                value={value}
                onChange={(event) => onChange(Number(event.target.value))} 
            />
        </>
    );
}