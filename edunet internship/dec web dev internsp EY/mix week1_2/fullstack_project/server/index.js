// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';

// import tourRoute from './routes/tours.js'
// import userRoute from './routes/users.js'
// import authRoute from './routes/auth.js'
// import reviewRoute from './routes/reviews.js'
// import bookingRoute from './routes/bookings.js'



// dotenv.config()
// const app = express()
// const port = process.env.PORT || 8000
// const MONGO_URL = "mongodb://127.0.0.1:27017/TravelSite";


// const corsOptions ={
//     origin:'http://localhost:3000',
//     credentials:true
// }

// //db connectivity
// const connect = async () => {
//     try {
//         //await mongoose.connect(process.env.MONGO_URI);
//         await mongoose.connect(MONGO_URL);
//         console.log('MongoDB database connected');
//     } catch (err) {
//         console.error('MongoDB connection failed:', err.message);
//     }
// };

// // middleware
// app.use(express.json())
// app.use(cors(corsOptions))
// app.use(cookieParser())

// app.use('/api/v1/auth',authRoute)
// app.use('/api/v1/tours',tourRoute)
// app.use('/api/v1/users',userRoute)
// app.use('/api/v1/review',reviewRoute)
// app.use('/api/v1/book',bookingRoute)

// app.listen(port ,()=>{
//     connect()
//     console.log(`server is running on port ${port}`)
// })
  
  
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';  
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Use environment variable for MongoDB URI   
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/TravelSite";





// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB database connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // Exit process with failure
  }
};


import path from 'path';
//import express from 'express';

// Serve static files from the React frontend app
//app.use(express.static(path.join(__dirname, '../client')));

// Catch-all to serve the frontend's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});





// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/book', bookingRoute);

// Start server
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
