class PubSub {
  constructor() {
    this.listners = new Map();
  }

  subscribe(event, listner) {
    if (!this.listners.has(event)) {
      this.listners.set(event, []);
    }
    this.listners.get(event).push(listner);
  }

  publish(event, args) {
    this.listners.get(event).forEach((listner) => {
      listner(args);
    });
  }

  unsubscribe(event, listner) {
    this.listners.set(
      event,
      this.listners.get(event).filter((lisner) => {
        return lisner !== listner;
      })
    );
  }
}

const pub1 = new PubSub();

const logData = (data) => console.log(`Received data: ${data}`);
pub1.subscribe("dataEvent", logData);
pub1.subscribe("dataEvent2", logData);

pub1.publish("dataEvent", "Vinod");
pub1.publish("dataEvent2", "Vinod2");

pub1.unsubscribe("dataEvent", logData);

pub1.publish("dataEvent", "Suresh");
pub1.publish("dataEvent2", "Vino3");
