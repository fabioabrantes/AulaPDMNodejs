import {EntityRepository, Repository} from "typeorm";
import {Tag} from '../entities/Tag';

interface TagRequest{
  name:string;
}

@EntityRepository(Tag)
class TagRepository extends Repository<Tag> {

  async findByName(name: string): Promise<Tag | undefined> {
      return await this.findOne({ name });
  } 
  
  async createTag(tagParams:TagRequest): Promise<Tag>{
    const tag =this.create(tagParams);
    await this.save(tag);
    return tag;
  }

}
export {TagRepository}