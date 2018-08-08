import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'] 
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos:Photo[] = []
  filter:string = '';
  debounce:Subject<string> = new Subject<string>();
  userName:string='';
  currentPage:number = 1;
  hasMore: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private photoService: PhotoService){}

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
              .pipe(debounceTime(300))
              .subscribe(filter => this.filter = filter);
  }
  
  load(){
    this.photoService
              .listFromUserPaginated(this.userName,++this.currentPage)
              .subscribe(photos => {
                    this.photos = this.photos.concat(photos);
                    if(!photos.length) this.hasMore = false; 
              })
  }
 
  ngOnDestroy(): void {
    this.debounce.unsubscribe()
 }

}
