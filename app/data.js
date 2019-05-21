const image = require('./assets/images/background.jpg');
const image2 = require('./assets/images/room.jpg');

export default {
  characters: [
    {
      name: 'Chevalier',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptas repudiandae, minus unde, ullam aliquid quasi officiis mollitia laborum blanditiis numquam! Debitis voluptate, nihil aliquid fugiat voluptates voluptatum sapiente cumque.'
    },
    {
      name: 'Mage',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptas repudiandae, minus unde, ullam aliquid quasi officiis mollitia laborum blanditiis numquam! Debitis voluptate, nihil aliquid fugiat voluptates voluptatum sapiente cumque.'
    },
    {
      name: 'Assassin',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptas repudiandae, minus unde, ullam aliquid quasi officiis mollitia laborum blanditiis numquam! Debitis voluptate, nihil aliquid fugiat voluptates voluptatum sapiente cumque.'
    }
  ],
  steps: [
    {
      id: 1,
      title: 'Une nouvelle aventure',
      image: image,
      description: "He vous ! Ne seriez-vous pas là pour trouver l'arme légendaire qui est enfouie dans ce dungon ? Cependant, je vous met en garde, vous sera le seul responsable des choix que vous feriez puisque celle-ci causera la mort de tes camarades...",
      actions: [
        {
          label: 'Accepter la quête !',
          to: 2
        }
      ]
    },
    {
      id: 2,
      title: 'Une voix étrange',
      image: image,
      description: 'Camarade : " Mais qu\'est-ce que cette voix ? Que deverions-nous faire maintenant ? "',
      actions: [
        {
          label: 'Poursuivre votre chemin',
          to: 3
        },
        {
          label: 'Suivre la voix',
          to: 4
        }
      ]
    },
    {
      id: 3,
      title: "Un tas d'os",
      image: image,
      description: 'Vous prousuivez votre chemin et vous appercever un squelette avec une carnet de note, dans laquel est écrit " Si vous lisz cette note, faite attention à où vous mettiez les pieds et ne faites pas confiance à ..... " la fin de la note est illisible',
      actions: [
        {
          label: 'Avançons',
          to: 5
        }
      ]
    },
    {
      id: 4,
      title: 'Je la sens',
      image: image,
      description: 'Vous vous approchez de plus en plus de cette fameuse voix du dungeon',
      actions: [
        {
          label: 'Trouvez la voix',
          to: 8
        }
      ]
    },
    {
      id: 5,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous allez faire un choix, aller à gauche ou à droite',
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
      image: image2,
      description: "Au loin de votre chemin vous croiser une sorte d'entité simuler dans l'ombre",
      death: "En vous approchant de l'entité, celle-ci vous a instantanément tuer",
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
      image: image,
      description: "Un combat féroce semnle s'est produit il n'y a pas si longtemps, on apperçoit des traces de feu ardente",
      actions: [
        {
          label: 'Continuer',
          to: 10
        }
      ]
    },
    {
      id: 8,
      title: 'Une petite fille',
      image: image,
      description: 'Camarade : " Mais comment est-ce possible ? Qu\'est ce qu\'elle peut bien faire la ? "',
      recover: true,
      actions: [
        {
          label: "L ' accompagner avec vous",
          to: 9
        },
        {
          label: 'La laisser tranquille',
          to: 7
        }
      ]
    },
    {
      id: 9,
      title: 'Elle ?',
      image: image,
      description: 'Cete fille ne vous parait-elle pas bizzare ? Seul dans ce dungeon ?',
      actions: [
        {
          label: 'Continuer',
          to: 7
        }
      ]
    },
    {
      id: 10,
      title: '',
      image: image,
      description: '',
      actions: [
        {
          label: 'Continuez',
          to: '/lose'
        }
      ]
    },
    {
      id: 11,
      title: '',
      image: image,
      description: "Un combat s'est produit dans ses lieux il y a pas si longtemps ",
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 12,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 13,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 14,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 15,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 16,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 17,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 18,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 19,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 20,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 21,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 22,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 23,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 24,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 25,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 26,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 27,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 28,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 29,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    },
    {
      id: 30,
      title: 'Deux chemins ?',
      image: image,
      description: 'Vous et vous co-équipier allez choisir de faire le chemin séparement ou le poursuivre à essemble',
      actions: [
        {
          label: 'Se séparer en deux groupe',
          to: '/lose'
        },
        {
          label: 'Tous aller à droite',
          to: 3
        }
      ]
    }
  ]
};
