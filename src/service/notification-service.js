import React  from 'react';
export const Notif_WishList_Changed = "notif_wishlist_changed";

let instance = null;
var observers = {};
class notificationService extends React.Component {
   constructor(props){
       super(props);
       if(!instance){
           instance = this
       }
       return instance;
       
   }
   PostNotification = (notifName, data) => {
       let obs = observers[notifName];
       for(var x = 0 ; x < obs.length ; x++){
          var obj =  obs[x];
          obj.callBack(data);
       }
   }


   removeObserver = (notiName,observer) => {
       var obs = observers[notiName];
       if(obs){
           for( var x = 0 ; x < obs.length ; x++){
               if(observer === obs[x].observer){
                obs.splice(x,1);
                observers[notiName] = obs;
                break;
               }
           }
       } 
   }
   addObserver = (notiName, observer,callback) => {
    let obs = observers[notiName];   
    if(!obs){
        observers[notiName] = [];
    }
    let obj = {observer:observer, callBack:callback};
    observers[notiName].push(obj);
   }
}

   export default notificationService;