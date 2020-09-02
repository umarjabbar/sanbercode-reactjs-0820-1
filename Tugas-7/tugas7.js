// Soal 1
// Release 0
class Animal {
  constructor (name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get name() {
    return this._name;
  }

  get legs() {
    return this._legs;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Release 1
// Code class Ape dan class Frog di sini

class Ape extends Animal {
  constructor(name) {
    super(name);
    this._legs = 2;
  }

  yell(){
    return "Auooo";
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name);
    this._cold_blooded = true;
  }

  jump(){
    return "hop hop";
  }
}
var sungokong = new Ape("kera sakti") 
sungokong.yell() // "Auooo"
// console.log(sungokong.name)
// console.log(sungokong.legs)
// console.log(sungokong.yell())

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
// console.log(kodok.name)
// console.log(kodok.legs)
// console.log(kodok.jump())

// Soal 2
class Clock {
  constructor ({template}) {
    this._template = template;
    this._timer = null;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this.render();
    this._timer = setInterval(this.render.bind(this), 1000);
  }
}
// function Clock({ template }) {
  
//   var timer;

//   function render() {
//     var date = new Date();

//     var hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     var mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     var secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     var output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };

// }

var clock = new Clock({template: 'h:m:s'});
clock.start(); 