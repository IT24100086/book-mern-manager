import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "",
      trim: true,
    },
    description: {
      type: String,
      required : true
    },
    genre: {
      type: String,
      required: true,
      enum: ['Fiction','Non-Fiction','Science','History','Other']
    }
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
