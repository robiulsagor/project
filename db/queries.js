import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-model";

export const getAllEvents = async () => {
  const events = await eventModel.find().lean();

  return events;
};

export const getEventById = async (id) => {
  const event = await eventModel.findOne({ _id: id });
  return event;
};

export const createUser = async (user) => {
  return await userModel.create(user);
};

export const performLogin = async (credentials) => {
  const user = await userModel.findOne(credentials);
  return user;
};
