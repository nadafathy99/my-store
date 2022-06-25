import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavModeActivated = new EventEmitter();
  constructor(private breakpointObserver:BreakpointObserver){}
  smallScreenWidth = 720;
  isSmallScreen=false;
  ngOnInit(): void {
    this.breakpointObserver.observe([`(max-width:${this.smallScreenWidth}px)`]).subscribe((state:BreakpointState)=>this.isSmallScreen=state.matches)
  }
  activateSidenavMode(){
    this.sidenavModeActivated.emit('true');
  }
}
