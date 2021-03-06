import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  title = 'hellong';

  constructor(private readonly appService: AppService) {}
  
  ngOnInit(): void {
    this.appService.init();
  }
}
