import { useForm } from "../../hooks/useForm";

const FormComponent = () => {
  const { values, handlerChange } = useForm({
    email: "",
    nombre: "",
    edad: 0,
  });

  const { edad, email, nombre } = values;

  const handleSubmitForm = () => {};
  const handleResetForm = () => {};

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
        <input
          name="email"
          value={email}
          onChange={handlerChange}
          type="email"
          placeholder="example@example.com"
        />
        <input
          name="nombre"
          value={nombre}
          onChange={handlerChange}
          type="text"
          placeholder="Nombre"
        />
        <input
          name="edad"
          value={edad}
          onChange={handlerChange}
          type="number"
          placeholder="Edad"
        />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Resetear</button>
      </div>
    </div>
  );
};

export default FormComponent;
