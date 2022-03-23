import React from 'react';
import '../src/css/bootstrap.css';
import './App.css';
//request
import httpService from './service/http-service';
//product
import Product from './product/product.js';
//wishlist
import WishList from './whishlist/wishlist';


const http = new httpService();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: []};

    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
   
    this.loadData();

 
  }

  loadData = () => {
    var self = this;
    http.getProducts().then((listItem) => {
        self.setState( {products: listItem})
      }
    );
  };

  productList = () => {
    const list = this.state.products.map((item) => 
      <div className="col-md-4" key={item.id}>
        <Product product={item} />
      </div>
    );
    return (list);
  };

  render() {
    return (
      <div className=" container bg-light border App">
        <div className="row">
        <div className="col-md-8">
          <div className="row">
          {this.productList()}

          </div>
        </div>
        <div className="col-md-4">
          <WishList />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
