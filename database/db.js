import mongoose from "mongoose";

let MONGO_URI =
  "mongodb+srv://hasimy-as:hasimy-as@store-locate-qzwi3.mongodb.net/storelocate?retryWrites=true&w=majority";

const connect = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`On to ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

export default connect;
