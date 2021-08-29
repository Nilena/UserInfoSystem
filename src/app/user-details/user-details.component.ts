import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../services/user-detail.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userDetails: UserDetailService) { }

  ngOnInit(): void {

  let data =   this.userDetails.getUserInfo();
  console.log(data)
  }
  albumbs(){
    console.log('test')
  }

  posts(){
    console.log('post')
  }
}
