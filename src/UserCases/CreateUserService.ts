import {getCustomRepository} from "typeorm";
import {RepositoryUsers} from '../Repositories/RepositoryUsers';

export type UserRequest = {
  name:string;
  email:string;
  password:string;
  admin:boolean;
}
class CreateUserService{
  
  async execute({name, email, password,admin}:UserRequest){

    const usersRepository = getCustomRepository(RepositoryUsers);

    if(!email){
      throw new Error('Email incorreto!');
    }

    const userUserExists = await usersRepository.findByEmail(email);
    if(userUserExists){
      throw new Error('User already exists!');
    }
    const user= await usersRepository.createUser(name, email, password,admin);

    return user;

  }
}
export {CreateUserService}