import { Component } from '@angular/core';
import { AbstractControl,FormGroup,Validators,FormsModule,FormBuilder,FormControl, MinValidator} from '@angular/forms';
import Validation from 'src/shared/validation';
import { FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-customer-info-reactive',
  templateUrl: './customer-info-reactive.component.html',
  styleUrls: ['./customer-info-reactive.component.css']
})
export class CustomerInfoReactiveComponent {
  form:FormGroup=new FormGroup({
    
    cname:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),

    machine:new FormControl('')
   
  });

  submitted=false;
  constructor(private fb:FormBuilder){}

  ngOnInit():void{
    this.form=this.fb.group({
      cname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(40)]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      skills:this.fb.array([]),
     machine:['',[Validators.required]]
    },
    );
  }

  get f():{[key:string]:AbstractControl}
  {
    return this.form.controls;
  }

  get skillsForms() {
    return this.form.get('skills') as FormArray;
  }

  addSkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        language: [''],
        machine: ['']
      })
    );
  }


  removeskillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }


  onSubmit():void{
    this.submitted=true;
    console.log('onsubmit called');
    console.log(this.form.value);
    
    if(this.form.invalid)
    return
    console.log(JSON.stringify(this.form.value,null,2));
    
  }

  onReset():void{
    this.submitted=false;
    this.form.reset();
  }
}

function MinValue(arg0: number): any | string {
  throw new Error('Function not implemented.');
}
