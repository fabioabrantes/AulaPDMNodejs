import {getCustomRepository} from "typeorm";

import {TagRepository} from '../Repositories/TagRepository';
import {Tag} from "../entities/Tag";
import { AppErros } from "../errors/AppErros";

export type TagRequest = {
  name:string;
}
class CreateTagsService{
  
  async execute({name}:TagRequest): Promise<Tag>{

    const tagRepository  = getCustomRepository(TagRepository);

    if(!name){
      throw new AppErros('name invalid!', 400);
    }

    // verifica se existe uma tag com mesmo nome
    const tagAlreadyExists = await tagRepository.findByName(name);
    if(tagAlreadyExists){
      throw new AppErros('Tag already exists!',400);
    }
    
    
    const tag= await tagRepository.createTag({ name});
    return tag;

  }
}
export {CreateTagsService}