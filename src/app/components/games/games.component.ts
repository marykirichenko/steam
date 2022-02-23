import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {PageEvent} from '@angular/material/paginator'

export interface CardElement{
  title: string
  genre: string
  price: number
  description:string
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {
  constructor(private http: HttpClient){}
  gameCardArray: CardElement[] = []
  gameOnPage:CardElement[] = []
  onPageChange(event:PageEvent){
    console.log(event)
    const start = event.pageIndex * event.pageSize
    let end = start+event.pageSize
    if(end >this.gameCardArray.length) end = this.gameCardArray.length
    this.gameOnPage = this.gameCardArray.slice(start,end)
    /*this.numOnPage = this.gameCardArray.slice(event.pageIndex * event.pageSize,
      (event.pageSize + event.pageIndex * event.pageSize) > this.gameCardArray.length ?
        this.gameCardArray.length : event.pageSize + event.pageIndex * event.pageSize)*/
  }
  ngOnInit(){

  this.http.get('http://localhost:3000/games').subscribe((data:any) => {this.gameCardArray =data
    this.gameOnPage = this.gameCardArray.slice(0,6)})
  }

}
