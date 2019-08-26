import { Component, OnChanges, OnInit,
         DoCheck, AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';

import { DummyService, RequestService } from '../../providers';

import { Observable } from 'rxjs';

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


  public data = [];

  constructor(protected dummy: DummyService, public requestService: RequestService) { }

  ngOnChanges = (changes: SimpleChanges) => {
    console.log("OnChanges");
    console.log(changes);
  }

  ngOnInit() {
    this.getData().subscribe( res => {
      this.data = res;
    });
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

  getData = (): Observable<any>  => {
    const charsIds = [];
    for (let i = 0; i < 20; i ++) {
      charsIds.push(Math.round(Math.random() * 200));
    }
    const apiInput = {
      url: 'https://rickandmortyapi.com/api/character/' + charsIds.join(","),
      method: 'GET',
      qParams: null,
      payload: null,
    };
    return this.requestService.request(apiInput);
  }


}
