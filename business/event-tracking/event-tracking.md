# Event Tracking

- PV: PageView 页面被用户浏览的次数
- UV: Unique Visitor 唯一访问人

两个指标

1. User Profile 用户角度, 可为事件提供用户信息
2. Event 事件角度

角度

- 前端埋点: 偏向业务无关, 统计用户习惯, 页面停留时间, 点击率 PV/UV
- 后端埋点: 业务相关统计(也可前端埋点, 但是准确性不高)

代码接入

- 主动触发埋点
- 通过重新宿主环境提供的 JS 对象函数静默埋点

## 神策

- 全埋点: 少量代码, 统计 PV/UV(2.1 还不能统计每个页面停留时间)
- 代码埋点: 分析自定义业务指标, 统计页面停留时间

### 统计页面停留时间

自行计算

```js
var saStartTime = new Date();
window.onbeforeunload = function () {
  var end = new Date();
  var duration = (end.getTime() - saStartTime.getTime()) / 1000;
  sa.track('index_leave', {
    pageUrl: location.href,
    pageStayTime: duration,
    pagePosition: $(window).scrollTop(),
  });
};
```
