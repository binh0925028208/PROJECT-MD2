import UserRepository from "../repositories/user.repositories";
import { IUser } from "../types/interface";

class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  public async register(formRequest: IUser): Promise<any> {
    try {
      return await this.userRepository.register(formRequest);
    } catch (error) {
      throw error;
    }
  }
  public async login(formRequest: any): Promise<any> {
    try {
      return await this.userRepository.login(formRequest);
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;
