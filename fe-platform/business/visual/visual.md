# visual

- map
- svg

平台相关

- canvas
- webGL

## 开源图形库

### echart

series + data 每个系列单独管理数据
series + dataset 集中管理一个图表所有 series 的数据  


### dimensions 维度

二维表结构 数据

- 二维数组(列读取) => 如果第一行没有维度名, 也需要通过 dimensions 生成维度名字
- 对象数组 => dimensions 生成维度名字

一列/一个字段从每个数据项全部取出来就是一个维度
第一行/第一列是维度名字

### encode

指定哪个维度被作用于哪里

有些 series 不支持 encode

### d3
