import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  surveyForm : FormGroup;
  currentCard: number = 1; 
  outputData; 
  cards = [this.currentCard];
   constructor(private _fb:FormBuilder,
               private _store:Store<any>){}
  ngOnInit(){
    this._store.select('form').subscribe(data=>{
      console.log(data);
     this.outputData =data;
    })
  }
  addAnotherCard(){
    this.currentCard=+1;
   this.cards.push(this.currentCard);
   
  }
  removeQuestion(i: number){
    this._store.dispatch({
      type: 'REMOVE QUESTION',
      payload : i
    })
  }
  removeCard(e){
     this.cards = this.cards.filter((array, index)=>{
       if(index !== e){
         return true;
       }
       else{
        return false;
       }
     })
  }
}
