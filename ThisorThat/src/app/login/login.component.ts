import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThisorthatService } from '../thisorthat.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  results: Array<UserClass>=[];

  constructor(private route: ActivatedRoute, private loginService: ThisorthatService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.getSSO().subscribe((result: any) => 
    {
      this.results = result;
      console.log('result' + JSON.stringify(result));
    });
  }

}

