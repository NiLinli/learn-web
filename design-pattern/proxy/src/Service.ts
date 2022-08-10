export interface ServiceInterface {
  request(): void;
}

export class RealService implements ServiceInterface {
  request(): void {
    console.log('RealService: Handling request.');
  }
}
