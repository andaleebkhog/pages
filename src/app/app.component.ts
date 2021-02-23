import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pages';
  currentPage = 0;
  images = [
    {
      title : 'Beach',
      url : 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Snow',
      url : 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'east',
      url: 'https://images.unsplash.com/photo-1542317901-57565fe27ba1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWlkZGxlJTIwZWFzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'forrest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ycmVzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Beach',
      url : 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Snow',
      url : 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'east',
      url: 'https://images.unsplash.com/photo-1542317901-57565fe27ba1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWlkZGxlJTIwZWFzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'forrest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ycmVzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Beach',
      url : 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Snow',
      url : 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'east',
      url: 'https://images.unsplash.com/photo-1542317901-57565fe27ba1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWlkZGxlJTIwZWFzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'forrest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ycmVzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Beach',
      url : 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Snow',
      url : 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'east',
      url: 'https://images.unsplash.com/photo-1542317901-57565fe27ba1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWlkZGxlJTIwZWFzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'forrest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ycmVzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Beach',
      url : 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Snow',
      url : 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'east',
      url: 'https://images.unsplash.com/photo-1542317901-57565fe27ba1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWlkZGxlJTIwZWFzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'forrest',
      url: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ycmVzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }

  ];

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
