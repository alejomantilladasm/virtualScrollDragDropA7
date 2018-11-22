import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

@ViewChild (CdkVirtualScrollViewport) viewPort:CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() { 
    console.log(this.personas);
  }

  ngOnInit() {    
  }


  irFinal(){
    console.log('Ir final ...!');
    this.viewPort.scrollToIndex(this.personas.length);
  }

  irInicio(){
    console.log('Ir inicio ...!');
    this.viewPort.scrollToIndex(0);
  }

  irMitad(){
    console.log('Ir mitad ...!');
    this.viewPort.scrollToIndex(this.personas.length/2);
  }
}
