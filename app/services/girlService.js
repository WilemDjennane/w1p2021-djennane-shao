class GirlService {
  constructor() {
    this.recover = localStorage.getItem('recover') || false;
  }

  save(id) {
    localStorage.setItem('recover', JSON.stringify(id));
  }

  value() {
    return localStorage.get('recover');
  }
}

module.exports = new GirlService();
