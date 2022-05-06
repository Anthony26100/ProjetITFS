import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  constructor(public settings:SettingsService) { }

  ngOnInit(): void {
    this.settings.displayHeader=true;
    this.settings.displayFooter=true;
  }

}
