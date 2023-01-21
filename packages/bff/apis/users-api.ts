import { RESTDataSource } from 'apollo-datasource-rest';

import { IUserApi, User } from './types';

class UsersApi extends RESTDataSource implements IUserApi {
  override baseURL = 'https://jsonplaceholder.typicode.com/';

  async getUsers(): Promise<User[]> {
    return await this.get('users');
  }
}

export default UsersApi;
