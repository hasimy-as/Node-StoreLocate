import mongoose from "mongoose";

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

export default connect;
