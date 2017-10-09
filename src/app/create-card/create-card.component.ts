import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  @Input() cardNumber ;
  @Output() currentCardNumber:EventEmitter<number>  = new EventEmitter<number>();
  surveyForm : FormGroup;
  answerField : boolean = false;
  constructor(private _fb:FormBuilder,
              private _store:Store<any>){}
  ngOnInit(){
    
    this.surveyForm = this._fb.group({
      name   : [''],
      question : ['', [Validators.required]],
      answer : ['', Validators.required],
      subQuestionAnswer : this._fb.array([])
    })
  }
  addSubQuestion(){
    const control = <FormArray>this.surveyForm.controls['subQuestionAnswer'];
    const addQuestion =  this._fb.group({
        question : ['', Validators.required],
        answer   : ['', Validators.required]
      });
    
    control.push(addQuestion);
  }
  removeSubQuestion(i:number){
    const control = <FormArray>this.surveyForm.controls['subQuestionAnswer'];
    control.removeAt(i);
  }
  addAnswerField(i:number){
    
  }
  save(form){
  console.log(form.value);
  this._store.dispatch({
    type: 'ADD QUESTION',
    payload : form.value
  });
  console.log(this.cardNumber);
  this.currentCardNumber.emit(this.cardNumber);
  }
}
