// Importing Libraries
import mongoose, { Document, Schema } from "mongoose";

// Importing dependencies
import { Contact } from "../interfaces/ContactInterface";

const ContactSchema: Schema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, required: [true, "Email is required"] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<Contact>("Contact", ContactSchema);
