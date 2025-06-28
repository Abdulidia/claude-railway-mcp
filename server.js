const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// إعداد Express
app.use(cors());
app.use(express.json());

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.json({
    message: 'Claude MCP Server is running!',
    status: 'active',
    timestamp: new Date().toISOString()
  });
});

// API للدردشة
app.post('/chat', (req, res) => {
  const { message } = req.body;
  
  res.json({
    response: `تم استلام رسالتك: ${message}`,
    timestamp: new Date().toISOString()
  });
});

// API للحصول على معلومات الخادم
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 URL: http://localhost:${PORT}`);
});
