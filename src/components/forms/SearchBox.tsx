import { useAppContext } from "../shared/Context";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Range } from "./Range";

export function SearchBar() {
    const { showStockedOnly, setShowStockedOnly, search, setSearch, price, setPrice } = useAppContext();

    return (
        <div className="mb-3">
            <Input 
                value={search} 
                placeholder="Rechercher..." 
                onChange={setSearch} 
            />
            <br />
            <Range 
                min={0} 
                max={10} 
                label="Prix"
                value={price}
                onChange={setPrice} 
            />
            <br />
            <Checkbox
                checked={showStockedOnly}
                id="strocked"
                onChange={setShowStockedOnly} 
                label="Product in stock" 
            />
        </div>
    );
}