import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationExtras } from '@angular/router';

import { Crisis, CrisisService } from '../providers/crisis.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './crisis-list.component.html'
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');

        console.log(typeof params.get('person'));
        return this.service.getCrises();


      })
    );

    this.route.paramMap.subscribe(value => console.log(value.get('person')));
    console.log(typeof this.route.snapshot.params['person'])
  }


  goToDetail(id): void {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        session_id: '123',
        location_id: 11
      },
      fragment: 'anchor',
      // queryParamsHandling: 'preserve',
      // preserveFragment: true
    };
    this.router.navigate(['/crisis-center', id, {
      person: '123',
      person1: JSON.stringify({ name: 'nixixi-list', age: 18 })
    }], navigationExtras);
  }
}
