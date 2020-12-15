import { Component, OnInit } from '@angular/core';
import { ServerCalService } from 'src/app/Service/server-cal.service';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent implements OnInit {
responsedata: []
  constructor(private servercall:ServerCalService) { }

  ngOnInit(): void {
    this.servercall.getDataFromServer().subscribe((res:any)=>{
        this.responsedata = res.data
    })
  }

}
