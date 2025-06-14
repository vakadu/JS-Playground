// function camelCases(collection) {
//   //object
//   const isObject = typeof collection === "object";

//   if (!isObject) {
//     return collection;
//   }

//   const keyValues = Object.entries(collection);

//   const convertedCollection = keyValues.map(([key, value]) => {
//     return [
//       camelCase(key),
//       typeof value === "object" ? camelCases(value) : value,
//     ];
//   });

//   return Object.fromEntries(convertedCollection);
// }

// function camelCase(str) {
//   let result = "";
//   let toUpperCase = false;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (char === "_" || char === " " || char === "-") {
//       // When encountering a separator, set flag to convert next letter to uppercase
//       toUpperCase = true;
//     } else if (toUpperCase) {
//       // Convert the current letter to uppercase and reset the flag
//       result += char.toUpperCase();
//       toUpperCase = false;
//     } else {
//       // Add the letter as is
//       result += char;
//     }
//   }

//   return result;
// }

// // function camelCase(str) {
// //   let parsedString = str.toLowerCase();

// //   return parsedString
// //     .replace(/(?<=[^a-zA-Z])([a-z]+)/g, (match, p0) => {
// //       return capitalize(p0);
// //     })
// //     .replace(/[^a-zA-Z0-9]/g, "");
// // }

// function capitalize(s) {
//   return s.charAt(0).toUpperCase() + s.slice(1);
// }


function camelCases(collection) {
  if(typeof collection !== 'object'){
    return null
  }  

  const convertedCollection = Object.entries(collection).map(([k, v]) => {
    return [
      camelCase(k),
      typeof v === 'object' ? camelCases(v) : v
    ]   
  })

  return Object.fromEntries(convertedCollection)
}

function camelCase(key) {
  const split1 = key.split('_');
  const key2 = split1[1].charAt(0).toUpperCase() + split1[1].slice(1)
  return split1[0]+key2;
  
}

console.log(camelCases({ total_questions: 200, total_users: 10000 }));
console.log(
  camelCases({
    total_questions: 200,
    social_handles: { youtube_channel: "youtube.com/devtoolstech" },
  })
);
