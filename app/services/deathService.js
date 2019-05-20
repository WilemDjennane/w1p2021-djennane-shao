class DeathService {
  constructor() {
    this.death = localStorage.getItem('death');
  }

  deathName(id) {
    localStorage.setItem('death', JSON.stringify(id));
  }
  value() {
    return JSON.parse(localStorage.getItem('death'));
  }
}

module.exports = new DeathService();
