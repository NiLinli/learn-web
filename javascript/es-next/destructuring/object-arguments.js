function setCookie(name, value, options) {
    options = options || {};        // 函数默认值

    let secure = options.secure || false,    // 获取数据 + 设置默认值
        path = options.path || 'blog',
        domain = options.domain || 'nilinli.com';

    // set cookie 逻辑代码
    console.log(`secure -> ${secure}
     path -> ${path}
     domain -> ${domain}`);

}

// 替代
function setCookie3(name, value, {
    secure = false,
    path = '/blog',
    domain = 'nilinli.com'
} = {}) {

    console.log(`secure -> ${secure}
    path -> ${path}
    domain -> ${domain}`);
}


setCookie('type', 'js', {
    secure: true,
    domain: 'nilinli.com'
});


setCookie3('type', 'js', {
    secure: true,
    domain: 'nilinli.com'
});





