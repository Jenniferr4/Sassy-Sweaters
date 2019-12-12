import { Component } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootcamp-css-stuff';
  faBars=faBars;

  public show:boolean = false;
  public buttonName:any = '';

  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "";
    else
      this.buttonName = "";
  }

  public cartShow:boolean = false;
  public cartButtonName:any = '';

  cartToggle() {
    this.cartShow = !this.cartShow;
    if(this.cartShow)  
      this.cartButtonName = "";
    else
      this.cartButtonName = "";
  }
}
