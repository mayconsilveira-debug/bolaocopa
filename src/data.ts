// AUTO-GERADO de 'BOLAO DA COPA.xlsx' — palpites dos 71 participantes (inclui previsoes de grupo em TLA)

export interface Vote { name: string; votes: number; pct: number; }
export interface TeamVote { name: string; votes: number; pct: number; }
export interface GroupConsensus { group: string; teams: TeamVote[]; }
export interface GroupPick { g: string; a: string; b: string; }
export interface Participant { name: string; champion: string; scorer: string; player: string; groupPicks: GroupPick[]; }
export interface BolaoData {
  meta: { participants: number; season: string; group: string };
  champions: Vote[]; scorers: Vote[]; players: Vote[];
  groups: GroupConsensus[]; participants: Participant[];
}

export const bolao: BolaoData = {
  "meta": {
    "participants": 71,
    "season": "2026",
    "group": "We.com"
  },
  "champions": [
    {
      "name": "França",
      "votes": 30,
      "pct": 42
    },
    {
      "name": "Brasil",
      "votes": 17,
      "pct": 24
    },
    {
      "name": "Espanha",
      "votes": 12,
      "pct": 17
    },
    {
      "name": "Portugal",
      "votes": 8,
      "pct": 11
    },
    {
      "name": "Alemanha",
      "votes": 2,
      "pct": 3
    },
    {
      "name": "Inglaterra",
      "votes": 1,
      "pct": 1
    },
    {
      "name": "Holanda",
      "votes": 1,
      "pct": 1
    }
  ],
  "scorers": [
    {
      "name": "Mbappé",
      "votes": 44,
      "pct": 62
    },
    {
      "name": "Kane",
      "votes": 7,
      "pct": 10
    },
    {
      "name": "Cristiano Ronaldo",
      "votes": 4,
      "pct": 6
    },
    {
      "name": "Endrick",
      "votes": 3,
      "pct": 4
    },
    {
      "name": "Neymar",
      "votes": 2,
      "pct": 3
    },
    {
      "name": "Yamal",
      "votes": 2,
      "pct": 3
    },
    {
      "name": "Olise",
      "votes": 2,
      "pct": 3
    },
    {
      "name": "Haaland",
      "votes": 2,
      "pct": 3
    },
    {
      "name": "Rayan",
      "votes": 1,
      "pct": 1
    },
    {
      "name": "Dembelé",
      "votes": 1,
      "pct": 1
    },
    {
      "name": "Oyarzabal",
      "votes": 1,
      "pct": 1
    },
    {
      "name": "Julián Alvarez",
      "votes": 1,
      "pct": 1
    },
    {
      "name": "Vinicius Júnior",
      "votes": 1,
      "pct": 1
    }
  ],
  "players": [
    {
      "name": "Mbappé",
      "votes": 25,
      "pct": 35
    },
    {
      "name": "Yamal",
      "votes": 17,
      "pct": 24
    },
    {
      "name": "Neymar",
      "votes": 6,
      "pct": 8
    },
    {
      "name": "Cristiano Ronaldo",
      "votes": 5,
      "pct": 7
    },
    {
      "name": "Olise",
      "votes": 3,
      "pct": 4
    },
    {
      "name": "Endrick",
      "votes": 3,
      "pct": 4
    },
    {
      "name": "Dembelé",
      "votes": 2,
      "pct": 3
    },
    {
      "name": "Bellingham",
      "votes": 2,
      "pct": 3
    },
    {
      "name": "Vinicius Júnior",
      "votes": 2,
      "pct": 3
    },
    {
      "name": "Raphinha",
      "votes": 2,
      "pct": 3
    },
    {
      "name": "Paquetá",
      "votes": 1,
      "pct": 1
    },
    {
      "name": "Lionel Messi",
      "votes": 1,
      "pct": 1
    },
    {
      "name": "Bruno Fernandes",
      "votes": 1,
      "pct": 1
    },
    {
      "name": "Luis Henrique",
      "votes": 1,
      "pct": 1
    }
  ],
  "groups": [
    {
      "group": "A",
      "teams": [
        {
          "name": "México",
          "votes": 64,
          "pct": 90
        },
        {
          "name": "Coréia do Sul",
          "votes": 56,
          "pct": 79
        },
        {
          "name": "África do Sul",
          "votes": 12,
          "pct": 17
        },
        {
          "name": "República Tcheca",
          "votes": 10,
          "pct": 14
        }
      ]
    },
    {
      "group": "B",
      "teams": [
        {
          "name": "Suíça",
          "votes": 65,
          "pct": 92
        },
        {
          "name": "Canadá",
          "votes": 49,
          "pct": 69
        },
        {
          "name": "Bósnia",
          "votes": 19,
          "pct": 27
        },
        {
          "name": "Catar",
          "votes": 9,
          "pct": 13
        }
      ]
    },
    {
      "group": "C",
      "teams": [
        {
          "name": "Brasil",
          "votes": 71,
          "pct": 100
        },
        {
          "name": "Marrocos",
          "votes": 60,
          "pct": 85
        },
        {
          "name": "Escócia",
          "votes": 9,
          "pct": 13
        },
        {
          "name": "Haiti",
          "votes": 2,
          "pct": 3
        }
      ]
    },
    {
      "group": "D",
      "teams": [
        {
          "name": "Estados Unidos",
          "votes": 56,
          "pct": 79
        },
        {
          "name": "Turquia",
          "votes": 43,
          "pct": 61
        },
        {
          "name": "Paraguai",
          "votes": 35,
          "pct": 49
        },
        {
          "name": "Austrália",
          "votes": 8,
          "pct": 11
        }
      ]
    },
    {
      "group": "E",
      "teams": [
        {
          "name": "Alemanha",
          "votes": 71,
          "pct": 100
        },
        {
          "name": "Equador",
          "votes": 50,
          "pct": 70
        },
        {
          "name": "Costa do Marfim",
          "votes": 21,
          "pct": 30
        }
      ]
    },
    {
      "group": "F",
      "teams": [
        {
          "name": "Holanda",
          "votes": 68,
          "pct": 96
        },
        {
          "name": "Japão",
          "votes": 58,
          "pct": 82
        },
        {
          "name": "Suécia",
          "votes": 15,
          "pct": 21
        },
        {
          "name": "Tunísia",
          "votes": 1,
          "pct": 1
        }
      ]
    },
    {
      "group": "G",
      "teams": [
        {
          "name": "Bélgica",
          "votes": 70,
          "pct": 99
        },
        {
          "name": "Egito",
          "votes": 55,
          "pct": 77
        },
        {
          "name": "Irã",
          "votes": 11,
          "pct": 15
        },
        {
          "name": "Nova Zelândia",
          "votes": 6,
          "pct": 8
        }
      ]
    },
    {
      "group": "H",
      "teams": [
        {
          "name": "Espanha",
          "votes": 70,
          "pct": 99
        },
        {
          "name": "Uruguai",
          "votes": 69,
          "pct": 97
        },
        {
          "name": "Cabo Verde",
          "votes": 2,
          "pct": 3
        },
        {
          "name": "Arábia Saudita",
          "votes": 1,
          "pct": 1
        }
      ]
    },
    {
      "group": "I",
      "teams": [
        {
          "name": "França",
          "votes": 71,
          "pct": 100
        },
        {
          "name": "Noruega",
          "votes": 45,
          "pct": 63
        },
        {
          "name": "Senegal",
          "votes": 26,
          "pct": 37
        }
      ]
    },
    {
      "group": "J",
      "teams": [
        {
          "name": "Argentina",
          "votes": 71,
          "pct": 100
        },
        {
          "name": "Áustria",
          "votes": 43,
          "pct": 61
        },
        {
          "name": "Argélia",
          "votes": 26,
          "pct": 37
        },
        {
          "name": "Jordânia",
          "votes": 2,
          "pct": 3
        }
      ]
    },
    {
      "group": "K",
      "teams": [
        {
          "name": "Colômbia",
          "votes": 71,
          "pct": 100
        },
        {
          "name": "Portugal",
          "votes": 71,
          "pct": 100
        }
      ]
    },
    {
      "group": "L",
      "teams": [
        {
          "name": "Inglaterra",
          "votes": 68,
          "pct": 96
        },
        {
          "name": "Croácia",
          "votes": 67,
          "pct": 94
        },
        {
          "name": "Gana",
          "votes": 5,
          "pct": 7
        },
        {
          "name": "Panamá",
          "votes": 2,
          "pct": 3
        }
      ]
    }
  ],
  "participants": [
    {
      "name": "Guilherme Miller",
      "champion": "Brasil",
      "scorer": "Rayan",
      "player": "Paquetá",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "COL",
          "b": "POR"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Leandro Barbosa",
      "champion": "Brasil",
      "scorer": "Neymar",
      "player": "Neymar",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "SCO"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Luísa Pacheco",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "QAT"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "AUS"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "NZL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "JOR"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "PAN"
        }
      ]
    },
    {
      "name": "Jessica Brito",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Fernando Leal",
      "champion": "Espanha",
      "scorer": "Kane",
      "player": "Dembelé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Leonardo Paez",
      "champion": "França",
      "scorer": "Kane",
      "player": "Olise",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "CZE"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Adriano Martinez",
      "champion": "Brasil",
      "scorer": "Cristiano Ronaldo",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "AUS",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Matheus Soares",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "CZE"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "AUS"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "NZL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Mariana Belfort",
      "champion": "França",
      "scorer": "Yamal",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Raphael Gomes",
      "champion": "Espanha",
      "scorer": "Mbappé",
      "player": "Bellingham",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "GHA"
        }
      ]
    },
    {
      "name": "Renan Cano",
      "champion": "Portugal",
      "scorer": "Olise",
      "player": "Olise",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "SCO"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "CIV",
          "b": "GER"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "GHA"
        }
      ]
    },
    {
      "name": "Daniele Simões",
      "champion": "Espanha",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Akil",
      "champion": "Inglaterra",
      "scorer": "Kane",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Gustavo Cyrillo",
      "champion": "Brasil",
      "scorer": "Mbappé",
      "player": "Neymar",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Fábio Drighetti",
      "champion": "Brasil",
      "scorer": "Mbappé",
      "player": "Endrick",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "QAT"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "EGY",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "COL",
          "b": "POR"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Julia Camargo",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Pedro Souza",
      "champion": "Espanha",
      "scorer": "Mbappé",
      "player": "Cristiano Ronaldo",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "QAT"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "EGY",
          "b": "BEL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Johnny",
      "champion": "Portugal",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Camila Larroudé",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Lorrane",
      "champion": "Espanha",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Renato Poletto",
      "champion": "Espanha",
      "scorer": "Yamal",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "CZE"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Ricardinho",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Renata",
      "champion": "Brasil",
      "scorer": "Haaland",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "CZE"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Gustavo Castro",
      "champion": "Holanda",
      "scorer": "Mbappé",
      "player": "Lionel Messi",
      "groupPicks": [
        {
          "g": "A",
          "a": "CZE",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "AUS"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Matheus Ferreira",
      "champion": "Portugal",
      "scorer": "Mbappé",
      "player": "Cristiano Ronaldo",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Erikinha",
      "champion": "Alemanha",
      "scorer": "Mbappé",
      "player": "Cristiano Ronaldo",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "QAT"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "SWE",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "KSA",
          "b": "CPV"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "JOR"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Eduardo Salgado",
      "champion": "Espanha",
      "scorer": "Haaland",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "CZE"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Fábio Cruz",
      "champion": "França",
      "scorer": "Kane",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "EGY",
          "b": "BEL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "COL",
          "b": "POR"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Vitor Gabriel",
      "champion": "Portugal",
      "scorer": "Cristiano Ronaldo",
      "player": "Bruno Fernandes",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Kelly",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Vinicius Júnior",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "AUS"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "NZL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Thais Franco",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "SCO"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Felipe Ferreira",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "SCO"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Gustavo Gutierrez",
      "champion": "Brasil",
      "scorer": "Neymar",
      "player": "Neymar",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "QAT"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "SCO"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Thainan",
      "champion": "Portugal",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "AUS",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "NZL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Felipe Teixeira",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "MAR",
          "b": "BRA"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Debora Liberti",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "COL",
          "b": "POR"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Chris Lozano",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Karla David",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "HAI"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "PAN"
        }
      ]
    },
    {
      "name": "Pedro Baldi",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Neymar",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Kraf",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "BIH",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "EGY",
          "b": "BEL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Ettore",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Maycon",
      "champion": "Brasil",
      "scorer": "Mbappé",
      "player": "Raphinha",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "EGY",
          "b": "BEL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Vitor Coppe",
      "champion": "França",
      "scorer": "Endrick",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Lucia Sato",
      "champion": "Brasil",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Nathalya Cardoso",
      "champion": "Espanha",
      "scorer": "Dembelé",
      "player": "Endrick",
      "groupPicks": [
        {
          "g": "A",
          "a": "RSA",
          "b": "CZE"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "AUS",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "NZL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "GHA"
        }
      ]
    },
    {
      "name": "Bruno B2",
      "champion": "França",
      "scorer": "Cristiano Ronaldo",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "CZE",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Ariane Denardi",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Alexandra Bispo",
      "champion": "Portugal",
      "scorer": "Endrick",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "URY",
          "b": "ESP"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "GHA",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Sandrinha",
      "champion": "Espanha",
      "scorer": "Kane",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "GHA"
        }
      ]
    },
    {
      "name": "Luana Ribeiro",
      "champion": "França",
      "scorer": "Kane",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "QAT",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "SCO"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "TUN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "CPV"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Gustavo D'Avila",
      "champion": "Brasil",
      "scorer": "Oyarzabal",
      "player": "Luis Henrique",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "SCO"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "EGY",
          "b": "BEL"
        },
        {
          "g": "H",
          "a": "URY",
          "b": "ESP"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Michelle Takagi",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Eduardo Gomes",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "RSA",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Victoria Piscopo",
      "champion": "França",
      "scorer": "Olise",
      "player": "Olise",
      "groupPicks": [
        {
          "g": "A",
          "a": "CZE",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Clara Sapia",
      "champion": "Brasil",
      "scorer": "Mbappé",
      "player": "Neymar",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "João Leme",
      "champion": "Brasil",
      "scorer": "Julián Alvarez",
      "player": "Raphinha",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "EGY",
          "b": "BEL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Julianna Vergilio",
      "champion": "Espanha",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Bruna Mena",
      "champion": "Espanha",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "MAR",
          "b": "BRA"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Tiago Sgarbi",
      "champion": "Brasil",
      "scorer": "Kane",
      "player": "Neymar",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "BIH",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Camila Bencini",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Bellingham",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Anderson",
      "champion": "Brasil",
      "scorer": "Vinicius Júnior",
      "player": "Vinicius Júnior",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "QAT"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Desirre Aroste",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Gabriela",
      "champion": "Espanha",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Mariana Oliveira",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "AUS"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Natan",
      "champion": "Portugal",
      "scorer": "Mbappé",
      "player": "Cristiano Ronaldo",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "QAT"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "PAR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "CIV"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Jessica Canin",
      "champion": "Brasil",
      "scorer": "Cristiano Ronaldo",
      "player": "Cristiano Ronaldo",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "RSA"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "CAN"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "HAI"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "NZL",
          "b": "BEL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Jaqueline Barbosa",
      "champion": "Brasil",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "SUI"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "COL",
          "b": "POR"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Andressa",
      "champion": "França",
      "scorer": "Mbappé",
      "player": "Yamal",
      "groupPicks": [
        {
          "g": "A",
          "a": "KOR",
          "b": "MEX"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "QAT"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "MAR"
        },
        {
          "g": "D",
          "a": "PAR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "IRN"
        },
        {
          "g": "H",
          "a": "URY",
          "b": "ESP"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "CRO",
          "b": "ENG"
        }
      ]
    },
    {
      "name": "Julio Campos",
      "champion": "Brasil",
      "scorer": "Mbappé",
      "player": "Endrick",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "SCO"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "SWE",
          "b": "JPN"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "SEN"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Branquinho (Rui)",
      "champion": "Portugal",
      "scorer": "Mbappé",
      "player": "Mbappé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "KOR"
        },
        {
          "g": "B",
          "a": "SUI",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "MAR",
          "b": "BRA"
        },
        {
          "g": "D",
          "a": "TUR",
          "b": "USA"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "JPN",
          "b": "NED"
        },
        {
          "g": "G",
          "a": "EGY",
          "b": "BEL"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "NOR",
          "b": "FRA"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "ALG"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    },
    {
      "name": "Lucia Oliveira",
      "champion": "Alemanha",
      "scorer": "Endrick",
      "player": "Dembelé",
      "groupPicks": [
        {
          "g": "A",
          "a": "MEX",
          "b": "CZE"
        },
        {
          "g": "B",
          "a": "CAN",
          "b": "BIH"
        },
        {
          "g": "C",
          "a": "BRA",
          "b": "SCO"
        },
        {
          "g": "D",
          "a": "USA",
          "b": "TUR"
        },
        {
          "g": "E",
          "a": "GER",
          "b": "ECU"
        },
        {
          "g": "F",
          "a": "NED",
          "b": "SWE"
        },
        {
          "g": "G",
          "a": "BEL",
          "b": "EGY"
        },
        {
          "g": "H",
          "a": "ESP",
          "b": "URY"
        },
        {
          "g": "I",
          "a": "FRA",
          "b": "NOR"
        },
        {
          "g": "J",
          "a": "ARG",
          "b": "AUT"
        },
        {
          "g": "K",
          "a": "POR",
          "b": "COL"
        },
        {
          "g": "L",
          "a": "ENG",
          "b": "CRO"
        }
      ]
    }
  ]
};
