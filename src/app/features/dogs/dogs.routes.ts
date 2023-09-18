import { provideHttpClient } from "@angular/common/http";
import { Route } from "@angular/router";

export default [
    {
        path: '',
        pathMatch: 'prefix',
        providers: [provideHttpClient(),],

    },
] as Route[]
/*
GET

dogs/match
/dogs/breeds
/dogs/search
    search params:
        breeds - an array of breeds
        zipCodes - an array of zip codes
        ageMin - a minimum age
        ageMax - a maximum age

        additionally:
            size - the number of results to return; defaults to 25 if omitted
            from - a cursor to be used when paginating results (optional)
            sort - the field by which to sort results, and the direction of the sort; in the format sort=field:[asc|desc]
return value:
resultIds - an array of dog IDs matching your query
total - the total number of results for the query (not just the current page)
next - a query to request the next page of results (if one exists)
prev - a query to request the previous page of results (if one exists)


POST

/dogs
/dogs/match
/locations
/locations/search


AUTH (post)
/auth/login
/auth/logout

*/