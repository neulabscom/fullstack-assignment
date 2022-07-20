import { ApolloServer, gql } from 'apollo-server';
import {RESTDataSource} from 'apollo-datasource-rest'
import posts from './posts';

class UsersApi extends RESTDataSource{
  constructor(){
    super()
    this.baseURL='https://jsonplaceholder.typicode.com/'
    // this.initialize({} as DataSourceConfig<any>);
  }
  // async getUsers () {
  //     const res= await this.get(``)
  //     if (!res || !res.results.length) {
  //       return [];
  //     }
  //     return res.result
  // }
  userReducer(user:any){
    return {
      id:user.id,
      name:user.name,
      email:user.email
    }
  }
  async getAllUsers() {
    const response = await this.get('users');
    return Array.isArray(response)
      ? response.map(launch => this.userReducer(launch))
      : [];
  }
}

// const users= new UsersApi()

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    body: String
    userId: ID
  }

  type User {
    id: ID
    name: String
    email: String
  }

  type Query {
    posts: [Post]
    users:[User]
  }
`;

const resolvers = {
  Query: {
    posts: () => posts,

    users: (root:any,args:any,{dataSources}:any) => dataSources.users.getAllUsers()
  },
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources:()=>({users:new UsersApi}) });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
