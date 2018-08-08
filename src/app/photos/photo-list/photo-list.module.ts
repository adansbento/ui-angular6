import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-description.pipe';

@NgModule({
    declarations:[
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription
    ],


    imports:[
        CommonModule
    ]

})
export class PhotoListModule{


}