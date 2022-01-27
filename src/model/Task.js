import { Schema, model } from "mongoose";

const TaskSchema = Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    ruc: { type: String, required: true, trim: true, unique: true, minLength: 10 },
    razon_social: { type: String, required: true, trim: true },
    description: {
      type: String,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", TaskSchema);
