// let s = "bname";
// let a = [1, 2];

// console.log(s, a, s.__proto__, a.__proto__);

// let name1 = {
//   first: "vinod",
//   last: "kumar",
// };

// let name2 = {
//   first: "vakas",
//   last: "kumar",
// };

// let name3 = {
//   first: "bind",
//   last: "kumar",
// };

// function printName(args) {
//   console.log(args, "args");

//   return this.first + " " + this.last;
// }

// // function borrowing

// console.log(printName.call(name1, "tes", "testt"));
// console.log(printName.apply(name2, ["tes", "testt"]));

// let binded = printName.bind(name3, "test");
// console.log(binded());


let elem = {
  type: 'button',
  props: {
    label: 'Submit',
    onClick: function(args) {
      console.log(args)
    }
  }
}

console.log(elem.props.onClick.apply(['hello']));


// Your Code (JSX)
//  └── <Button onClick={handleClick} />

// React Creates:
//  └── Fiber Node {
//        type: 'button',
//        props: { onClick: handleClick }
//      }

// React Attaches:
//  └── Global Event Listener on <document>

// User Clicks:
//  └── React SyntheticEvent -> Fiber lookup -> props.onClick(event)
//                                 ↓
//                         Calls handleClick()

