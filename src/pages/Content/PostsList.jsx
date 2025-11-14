import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContentManager = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Mastering React.js",
      author: "Dan Abramov",
      date: "2025-11-01",
      content:
        "An advanced guide to React hooks, component patterns, and performance optimization.",
    },
    {
      id: 2,
      title: "Tailwind Tips & Tricks",
      author: "Adam Wathan",
      date: "2025-11-04",
      content:
        "Enhance your Tailwind CSS workflow with utilities, dark mode setup, and responsive tricks.",
    },
    {
      id: 3,
      title: "Building Admin Panels",
      author: "Kent C. Dodds",
      date: "2025-11-08",
      content:
        "A step-by-step guide to creating a scalable admin dashboard using React and Bootstrap.",
    },
    {
      id: 4,
      title: "UI Design Best Practices",
      author: "Steve Schoger",
      date: "2025-11-10",
      content:
        "Master modern UI/UX design principles with color theory, alignment, and micro-interactions.",
    },
    {
      id: 5,
      title: "Understanding APIs",
      author: "Flavio Copes",
      date: "2025-11-06",
      content:
        "Learn how REST APIs and third-party integrations connect your frontend and backend efficiently.",
    },
    {
      id: 6,
      title: "Deploying Full Stack Projects",
      author: "Brad Traversy",
      date: "2025-11-02",
      content:
        "Simplify your deployment using GitHub Pages, Netlify, and Render for full-stack projects.",
    },
    {
      id: 7,
      title: "Version Control with Git",
      author: "Scott Chacon",
      date: "2025-10-29",
      content:
        "A developer’s complete guide to Git commands, branching strategies, and pull requests.",
    },
    {
      id: 8,
      title: "Frontend Optimization",
      author: "Addy Osmani",
      date: "2025-11-03",
      content:
        "Speed up your site with lazy loading, code splitting, caching, and Lighthouse performance tuning.",
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
  });
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedPost, setSelectedPost] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // ✅ Add or Update Post
  const handleAddOrUpdate = () => {
    if (!newPost.title || !newPost.author || !newPost.date || !newPost.content) {
      alert("Please fill all fields!");
      return;
    }

    if (editIndex !== null) {
      const updated = [...posts];
      updated[editIndex] = { ...updated[editIndex], ...newPost };
      setPosts(updated);
      setEditIndex(null);
    } else {
      setPosts([...posts, { id: posts.length + 1, ...newPost }]);
    }

    setNewPost({ title: "", author: "", date: "", content: "" });
  };

  // ✏ Edit Post
  const handleEdit = (index) => {
    setEditIndex(index);
    const post = posts[index];
    setNewPost({
      title: post.title,
      author: post.author,
      date: post.date,
      content: post.content,
    });
  };

  // 🗑 Delete Post
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // 🔍 Search + Sort
  const filteredPosts = posts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.author.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.date) - new Date(a.date);
      if (sortBy === "author") return a.author.localeCompare(b.author);
      return 0;
    });

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-5 text-primary">
        📚 Content Management Dashboard
      </h2>

      {/* === Add / Edit Post Section === */}
      <div className="card border-0 shadow-lg p-4 mb-5">
        <h4 className="fw-semibold mb-4 text-center text-secondary">
          {editIndex !== null ? "✏ Edit Post" : "✍ Create a New Blog Post"}
        </h4>
        <div className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Author Name"
              value={newPost.author}
              onChange={(e) =>
                setNewPost({ ...newPost, author: e.target.value })
              }
            />
          </div>
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={newPost.date}
              onChange={(e) =>
                setNewPost({ ...newPost, date: e.target.value })
              }
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Short Description"
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            className={`btn ${
              editIndex !== null ? "btn-warning" : "btn-success"
            } px-5`}
            onClick={handleAddOrUpdate}
          >
            {editIndex !== null ? "🔁 Update Post" : "➕ Add Post"}
          </button>
        </div>
      </div>

      {/* === Search & Sort === */}
      <div className="card border-0 shadow-sm p-4 mb-4">
        <div className="row align-items-center">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search by Title or Author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-4 ms-auto text-end">
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="date">📅 Date (Newest)</option>
              <option value="author">👩‍💻 Author (A–Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* === Posts Table === */}
      <div className="card border-0 shadow-lg p-4">
        <h4 className="fw-semibold mb-3 text-center text-secondary">
          📰 Published Posts
        </h4>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="bg-primary text-white text-center">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredPosts.map((post, index) => (
                <tr key={post.id} className="table-hover-row">
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>
                    <span className="badge bg-info text-dark">
                      {post.author}
                    </span>
                  </td>
                  <td>{post.date}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-info me-2"
                      onClick={() => setSelectedPost(post)}
                    >
                      👁 View
                    </button>
                    <button
                      className="btn btn-sm btn-outline-warning me-2"
                      onClick={() => handleEdit(index)}
                    >
                      ✏ Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(post.id)}
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredPosts.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-muted py-3">
                    No posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* === View Modal === */}
      {selectedPost && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">{selectedPost.title}</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedPost(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Author:</strong> {selectedPost.author}
                </p>
                <p>
                  <strong>Date:</strong> {selectedPost.date}
                </p>
                <p>
                  <strong>Description:</strong> {selectedPost.content}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedPost(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === Hover Effect === */}
      <style>
        {`
          .table-hover-row:hover {
            background-color: #f0f8ff !important;
            transform: scale(1.01);
            transition: 0.25s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default ContentManager;