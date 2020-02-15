import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BusinessPlace } from 'src/app/models/business-place';
import { ActivatedRoute, Router } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { BusinessPlaceService } from 'src/app/services/business-place.service';

@Component({
  selector: 'app-business-place-add',
  templateUrl: './business-place-add.component.html',
  styleUrls: ['./business-place-add.component.css']
})
export class BusinessPlaceAddComponent implements OnInit {
  types =["FARM","OFFICE","HOUSE"];
  businessPlace: BusinessPlace;
  latitude: number;
  longitude: number;
  zoom: number;

  @ViewChild("search", {static: false})
  public searchElementRef: ElementRef;

  constructor(private route: ActivatedRoute,private router: Router, private businessPlaceService:BusinessPlaceService) {
    this.businessPlace = new BusinessPlace();
  }

  ngOnInit() {
    this.setCurrentLocation();
    this.businessPlace.businessId = this.route.snapshot.paramMap.get('id');
  }


  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  markerDragEnd($event: MouseEvent){
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }

  save() {
    this.businessPlace.lat = this.latitude;
    this.businessPlace.lng = this.longitude;
    console.log(this.businessPlace);
    this.businessPlaceService.addBusinessPlace(this.businessPlace).subscribe(
      result =>{
        alert("Agregado correctamente");
        this.router.navigate(['business-place-list',this.businessPlace.businessId]);
      },
      error =>{
        alert("No se pudo agregar");
      }
    )
  }

}
