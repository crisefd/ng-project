import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatSidenavModule,
        MatRadioModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatSidenavModule,
        MatRadioModule,
        MatInputModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {}
