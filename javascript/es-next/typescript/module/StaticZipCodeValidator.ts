

export const numberRegexp2 = /^[0-9]+$/;


// default 的导出是一个值
// 所以命名与否都无所谓
export default function (s: string) {
    return s.length === 5 && numberRegexp2.test(s);
}