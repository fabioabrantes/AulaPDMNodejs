import {EntityRepository, Repository} from "typeorm";
import {User} from '../entities/User';

@EntityRepository(User)
class RepositoryUsers extends Repository<User> {

  async findByEmail(email: string) {
      return await this.findOne({ email });
  } 
  async createUser(name:string, email:string,password:string,admin:boolean){
    const user =this.create({
      name, email, password, admin
    });
    await this.save(user);
    return user;
  }

}
export {RepositoryUsers}