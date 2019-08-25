import { Component, OnChanges, OnInit,
         DoCheck, AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';

import { DummyService } from '../../providers';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnChanges, OnInit,
                                         DoCheck, AfterContentInit,
                                         AfterContentChecked, AfterViewInit,
                                         AfterViewChecked, OnDestroy {
  @Input() someInput?: string;

  constructor(protected dummy: DummyService) { }

  ngOnChanges = (changes: SimpleChanges) => {
    console.log("OnChanges");
    console.log(changes);
  }

  ngOnInit = () => {
    console.log("OnInit");
  }

  ngDoCheck = () => {
    console.log("DoCheck");
  }

  ngAfterContentInit = () => {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked = () => {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit = () => {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked = () => {
    console.log("AfterViewChecked");
  }

  ngOnDestroy = () => {
    console.log("OnDestroy");
  }


}
