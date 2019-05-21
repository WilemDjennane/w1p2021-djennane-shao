class CharacterService {
  constructor() {
    this.character = localStorage.getItem('character') || 'default';
  }

  characterSelect(id) {
    localStorage.setItem('character', id);
  }
}

module.exports = new CharacterService();
