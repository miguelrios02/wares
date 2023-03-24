import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {

  @Input() login: string = 'valor inicial';
  constructor(){}
  ngOnInit(): void {
  }

  register = {
  nickname:'',
  name: '',
  email: '',
  password: '',
}
  onRegister(){
    console.log(this.register);
  }


}

