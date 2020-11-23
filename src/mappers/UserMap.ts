import User from "../models/User";

export default class UserMap {

  public static toDTO(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      //password: user.password,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}
