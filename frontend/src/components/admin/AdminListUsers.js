import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../JS/actions/userActions";
import "./adminListUsers.css";
// import edit from "./edit.svg";
import close from "./close.svg";

const AdminListUsers = () => {
  const users = useSelector((state) => state.userReducer.user);
  console.log(users);
  const dispatch = useDispatch();
  // dispatch(deleteUser(users._id));

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // const handleDelete = () => {
  //   dispatch(deleteUser(id));
  // };

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>
                  User <b>Management</b>
                </h2>
              </div>
              <div className="col-sm-7">
                <a href="#" className="btn btn-secondary">
                  <i className="material-icons"></i> <span>Add New User</span>
                </a>
                <a href="#" className="btn btn-secondary">
                  <i className="material-icons"></i>{" "}
                  <span>Export to Excel</span>
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date Created</th>
                <th>Email</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((el) => (
                <tr>
                  <td>{}</td>
                  <td>
                    <a href="#">
                      <img
                        src="/examples/images/avatar/1.jpg"
                        className="avatar"
                        alt="Avatar"
                      />

                      {el.firstName}
                      {el.lastName}
                    </a>
                  </td>
                  <td>04/10/2013</td>
                  <td>{el.email}</td>
                  <td>
                    <span className="status text-success">•</span> Active
                  </td>
                  <td className="action">
                    <a
                      href="#"
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      onClick={() => dispatch(deleteUser(el._id))}
                    >
                      <img src={close} width="30px" />
                      {/* <i className="material-icons"></i> */}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="clearfix">
            {/* <div className="hint-text">
              Showing <b>5</b> out of <b>25</b> entries
            </div> */}
            {/* <ul className="pagination">
              <li className="page-item disabled">
                <a href="#">Previous</a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  4
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  5
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  Next
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminListUsers;
