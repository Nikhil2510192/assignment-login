import mongoose from "mongoose"
const connectDB = async () => {
  try {
      const conn = await mongoose.connect("mongodb+srv://nikhilpagadala2006:pagadala2006@cluster0.kv9jm.mongodb.net/");
      console.log(`MongoDB is connected : ${conn.connection.host}`);
  } catch (error) {
      console.error(error);
      process.exit(1)
  }
};
export default connectDB