function groupBy(data, cat) {
//   let result = {};

//   for (let d of data) {
//     if (!result[d[cat]]) {
//       result[d[cat]] = [];
//     }

//     result[d[cat]].push(d)
//   }

//   console.log(result);
  

//   return result

    return data.reduce((acc, cur) => {
        const key = cur[cat]

        if(!acc[key]) {
            acc[key] = []
        }

        acc[key].push(cur)
        return acc
        
    }, {})
}

const users = [
  { id: 1, role: "admin" },
  { id: 2, role: "user" },
  { id: 3, role: "admin" },
  { id: 4, role: "guest" },
];

console.log(groupBy(users, "role"));

// groupBy([{ type: 'a' }, { type: 'b' }, { type: 'a' }], 'type');

