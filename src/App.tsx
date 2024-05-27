import "bootstrap/dist/css/bootstrap.min.css";
import { Product } from './components/product/ProductRow';
import { AppProvider, useAppContext } from './components/shared/Context';
import { SearchBar } from './components/forms/SearchBox';
import { ProductTable } from './components/product/ProductTable';

const PRODUCTS: Product[] = [
  { category: "Fruits", price: 1, stocked: true, name: "Apple" },
  { category: "Fruits", price: 1, stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: 2, stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: 2, stocked: true, name: "Spinach" },
  { category: "Vegetables", price: 4, stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: 1, stocked: true, name: "Peas" },
];

function App() {
  const { showStockedOnly, search, price } = useAppContext();

  const filterProducts = PRODUCTS.filter((product: Product) => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }

    if (search && !product.name.includes(search)) {
      return false;
    }

    if (price && product.price > price) {
      return false;
    }
    return true;
  });

  return (
    <div className="container my-5">
      <SearchBar />
      <ProductTable products={filterProducts} />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
