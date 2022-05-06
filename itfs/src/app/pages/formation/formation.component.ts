import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor(public settings:SettingsService) { }

  ngOnInit(): void {
    this.settings.displayHeader=true;
    this.settings.displayFooter=true;
  }

}
