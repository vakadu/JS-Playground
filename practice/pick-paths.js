function pickPaths(obj, paths) {
    let result = {};
    for(let path of paths) {
        const pat = setPath(result, path, obj)
    }

    return result;
}

function setPath(r,p,o) {
}

const data = {
  user: {
    id: 1,
    name: 'Vinod',
    location: {
      city: 'Bangalore',
      country: 'India'
    }
  },
  meta: {
    isActive: true
  }
};
const paths = ['user.name'];


// const paths = ['user.name', 'user.location.city', 'meta.isActive'];

console.log(pickPaths(data, paths));


