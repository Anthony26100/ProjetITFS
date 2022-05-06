import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public settings:SettingsService) { }

  ngOnInit(): void {
    this.settings.displayHeader=true;
    this.settings.displayFooter=true;
  }

}
