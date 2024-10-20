import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ClassDirective } from './class.directive';
import { Input } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HighlightDirective,ClassDirective,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage=0;
  itemsperpage = 1; 
  show = true;
  symbol = "";
  num1 = 0;
  num2 = 0;
  currentcolour = "tansparent";
   result = "";
   isActive = false;
   backGroundColor = "red";
   textcolor = "black";
  domath(){
    this.result = this.num1 + this.symbol + this.num2;
    console.log(`${this.num1}${this.num2}${this.symbol}${this.result}`);
  }
  
  find()  {
  this.show = true;
  }

  getCurrentPage(index: number): void{
    this.currentPage = index;
  }
  paginationIndex(index: number) {
    // console.log(`${this.currentPage},${index}`)
    return(Math.abs(this.currentPage - index) < 3);
  }
    buttons=[ 
      {color :"Red" ,
        class : "btn btn-danger"
      },{
        color:"green" ,
        class : "btn btn-success"
      },{
        color:"yellow" ,
        class :"btn btn-warning"
      },{
        color:"blue"  ,
        class :"btn btn-primary"
      },{
        color:"orange" ,
        class : "btn btn-warning"
      }];
    cards = [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "photo": "https://plus.unsplash.com/premium_photo-1729017497963-ec4ec3458794?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "photo": "https://images.unsplash.com/photo-1519982225598-3197da9267fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbGwlMjBjb2xvdXJzfGVufDB8fDB8fHww"
      },
      {
        "id": 3,
        "name": "Sam Wilson",
        "email": "sam.wilson@example.com",
        "photo": "https://plus.unsplash.com/premium_photo-1698406096055-91a364147db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhbGwlMjBjb2xvdXJzfGVufDB8fDB8fHww"
      },
      {
        "id": 4,
        "name": "Emily Johnson",
        "email": "emily.johnson@example.com",
        "photo": "https://images.unsplash.com/photo-1634787803831-8eed2aaab0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhbGwlMjBjb2xvdXJzfGVufDB8fDB8fHww"
      },
      {
        "id": 5,
        "name": "Emily Johnson",
        "email": "emily.johnson@example.com",
        "photo": "https://plus.unsplash.com/premium_photo-1727550814147-38963891084c?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "id": 6,
        "name": "Emily Johnson",
        "email": "emily.johnson@example.com",
        "photo": "https://plus.unsplash.com/premium_photo-1698098207255-5abd952c01bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "id": 7,
        "name": "Emily Johnson",
        "email": "emily.johnson@example.com",
        "photo": "https://images.unsplash.com/photo-1601809103137-60c18b484bbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhbGwlMjBjb2xvdXJzfGVufDB8fDB8fHww"
      }
    ]
   totalrecords = this.cards.length;
    gotonextpage(index: number): void{
      if(index<this.cards.length - 1){
      this.currentPage = index+1;
    }
    if (index === this.cards.length -1){
      this.currentPage = this.cards.length - (this.cards.length);
    }
  }

  changeclass(){
    this.isActive = !this.isActive;
  }
 
  changestyle(){
    this.backGroundColor = "card text-white bg-warning mb-3";
    this.textcolor = "text-primary";
    console.log(`${this.backGroundColor}${this.textcolor}`)
  }
}

