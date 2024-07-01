import { IGetUsersContoller, IGetUsersRepository } from "./protocols";

export class GetUsersContoller implements IGetUsersContoller {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}
  async handle() {
    try {
      //validar requisição
      // direcionar chamada para o repository
      const users = await this.getUsersRepository.getUsers();
    } catch (error) {}
  }
}
