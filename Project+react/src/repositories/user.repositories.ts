import ApiService from "../api/apiService";

class UserRepository {
  private apiService: ApiService;
  constructor() {
    this.apiService = new ApiService();
  }
  async login(formRequest: any): Promise<any> {
    const result = await this.apiService.Post("login", formRequest);
    return result;
  }
  async register(formRequest: any): Promise<any> {
    const result = await this.apiService.Post("register", formRequest);
    return result;
  }
}

export default UserRepository;
