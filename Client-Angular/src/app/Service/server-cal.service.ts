import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ServerCalService {
  constructor(private http:HttpClient){

  }
 getServerCall(file):Observable<any> {
alert("Server Call Triggered")
const formData = new FormData()
formData.append("efile",file,file.name)
return this.http.post("http://localhost:3030/excel/file",formData)

 }
 getDataFromServer(){
   return this.http.get("http://localhost:3030/excel/getdata")
 }
}
