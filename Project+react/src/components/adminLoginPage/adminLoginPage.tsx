import "./adminLoginPage.css";

const AdminLoginPage = () => {
  return (
    <div>
      <div className="admin_body">
        <div className="display_login_box">
          <h2>ADMIN LOGIN</h2>
          <div className="login_box">
            <div className="id_box">
              <i className="fa-regular fa-user fa-beat-fade" />
              <input type="email" id="admin_email" placeholder="Your email" />
            </div>
            <div className="id_box">
              <i className="fa-regular fa-eye fa-beat-fade" />
              <input
                type="password"
                id="admin_pass"
                placeholder="Your password"
              />
            </div>
            <button
              // onclick="loginSubmit()"
              className="sign_btn"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
