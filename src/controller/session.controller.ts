import { Request, Response } from "express";
import { createSession, findSessions } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  //validate the user's password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  // create a create user session
  const session = await createSession(user._id, req.get("user-agent") || "");
  //create an access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    {
      expiresIn: config.get<string>("accesTokenTtl"),
    }
  );
  // create refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    {
      expiresIn: config.get<string>("refreshTokenTtl"),
    }
  );
  //set cookie
  res.cookie("token", accessToken);
  //return access token and refresh token

  return res.send({
    accessToken,
    refreshToken,
  });
};

export const getUserSessionsHandler = async (_req: Request, res: Response) => {
  const userId = res.locals.user._id;
  console.log(userId);

  const sessions = await findSessions({ user: userId, valid: true });
  console.log(sessions);

  return res.send(sessions);
};
