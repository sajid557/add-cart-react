import 'whatwg-fetch';

class httpService{
    getProducts = () => {
       var promise = new Promise ((resolve,reject) => {
        fetch("http://localhost:3000/products")
        .then(res => {
            resolve(res.json());
            
        })
       });
       return promise; 
    }

}
export default httpService;