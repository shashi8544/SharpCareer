const port = 4000;  // On this port express server will run
const express = require("express");  // Import dependencies
const app = express();  // Define instances
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");  // Access backend directory in express app
const cors = require("cors");
const facultyRoutes = require('./routes/loginRoutes/facultyRoutes');
const studentRoutes = require('./routes/loginRoutes/studentRoutes');
const staffRoutes = require('./routes/loginRoutes/staffRoutes');

app.use(express.json());
app.use(cors());  // For connecting on 4000 port

// Create database connection
const mongoURI = "mongodb+srv://kumar9955kundan:kundan9955@cluster0.w8rl7oe.mongodb.net/sharpmind?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

// API creation
app.get("/", (req, res) => {
    res.send("Express app is running");
});

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Endpoint to upload images
app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Routes
app.use('/student', studentRoutes);
app.use('/staff', staffRoutes);
app.use('/faculty', facultyRoutes);

// Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
