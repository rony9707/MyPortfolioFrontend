import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


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
  getSongs(): Observable<any[]> {
    return this.http.get<any[]>(this.getSongsURL)
    .pipe(catchError(this.handleError));
  }


  //Sent resume Password in Email
  sentResumePassword(email: object) {
    return this.http.post<any>(this.sentEmailURL, email, {
    }).pipe(catchError(this.handleError))
  }


  //Sent resume Password in Email
  sentEmailConnectWithMe(sentData: object) {
    return this.http.post<any>(this.ConnectMesentEmailURL, sentData, {
    }).pipe(catchError(this.handleError))
  }


  private handleError(error: HttpErrorResponse):Observable <any>{
    console.log('An error occured',error);

    return throwError("Something went wrong.")
  }





}
