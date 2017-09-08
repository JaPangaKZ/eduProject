import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
<div> 
Write your name:<input  type="text" name="title" ng-Model="name"><br>
Choose your birthdate:<input type="date" ng-model="date"><br>
ImbicilMetr:<input type="range" ng-model="rangeNumber" min="0" max="100"><hr>
{{name}}
<button (click)="onClick()">ClickMePlease</button>
</div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  
  onClick(){
    console.log
    //value = <code>{{name}}</code><br/>
  }

  constructor() { }

  ngOnInit() {
  }

}
