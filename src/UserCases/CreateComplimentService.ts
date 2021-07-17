import {getCustomRepository} from "typeorm";

import {ComplimentRepository} from '../Repositories/ComplimentRepository';
import {RepositoryUsers} from '../Repositories/RepositoryUsers';

import {Compliment} from "../entities/Compliment";
import { AppErros } from "../errors/AppErros";
import {ComplimentRequest} from "../dto/ComplimentRequest";

class CreateComplimentService{
  
  async execute({message,user_sender, user_receiver,tag_id}:ComplimentRequest): Promise<Compliment>{

    const complimentRepository  = getCustomRepository(ComplimentRepository);
    const repositoryUsers  = getCustomRepository(RepositoryUsers);
    //Não é permitido um usuário cadastrar um elogio para si
    if(user_sender ===user_receiver ){
      throw new AppErros("Error: user_receiver invalid", 401);
    }
    //Não é permitido cadastrar elogios para usuários inválidos
    const userReceiverExists = repositoryUsers.findUserById(user_receiver);
    
    if(!userReceiverExists){
      throw new AppErros("Error: user_receiver is not exists", 401);
    }

    const compliment = complimentRepository.create({
      message,
      user_sender, 
      user_receiver,
      tag_id
    });
    return compliment
  }
}
export {CreateComplimentService}