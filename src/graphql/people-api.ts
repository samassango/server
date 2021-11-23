import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
const API_URL = 'https://swapi.dev/api/';

export class PeopleAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = API_URL;
    }
    willSendRequest(request:RequestOptions) {
        request.headers.set('Content-Type', 'application/json');
    }
    async getListOfPeople(pageNo: number){
      const data = await this.get(`people/?page=${pageNo}`);
       return data.results;
    }
    async searchPersonByName(name: String){
    const data = await this.get(`people/?search=${name}`);
      return data.results;
    }
}