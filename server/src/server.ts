import express from'express';
import cors from 'cors';
import { connectDB } from './Config/DB';
import errorHandler from './Middleware/Error';
import permissionsRoute from './Routes/Permissions';
import authRoute from './Routes/Auth';
import categoriesRoute from './Routes/Categories'
import dotenv from "dotenv";

// Load env vars
dotenv.config({ path: './src/Config/.env' });

// Connect to DB
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Body Parser
app.use(express.json());

// echo post to /
app.post('/api/v1/', (req, res) => {
    res.status(200).json({
        success: true,
        data: req.body
    });
});

// Mount routers
app.use('/api/v1/permissions', permissionsRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/categories', categoriesRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: any, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
})