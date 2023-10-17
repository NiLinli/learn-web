# mvc

MV\*

前端 Action 响应改变 View
后端接口响应返回数据给 View

## MVC

传统 MVC: User Action/API -> Controller --> Model --> View

- Model 数据模型
  - 数据
  - 处理数据的方法
  - 通知 View 更新 (传统)
- View 视图
  - Model Update 更新 View (传统)
  - Controller 更新 View 
- Controller
  - 处理(监听) Action 
  - 改变 Model
  - 通知 View 更新

轻重 Model/Controller/Service 层取决于代码组织策略   
MVC 的具体实现也有很多不同, 主要在 View 更新的地方  

## MVVM

MVVM: View <- Viewport <=> Model  

本质也是单向数据流 正向然后反向  
User Action/API -> Viewport1(Controller) -> Model -> Viewport2 -> View

- Viewport1 是 Controller
- Model 更新 通过 Viewport2 代理更新 View
- Viewport 在 View 和 Model 之间

