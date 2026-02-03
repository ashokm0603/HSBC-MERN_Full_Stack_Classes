const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    cost: { type: Number, required: true },
    about: { type: String, required: true },
    imageUrl: { type: String, required: true },
    categories: { type: String, required: true },
    quantity: { type: Number, required: true },
    checkbox: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("productDetails", productSchema);
