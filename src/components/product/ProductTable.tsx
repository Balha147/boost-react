import { ProductCategoryRow } from "./ProductCategoryRow";
import { Product, ProductRow } from "./ProductRow";

interface ProductTableProps {
    products: Product[];
}

export function ProductTable({products}: ProductTableProps) {
    const rows =  [];
    let lastCategory = null;

    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={ product.category } />)
            
        }

        lastCategory = product.category;
        rows.push(<ProductRow key={product.name} product={product} />)
        
    }
    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}