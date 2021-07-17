import {Request, Response} from 'express';
import {CreateUserService} from '../UserCases/CreateUserService';
import {UserRequest} from "../dto/UserRequest";


class CreateUserController{

  async handle(request: Request, response: Response){
    const {name,admin,email,password} = request.body as UserRequest;

    
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,admin,email,password
    });

    return response.json(user);
  }
}

export {CreateUserController}