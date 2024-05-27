interface ProductCategoryRowProps {
    name: string;
}

export function ProductCategoryRow({name}: ProductCategoryRowProps) {
    return <tr>
        <td colSpan={2}>
            <strong>{name}</strong>
        </td>
    </tr>
}