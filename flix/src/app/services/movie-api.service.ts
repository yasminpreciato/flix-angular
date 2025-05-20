import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3';
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjU1OGZhZDZmNGY1OGFiMzE2NGQwZmMzMjFlYjIzMyIsIm5iZiI6MTc0NzI0NjU2Ni42MTIsInN1YiI6IjY4MjRkZGU2MGQ4YzA2Y2U4ODRiNTEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hyDFk6_51kHEQnG2Vm4nMSULw7PiZmQcqLMk4dLjw4Q'
    }
  };

  // Dados para o banner - midias em destaques da semana
  bannerApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }

  

}
