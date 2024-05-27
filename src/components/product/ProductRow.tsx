export interface Product  {
    name: string;
    price: number;
    category: string;
    stocked: boolean;
}

interface ProductRowProps {
    product: Product;
}

export function ProductRow({product}: ProductRowProps) {
    const style = product.stocked ? undefined : {color: 'red'}
    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}