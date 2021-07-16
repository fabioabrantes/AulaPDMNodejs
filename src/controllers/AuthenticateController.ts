import {Request, Response} from 'express';
import {AuthenticationService,IDataAuthenticate} from '../UserCases/AuthenticationService';


class AuthenticateController{

  async handle(request: Request, response: Response){
    const {email,password} = request.body as IDataAuthenticate;

    
    const authenticateService = new AuthenticationService();
    const token = await authenticateService.execute({
      email,password
    });
    console.log(token);

    return response.status(201).json(token);
  }
}

export {AuthenticateController}