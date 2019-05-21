class StepCountService {
  constructor() {
    this.stepCount = localStorage.getItem('step') || 1;
  }

  count(id) {
    localStorage.setItem('step', JSON.stringify(id));
  }
  value() {
    return JSON.parse(localStorage.getItem('step'));
  }
}

module.exports = new StepCountService();
