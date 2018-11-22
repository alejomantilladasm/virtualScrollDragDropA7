import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises:any = [];

  constructor(private _http:HttpClient) { 
    let url='https://restcountries.eu/rest/v2/lang/es';
    this._http.get(url).subscribe(paises=>{
      this.paises = paises;
      console.log(this.paises);
    });
  }

  ngOnInit() {
  }

  drop(event:CdkDragDrop<any>){
    console.log('OK..!', event);
    moveItemInArray(this.paises,event.previousIndex, event.currentIndex);
  }

}
