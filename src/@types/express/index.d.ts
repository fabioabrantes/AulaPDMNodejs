declare namespace Express { /* padrão para sobescrever uma biblioteca */
  export interface Request { /* vai pegar tudo que tem de tipagem de express mais o que tem aqui */
    user_id: string;
    email:string;
  }
}