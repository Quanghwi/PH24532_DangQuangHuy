import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_URI = "http://localhost:3000/users";
export const getAll = async (req, res) => {
  try {
    const { data: users } = await axios.get(`${API_URI}`);
    // const res = await axios.get`${API_URI}`
    // const req = await res.data
    if (users.length === 0) {
      res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
 
};
export const get = async (req, res) => {
  try {
    const { data: user } = await axios.get(
      `${API_URI}/${req.params.id}`
    );
    if (!user) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "Thành công",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi",
    });
  }
};
export const create = async (req, res) => {
  try {
    const { data: user } = await axios.post(
      `${API_URI}`,
      req.body
    );
    if (!user) {
      return res.status(400).json({
        message: "Không thể tạo người dùng",
      });
    }
    return res.status(201).json({
      message: "Tạo người dùng thành công",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    await axios.delete(`${API_URI}/${req.params.id}`);
    return res.status(200).json({
      message: "user đã được xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { data: user } = await axios.patch(
      `${API_URI}/${req.params.id}`,
      req.body
    );
    if (!user) {
      return res.status(404).json({
        message: "Không tìm thấy user",
      });
    }
    return res.status(200).json({
      message: "user đã được cập nhật thành công",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const put = async (req, res) => {
  try {
    const { data: user } = await axios.put(
      `${API_URI}/${req.params.id}`,
      req.body
    );
    console.log(data);
    if (!user) {
      return res.status(404).json({
        message: "Không tìm thấy user",
      });
    }
    return res.status(200).json({
      message: "user đã được cập nhật thành công",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};