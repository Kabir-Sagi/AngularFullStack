import { Component, OnInit } from '@angular/core';

import {ServerCalService} from '../../Service/server-cal.service'



@Component({
  selector: 'app-filecomp',
  templateUrl: './filecomp.component.html',
  styleUrls: ['./filecomp.component.css']
})
export class FilecompComponent implements OnInit {
 excelFile1:File = null

  selectImage(event) {
    if (event.target.files.length > 0) {
     this.excelFile1 = event.target.files[0];


    }
  }
  onSubmit(){
    alert(this.excelFile1)
    this.servercall.getServerCall(this.excelFile1).subscribe((res:any)=>{
           console.log(res)
    })

  }

  constructor(private servercall:ServerCalService) {

   }

  ngOnInit(): void {
  }

}
