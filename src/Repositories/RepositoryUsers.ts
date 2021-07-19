import {EntityRepository, Repository} from "typeorm";
import {User} from '../entities/User';
import {UserRequest} from "../dto/UserRequest";

@EntityRepository(User)
class RepositoryUsers extends Repository<User> {

  async findByEmail(email: string): Promise<User | undefined> {
      return await this.findOne({ email });
  } 
  
  async findUserById(user_id: string): Promise<User | undefined> {
    return await this.findOne(user_id);
} 

  async createUser(userParam:UserRequest): Promise<User>{
    const user =this.create(userParam);
    await this.save(user);
    return user;
  }

}
export {RepositoryUsers}