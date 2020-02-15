import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';
import { BusinessService } from 'src/app/services/business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-add',
  templateUrl: './business-add.component.html',
  styleUrls: ['./business-add.component.css']
})
export class BusinessAddComponent implements OnInit {
  business: Business;

  constructor(private businessService: BusinessService, private router: Router) {
    this.business = new Business();
  }

  ngOnInit() {
  }

  save() {
    console.log(this.business);
    this.businessService.addBusiness(this.business).subscribe(
      result => {
        alert("Empresa agregado correctamente");
        this.router.navigate(['business-list']);
      },
      error => {
        alert("Error al agregar");
      }
    );
  }

}
