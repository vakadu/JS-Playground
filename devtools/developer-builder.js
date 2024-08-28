class Developer {
	constructor(name) {
		this.name = name.toLowerCase();
		this.skills = new Map();
		this.frameworks = new Map();

		let key = name.toLowerCase();
		if (!this.skills.has(key)) {
			this.skills.set(key, []);
		} else {
			throw new Error('developer already exists');
		}

		if (!this.frameworks.has(key)) {
			this.frameworks.set(key, []);
		} else {
			throw new Error('developer already exists');
		}
	}

	addSkill(skill) {
		let tempSkills = this.skills.get(this.name);
		if (!tempSkills.includes(skill)) {
			tempSkills.push(skill);
		} else {
			throw new Error('skill already exists');
		}
		this.skills.set(this.name, tempSkills);
		return this;
	}

	addFramework(framework) {
		let tempFrameworks = this.frameworks.get(this.name);
		if (!tempFrameworks.includes(framework)) {
			tempFrameworks.push(framework);
		} else {
			throw new Error('framework already exists');
		}
		this.frameworks.set(this.name, tempFrameworks);
		return this;
	}

	removeSkill(skill) {
		let tempSkills = this.skills.get(this.name);
		let filterData = tempSkills.filter((skil) => {
			return skil !== skill;
		});
		this.skills.set(this.name, filterData);
		return this;
	}

	removeFramework(framework) {
		let tempFramework = this.frameworks.get(this.name);
		let filterData = tempFramework.filter((frame) => {
			return frame !== framework;
		});
		this.frameworks.set(this.name, filterData);
		return this;
	}

	getSKills() {
		let result = [],
			tempSkills = this.skills.get(this.name);
		for (let key of tempSkills) {
			result.push(key);
		}
		return result.join(',');
	}

	getFrameworks() {
		let result = [],
			tempFrameworks = this.frameworks.get(this.name);
		for (let key of tempFrameworks) {
			result.push(key);
		}
		return result.join(',');
	}
}

const developer = new Developer('elon');
developer.addSkill('html').addSkill('js');
developer.addFramework('reactjs');
developer.addFramework('vuejs');
console.log(developer.getSKills());
console.log(developer.getFrameworks());
developer.removeSkill('js');
developer.removeFramework('reactjs');
console.log(developer.getSKills());
console.log(developer.getFrameworks());
