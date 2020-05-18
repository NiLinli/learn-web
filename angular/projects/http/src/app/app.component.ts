import { Component } from '@angular/core';
import { ConfigService } from './config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private configService: ConfigService
  ) {

  }


  getData0(): void {
    this.configService.getData0().subscribe(value => {
      console.log(value);
    },
      (error) => {
        console.log(error);
      });
  }

  getData1(): void {
    this.configService.getData1().subscribe(resp => {
      // console.log(value);

      // display its headers
      const keys = resp.headers.keys();
      const headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
      // access the body directly, which is typed as `Config`.
      const config = { ...resp.body };
      console.log(headers, config);
    });
  }

  getData2(): void {
    this.configService.getData2().subscribe(value => {
      console.log(value);
      console.log(JSON.parse(value));
    });
  }

  postData(): void {
    this.configService.postData().subscribe(value => {
      console.log(value);
    });
  }

  postData2(): void {
    this.configService.postData2().subscribe(value => {
      console.log(value);
    });
  }


  putData(): void {
    this.configService.putData().subscribe(value => {
      console.log(value);
    });
  }

  deleteData(): void {
    this.configService.deleteData().subscribe(value => {
      console.log(value);
    });
  }

  getPromise(): void {
    this.configService.getDataWithPromise().then((value) => {
      console.log(value);
    });
  }

  getDataWithPromise_Old(): void {
    this.configService.getDataWithPromise_Old().then((value) => {
      console.log(value.json());
    });
  }




}
