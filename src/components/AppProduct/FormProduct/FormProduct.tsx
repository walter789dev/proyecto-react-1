import { Button, Form } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { FC } from "react";

interface PropsForm {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  handlerAddProduct: Function;
}

const FormProduct: FC<PropsForm> = ({ handlerAddProduct }) => {
  const { values, handlerChange, resetForm } = useForm({
    nombre: "",
    imagen: "",
    precio: 0,
  });

  const handleSubmitForm = () => {
    handlerAddProduct(values);
    resetForm();
  };

  return (
    <Form className="p-4 border rounded m-3">
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Ingrese nombre producto"
          value={values.nombre}
          onChange={handlerChange}
        />
      </Form.Group>
      <Form.Group controlId="formImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          name="imagen"
          placeholder="Ingrese imagen producto"
          value={values.imagen}
          onChange={handlerChange}
        />
      </Form.Group>
      <Form.Group controlId="formPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          placeholder="Ingrese imagen producto"
          value={values.precio}
          onChange={handlerChange}
        />
      </Form.Group>
      <div className="d-flex justify-content-center mt-4">
        <Button onClick={handleSubmitForm} variant="primary">
          Resetear
        </Button>
      </div>
    </Form>
  );
};

export default FormProduct;
