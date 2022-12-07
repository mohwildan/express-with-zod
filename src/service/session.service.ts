import { FilterQuery } from "mongoose";
import sessionModel, { SchemaDocument } from "../models/session.model";

export const createSession = async (userId: string, userAgent: string) => {
  const session = await sessionModel.create({ user: userId, userAgent });
  return session.toJSON();
};

export const findSessions = (query: FilterQuery<SchemaDocument>) => {
  return sessionModel.find(query).lean();
};
