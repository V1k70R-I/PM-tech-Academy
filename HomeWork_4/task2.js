const enemy = {
  name: "Bob"
};
const friend = {
  name: "Alex"
};
const me = friend;
me.name = "Bob";
console.log(friend.name); //Выведет Bob, потому что объект friend идентичен объекту me, и когда мы присвоили объекту me значению параметру name, оно изменилось и у объекта friend
console.log(me === friend); //Выведет true, так как ссылаются на один и тот же объект, являются одной и той же ссылкой в памяти
console.log(me === enemy); //Выведет false, хоть me и enemy - это объкты с одинаковыми значения, но мы сравниваем их принадлежность к одному обекту, а они ссылаются на разные участки памяти