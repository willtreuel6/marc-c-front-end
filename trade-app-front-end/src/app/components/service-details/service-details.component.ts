import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../data/service.json';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  id : string = "";

  num : number = 0;

  serviceId : string = "";

  serviceIdNum : number = 0;

  services : any = data;



  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.id = params['id'];
      console.log("ID : " + this.id)
      this.findServiceId(this.id);
    });


  }

  findServiceId(serviceString : string){
    while(serviceString[this.num] != "-"){
      this.serviceId += serviceString[this.num];
      this.num++;
    }
    console.log("Service String : " + serviceString)
    console.log("Service ID Function : " + this.serviceId);
    this.serviceIdNum = parseInt(this.serviceId);
    console.log(this.serviceIdNum);
  }








}
