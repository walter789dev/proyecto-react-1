import { FC } from "react";
import { Card } from "react-bootstrap";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

interface PropsListProduct {
  arrItems: ItemProduct[];
}

const ListProduct: FC<PropsListProduct> = ({ arrItems }) => {
  return (
    <div className="p-1 m-3 border rounded d-grid gap-2" style={{gridTemplateColumns: "repeat(2, 1fr)", justifyContent: "center", alignItems: "center"}}>
      {arrItems.map((el, id) => (
        <Card key={id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={el.imagen} />
          <Card.Body>
            <Card.Title>{el.nombre}</Card.Title>
            <Card.Text>
              ${el.precio}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListProduct;
