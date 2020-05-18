
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Crisis } from './crisis.service';

export function resolverFunc(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
    const id = route.paramMap.get('id');

    return of(new Crisis(1000, '这种方式并不是很常用')).pipe(
        delay(4000),
        map(crisis => {
            if (crisis) {
                console.log('func 方式取到了');
                return crisis;
            } else {
                this.router.navigate(['/crisis-center']);
                return null;
            }
        })
    );

}
