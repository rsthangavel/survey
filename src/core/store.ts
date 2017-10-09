import { Action } from '@ngrx/store';


export function FormReducer(state: any[]= [], action: Action){
  switch(action.type){
    case 'ADD QUESTION':
       return [...state, action.payload];
    case 'REMOVE QUESTION':
       state = state.filter((array, index)=>{
          if(index !== action.payload){
                 return true;
          }
          else { return false;}
        })
        return [...state]; 
      
    case 'Update Question':
    default :
      return state;
  }
}
