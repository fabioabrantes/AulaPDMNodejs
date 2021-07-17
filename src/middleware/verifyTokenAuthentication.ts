import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken";

interface Payload{
  sub:string;
  iat:number;
  exp: number;
  email:string;
}

export function verifyTokenAuthentication(
  request: Request,
  response:Response, 
  next:NextFunction
  ){
    const token = request.headers.authorization;
    //console.log(token);

    if(!token){
      return response.status(401).json({message:"token is missing!"})
    }
    const tokenCripto = token.split(" "); // Bearerv 
    // validar se é o token gerado
    try {
      const {sub, email} = verify(tokenCripto[1], process.env.TOKEN_KEY) as Payload;
      //console.log(payload);
      request.user_id = sub;
      request.email = email;
      return next();
    } catch (error) {
      return response.status(401).json({message:"token is not valid"})
    }
    
}