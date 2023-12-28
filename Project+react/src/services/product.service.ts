import { ProductRepository } from "../repositories/product.repositories";

class ProductService {
  productRepository: any;
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getAll() {
    const data = await this.productRepository.getProduct();
    return data;
  }
  async getProductsCatetory() {
    const data = await this.productRepository.getProduct();
    // data.filter((item:any)=>item.catetory==item)
    return data;
  }

  async getDetail(id: number) {}
  async createProduct(formData: any) {}
}

export default ProductService;
