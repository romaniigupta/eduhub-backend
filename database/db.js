// import mongoose from "mongoose";

// export const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.DB);
//     console.log("Database Connected");
//   } catch (error) {
//     console.log(error);
//   }
// };


import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");

  } catch (error) {
    console.error("DB ERROR:", error);
    throw error;
  }
};
