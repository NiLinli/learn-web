import { Proxy } from './Proxy';
import { RealService, ServiceInterface } from './Service';

function clientCode(subject: ServiceInterface) {
  subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realService = new RealService();
clientCode(realService);

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realService);
clientCode(proxy);
