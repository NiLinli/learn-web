const book = {
    title: "Professional JavaScript",
    authors: [
        "Nicholas C. Zakas"
    ],
    edition: 3,
    year: 2011,
    toJSON: function () {
        return this.title;
    }
};

const jsonText = JSON.stringify(book);
console.log(jsonText);

// Date 定义了 toJSON 
// 其他对象也可以定义 toJSON

// stringify invoke 步骤
// 1. 调用 toJSON, 有输出 toJSON 返回值, 不理会默认输出方式
// 2. 没有 toJSON , 默认的输出方式

function replacer(key, value) {
    switch (key) {
        case 'title':
            return 'new title';
        default:
            return value;
    }
}

const jsonText1 = JSON.stringify(book, replacer);
console.log(jsonText1);