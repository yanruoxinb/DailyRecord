

/**
 * 单例模式的简单实现
 * 增加了类的不透明性，使用者必须知道这是一个单例类，不同于new XXX,使用的是 Singleton.getInstance
 */
let Singleton = function (name) {
  this.name = name;
};
Singleton.prototype.getName = function () {
 console.log(this.name)
};
Singleton.getInstance = (function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  }
})();

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
console.log(a === b); 
console.log(a.getName() + '---name---');


/**
 * 输出结果:
 * true
 * sven1
 * undefined---name---
 */
