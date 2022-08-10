import { RealService, ServiceInterface } from './Service';

export class Proxy implements ServiceInterface {
  constructor(private realService: RealService) {}

  request(): void {
    if (this.checkAccess()) {
      this.realService.request();
      this.logAccess();
    }
  }

  // 扩展一些行为...
  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}
