import mongoose from "mongoose";

const DailyTaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  challenge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Challenge",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  completed: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

export default mongoose.models.DailyTask ||
  mongoose.model("DailyTask", DailyTaskSchema);
