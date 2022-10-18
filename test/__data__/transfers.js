module.exports = {
  request: {
    body: {
      biggerAmount: {
        organization_name: "ACME Corp",
        organization_bic: "OIVUSCLQXXX",
        organization_iban: "FR10474608000002006107XXXXX",
        credit_transfers: [
          {
            amount: "140000000.5",
            counterparty_name: "Bip Bip",
            counterparty_bic: "CRLYFRPPTOU",
            counterparty_iban: "EE383680981021245685",
            description: "Wonderland/4410",
          },
          {
            amount: "61238",
            counterparty_name: "Wile E Coyote",
            counterparty_bic: "ZDRPLBQI",
            counterparty_iban: "DE9935420810036209081725212",
            description: "//TeslaMotors/Invoice/12",
          },
          {
            amount: "999",
            counterparty_name: "Bugs Bunny",
            counterparty_bic: "RNJZNTMC",
            counterparty_iban: "FR0010009380540930414023042",
            description: "2020 09 24/2020 09 25/GoldenCarrot/",
          },
        ],
      },
      enough: {
        organization_name: "ACME Corp",
        organization_bic: "OIVUSCLQXXX",
        organization_iban: "FR10474608000002006107XXXXX",
        credit_transfers: [
          {
            amount: "14.5",
            counterparty_name: "Bip Bip",
            counterparty_bic: "CRLYFRPPTOU",
            counterparty_iban: "EE383680981021245685",
            description: "Wonderland/4410",
          },
          {
            amount: "61238",
            counterparty_name: "Wile E Coyote",
            counterparty_bic: "ZDRPLBQI",
            counterparty_iban: "DE9935420810036209081725212",
            description: "//TeslaMotors/Invoice/12",
          },
          {
            amount: "999",
            counterparty_name: "Bugs Bunny",
            counterparty_bic: "RNJZNTMC",
            counterparty_iban: "FR0010009380540930414023042",
            description: "2020 09 24/2020 09 25/GoldenCarrot/",
          },
        ],
      },
      sampleTwo: {
        organization_name: "ACME Corp",
        organization_bic: "OIVUSCLQXXX",
        organization_iban: "FR10474608000002006107XXXXX",
        credit_transfers: [
          {
            amount: "23.17",
            counterparty_name: "Bip Bip",
            counterparty_bic: "CRLYFRPPTOU",
            counterparty_iban: "EE383680981021245685",
            description: "Neverland/6318",
          },
          {
            amount: "98234",
            counterparty_name: "Wile E Coyote",
            counterparty_bic: "ZDRPLBQI",
            counterparty_iban: "DE9935420810036209081725212",
            description: "//Spacex/AJGRBX/32",
          },
          {
            amount: "8024.99",
            counterparty_name: "Bugs Bunny",
            counterparty_bic: "RNJZNTMC",
            counterparty_iban: "FR0010009380540930414023042",
            description: "2020/DuckSeason/",
          },
          {
            amount: "200",
            counterparty_name: "Daffy Duck",
            counterparty_bic: "DDFCNLAM",
            counterparty_iban: "NL24ABNA5055036109",
            description: "2020/RabbitSeason/",
          },
        ],
      },
      invalidAmount: {
        organization_name: "ACME Corp",
        organization_bic: "OIVUSCLQXXX",
        organization_iban: "FR10474608000002006107XXXXX",
        credit_transfers: [
          {
            amount: "xxx",
            counterparty_name: "Bip Bip",
            counterparty_bic: "CRLYFRPPTOU",
            counterparty_iban: "EE383680981021245685",
            description: "Wonderland/4410",
          },
          {
            amount: "61238",
            counterparty_name: "Wile E Coyote",
            counterparty_bic: "ZDRPLBQI",
            counterparty_iban: "DE9935420810036209081725212",
            description: "//TeslaMotors/Invoice/12",
          },
          {
            amount: "999",
            counterparty_name: "Bugs Bunny",
            counterparty_bic: "RNJZNTMC",
            counterparty_iban: "FR0010009380540930414023042",
            description: "2020 09 24/2020 09 25/GoldenCarrot/",
          },
        ],
      },
    },
  },
};
