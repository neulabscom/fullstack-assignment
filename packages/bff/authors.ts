import axios from 'axios';

const authorsUrl = 'https://jsonplaceholder.typicode.com/users';

const authors = () => {
  return axios.get(authorsUrl)
  .then((response: any) => response.data)
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}

export default authors() ;
