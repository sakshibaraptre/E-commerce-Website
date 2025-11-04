const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

// 2. Define Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

// 3. Create Route to Show Data
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users); // Send data as JSON
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
});



// 4. Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
