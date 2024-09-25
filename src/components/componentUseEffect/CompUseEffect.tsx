import { useEffect, useState } from "react";

const CompUseEffect = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
     console.log("Componente Montado");
     return () => {
        console.log("Componente Desmontado")
     }
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <p>{state ? "Es True" : "Es False"}</p>
      <button onClick={() => setState(!state)}>Cambiar State</button>
    </div>
  );
};

export default CompUseEffect;
