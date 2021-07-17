import {Request, Response} from 'express';
import {CreateComplimentService, ComplimentRequest} from '../UserCases/CreateComplimentService';


class CreateComplimentController{

  async handle(request: Request, response: Response):Promise<Response>{
    const {message,user_receiver,tag_id} = request.body as ComplimentRequest;
    const user_sender = request.user_id;
    const email = request.email;
    
    const createComplimentService = new CreateComplimentService();
    const compliment = await createComplimentService.execute({
      message,
      user_receiver,
      tag_id, 
      user_sender
    });

    return response.status(201).json(compliment);
  }
}

export {CreateComplimentController}