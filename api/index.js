import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Health Check
app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Gagan Shukla Blog API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('API Error:', err.stack);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error'
  });
});

// Export the app for Vercel Serverless Functions
export default app;

// For local development
const isMainModule = process.argv[1] === fileURLToPath(import.meta.url);
if (isMainModule) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
