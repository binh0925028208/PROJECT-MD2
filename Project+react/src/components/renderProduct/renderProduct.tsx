import React, { useState, useEffect } from "react";
import "./renderProduct.css";
import ProductService from "../../services/product.service";
interface ProductProps {
  selectedScale: string;
}

const ProductList: React.FC<ProductProps> = ({ selectedScale }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [getAllProduct, setAllProduct] = useState([]);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const productService = new ProductService();
  useEffect(() => {
    const getProduct = async () => {
      const result = await productService.getAll();
      if (selectedScale != "") {
        const filteredProducts = result.data.filter(
          (item: any) => item.scale === selectedScale
        );
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = filteredProducts.slice(
          indexOfFirstProduct,
          indexOfLastProduct
        );
        setAllProduct(filteredProducts);
        setProducts(currentProducts);
      } else {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProducts = result.data.slice(
          indexOfFirstProduct,
          indexOfLastProduct
        );
        setAllProduct(result.data);
        setProducts(currentProducts);
      }
    };
    getProduct();
  }, [currentPage, selectedScale]);

  return (
    <div>
      <ul className="all_product_list">
        {products.map((product: any) => (
          <li key={product.id}>
            <div className="store_product">
              <div className="product_img">
                <img
                  src={product.img}
                  alt=""
                  //   onclick="searchIdProduct(1)"
                />
              </div>
              <h4
              //   onclick="searchIdProduct(1)"
              >
                {product.productName}
              </h4>
              <p>$ {product.price}</p>
              <button
                className="buyBtn"
                //   onclick="onAddToCart(1)"
              >
                ADD TO CART
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ul className="pagination">
        {Array.from(
          { length: Math.ceil(getAllProduct.length / productsPerPage) },
          (element, i) => (
            <li key={i + 1} onClick={() => paginate(i + 1)}>
              <button
                className={
                  currentPage === i + 1 ? "btn_active" : "btn_non_active"
                }
              >
                {i + 1}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ProductList;
