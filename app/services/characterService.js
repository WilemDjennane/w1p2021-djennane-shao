class CharacterService {
  constructor() {
    this.character = localStorage.getItem('character') || 'Chevalier';
  }

  characterSelect(id) {
    localStorage.setItem('character', id);
  }

  value() {
    return this.character;
  }
}

module.exports = new CharacterService();
