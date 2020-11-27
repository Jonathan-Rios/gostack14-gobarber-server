import { Router } from "express";

import UserMap from "@modules/users/mappings/UserMap";

import AuthenticateUserService from "@modules/users/services/AuthenticateUserService";

const sessionsRouter = Router();

interface Response {
  email: string;
  password: string;
}

sessionsRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const mappedUser = UserMap.toDTO(user);

  return response.json({ user: mappedUser, token });
});

export default sessionsRouter;