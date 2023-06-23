import axios from 'axios'

export default class Services {
    constructor() {
        this.imgBase = 'https://image.tmdb.org/t/p/original';
        this.API = 'https://api.themoviedb.org/3/';
        this.options = {
            params: {
                language: 'en-US',
                api_key: '70f74593af958fc9c5e634ecf5acf56d',
            },
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }
    async getTrending(type, setter,loader, page = '1') {
        this.options.params.page = page;
        let { data } = await axios.get(`${this.API}trending/${type}/week`, this.options);
        setter(data.results);
        loader(false);
    }
    async getPopular(type, setter, loader, page = '1') {
        this.options.params.page = page;
        let { data } = await axios.get(`${this.API}${type}/popular`, this.options);
        setter(data.results);
        loader(false);
    }
    async getTopRated(type, setter, loader, page = '1') {
        this.options.params.page = page;
        let { data } = await axios.get(`${this.API}${type}/top_rated`, this.options);
        setter(data.results);
        loader(false);
    }
    async getDetails(type, setter, loader, id) {
        let { data } = await axios.get(`${this.API}${type}/${id}`, this.options);
        setter(data);
        loader(false);
    }
    async getRelated(type, setter, loader, id, page = '1') {
        this.options.params.page = page;
        let { data } = await axios.get(`${this.API}${type}/${id}/similar`, this.options);
        setter(data.results);
        loader(false);
    }
    async getImages(type, setter, loader, id) {
        let { data } = await axios.get(`${this.API}${type}/${id}/images`, this.options);
        console.log(data);
        setter(data.backdrops);
        loader(false)
    }
}