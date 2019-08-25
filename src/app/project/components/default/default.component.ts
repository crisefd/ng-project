import {
  Component,
  OnChanges,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnChanges, OnDestroy {

  constructor(protected router: Router) { }

  ngOnChanges = () => {
  }

  ngOnInit = () => {
    debugger;
    this.router.navigate(['example']);
  }

  ngOnDestroy = () => {
  }


}
