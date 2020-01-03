import mongoose from "mongoose";
import GeoCoder from "../utils/GeoCoder";

const storeSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: [true, "Please enter a Store ID"],
    unique: true,
    trim: true,
    maxlength: [10, "Store ID must be less than 10 characters."]
  },
  location: {
    type: {
      type: String,
      enum: ["Point"]
    },
    coordinates: {
      type: [Number], //@array
      index: "2dsphere"
    },
    formattedAddress: String
  },
  address: {
    type: String,
    required: [true, "Please add an address"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Store", storeSchema);
