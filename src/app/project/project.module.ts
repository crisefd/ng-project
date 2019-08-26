import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './components/example';
import { DummyService, RequestService } from './providers';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ExampleComponent,
  ],
  entryComponents: [],
  imports: [
    RouterModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    DummyService,
    RequestService,
  ],
  bootstrap: [],
  schemas: []
})
export class ProjectModule {
  public static getRoutes(pathPrefix: string = ''): Routes {
    return [
      {
        path: 'example',
        component: ExampleComponent,
      },
      // {
      //   path: '**',
      //   redirectTo: '',
      // }
    ]
  }
};
