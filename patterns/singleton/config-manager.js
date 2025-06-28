class ConfigManager {
  constructor() {
    if (ConfigManager.instance) {
      return ConfigManager.instance;
    }

    this.config = {
      apiBaseUrl: "https://api.example.com",
      isFeatureXEnabled: false,
      environment: "development",
    };

    ConfigManager.instance = this;
  }

  getConfig(key) {
    return this.config[key];
  }

  setConfig(key, val) {
    this.config[key] = val
  }

    getAllConfigs() {
    return this.config;
  }

}

const config1 = new ConfigManager();
console.log(config1.getConfig('apiBaseUrl')); // "https://api.example.com"

const config2 = new ConfigManager();
console.log(config2.getConfig('environment')); // "development"

// Update a configuration
config1.setConfig('environment', 'production');
console.log(config2.getConfig('environment')); // "production" - Same instance, so the value is shared

console.log(config1 === config2); // true - Both references point to the same instance

