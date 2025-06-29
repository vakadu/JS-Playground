class NotificationManager {
  constructor() {
    this.notifications = new Map();
  }

  subscribe(user) {
    if (!this.notifications.get(user)) {
      this.notifications.set(user, []);
      console.log(`${user} added`);
    }
  }

  publish(user, message) {
    if (!this.notifications.get(user)) {
      console.log(`${user} no there`);
      return;
    }

    this.notifications.get(user).push(message); // Add the message to the user's list
    console.log(`Message to ${user}: ${message}`);
  }

  getMessages(user) {
    return this.notifications.get(user);
  }

  unSubscribe(user) {
    if (this.notifications.has(user)) {
      this.notifications.delete(user);
      console.log(`${user} deleted`);
    } else {
      console.log(`${user} not found to unsubscribe`);
    }
  }
}

const n1 = new NotificationManager();
n1.subscribe("vinod");
n1.subscribe("vak");
n1.publish("vinod", "test1");
n1.publish("vinod", "test2");
n1.publish("vak", "test3");
n1.publish("vak", "test4");
console.log(n1.getMessages("vinod"));
