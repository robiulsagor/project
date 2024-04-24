import { eventModel } from "@/models/event-models";

export const getAllEvents = async () => {
  const events = await eventModel.find().lean();

  return events;
};
