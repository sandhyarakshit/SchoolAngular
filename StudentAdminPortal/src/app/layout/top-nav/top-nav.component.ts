import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

constructor(private matDialog:MatDialog){}
OpenDialog()
  {
    this.matDialog.open(TopNavComponent, {width: '400px'})
  }

}
