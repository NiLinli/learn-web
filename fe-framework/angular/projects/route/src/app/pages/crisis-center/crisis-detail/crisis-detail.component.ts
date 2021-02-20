import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../providers/crisis.service';
import { DialogService } from '../../../providers/dialog.service';

@Component({
  templateUrl: './crisis-detail.component.html',
  styles: ['input {width: 20em}']
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('style.display') display = 'block';

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    // 取得预先 resolve 的数据

    console.log(1);

    this.route.data
      .subscribe((data: { crisis: Crisis }) => {
        console.log(data);

        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });

    this.route.paramMap.subscribe((params: Params) => {
      console.log(params.get('id'));
      console.log(params.get('person'));
      console.log(params.get('person1'));
    });


    console.log('this.route.routeConfig.data = ', this.route.routeConfig.data);
    console.log(3);

  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  // 当用户要导航到外面时，该怎么处理这些既没有审核通过又没有保存过的改动呢
  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    // 传递可选参数
    this.router.navigate(['../', { id: crisisId, person: { name: 'nixixi', age: 18 } }], { relativeTo: this.route });
  }
}
