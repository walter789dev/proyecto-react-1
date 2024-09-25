import { ChangeEvent, useState } from "react";

interface FormValues {
   [key: string]: string | number
}

export const useForm = <T extends FormValues>(initialValues: T) => {
   const [values, setValues] = useState<T>(initialValues);

   const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setValues({ ...values, [name]: value });
   };

   const resetForm = () => {
      setValues(initialValues)
   }

   return {
      values,
      handlerChange,
      resetForm
   }
}
