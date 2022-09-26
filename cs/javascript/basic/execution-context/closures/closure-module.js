// 1
function createAnimal(name, age) {

    // private
    var name, age;

    return {
        getName: function () {
            return name;
        },
        setName: function (value) {
            name = value;
        },
        getAge: function () {
            return age;
        },
    };
}

// createAnimal activition object 存在与 scope 中 达到私有的目的
var a1 = createAnimal('monkey', 5);
a1.setName('monkey2')
console.log(a1.getName());

var a2 = createAnimal('panda', 2);
console.log(a2.getAge());


// 2
var loadCallback = (function () {
    // private
    var data = [];

    // 当文档与其外部资源完全加载并显示给用户时就会触发
    window.onload = function () {
        for (var i = 0; i < data.length; i++) {
            data[i]();
        }
    };

    return {
        addEvent: function (fn) {
            data.push(fn);
        },
        removeEvent: function (fn) {
            for (var i = data.length - 1; i >= 0; i--) {
                if (data[i] === fn) {
                    data.splice(i, 1);
                }
            }
        }
    };
})();

loadCallback.addEvent(function () {
    console.log('我加载了1');
});

function f() {
    console.log('我加载了3');
}

loadCallback.addEvent(f);

loadCallback.addEvent(function () {
    console.log('我加载了2');
});

loadCallback.removeEvent(f);


// 3 
function createCache() {
    var data = [],
        max = 3;

    function cache(key, value) {

        if (value) {
            if (data.length >= 3) {
                var temp = data.shift();
                delete cache[temp];
            }
            data.push(key);
            cache[key] = value;
        } else {
            return cache[key];
        }
    }
    return cache;
}

var kvCache = createCache();

kvCache('name1', '张三');
kvCache('name2', '李四');
kvCache('name3', '王五');
kvCache('name4', '找钱');

console.log(kvCache('name4'));