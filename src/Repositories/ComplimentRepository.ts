import {EntityRepository, Repository} from "typeorm";
import {Compliment} from '../entities/Compliment';

interface ComplimentRequest {
  message: string;
}

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment> {

    
  async createCompliment(complimentParams:ComplimentRequest): Promise<Compliment>{
    const compliment =this.create(complimentParams);
    await this.save(compliment);
    return compliment;
  }

}
export {ComplimentRepository}