

import React  from 'react';
import './wishlistitem.css';
import DataService from '../service/data-service/data-service';

let ds = new DataService();
class WishListItem extends React.Component {
    constructor(props){
        super(props);

        //bind
        this.onBtnClick = this.onBtnClick.bind(this);
    }
    onBtnClick = () => {
         ds.removeWishList(this.props.product);
    }
    

    render(){
        return(
            <li className="list-group-item">
                <button className="btn btn-outline-danger" onClick={() => this.onBtnClick()}>x</button>
                <p>{this.props.products.title} | <b>${this.props.products.price}</b></p>
            </li>
        );

    }
}


 export default WishListItem;

