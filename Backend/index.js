require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UserModel } = require("./model/UserModel");
const { OrdersModel } = require("./model/OrdersModel");
const { PositionsModel } = require("./model/PositionsModel");
const { HoldingsModel } = require("./model/HoldingsModel");

const app = express();
const PORT = process.env.PORT || 3002;

// -------- Middleware --------
const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "http://localhost:5174", // local dashboard
  "https://zerodha-project-tryal1.onrender.com", // deployed frontend/dashboard
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ CORS blocked:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.json());

// -------- DB Connection --------
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ DB Connected"))
  .catch((err) => console.error("❌ DB connection error", err));

// -------- API Routes --------
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "✅ User registered" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "✅ Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Other API routes
app.get("/allHoldings", async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.json(holdings);
});

app.get("/allPositions", async (req, res) => {
  const positions = await PositionsModel.find({});
  res.json(positions);
});

app.post("/neworder", async (req, res) => {
  try {
    const order = new OrdersModel(req.body);
    await order.save();
    res.send("✅ Order saved");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------- Serve Static Files --------
// Serve Dashboard at /dashboard
app.use(
  "/dashboard",
  express.static(path.join(__dirname, "../Dashboard/dist"))
);
app.get("/dashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Dashboard/dist/index.html"));
});

// Serve Frontend at /
app.use(express.static(path.join(__dirname, "../Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
});

// -------- Start Server --------
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
