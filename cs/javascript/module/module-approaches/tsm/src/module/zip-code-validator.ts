import { StringValidator } from './base-validation';

export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

// 重命名导出
export { ZipCodeValidator as mainValidator };
