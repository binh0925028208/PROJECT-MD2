import "./adminProductPage.css";

const AdminProductPage = () => {
  return (
    <div>
      <section className="admin_body">
        <div className="side_menu" id="admin_side_menu" />
        <div className="admin_main">
          <h2 id="function_title">Products List :</h2>
          <div className="admin_products" id="admin_display_product">
            <table className="database">
              <thead className="table_head">
                <tr>
                  <th className="table_id">
                    <strong>ID</strong>
                  </th>
                  <th className="table_img">
                    <strong>IMAGE</strong>
                  </th>
                  <th className="table_name">
                    <strong>PRODUCT</strong>
                  </th>
                  <th className="table_stock">
                    <strong>STOCK</strong>
                  </th>
                  <th className="table_payment">
                    <strong>PRICE</strong>
                  </th>
                  <th className="table_edit">
                    <strong>EDITING</strong>
                  </th>
                </tr>
              </thead>
              <tbody className="table_body" />
            </table>
            <div id="paginationProduct" className="pagination" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminProductPage;
