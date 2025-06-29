class WeatherStation {
    constructor() {
        this.stations = new Map(); // Stores subscribers and their weather data
    }

    // Subscribe: Add a weather display unit (observer)
    subscribe(station) {
        if (!this.stations.has(station)) {
            this.stations.set(station, []); // Create an empty list for storing weather data
            console.log(`${station} has subscribed`);
        } else {
            console.log(`${station} is already subscribed`);
        }
    }

    // Publish: Send weather updates to all subscribed units
    publish(units) {
        this.stations.forEach((weatherData, station) => {
            weatherData.push(units); // Add weather data to each station's list
            console.log(`${station} received weather update: ${units}`);
        });
    }

    // Unsubscribe: Remove a weather display unit from subscriptions
    leave(station) {
        if (this.stations.has(station)) {
            this.stations.delete(station);
            console.log(`${station} has unsubscribed`);
        } else {
            console.log(`${station} is not subscribed`);
        }
    }
}

// Usage
const w1 = new WeatherStation();

// Subscribe some weather display units
w1.subscribe("Station 1");
w1.subscribe("Station 2");

// Publish weather updates
w1.publish("Temperature: 25°C, Humidity: 70%");

// Unsubscribe one of the stations
w1.leave("Station 1");

// Publish new updates after unsubscribing
w1.publish("Temperature: 26°C, Humidity: 65%");
