const mainImage = require('./assets/images/background.jpg');
const roomImage = require('./assets/images/room.jpg');
const voiceImage = require('./assets/images/voice.jpg');
const wayImage = require('./assets/images/way.jpg');
const twowayImage = require('./assets/images/twoway.jpg');
const gardianImage = require('./assets/images/gardian.jpg');
const fghtImage = require('./assets/images/fight.jpg');
const corridorImage = require('./assets/images/corridor.jpg');
const weaponImage = require('./assets/images/weapon.jpg');
const tombImage = require('./assets/images/tomb.jpg');
const saveImage = require('./assets/images/save.jpg');

export default {
  characters: [
    {
      name: 'Chevalier',
      description: 'Grâce à sa force, les ennemis ne seront que des petites insectes'
    },
    {
      name: 'Mage',
      description: 'Il voit à travers tout, connait les compétences des autres presonnes'
    },
    {
      name: 'Assassin',
      description: "Rapide comme l'écalire et un bon sens de la tactique ancestral"
    }
  ],
  steps: [
    {
      id: 1,
      title: 'Le donjon',
      image: mainImage,
      description: 'Hé mon brave ! êtes-vous à la quête de la relique du donjon ?',
      actions: [
        {
          label: 'Oui',
          to: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Une voix étrange',
      image: voiceImage,
      description: "Mais qu'est-ce que cette voix ? Qu'allez-vous faire maintenant ?",
      actions: [
        {
          label: 'Continuer',
          to: 3
        },
        {
          label: 'Trouver la voix',
          to: 4
        }
      ]
    },
    {
      id: 3,
      title: 'Des OS',
      image: wayImage,
      description: 'Ce couloir semble sûr mais rien ne semble normal depuis notre arriver',
      actions: [
        {
          label: 'Contiuer',
          to: 5
        }
      ]
    },
    {
      id: 4,
      title: 'Quelque chose',
      image: voiceImage,
      description: 'Vous êtes de plus en plus proche de la fameuse voix',
      actions: [
        {
          label: 'Continuer',
          to: 8
        }
      ]
    },
    {
      id: 5,
      title: 'Deux chemins',
      image: twowayImage,
      description: 'Le donjon se divise en deux donc où allez-vous ?',
      actions: [
        {
          label: 'Aller à gauche',
          to: 6
        },
        {
          label: 'Aller à droite',
          to: 7
        }
      ]
    },
    {
      id: 6,
      title: 'Une ombre',
      image: roomImage,
      description: "Au loin de votre chemin vous croiser un être viviant simuler dans l'ombre",
      death: 'En vous approchant de la chose, celle-ci vous à instantanément tuer',
      actions: [
        {
          label: 'Voir de plus près',
          to: '/lose'
        },
        {
          label: 'Faire marche arrière',
          to: 5
        }
      ]
    },
    {
      id: 7,
      title: 'Une bataille',
      image: fghtImage,
      description: "Un combat féroce semble s'est produit il n'y a pas longtemps, on apperçoit encore des corps et des bêtes sauvages tout autour !",
      actions: [
        {
          label: 'Avancer',
          to: 10
        }
      ]
    },
    {
      id: 8,
      title: 'Une petite fille',
      image: mainImage,
      description: "Mais comment est-ce possible, une petite fille ? Qu'est ce qu'elle peut bien faire la ?",
      recover: true,
      actions: [
        {
          label: 'Pendre avec vous',
          to: 9
        },
        {
          label: 'La laisser',
          to: 7
        }
      ]
    },
    {
      id: 9,
      title: 'Innoncente',
      image: mainImage,
      description: 'Cette petite fille ne semble pas être ton ennemis',
      actions: [
        {
          label: 'Continuer',
          to: 7
        }
      ]
    },
    {
      id: 10,
      title: 'Une tombe',
      image: tombImage,
      description: "Ici repose en paix le corps d'un ancier guerrier de la table ronde",
      actions: [
        {
          label: 'Creuser',
          to: 11
        },
        {
          label: 'Avancer',
          to: 12
        }
      ]
    },
    {
      id: 11,
      title: 'Un corps',
      image: tombImage,
      description: 'Le crops broyer du Roi Arthur, une sorte de bête de sauvage à du le causer de telle blesseure',
      actions: [
        {
          label: 'Continuer',
          to: 12
        }
      ]
    },
    {
      id: 12,
      title: 'Un bruit',
      image: corridorImage,
      description: 'Un énorme crie viens du fond du donjon',
      actions: [
        {
          label: '?',
          to: 13
        }
      ]
    },
    {
      id: 13,
      title: 'éfondrement',
      image: corridorImage,
      description: "Le plafond commencer a s'écrouler,",
      death: 'En vous protègeant, vous avez été écraser par le plafond',
      actions: [
        {
          label: 'Courir',
          to: 14
        },
        {
          label: 'Se protéger',
          to: '/lose'
        }
      ]
    },
    {
      id: 14,
      title: 'Sain et sauf',
      image: corridorImage,
      description: "Vous l'avez échapper belle",
      actions: [
        {
          label: 'Continuer',
          to: 16
        }
      ]
    },
    {
      id: 15,
      title: 'De la magie',
      image: saveImage,
      description: 'La petit fille a enfaite des pouvoirs magique et à vous protéger',
      actions: [
        {
          label: 'Continuer',
          to: 17
        }
      ]
    },
    {
      id: 16,
      title: 'Une stelle',
      image: weaponImage,
      description: 'Le tremblement de terre vous à amener a une grande zone du donjon et ce trouve une relique',
      actions: [
        {
          label: 'Avancer vers la relique',
          to: 19
        }
      ]
    },
    {
      id: 17,
      title: 'Sans confiance',
      image: saveImage,
      description: "La petite fille n'était si innoncente que sa, elle vous traine a jusqu'a une stelle dans laqulle quelque chose afin que vous lui ramener la relique",
      actions: [
        {
          label: 'Voir de plus pres',
          to: 18
        }
      ]
    },
    {
      id: 18,
      title: 'Réveil',
      image: gardianImage,
      description: 'Vous avez réveiller le gardine de la reqlique, celle-ci saute sur la petite fille et la devour',
      actions: [
        {
          label: 'Continuer',
          to: 20
        }
      ]
    },
    {
      id: 19,
      title: 'Réveil',
      image: gardianImage,
      description: 'Vous avez réveiller le gardine de la reqlique en vous approchant de la relique',
      actions: [
        {
          label: 'Continuer',
          to: 20
        }
      ]
    },
    {
      id: 20,
      title: 'Gardien',
      image: gardianImage,
      description: 'Voici le garfin  de ce donjon, préparer vous !',
      death: 'Vous avez fuis le combat et le gardin en à porfiter pour vous tuer',
      actions: [
        {
          label: 'Courir',
          to: '/lose'
        },
        {
          label: 'Combattre',
          to: 21
        }
      ]
    },
    {
      id: 21,
      title: 'Combat',
      image: gardianImage,
      description: 'Le gardien attaque, il vous bondit dessus sans hésiter',
      actions: [
        {
          label: 'Esquiver a gauche',
          to: 23
        },
        {
          label: 'Parer avec votre épé',
          to: 22
        },
        {
          label: 'Esquiver a droite',
          to: 23
        }
      ]
    },
    {
      id: 22,
      title: 'Combat',
      image: gardianImage,
      description: "C'était moins une, vous lui avez coincer la gueule avec votre épé",
      actions: [
        {
          label: 'Enfoncer épé',
          to: 24
        }
      ]
    },
    {
      id: 23,
      title: 'Combat',
      image: gardianImage,
      description: 'Le gardien revient à la charge',
      actions: [
        {
          label: 'Viser son oeil',
          to: 24
        },
        {
          label: 'Parer avec votre épé',
          to: '/lose'
        }
      ]
    },
    {
      id: 24,
      title: 'Combat',
      image: gardianImage,
      description: 'Votre attaque lui a infliger de serieux dégâts, profites en',
      death: 'Vous avez été trop gentil avec le gardien, votre clémence vous à amener a votre perte',
      actions: [
        {
          label: "L'achever",
          to: '/win'
        },
        {
          label: 'Laisse ageuniser',
          to: '/lose'
        }
      ]
    }
  ]
};
