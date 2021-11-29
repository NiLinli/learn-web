import { WeatherData } from "./src/WeatherData";
import { ConditonsDisplay } from "./src/ConditonsDisplay";


const weatherData = new WeatherData();

const display1 = new ConditonsDisplay(weatherData, 'display1');
const display2 = new ConditonsDisplay(weatherData, 'display2');
const display3 = new ConditonsDisplay(weatherData, 'display3');

weatherData.setMeasurements(35.2);

weatherData.removeObserver(display2);
weatherData.setMeasurements(23.3);