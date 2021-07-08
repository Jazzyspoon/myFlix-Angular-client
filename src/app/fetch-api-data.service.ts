import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'YOUR_HOSTED_API_URL_HERE/';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

   // Making the api call for the user login endpoint
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

   // Making the api call for all of the movies endpoint
  public getMovies(movieDetails: any): Observable<any> {
    console.log(movieDetails);
    return this.http.get(apiUrl + 'movies', movieDetails).pipe(
    catchError(this.handleError)
    );
  }

   // Making the api call for a single movie endpoint
  public getMovie(movieDetails: any): Observable<any> {
    console.log(movieDetails);
    return this.http.get(apiUrl + 'movies/:Title', movieDetails).pipe(
    catchError(this.handleError)
    );
  }

   // Making the api call for the director info endpoint
   public getDirector(movieDetails: any): Observable<any> {
    console.log(movieDetails);
    return this.http.get(apiUrl + 'movies/directors/:Name', movieDetails).pipe(
    catchError(this.handleError)
    );
  }

 // Making the api call for the genre info endpoint
 public getGenre(movieDetails: any): Observable<any> {
  console.log(movieDetails);
  return this.http.get(apiUrl + 'movies/genres/:Title', movieDetails).pipe(
  catchError(this.handleError)
  );
}

 // Making the api call for the user info endpoint
 public getUser(userDetails: any): Observable<any> {
  console.log(userDetails);
  return this.http.get(apiUrl + 'users/:Username', userDetails).pipe(
  catchError(this.handleError)
  );
}

 // Making the api call to get the user favorite movies endpoint
 public userFavoriteMovies(userDetails: any): Observable<any> {
  console.log(userDetails);
  return this.http.get(apiUrl + 'users/:Name/favoritemovies', userDetails).pipe(
  catchError(this.handleError)
  );
}

// Making the api call for adding to the user favorite movies endpoint
public addUserFavoriteMovies(userDetails: any): Observable<any> {
  console.log(userDetails);
  return this.http.post(apiUrl + 'users/:Username/:Favoritemovies/:ID', userDetails).pipe(
  catchError(this.handleError)
  );
}

// Making the api call for editing the user endpoint
public editUser(userDetails: any): Observable<any> {
  console.log(userDetails);
  return this.http.put(apiUrl + 'users/:Username', userDetails).pipe(
  catchError(this.handleError)
  );
}

// Making the api call for deleting the user info endpoint
public deleteUser(userDetails: any): Observable<any> {
  console.log(userDetails);
  return this.http.delete(apiUrl + 'users/:Username', userDetails).pipe(
  catchError(this.handleError)
  );
}

// Making the api call for deleting the user favorite movie endpoint
public deleteFavoriteMovies(userDetails: any): Observable<any> {
  console.log(userDetails);
  return this.http.delete(apiUrl + 'users/:Username/:Favoritemovies/:ID', userDetails).pipe(
  catchError(this.handleError)
  );
}


private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}
