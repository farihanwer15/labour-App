import { Component } from "@angular/core";

import { login } from "./login";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class logincomponent {
  
    powers = ['Really Smart', 'Super Flexible',
              'Super Hot', 'Weather Changer'];
  
    model = new login(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  
    submitted = false;
  
    onSubmit() { this.submitted = true; }
  
  
    newHero() {
      this.model = new login(42, '', '');
    }
  
    skyDog(): login {
      const myHero =  new login(42, 'SkyDog',
                             'Fetch any object at any distance',
                             'Leslie Rollover');
      console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
      return myHero;
    }
  
    //////// NOT SHOWN IN DOCS ////////
  
    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    showFormControls(form: any) {
      return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
    }
  
  }