import React from "react";
import Meta from "../components/Meta";

const AdminPanelScreen = () => {
  return (
    <>
      <Meta title={"Admin"} />

      <h1 className="admin-header" style={{ marginTop: "30px" }}>
        Admin Panel
      </h1>
      <div className="admin-items-container">
        <div className="admin-item-card">
          <div className="admin-item">
            <div className="icon-container">
              <i className="fas fa-box-open"></i>
            </div>
            <div className="admin-function">Manage Recipes</div>
          </div>
        </div>

        <div className="admin-item-card">
          <div className="admin-item">
            <div className="icon-container">
              <i className="fas fa-user"></i>
            </div>
            <div className="admin-function">Manage User</div>
          </div>
        </div>

        <div className="admin-item-card">
          <div className="admin-item">
            <div className="icon-container">
              <i className="fas fa-user"></i>
            </div>
            <div className="admin-function">Manage User</div>
          </div>
        </div>

        <div className="admin-item-card">
          <div className="admin-item">
            <div className="icon-container">
              <i className="fas fa-user"></i>
            </div>
            <div className="admin-function">Manage User</div>
          </div>
        </div>

        <div className="admin-item-card">
          <div className="admin-item">
            <div className="icon-container">
              <i className="fas fa-user"></i>
            </div>
            <div className="admin-function">Manage User</div>
          </div>
        </div>

        <div className="admin-item-card">
          <div className="admin-item">
            <div className="icon-container">
              <i className="fas fa-user"></i>
            </div>
            <div className="admin-function">Manage User</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanelScreen;
