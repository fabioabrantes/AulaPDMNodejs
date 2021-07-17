import {Request, Response} from 'express';
import {CreateTagsService} from '../UserCases/CreateTagsService';
import {TagRequest} from "../dto/TagRequest";

class CreateTagController{

  async handle(request: Request, response: Response):Promise<Response>{
    const {name} = request.body as TagRequest;

    
    const createTagService = new CreateTagsService();
    const tag = await createTagService.execute({name});

    return response.status(201).json(tag);
  }
}

export {CreateTagController}