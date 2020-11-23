import { getRepository } from "typeorm";
import path from "path";
import fs from "fs";
import uploadConfig from "../config/upload";

import AppError from "../errors/AppError";

import User from "../models/User";

interface Request {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError("Only authenticaded users can change avatar.", 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);//file system, verifica se existe o arquivo.

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath); // deleta o arquivo
      }
    }

    user.avatar = avatarFileName;

    await usersRepository.save(user);// (.save) - Serve para criar ou atualizar

    return user;
  }
}

export default UpdateUserAvatarService;
