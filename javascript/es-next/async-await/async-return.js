// async 函数的返回值
// 返回值隐式的传递给 Promise.resolve

const getRejectP = () => Promise.reject({ message: 'error' });
const getResolveP = () => Promise.resolve({ name: 'nixixi' });


// 返回 普通值
async function test11() {
  return 11;
}

(async function () {
  try {
    let a = await test11();
    console.log(a);
  } catch (error) {
    console.log(error);
  }
})();

// 返回 promise
async function test21() {
  return getResolveP();
}

async function test22() {
  return getRejectP();
}

(async function () {
  try {
    let a = await test21();
    console.log(21, a);
  } catch (error) {
    console.log(21, error);
  }

  try {
    let a = await test22();
    console.log(22, a);
  } catch (error) {
    console.log(22, error);
  }
})();


async function test31() {
  return await getResolveP();
}

async function test32() {
  return await getRejectP();  // 返回前跑抛出异常, 所以和 return getRejectP() 效果相同
}

(async function () {
  try {
    let a = await test31();
    console.log(31, a);
  } catch (error) {
    console.log(31, error);
  }

  try {
    let a = await test32();
    console.log(32, a);
  } catch (error) {
    console.log(32, error);
  }
})();

