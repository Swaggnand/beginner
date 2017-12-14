import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 items  = ["Fluff","Flufpp","Mr.lunge"];
 newitem = "";
 pushitem = function (){

  if(this.newitem != ""){

    this.items.push(this.newitem),
    this.newitem = "";
  }else{

    window.alert("Enter some text in textfield.");
  }

 }

 removeitem = function(index) {
  this.items.splice(index,1);
   
 }
}
