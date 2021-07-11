import {Request, Response} from 'express';
import {CreateUserService, UserRequest} from '../UserCases/CreateUserService';


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