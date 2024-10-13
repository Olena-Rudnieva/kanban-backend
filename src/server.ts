// import mongoose from 'mongoose';
import app from './app.js';

const { PORT = 3002 } = process.env;

app.listen(PORT, () => console.log(`Server running at ${PORT} port`));
// mongoose
//   .connect(DB_HOST as string)
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server running at ${PORT} port`));
//   })
//   .catch((error: any) => {
//     console.log(error.message);
//     process.exit(1);
//   });
