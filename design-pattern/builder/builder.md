# builder

建造器/生成器 => **创建复杂组合结构**

将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示

- 复杂产品: Product
- 构建: Builder/ConcreteBuilder
- 表示: Director

通用性

- ConcreteBuilder 具体产品可以扩展
- Director 表示逻辑可以扩展
