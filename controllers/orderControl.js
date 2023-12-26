import Order from "../models/ordersModel.js";

export const createOrders = async (req, res) => {
  try {
    const { imageURL, name, amount, price, userId } = req.body;

    const order = new Order({
      imageURL,
      name,
      amount,
      price,
      userId,
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "email");
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
