import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UsersList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Divya Srivastava", role: "Admin", email: "divya@gmail.com" },
    { id: 2, name: "Amit Kumar", role: "Editor", email: "amit@gmail.com" },
    { id: 3, name: "Riya Sharma", role: "Viewer", email: "riya@gmail.com" },
    { id: 4, name: "Sanjay Verma", role: "Moderator", email: "sanjay@gmail.com" },
    { id: 5, name: "Ananya Gupta", role: "Editor", email: "ananya@gmail.com" },
    { id: 6, name: "Rohit Mehta", role: "Viewer", email: "rohit@gmail.com" },
    { id: 7, name: "Sneha Patel", role: "Admin", email: "sneha@gmail.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", role: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Add user
  const handleAddUser = () => {
    if (newUser.name && newUser.role && newUser.email) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", role: "", email: "" });
    } else {
      alert("Please fill all fields before adding.");
    }
  };

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Start editing
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // Save changes
  const handleSaveEdit = () => {
    setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
    setEditingUser(null);
  };

  // Filter users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4 text-primary">User Management</h2>

      {/* Add User */}
      <div className="card shadow-sm p-4 mb-5 border-0">
        <h4 className="fw-semibold mb-3 text-center">Add New User</h4>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Role"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button onClick={handleAddUser} className="btn btn-success px-4">
            Add User
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-semibold text-secondary">All Registered Users</h5>
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search by name or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: "300px" }}
        />
      </div>

      {/* Users Table */}
      <div className="card shadow-sm p-4 border-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle text-center">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-muted py-3">
                    ❌ No matching users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingUser && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Edit User</h5>
                <button
                  className="btn-close"
                  onClick={() => setEditingUser(null)}
                ></button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  value={editingUser.name}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  value={editingUser.role}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, role: e.target.value })
                  }
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditingUser(null)}
                >
                  Cancel
                </button>
                <button className="btn btn-success" onClick={handleSaveEdit}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;