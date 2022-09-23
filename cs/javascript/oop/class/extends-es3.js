'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var SuperType = function () {
    // 声明构造函数
    function SuperType(name) {
        _classCallCheck(this, SuperType);

        this.name = name;
        this.colors = ['green', 'red'];
    }

    // 绑定静态方法
    // 绑定实例方法
    _createClass(SuperType, [{
        key: 'sayName',
        value: function sayName() {
            console.log(this.name);
        }
    }]);

    // 返回构造函数
    return SuperType;
}();

var SubType = function (_SuperType) {
    _inherits(SubType, _SuperType);

    function SubType(name, age) {
        _classCallCheck(this, SubType);

        var _this = _possibleConstructorReturn(this, (SubType.__proto__ || Object.getPrototypeOf(SubType)).call(this, name));

        _this.age = age;
        return _this;
    }

    _createClass(SubType, [{
        key: 'sayAge',
        value: function sayAge() {
            console.log(this.age);
        }
    }]);

    return SubType;
}(SuperType);

var sub1 = new SubType();
console.log(sub1 instanceof SubType); // true
console.log(sub1 instanceof SuperType); // true