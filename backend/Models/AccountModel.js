import mongoose from "mongoose";

// Định nghĩa Schema cho User
const AccountSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Tạo Model từ Schema
const AccountModel = mongoose.model("infoaccounts", AccountSchema);

// Xuất khẩu Model
export default AccountModel;
