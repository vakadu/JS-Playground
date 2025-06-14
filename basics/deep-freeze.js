const user = {
  name: 'Alice',
  settings: {
    theme: 'dark'
  }
};

// Object.freeze(user);

// user.settings.theme = 'light'


function deepFreeze(obj) {
    Object.freeze(obj);

    Object.entries(obj).map(([_, val]) => {
        if(typeof val === 'object') {
            deepFreeze(val)
        }
    })

    return obj
}
 
const newObj = deepFreeze(user)
console.log(newObj);


// console.log(user.settings.theme = 'light');

