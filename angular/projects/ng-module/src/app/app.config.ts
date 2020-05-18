export interface AppConfig {
    apiEndpoint: string;
    title: string;
    debug: boolean;
}

import { InjectionToken } from '@angular/core';

// 提供 token
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

// 提供 value
export const APP_CONFIG_INFO: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection',
    debug: true
};
