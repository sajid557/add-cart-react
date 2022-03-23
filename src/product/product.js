import React  from 'react';
import './product.css';
import DataService from '../service/data-service/data-service';
import notificationService, {Notif_WishList_Changed} from '../service/notification-service';

let ns = new notificationService();
let ds = new DataService();

class Product extends React.Component {

    constructor(props){
        super(props);
        this.state= { onWishlist: ds.itemOnWishList()}
        //bind
        this.onBtnClicked = this.onBtnClicked.bind(this); 
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    componentDidMount(){
        ns.addObserver(Notif_WishList_Changed, this, this.onWishListChanged);
    }
    
    componentWillUnmount(){
        ns.removeObserver(Notif_WishList_Changed, this);
    }
    onWishListChanged = (item) => {
        this.setState({onWishlist : ds.itemOnWishList(this.props.product)})
    }

    onBtnClicked = () => {
        if(this.state.onWishlist){
            ds.removeWishList(this.props.product);
        }
        else{
        ds.addWishList(this.props.product)

        }
    }
    

    render(){
        var btnClass;
        
        if(this.state.onWishlist){
            btnClass = "btn btn-outline-danger";
        }
        else{
            btnClass = "btn btn-outline-primary";
        }

        return(
            <div className="card">
                <img className="card-img-top img" src={this.props.product.imgUrl} alt="img" />
                <div className="card-block">
                <h4 className="card-title">{this.props.product.title}</h4>
        <p className="card-text">price : ${this.props.product.price}</p>
        <button className={btnClass} onClick={() => {this.onBtnClicked()}} >{ this.state.onWishlist ? "remove from wishlist" : "add to wish list"}</button>
            
                </div>
      </div>
        );

    }
}


 export default Product;
