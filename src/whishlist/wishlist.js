

import React  from 'react';
import './wishlist.css';
import WishListItem from '../wishitem/wishlistitem';
/* import dataService from '../service/data-service/data-service'; */
import notificationService, { Notif_WishList_Changed } from '../service/notification-service';


/* {
    title: "product1",
    price:123,
    id:"nbhyug"
},
{
    title: "product2",
    price:456,
    id:"nbhsdg"
},
{
    title: "product3",
    price:789,
    id:"nbhrtg"
} */
let ns = new notificationService();
class WishList extends React.Component {

    constructor(props){
        super(props);

        this.state = {wishList: []};
        //bind
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }
    componentDidMount(){
        ns.addObserver(Notif_WishList_Changed, this, this.onWishListChanged);
    }
    
    componentWillUnmount(){
        ns.removeObserver(Notif_WishList_Changed, this);
    }
    
    onWishListChanged(newWishList) {
        this.setState({wishList: newWishList});
    }

    createWishList = () => {
      const list =  this.state.wishList.map((product) => 
        <WishListItem products={product} key={product.id} />
        );
        return(list);
    }


    render(){
        return(
         <div className="card">
             <h4 className="card-title">wishlist</h4>
             <ul className="list-group">
             {this.createWishList()}
             </ul>
         </div>
        );

    }
}


 export default WishList;

