import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  visible:boolean = false
  nombre:string = "Ashbringer"

  setVisible(){
    this.visible = !this.visible
  }
}
