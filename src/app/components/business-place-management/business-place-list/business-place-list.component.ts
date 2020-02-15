import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessPlace } from 'src/app/models/business-place';
import { BusinessPlaceService } from 'src/app/services/business-place.service';

@Component({
  selector: 'app-business-place-list',
  templateUrl: './business-place-list.component.html',
  styleUrls: ['./business-place-list.component.css']
})
export class BusinessPlaceListComponent implements OnInit {
  idBusiness:string;
  businessPlacesList:Array<any>;
  listIsEmpty = false;

  constructor(private route:ActivatedRoute, private router:Router, private businessPlaceService:BusinessPlaceService) {
    this.idBusiness = this.route.snapshot.paramMap.get('id');
    console.log(this.idBusiness);
   }

  ngOnInit() {
    this.getbusinessPlaceList();
  }

  newBusinessPlace(){
    this.router.navigate(['business-place-add',this.idBusiness]);
  }

  getbusinessPlaceList(){
    this.businessPlaceService.getBusinessPlacesById(this.idBusiness).subscribe(
      result =>{
        if(result.length === 0){
          this.listIsEmpty = true;
          return;
        }
        this.businessPlacesList = result;
      }
    )
  }
}
