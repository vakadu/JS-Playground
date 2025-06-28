class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    this.messages = {
      log: [],
      warn: [],
      error: [],
    };

    Logger.instance = this;
  }

  log(message) {
    if (!this.messages.log) {
      this.messages.log = [];
    } else {
      this.messages.log.push(message);
    }
    console.log(this.messages);
  }

  warn(message) {
    if (!this.messages.warn) {
      this.messages.warn = [];
    } else {
      this.messages.warn.push(message);
    }
  }

  error(message) {
    if (!this.messages.error) {
      this.messages.error = [];
    } else {
      this.messages.error.push(message);
    }
  }

  getLogs() {
    return this.messages;
  }
}

const logger1 = new Logger();
logger1.log("This is a log message.");

const logger2 = new Logger();
logger2.warn("This is a warning message.");

console.log(logger1 === logger2); // true - they should be the same instance
console.log(logger1.getLogs()); // Logs from both instances
