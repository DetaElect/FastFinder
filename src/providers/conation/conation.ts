import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ConationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConationProvider {
  url: any;
  url2: any;
  login: string;
  log : any;
  token : any;
  amenities: any;
  booking : any;
  goreg: any;
  activity: any;
  change_pass: any;
  settings: any;
  payment: any;
  search: any;
  Rsearch: any;
  futdalMap:any;
  UrlMaps:any;
  mybook:any;

  //local ="https://twin-lodge.000webhostapp.com/api";
   local ="http://project.dev";
  //local = "http://192.168.0.3/BookingHot/public";
  // local ="http://10.11.1.103/BookingHot/public"
  constructor(public http: Http) {
    // this.url = "http://localhost:8100/api/v1/rooms";
    // this.url2 = "http://localhost:8100/api/v1/rooms/info";
    // this.login = "http://localhost:8100/api/v1/user";
    // this.amenities = "http://localhost:8100/api/v1/amenities";
    // this.booking = "http://localhost:8100/api/v1/book?token=";
    // this.goreg = "http://localhost:8100/api/v1/signme";
    // this.activity = "http://localhost:8100/api/v1/activity";
    // this.change_pass = "http://localhost:8100/api/v1/changepassword?token=";
    // this.settings = "http://localhost:8100/api/v1/setting?token=";
    // this.payment = "http://localhost:8100/api/v1/payment?token=";




    this.url = this.local+"/api/v1/rooms";
    this.url2 = this.local+"/api/v1/rooms/info";
    this.login = this.local+"/api/v1/user";
    this.amenities =this.local+"/api/v1/amenities";
    this.booking = this.local+"/api/v1/book?token=";
    this.goreg = this.local+"/api/v1/signme";
    this.activity = this.local+"/api/v1/activity";
    this.change_pass = this.local+"/api/v1/changepassword?token=";
    this.settings = this.local+"/api/v1/setting?token=";
    this.payment = this.local+"/api/v1/payment";
    this.search = this.local+"/api/v1/search";
    this.Rsearch = this.local+"/api/v1/Rsearch";
    this.UrlMaps = this.futdalMap = this.local+"/api/v1/futsal";
    this.mybook = this.local+"/api/v1/mybook?token=";


  }

   getCategory(){
    return this.http.get(this.url).map(res => res.json());
  }

  getFutsal(id){
    return this.http.get(this.url+"/"+id).map(res => res.json());
  }

  getFutsl2(id){
    return this.http.get(this.url2+"/"+id+"?token="+localStorage.getItem("token")).map(res => res.json());
  }

  userLogin(username, password){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "username": username,
      "password": password
    };

     return this.http.post(this.login, JSON.stringify(body),{headers: headers} )
     .map(res => res.json());

  }

  getAmenity(){
    return this.http.get(this.amenities+"?token="+localStorage.getItem("token")).map(res=> res.json());
  }

  userBook(check_in, check_out,room_id,bill,occupants,time){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "check_in": check_in,
      "check_out": check_out,
      "room_id": room_id,
      "occupants": occupants,
      'bill': bill,
      'check_in_time': time
    };

     return this.http.post(this.booking+localStorage.getItem("token"), JSON.stringify(body),{headers: headers} )
     .map(res => res.json());
  }

 userRegister(fname,lname,email,username,password,repeat_password,contact){
   let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "fname": fname,
      "lname": lname,
      "email": email,
      "username": username,
      "password": password,
      "repeat_password": repeat_password,
      "contact": contact
    };
    return this.http.post(this.goreg, JSON.stringify(body),{headers: headers} )
     .map(res => res.json());
 }


getActivity(){
  return this.http.get(this.activity+"?token="+localStorage.getItem("token")).map(res=> res.json());
}

deleteActivity(id){
return this.http.get(this.activity+"/"+id+"?token="+localStorage.getItem("token")).map
(res=> res.json());
}

changePassword(aw, wa){
  let headers = new Headers();

      headers.append('Content-Type', 'application/json');


      let body = {
        "new_password": aw,
        "repeat_password": wa

      };
      return this.http.post(this.change_pass+localStorage.getItem("token"), JSON.stringify(body),{headers: headers} )
       .map(res => res.json());
}

getProfile(){
  return this.http.get(this.settings+localStorage.getItem("token")).map( res=> res.json());
}

getPayment(image,id){
  let headers = new Headers();

      headers.append('Content-Type', 'application/json');

      let body = {
        "image": image,
        "user_transaction_id": id

      };
      return this.http.post(this.payment, JSON.stringify(body),{headers: headers} )
       .map(res => res.json());
}

/*
* MY Edit
* */

//Start

  Search(date1, date2, time, price, city){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "date1":date1,
      "date2":date2,
      "time":time,
      "price":price,
      "city":city

    };
    return this.http.post(this.search, JSON.stringify(body),{headers: headers} )
      .map(res => res.json());
  }


  /*
  * myBook
  * */
  myBook(check_in, check_out,room_id,bill,occupants){
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    let body = {
      "check_in": check_in,
      "check_out": check_out,
      "room_id": room_id,
      "occupants": occupants,
      'bill': bill,
    };

    return this.http.post(this.mybook+localStorage.getItem("token"), JSON.stringify(body),{headers: headers} )
      .map(res => res.json());
  }



  //End

}
