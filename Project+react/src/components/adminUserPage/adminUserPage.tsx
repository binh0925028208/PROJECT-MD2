import "./adminUserPage.css";

const AdminUserPage = () => {
  return (
    <div>
      <section className="admin_body">
        <div className="side_menu" id="admin_side_menu" />
        <div className="admin_main">
          <h2 id="function_title">Users List :</h2>
          <div
            className="admin_users"
            id="admin_display_user"
            // onclick="onUserBoard()"
          >
            <table className="database">
              <thead className="table_head">
                <tr>
                  <th className="table_id">
                    <strong>STT</strong>
                  </th>
                  <th className="table_name">
                    <strong>NAME</strong>
                  </th>
                  <th className="table_role">
                    <strong>ROLE</strong>
                  </th>
                  <th className="table_status">
                    <strong>STATUS</strong>
                  </th>
                  <th className="table_edit">
                    <strong>EDITING</strong>
                  </th>
                </tr>
              </thead>
              <tbody className="table_body" />
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminUserPage;
