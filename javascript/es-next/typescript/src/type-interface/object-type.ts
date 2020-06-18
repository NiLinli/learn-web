type User1 = {
  name: string,
  age: number
}

// 可以合并声明
interface User2 {
  name: string
}

interface User2 {
  age: number
}