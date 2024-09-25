import { useState } from "react";
import FormProduct from "./FormProduct/FormProduct";
import Header from "./Header/Header";
import ListProduct from "./ListProduct/ListProduct";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);

  const handlerAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem]);
  };

  return (
    <div>
      <Header />
      <h2 className="text-center">Formulario</h2>
      <FormProduct handlerAddProduct={handlerAddProduct} />
      <h2 className="text-center">Productos</h2>
      {products.length > 0 ? (
        <ListProduct arrItems={products} />
      ) : (
        <h3 className="text-center">No hay Productos</h3>
      )}
    </div>
  );
};

export default AppProduct;
