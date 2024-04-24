import { eventModel } from "@/models/event-models";

export const getAllEvents = async () => {
  const events = await eventModel.find().lean();

  return events;
};

export const getEventById = async (id) => {
  const event = await eventModel.findOne({ _id: id });
  return event;
};
