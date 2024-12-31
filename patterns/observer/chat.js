class Chat {
  constructor() {
    this.users = new Map();
  }

  join(user) {
    if (this.users.has(user.name)) {
      return `${user.name} is already joined the chat`;
    }

    this.users.set(user.name, user);
    console.log(`${user.name} joined the chat, `);
  }

  leave(user) {
    if (!this.users.has(user.name)) {
      return `${user.name}has not joined the chat, please aks him to join`;
    }
    this.users.delete(user.name);
    console.log(`${user.name} left the chat`);
  }

  senMessage(user, message) {
    this.notify(user, message);
  }

  notify(sender, message) {
    this.users.forEach((user) => {
      if (user.name === sender.name) {
        user.update(`${user.name} has a message ${message}`);
      }
    });
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(msg) {
    console.log(msg);
    return msg;
  }
}

function getTest() {
  const c1 = new Chat();

  const u1 = new User("vakadu");
  const u2 = new User("vinod");

  c1.join(u1);
  c1.join(u2);

  c1.senMessage(u1, "Hi there");

  c1.join(u1);
  c1.leave(u1);
}

getTest();
