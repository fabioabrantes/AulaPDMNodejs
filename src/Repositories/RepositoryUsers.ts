import {EntityRepository, Repository} from "typeorm";
import {User} from '../entities/User';

interface UserRequest{
  name:string;
  email:string;
  password:string;
  admin:boolean;
}

@EntityRepository(User)
class RepositoryUsers extends Repository<User> {

  async findByEmail(email: string): Promise<User | undefined> {
      return await this.findOne({ email });
  } 
  async createUser(userParam:UserRequest): Promise<User>{
    const user =this.create(userParam);
    await this.save(user);
    return user;
  }

}
export {RepositoryUsers}