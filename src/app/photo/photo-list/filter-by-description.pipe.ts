import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';


@Pipe({ name:'filterByDescription'  })
export class FilterByDescription implements PipeTransform{


    transform(photos: Photo[],descriptionFilter: string) {
        
        descriptionFilter = descriptionFilter.trim().toLocaleLowerCase();

        if (descriptionFilter){
            return photos.filter(photo => photo
                                            .description
                                            .trim()
                                            .toLocaleLowerCase()
                                            .includes(descriptionFilter));
        }else{
            return photos;
        }
    }

}