require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UserModel } = require("./model/UserModel");
const { OrdersModel } = require("./model/OrdersModel");
const { PositionsModel } = require("./model/PositionsModel");
const { HoldingsModel } = require("./model/HoldingsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(cors({ origin: [process.env.CLIENT_URL, process.env.DASHBOARD_URL] }));
app.use(bodyparser.json());
app.use(express.json());


// DB Connection
mongoose.connect(uri)
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.error("❌ DB connection error", err));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// ================== ROUTES ==================

// Get all holdings
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// Get all positions
app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// New order
app.post("/neworder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      price: req.body.price,
      percent: req.body.percent,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("✅ Order saved");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ================== AUTH ==================

// User Signup
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check duplicate
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();
    console.log("Incoming signup request:", req.body);

    res.status(201).json({ message: "✅ User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.json({
      message: "✅ Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const path = require("path");

// Serve Frontend
app.use(express.static(path.join(__dirname, "../Frontend/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/build", "index.html"));
});

// Serve Dashboard (under /dashboard path)
app.use("/dashboard", express.static(path.join(__dirname, "../Dashboard/build")));
app.get("/dashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Dashboard/build", "index.html"));
});
