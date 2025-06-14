function camelCases(input) {
    let result = {};

    for(let key in input) {
      let typed = input[key];      
      let camelCaseKey = camelCase(key);      
      if(typeof typed === 'object') {
        const newResult = camelCases(typed);
        result[camelCaseKey] = newResult        
      } else {
        result[camelCaseKey] = input[key]      
      }
    }

    console.log(result);
    
    return result
}

function camelCase(str) {
  return str.split('_').map((s, i) => {    
    return i === 0 ? s : s[0].toUpperCase() + s.slice(1)
  }).join('')
}

function capitalize(str) {    
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const input = {
  user_id: 1,
  id: 3,
  user_profile: {
    first_name: 'Alice',
    last_name: 'Smith',
    contact_info: {
      phone_number: '1234567890'
    }
  }
};

camelCases(input)
