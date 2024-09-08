class EventEmitter {
	constructor() {
		this.events = new Map();
	}

	subscribe(eventName, callback) {
		if (!this.events.has(eventName)) {
			this.events.set(eventName, new Map());
		}

		const subsricptionId = Symbol();
		const eventSubscriptions = this.events.get(eventName);
		eventSubscriptions.set(subsricptionId, callback);

		return () => {
			eventSubscriptions.delete(subsricptionId);

			if (eventSubscriptions.size === 0) {
				this.events.delete(eventName);
			}
		};
	}

	unsubscribe(eventName, subscriptionId) {
		if (this.events.has(eventName)) {
			const eventSubscriptions = this.events.get(eventName);
			eventSubscriptions.delete(subscriptionId);
			if (eventSubscriptions.size === 0) {
				this.events.delete(eventName);
			}
		}
	}

	emit(eventName, ...args) {
		const subs = this.events.get(eventName);

		if (subs) {
			subs.forEach((element) => {
				element(...args);
			});
		}
	}
}

const emitter = new EventEmitter();

const unsub1 = emitter.subscribe('event1', (...link) => {
	console.log(link);
});

emitter.emit('event1', 'test1', 'test2');

unsub1();

emitter.emit('event1', 'test12', 'test22');
