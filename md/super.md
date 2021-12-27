---
title: super란?
description: super는 현재 객체의 프로토타입 객체를 가리키는 포인터입니다.
createdAt: 2021-11-12
minToRead: 5
---

# super 란?

## super 참조를 통한 쉬운 프로토타입 접근

- `super` 는 현재 객체의 프로토타입 객체를 가리키는 포인터이며, `Object.getPrototypeOf(this)`의 값과 동일하다.
- 간결한 메서드 안에서 `super` 참조를 사용하여 프로토타입 객체 내 어떤 메서드든 호출할 수 있다.
- `super` 참조를 사용하여 프로토타입의 메서드를 실행하여도, 현재의 `this`가 바인드된 것처럼 동작한다.

```jsx
let dog = {
  getGreeting() {
    return this + " Woof";
  },
  toString() {
    return "[dog] ";
  },
};

let person = {
  getGreeting() {
    return this + " Hello";
  },
  toString() {
    return "[person] ";
  },
};

let friend = {
  getGreeting() {
    // return Object.getPrototypeOf(friend).getGreeting.call(this) + ", hi!";
    return super.getGreeting() + ", hi!";
  },
  toString() {
    return "[friend] ";
  },
};

Object.setPrototypeOf(friend, person);

console.log(friend.getGreeting()); // '[friend]  Hello, hi!'
```

## [[HomeObject]]

- 모든 JS 함수는 `[[HomeObject]]` 내부 slot을 가집니다. `[[HomeObject]]`는 함수가 원래 정의된 객체를 나타냅니다. 따라서 **메서드에서만 값이 존재하며, 그 외에서는 `undefined`가 할당됩니다.**

※ ECMAScript 상 메서드의 정의는 `[[HomeObject]]`가 존재하는 함수입니다.

- `super`를 참조할 때는 언제나 `[[HomeObject]]`를 사용하여 동작을 결정한다.
  1. 프로토타입 참조를 검색하기 위해 `[[HomeObject]]`의 `Object.getPrototypeOf()`를 호출한다.
  2. 프로토타입에서 같은 이름의 함수를 검색한다.
  3. `this`를 바인딩하고 그 메서드를 호출한다.
  - `super`의 메서드가 호출되면 런타임은 현재 함수의 `[[HomeObject]]` 부터 `super` 메서드의 조회를 시작합니다. 호출되는 메서드가 현재 객체 또는 즉시 프로토타입에서 상속되지 않는 것을 확신할 수 있습니다. (※ 확인 필요)

## Reference

[https://stackoverflow.com/questions/51165046/why-homeobject-is-different-in-shorthand-syntax-of-method](https://stackoverflow.com/questions/51165046/why-homeobject-is-different-in-shorthand-syntax-of-method)

[https://262.ecma-international.org/12.0/#table-internal-slots-of-ecmascript-function-objects](https://262.ecma-international.org/12.0/#table-internal-slots-of-ecmascript-function-objects)

[https://forum.kirupa.com/t/js-tip-of-the-day-a-functions-home-object/643187](https://forum.kirupa.com/t/js-tip-of-the-day-a-functions-home-object/643187)
