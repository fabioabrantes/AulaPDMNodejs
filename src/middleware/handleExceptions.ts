import { Request,Response, NextFunction } from 'express';
import {AppErros} from '../errors/AppErros';

export function exceptionsHandle(
  err:Error, 
  req:Request, 
  res:Response, 
  next:NextFunction){

    if(err instanceof AppErros){
      return res.status(err.statusCode).json({error: err.message});
    }

    return res.status(500).json({
      status:"Error",
      message: "Error server internal"});
  }