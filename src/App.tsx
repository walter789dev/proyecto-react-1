import AppProduct from "./components/AppProduct/AppProduct";
import CompUseEffect from "./components/componentUseEffect/CompUseEffect";
import { Counter } from "./components/counter/Counter";
import FormComponent from "./components/form-component/FormComponent";
import { MiPrimerComponente } from "./components/MiPrimerComponente";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
      <MiPrimerComponente
        text={"Texto desde propiedades"}
        color="red"
        fontSize={5}
      />
      <Counter />
      <CompUseEffect />
      <FormComponent />
      <AppProduct />
    </div>
  );
};

export default App;
