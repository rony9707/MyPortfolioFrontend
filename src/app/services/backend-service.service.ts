import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class BackendServiceService {

  constructor(private http: HttpClient) { }

  private baseURL = environment.baseURL
  private getSongsURL = `${this.baseURL}/songApi/getSongs`
  private sentEmailURL = `${this.baseURL}/sentEmail/sendEmail`
  private ConnectMesentEmailURL = `${this.baseURL}/sentEmailToMe/connetMesendEmail`




  //Get all the songs
  getSongs() {
    return this.http.get(this.getSongsURL, {
    })
  }


  //Sent resume Password in Email
  sentResumePassword(email: object) {
    return this.http.post<any>(this.sentEmailURL, email, {
    })
  }


  //Sent resume Password in Email
  sentEmailConnectWithMe(sentData: object) {
    return this.http.post<any>(this.ConnectMesentEmailURL, sentData, {
    })
  }


}
