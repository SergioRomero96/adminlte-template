import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';
import { BusinessService } from 'src/app/services/business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {
  businessList: Array<Business>

  constructor(private businessService: BusinessService,private router:Router) { }

  ngOnInit() {
    this.getBusinessAll();
  }

  getBusinessAll() {
    this.businessService.getBusinessAll()
      .subscribe(
        result => {
          console.log(result);
          this.businessList = result;
        },
        error =>{
          alert("No se pudo conectar al servidor")
        }
      );
  }

  newBusiness(){
    this.router.navigate(["business-add"]);
  }

}
