const db = require("../config/db");

const createCustomer = (req, res) => {
  const { name, email, phone, company } = req.body;
  const userId = req.user.id;

  db.run(
    "INSERT INTO customers (name, email, phone, company, user_id) VALUES (?, ?, ?, ?, ?)",
    [name, email, phone, company, userId],
    function (err) {
      if (err) {
        return res.status(400).json({ error: "Email already exists" });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
};

const getCustomers = (req, res) => {
  const { search, company } = req.query;
  let query = "SELECT * FROM customers WHERE user_id = ?";
  const params = [req.user.id];

  if (search) {
    query += " AND (name LIKE ? OR email LIKE ? OR phone LIKE ?)";
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }
  if (company) {
    query += " AND company = ?";
    params.push(company);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

module.exports = { createCustomer, getCustomers };
