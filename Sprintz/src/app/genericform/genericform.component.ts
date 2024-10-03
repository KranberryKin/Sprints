import { Component, Input, OnChanges, OnInit, SecurityContext, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genericform',
  standalone: true,
  imports: [],
  templateUrl: './genericform.component.html',
  styleUrl: './genericform.component.scss'
})

export class GenericformComponent<T> implements OnInit,OnChanges{
  @Input() data!:T;
  myForm: FormGroup;
  templateReplacer:string = `<style>
        .form-body{
            display: flex;
            flex-direction: column;
        }
    </style>
  <form class="form-body" #myForm="myForm" (ngSubmit)="onSubmit($event)">`;
  template: string | SafeHtml = ``;


  private _endTemplate(){
    this.templateReplacer += `
    <button type="submit" [disabled]="myForm.invalid">Submit</button>
    </form>`;
    this.template = this.domSanitizer.bypassSecurityTrustHtml(this.templateReplacer) ?? "";
    console.log("_endTemplate this.template",this.template )
  }
  private capitalCase(s:string){
    var string = s.replace(s.charAt(0), s.charAt(0).toLocaleUpperCase())
    return string;
  }

  private _defineTemplate(objkey:string, formType:string):string{
    var templateExtenstion = "";
    var label_key = objkey;
    var label_name_split = objkey.split("_");
    var string_one = label_name_split[0]
    var string_two = label_name_split[1]
    var label_name = this.capitalCase(string_one) + " " + this.capitalCase(string_two);
    if(formType === "date"){
      templateExtenstion = `
      <label for="${label_key}">${label_name}:</label>
      <input id="${label_key}" formControlName="${label_key}" name="${label_key}" type="date"/>`
    }else if(formType === "string"){
      templateExtenstion = `
      <label for="${label_key}">${label_name}:</label>
      <input id="${label_key}" formControlName="${label_key}" name="${label_key}" type="text"/>`
    }else if (formType === "number"){
      var values = []
      templateExtenstion = `
      <label for="${label_key}">${label_name}:</label>
      <input id="${label_key}" formControlName="${label_key}" name="${label_key}" type="number" />`
    }
    return templateExtenstion;
  }

  private _getFormInputType(propName:string):string{
    if(propName.toLowerCase().includes("date")){
      return "date";
    } else if (propName.toLowerCase().includes("name") || propName.toLowerCase().includes("description")){
      return "string"
    } else if(propName.toLowerCase().includes("id")){
      return "number";
    };
    return "number";
  };

  private _buildForm(data:T){
    if(data != null){
      var dataKeys = Object.keys(data);
      for(var key in dataKeys){
        if(dataKeys[key] !== "id" ){
          var propType = this._getFormInputType(dataKeys[key]);
          this.templateReplacer += this._defineTemplate(dataKeys[key], propType);
        };
      };
    }else{
      
    };
    this._endTemplate();
  };
  private createObj(){
      var myObj:any = {};
      if(this.data != null){
        var data_keys = Object.keys(this.data);
        for(var key in data_keys){
          if(data_keys[key] !== "id"){
            myObj[data_keys[key]] = new FormControl('',[Validators.required])
          }
        }
        console.log("In _setNewForm() FormGroup(():any => triggered; myObj:", myObj)
      }
      return myObj;
  }

  private _setNewForm(data:T):FormGroup{
    if(data != null){
      console.log("new FormGroup(this.createObj())", new FormGroup(this.createObj()))
      return new FormGroup(this.createObj())
    }else {
      return new FormGroup({undefined_name: new FormControl('')})
    }
  };

  constructor(private domSanitizer:DomSanitizer, private router:Router){
    this.myForm = this._setNewForm(this.data);
  }
  ngOnInit(): void {
      this.myForm.valueChanges.subscribe(value => {
        console.log('Form changed:', value);
      });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']){
      this.myForm = this._setNewForm(this.data);
      this._buildForm(this.data);
    };
  };

  onSubmit(event:Event){
    event.preventDefault();
    if(this.myForm.valid){
      console.log("OnSubmit(myform)", this.myForm)
    }
  }
}
