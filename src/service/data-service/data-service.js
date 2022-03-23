

import React  from 'react';
import notificationService,{Notif_WishList_Changed} from '../notification-service';

let ns = new notificationService();
let instance = null;
var wishList = [];
class dataService extends React.Component {
   constructor(props){
       super(props);
       if(!instance){
           instance = this
       }
       return instance;
       
   }

   itemOnWishList = (item) => {
    for(let x = 0 ; x < wishList.length ; x++){
        if(wishList[x].id === item.id){
            return  true;
        }
    }
    return false;
}

   addWishList = (item) => {
    wishList.push(item);
    ns.PostNotification(Notif_WishList_Changed, wishList);
   }
   removeWishList = (item) => {
    for(var x = 0 ; x < wishList.length ; x++ ){
        if(wishList[x].id === item.id){
            wishList.splice(x,1);
    ns.PostNotification(Notif_WishList_Changed, wishList);
            break;
        }
    }
   }
   


}


 export default dataService;

