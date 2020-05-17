import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { LoggerService } from './logger.service';


@Component({
  selector: 'app-hero-bios',
  templateUrl: './hero-bios.component.html',
  styleUrls: ['./hero-bios.component.css'],
  providers: [HeroService]
})
export class HeroBiosComponent implements OnInit {

  constructor(logger: LoggerService) {
    logger.logInfo('Creating HeroBiosAndContactsComponent');
  }

  ngOnInit() {
  }

}
