# compiler

tempate -> render function

```js
// /src/compiler/index.js
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  // 解析 AST Tree
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    // 优化 AST tree, 标记静态节点
    optimize(ast, options)
  }
  // 生成 createElement 代码
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
```
