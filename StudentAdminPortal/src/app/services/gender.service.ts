import { Injectable } from '@angular/core';
import { Gender } from '../models/ui-models/gender.model';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private baseApiUrl = 'https://localhost:7251' ;
  constructor(private httpClient: HttpClient) {

   }

  getGenderList() : Observable<Gender[]>
  {
    return this.httpClient.get<Gender[]>(this.baseApiUrl + '/gender');
  }
}
