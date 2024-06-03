import { useState, Dispatch, SetStateAction } from 'react';

type Errors = {
  [key: string]: string;
};

const useErrorMessages = (fields: string[]): [Errors, Dispatch<SetStateAction<Errors>>, Errors] => {
  const initialErrors: Errors = {};

  // Inicializa as mensagens de erro para cada campo com um valor vazio
  fields.forEach((field) => {
    initialErrors[field] = '';
  });

  const [errors, setErrors] = useState<Errors>(initialErrors);

  return [errors, setErrors, initialErrors];
};

export default useErrorMessages;
