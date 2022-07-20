import { ApolloServer, gql } from 'apollo-server';
import {RESTDataSource} from 'apollo-datasource-rest'
import posts from './posts';

class UsersApi extends RESTDataSource{
  constructor(){
    super()
    this.baseURL='https://jsonplaceholder.typicode.com/'
  }
  userReducer(user:any){
    return {
      id:user.id,
      name:user.name,
      email:user.email
    }
  }
  async getAllUsers() {
    return await this.get('users');
  }
}


const typeDefs = gql`
  type Post {
    id: ID
    title: String
    body: String
    category:String
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
