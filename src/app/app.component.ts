import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sebastiao';

  photos = [

    {
      url:'https://sonhar.info/wp-content/uploads/2018/01/sonhar-com-dragao-768x403.jpg',
      description:'Dragao'
    },
    {
      url:'http://locomotiva26.com.br/wp-content/uploads/2017/02/unicornio-capa-563x353.png',
      description:'Unicornio'
    }

  ];
}
