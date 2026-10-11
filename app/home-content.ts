import type { Locale } from './content';

type Offer = {
  name: string;
  label: string;
  price: string;
  meta: string;
  bestFor: string;
  summary: string;
  includes: string[];
  limits: string[];
  featured?: boolean;
};

type HomeContent = {
  hero: {
    title: string;
    accent: string;
    body: string;
    primary: string;
    secondary: string;
    proof: string[];
  };
  decision: {
    title: string;
    note: string;
    factors: Array<[string, string]>;
    paid: string;
  };
  independent: {
    title: string;
    body: string;
    factors?: Array<[string, string]>;
    statement?: string;
  };
  audiences: {
    title: string;
    body: string;
    groups: Array<{ title: string; lead: string; points: string[] }>;
  };
  method: {
    title: string;
    body: string;
    steps: Array<[string, string]>;
  };
  sample: {
    title: string;
    body: string;
    badge: string;
    documentTitle: string;
    documentMeta: string;
    rows: Array<[string, string, string]>;
    timeline: string[];
    note: string;
  };
  offers: {
    title: string;
    body: string;
    cta: string;
    bestFor: string;
    includes: string;
    limits: string;
    cards: Offer[];
  };
  pricing: {
    title: string;
    body: string;
    addonsTitle: string;
    addons: Array<[string, string, string]>;
    instalmentsTitle: string;
    instalments: string[];
    credit: string;
  };
  value: {
    title: string;
    body: string;
    points: Array<[string, string]>;
  };
  trust: {
    title: string;
    body: string;
    items: Array<[string, string]>;
    note: string;
  };
  faq: {
    title: string;
    items: Array<[string, string]>;
  };
  booking: {
    title: string;
    body: string;
    team: string;
    event: string;
    duration: string;
    location: string;
    timezone: string;
    button: string;
    note: string;
  };
};

export const homeContent: Record<Locale, HomeContent> = {
  "bs": {
    "hero": {
      "title": "Studirajte u inostranstvu.",
      "accent": "Prijavite se s jasnim planom.",
      "body": "Za kandidate koji se prijavljuju na studije ili stipendije i žele uporediti programe, troškove i finansiranje — te predati snažnu, urednu prijavu bez nepotrebnog lutanja.",
      "primary": "3-minutni upitnik → besplatan razgovor",
      "secondary": "Pogledajte kako proces funkcioniše",
      "proof": [
        "Nezavisno savjetovanje",
        "Jasne cijene",
        "Evropske prijave"
      ]
    },
    "decision": {
      "title": "Prije nego što preporučimo program",
      "note": "Provjeravamo pet stvari:",
      "paid": "Tek tada program ulazi u preporuku.",
      "factors": [
        [
          "Akademska usklađenost",
          "profil + uslovi"
        ],
        [
          "Ukupan trošak",
          "školarina + životni troškovi"
        ],
        [
          "Finansiranje",
          "stipendije + budžet"
        ],
        [
          "Rokovi",
          "realan kalendar"
        ],
        [
          "Rizik",
          "uravnotežen izbor"
        ]
      ]
    },
    "independent": {
      "title": "Prvo dobra odluka. Zatim snažna prijava.",
      "body": "Program biramo prema vašem profilu, budžetu, ciljevima i rokovima. Tek poslije toga gradimo prijavu koja jasno pokazuje zašto baš vi odgovarate tom programu.",
      "statement": "Nas plaćate vi, a ne univerziteti. Zato svaku preporuku zasnivamo isključivo na tome što najbolje odgovara vašem profilu, ciljevima i budžetu."
    },
    "audiences": {
      "title": "Kada Adria Admissions donosi najviše vrijednosti.",
      "body": "Najbolje radimo s kandidatima koji žele donijeti promišljenu odluku i aktivno učestvovati u procesu.",
      "groups": [
        {
          "title": "Za vas je ako",
          "lead": "Želite ličnu, stručnu podršku umjesto generičke liste programa.",
          "points": [
            "birate studijski program u Evropi",
            "poredite mnogo opcija, troškova i rokova",
            "želite ozbiljno pristupiti stipendijama",
            "treba vam stručno drugo mišljenje prije prijave"
          ]
        },
        {
          "title": "Najviše ćete dobiti ako",
          "lead": "Spremni ste zajedno s nama graditi promišljen izbor i snažnu, autentičnu prijavu.",
          "points": [
            "želite realnu procjenu bez velikih obećanja",
            "želite zadržati vlastiti glas u prijavi",
            "spremni ste prilagoditi dokumente svakom programu",
            "možete aktivno učestvovati i poštovati rokove"
          ]
        }
      ]
    },
    "method": {
      "title": "Od profila do predaje, u tri jasna koraka.",
      "body": "Svaki korak završava konkretnom odlukom, dokumentom ili sljedećim potezom.",
      "steps": [
        [
          "Upoznajemo vaš profil",
          "Akademski rezultati, interesovanja, budžet, jezici, zemlje i karijerni cilj."
        ],
        [
          "Gradimo strategiju",
          "Izbor programa, plan rokova, finansijska slika i prioriteti."
        ],
        [
          "Jačamo i vodimo prijavu",
          "Komentari i dorade dokumenata, kontrola zahtjeva i podrška do predaje."
        ]
      ]
    },
    "sample": {
      "title": "Pogledajte šta dobijate.",
      "body": "Umjesto 40 otvorenih kartica — jedan dokument i jasna odluka.",
      "badge": "Ilustrativni primjer",
      "documentTitle": "Izbor programa",
      "documentMeta": "Master studij · Evropa · 8 programa",
      "rows": [
        [
          "Program A",
          "Odlično odgovara profilu",
          "Srednji rizik"
        ],
        [
          "Program B",
          "Uklapa se u budžet",
          "Niži rizik"
        ],
        [
          "Program C",
          "Zahtjevna stipendija",
          "Viši rizik"
        ]
      ],
      "timeline": [
        "Rok i dokumenti",
        "Školarina i životni troškovi",
        "Mogućnosti finansiranja",
        "Razlog i prioritet prijave"
      ],
      "note": "Primjer ne sadrži podatke stvarnog kandidata, stvarne rezultate niti obećanje ishoda."
    },
    "offers": {
      "title": "Platite samo onoliko podrške koliko vam treba.",
      "body": "Za svaku uslugu unaprijed znate šta dobijate, šta nije uključeno i koliko košta.",
      "cta": "Pokrenite 3-minutni upitnik",
      "bestFor": "Najbolje za",
      "includes": "Dobijate",
      "limits": "Obim",
      "cards": [
        {
          "name": "Uvodni razgovor",
          "label": "Prvi korak",
          "price": "Besplatno",
          "meta": "15 min",
          "bestFor": "provjeru možemo li vam pomoći",
          "summary": "Upoznajemo cilj, rok i vrstu podrške koja vam treba.",
          "includes": [
            "preporuku najkorisnijeg sljedećeg koraka"
          ],
          "limits": [
            "bez analize profila i dokumenata"
          ]
        },
        {
          "name": "Strateška konsultacija",
          "label": "Jedna važna odluka",
          "price": "70 €",
          "meta": "60 min",
          "bestFor": "drugo mišljenje ili jasno usmjerenje",
          "summary": "Fokusiran razgovor o profilu, zemljama, budžetu, rizicima i narednim koracima.",
          "includes": [
            "kratku pripremu",
            "60 minuta razgovora 1 na 1",
            "pisani sažetak narednih koraka"
          ],
          "limits": [
            "jedna sesija",
            "bez detaljnog izvještaja o programima"
          ]
        },
        {
          "name": "Izbor programa",
          "label": "Obrazložena lista",
          "price": "350 €",
          "meta": "do 8 programa",
          "bestFor": "odluku gdje se zaista vrijedi prijaviti",
          "summary": "Poredimo programe, troškove, uslove, finansiranje i rokove.",
          "includes": [
            "do 8 programa",
            "jednu doradu",
            "kratak završni razgovor"
          ],
          "limits": [
            "jedna povezana grupa zemalja i ciljeva",
            "ne uključuje izradu prijave"
          ],
          "featured": true
        },
        {
          "name": "Podrška za prijavu",
          "label": "Jedan program",
          "price": "390 €",
          "meta": "1 prijava",
          "bestFor": "kandidata koji već zna gdje se prijavljuje",
          "summary": "Pomažemo da vaši dokumenti budu jasni, uvjerljivi i usklađeni sa zahtjevima programa.",
          "includes": [
            "komentare i dorade CV-a i motivacionog pisma",
            "dvije runde komentara po glavnom dokumentu",
            "spisak dokumenata i završnu kontrolu"
          ],
          "limits": [
            "jedan standardni program",
            "kandidat piše i predaje prijavu"
          ]
        },
        {
          "name": "Kompletno vođenje",
          "label": "Cijeli prijavni ciklus",
          "price": "1.400 €",
          "meta": "do 3 prijave",
          "bestFor": "standardni evropski ciklus od izbora do predaje",
          "summary": "Vodimo strategiju, izbor programa, dokumente, rokove i završnu kontrolu.",
          "includes": [
            "izbor programa i do 3 standardne prijave",
            "dvije runde komentara po glavnom dokumentu",
            "podršku do 4 mjeseca"
          ],
          "limits": [
            "bez posebnih testova, portfolija i složenih postupaka s više eseja"
          ]
        },
        {
          "name": "Prijava za stipendiju",
          "label": "Jedna stipendija",
          "price": "590 €",
          "meta": "standardni obim",
          "bestFor": "jednu jasno odabranu stipendiju",
          "summary": "Gradimo jasnu strategiju i pomažemo da kandidatovi eseji pokažu motivaciju, iskustvo i plan.",
          "includes": [
            "strategiju prijave",
            "do tri runde komentara na eseje kandidata",
            "smjernice za preporuke i završnu kontrolu"
          ],
          "limits": [
            "jedna standardna stipendijska prijava",
            "posebno složene selekcije dogovaramo prije početka"
          ]
        }
      ]
    },
    "pricing": {
      "title": "Cijena je jasna prije početka.",
      "body": "Dodatni rad i cijenu potvrđujemo unaprijed, prije nego što počnemo.",
      "addonsTitle": "Fiksni dodaci",
      "addons": [
        [
          "Dodatna standardna prijava",
          "uz aktivni paket",
          "280 €"
        ],
        [
          "Dodatna stipendijska prijava",
          "standardni obim",
          "300 €"
        ],
        [
          "Priprema za intervju",
          "priprema + simulacija",
          "140 €"
        ],
        [
          "Dodatna strateška konsultacija",
          "60 minuta",
          "70 €"
        ]
      ],
      "instalmentsTitle": "Plaćanje na rate",
      "instalments": [
        "Kompletno vođenje od 1.400 €: do 3 rate"
      ],
      "credit": "Ako u roku od 14 dana nakon konsultacije od 70 € ugovorite odgovarajući veći paket, tih 70 € uračunavamo u cijenu."
    },
    "value": {
      "title": "Iskustvo koje stoji iza procesa.",
      "body": "Naš savjetodavni tim poznaje evropske akademske sisteme, međunarodne prijave i stipendijske procese. To iskustvo pretvaramo u dosljedan način rada — bez tvrdnji o formalnim partnerstvima.",
      "points": [
        [
          "Stipendijski procesi",
          "Iskustvo obuhvata DAAD, Erasmus Mundus, OeAD i France Excellence prijave."
        ],
        [
          "Evropske prijave",
          "Programi prvog i drugog ciklusa, različiti uslovi, rokovi i modeli finansiranja."
        ],
        [
          "Jedan standard rada",
          "Svaki kandidat prolazi isti okvir: usklađenost, trošak, finansiranje, rokovi i rizik."
        ]
      ]
    },
    "trust": {
      "title": "Povjerenje gradimo sistemom, ne velikim obećanjima.",
      "body": "Povjerenje gradimo jasnim obimom, provjerljivim radom i pisanom potvrdom onoga što dobijate.",
      "items": [
        [
          "Jasan pisani obim",
          "Prije plaćanja potvrđujemo šta je uključeno, rok, broj revizija i period podrške."
        ],
        [
          "Kontrola kvaliteta",
          "Svaki rezultat provjeravamo prema zahtjevima programa, rokovima, dosljednosti i autentičnosti."
        ],
        [
          "Privatnost po dizajnu",
          "Stranica ne koristi marketinške ni analitičke kolačiće; Calendly je vanjska usluga."
        ],
        [
          "Etički rad",
          "Ne izmišljamo iskustva, rezultate, partnerstva ni svjedočanstva i ne garantujemo odluku institucije."
        ]
      ],
      "note": "Prije početka rada dobit ćete pisanu potvrdu obima, rokova, cijene i načina plaćanja."
    },
    "faq": {
      "title": "Pitanja prije odluke",
      "items": [
        [
          "Garantujete li upis ili stipendiju?",
          "Odluku uvijek donosi univerzitet ili stipendijsko tijelo. Mi ulažemo maksimalan trud u strategiju, dokumente, rokove i završnu kontrolu kako bi kandidat predao svoju najsnažniju autentičnu prijavu."
        ],
        [
          "Pišete li motivaciono pismo umjesto kandidata?",
          "Ne preuzimamo autorstvo. Pomažemo s idejama, strukturom, pitanjima, komentarima i doradama kako bi kandidatov glas bio jasan i uvjerljiv."
        ],
        [
          "Za koje zemlje radite?",
          "Fokusirani smo na evropske univerzitete. Program biramo prema profilu, budžetu, cilju i rokovima kandidata, a ne prema unaprijed zadanoj listi."
        ],
        [
          "Pomažete li sa stipendijama?",
          "Da. Tim ima iskustvo s DAAD, Erasmus Mundus, OeAD i France Excellence procesima. Važeće uslove uvijek provjeravamo u službenim izvorima."
        ],
        [
          "Kada je najbolje početi?",
          "Idealno je javiti se 6–12 mjeseci prije prvog važnog roka. Ako je rok bliži, na uvodnom razgovoru procijenit ćemo šta je još realno uraditi kvalitetno."
        ],
        [
          "Kako počinje saradnja?",
          "Nakon uvodnog razgovora predlažemo najmanji koristan oblik podrške. Prije početka pisano potvrđujemo obim, rokove, cijenu i način plaćanja."
        ]
      ]
    },
    "booking": {
      "title": "Prvo kratki upitnik. Zatim termin.",
      "body": "Upitnik nam daje početne informacije kako bismo 15 minuta razgovora iskoristili za vaše najvažnije pitanje.",
      "team": "Razgovarat ćete s jednim članom našeg tima. Svi članovi tima dio svog obrazovanja završili su u inostranstvu. Ako naša podrška nije pravi izbor za vaš slučaj, reći ćemo vam to tokom razgovora.",
      "event": "Besplatan uvodni razgovor",
      "duration": "15 minuta",
      "location": "Videopoziv",
      "timezone": "Termin u vašoj vremenskoj zoni",
      "button": "Odaberite termin",
      "note": "Razgovor vas ne obavezuje na kupovinu."
    }
  },
  "sr": {
    "hero": {
      "title": "Studirajte u inostranstvu.",
      "accent": "Prijavite se sa jasnim planom.",
      "body": "Za kandidate za osnovne i master studije i stipendije koji žele da uporede programe, troškove i finansiranje — i predaju snažnu, uređenu prijavu bez nepotrebnog lutanja.",
      "primary": "3-minutni upitnik → besplatan razgovor",
      "secondary": "Pogledajte kako proces funkcioniše",
      "proof": [
        "Nezavisno savetovanje",
        "Jasne cene",
        "Evropske prijave"
      ]
    },
    "decision": {
      "title": "Pre nego što preporučimo program",
      "note": "Proveravamo pet stvari:",
      "paid": "Tek tada program ulazi u preporuku.",
      "factors": [
        [
          "Akademska usklađenost",
          "profil + uslovi"
        ],
        [
          "Ukupan trošak",
          "školarina + životni troškovi"
        ],
        [
          "Finansiranje",
          "stipendije + budžet"
        ],
        [
          "Rokovi",
          "realan kalendar"
        ],
        [
          "Rizik",
          "uravnotežen izbor"
        ]
      ]
    },
    "independent": {
      "title": "Prvo dobra odluka. Zatim snažna prijava.",
      "body": "Program biramo prema vašem profilu, budžetu, ciljevima i rokovima. Tek posle toga gradimo prijavu koja jasno pokazuje zašto baš vi odgovarate tom programu.",
      "statement": "Nas plaćate vi, a ne univerziteti. Zato svaku preporuku zasnivamo isključivo na tome što najbolje odgovara vašem profilu, ciljevima i budžetu."
    },
    "audiences": {
      "title": "Kada Adria Admissions donosi najviše vrednosti.",
      "body": "Najbolje radimo sa kandidatima koji žele da donesu promišljenu odluku i aktivno učestvuju u procesu.",
      "groups": [
        {
          "title": "Za vas je ako",
          "lead": "Želite ličnu, stručnu podršku umesto generičke liste programa.",
          "points": [
            "birate osnovne ili master studije u Evropi",
            "poredite mnogo opcija, troškova i rokova",
            "želite ozbiljno da pristupite stipendijama",
            "treba vam stručno drugo mišljenje pre prijave"
          ]
        },
        {
          "title": "Najviše ćete dobiti ako",
          "lead": "Spremni ste da zajedno s nama gradite promišljen izbor i snažnu, autentičnu prijavu.",
          "points": [
            "želite realnu procenu bez velikih obećanja",
            "želite da zadržite sopstveni glas u prijavi",
            "spremni ste da prilagodite dokumente svakom programu",
            "možete aktivno da učestvujete i poštujete rokove"
          ]
        }
      ]
    },
    "method": {
      "title": "Od profila do predaje, u tri jasna koraka.",
      "body": "Svaki korak završava konkretnom odlukom, dokumentom ili sledećim potezom.",
      "steps": [
        [
          "Upoznajemo vaš profil",
          "Akademski rezultati, interesovanja, budžet, jezici, zemlje i karijerni cilj."
        ],
        [
          "Gradimo strategiju",
          "Izbor programa, plan rokova, finansijska slika i prioriteti."
        ],
        [
          "Jačamo i vodimo prijavu",
          "Komentari i dorade dokumenata, kontrola zahteva i podrška do predaje."
        ]
      ]
    },
    "sample": {
      "title": "Pogledajte šta dobijate.",
      "body": "Umesto 40 otvorenih kartica — jedan dokument i jasna odluka.",
      "badge": "Ilustrativni primer",
      "documentTitle": "Izbor programa",
      "documentMeta": "Master studije · Evropa · 8 programa",
      "rows": [
        [
          "Program A",
          "Odlično odgovara profilu",
          "Srednji rizik"
        ],
        [
          "Program B",
          "Uklapa se u budžet",
          "Niži rizik"
        ],
        [
          "Program C",
          "Zahtevna stipendija",
          "Viši rizik"
        ]
      ],
      "timeline": [
        "Rok i dokumenti",
        "Školarina i životni troškovi",
        "Mogućnosti finansiranja",
        "Razlog i prioritet prijave"
      ],
      "note": "Primer ne sadrži podatke stvarnog kandidata, stvarne rezultate niti obećanje ishoda."
    },
    "offers": {
      "title": "Platite samo onoliko podrške koliko vam treba.",
      "body": "Za svaku uslugu unapred znate šta dobijate, šta nije uključeno i koliko košta.",
      "cta": "Pokrenite 3-minutni upitnik",
      "bestFor": "Najbolje za",
      "includes": "Dobijate",
      "limits": "Obim",
      "cards": [
        {
          "name": "Uvodni razgovor",
          "label": "Prvi korak",
          "price": "Besplatno",
          "meta": "15 min",
          "bestFor": "proveru možemo li da vam pomognemo",
          "summary": "Upoznajemo cilj, rok i vrstu podrške koja vam treba.",
          "includes": [
            "preporuku najkorisnijeg sledećeg koraka"
          ],
          "limits": [
            "bez analize profila i dokumenata"
          ]
        },
        {
          "name": "Strateška konsultacija",
          "label": "Jedna važna odluka",
          "price": "70 €",
          "meta": "60 min",
          "bestFor": "drugo mišljenje ili jasno usmerenje",
          "summary": "Fokusiran razgovor o profilu, zemljama, budžetu, rizicima i sledećim koracima.",
          "includes": [
            "kratku pripremu",
            "60 minuta razgovora 1 na 1",
            "pisani sažetak sledećih koraka"
          ],
          "limits": [
            "jedan razgovor",
            "bez detaljnog izveštaja o programima"
          ]
        },
        {
          "name": "Izbor programa",
          "label": "Obrazložena lista",
          "price": "350 €",
          "meta": "do 8 programa",
          "bestFor": "odluku gde se zaista vredi prijaviti",
          "summary": "Poredimo programe, troškove, uslove, finansiranje i rokove.",
          "includes": [
            "do 8 programa",
            "jednu izmenu",
            "kratak završni razgovor"
          ],
          "limits": [
            "jedna povezana grupa zemalja i ciljeva",
            "ne uključuje izradu prijave"
          ],
          "featured": true
        },
        {
          "name": "Podrška za prijavu",
          "label": "Jedan program",
          "price": "390 €",
          "meta": "1 prijava",
          "bestFor": "kandidata koji već zna gde se prijavljuje",
          "summary": "Pomažemo da vaši dokumenti budu jasni, uverljivi i usklađeni sa zahtevima programa.",
          "includes": [
            "komentare i dorade CV-a i motivacionog pisma",
            "dve runde komentara po glavnom dokumentu",
            "spisak dokumenata i završnu kontrolu"
          ],
          "limits": [
            "jedan standardni program",
            "kandidat piše i predaje prijavu"
          ]
        },
        {
          "name": "Kompletno vođenje",
          "label": "Ceo prijavni ciklus",
          "price": "1.400 €",
          "meta": "do 3 prijave",
          "bestFor": "standardni evropski ciklus od izbora do predaje",
          "summary": "Vodimo strategiju, izbor programa, dokumente, rokove i završnu kontrolu.",
          "includes": [
            "izbor programa i do 3 standardne prijave",
            "dve runde komentara po glavnom dokumentu",
            "podršku do 4 meseca"
          ],
          "limits": [
            "bez posebnih testova, portfolija i složenih postupaka sa više eseja"
          ]
        },
        {
          "name": "Prijava za stipendiju",
          "label": "Jedna stipendija",
          "price": "590 €",
          "meta": "standardni obim",
          "bestFor": "jednu jasno odabranu stipendiju",
          "summary": "Gradimo jasnu strategiju i pomažemo da kandidatovi eseji pokažu motivaciju, iskustvo i plan.",
          "includes": [
            "strategiju prijave",
            "do tri runde komentara na eseje kandidata",
            "uputstva za preporuke i završnu kontrolu"
          ],
          "limits": [
            "jedna standardna stipendijska prijava",
            "posebno složene prijave dogovaramo pre početka"
          ]
        }
      ]
    },
    "pricing": {
      "title": "Cena je jasna pre početka.",
      "body": "Dodatni rad i cenu potvrđujemo unapred, pre nego što počnemo.",
      "addonsTitle": "Fiksni dodaci",
      "addons": [
        [
          "Dodatna standardna prijava",
          "uz aktivni paket",
          "280 €"
        ],
        [
          "Dodatna stipendijska prijava",
          "standardni obim",
          "300 €"
        ],
        [
          "Priprema za intervju",
          "priprema + simulacija",
          "140 €"
        ],
        [
          "Dodatna strateška konsultacija",
          "60 minuta",
          "70 €"
        ]
      ],
      "instalmentsTitle": "Plaćanje na rate",
      "instalments": [
        "Kompletno vođenje od 1.400 €: do 3 rate"
      ],
      "credit": "Ako u roku od 14 dana nakon konsultacije od 70 € ugovorite odgovarajući veći paket, tih 70 € uračunavamo u cenu."
    },
    "value": {
      "title": "Iskustvo koje stoji iza procesa.",
      "body": "Naš savetodavni tim poznaje evropske akademske sisteme, međunarodne prijave i stipendijske procese. To iskustvo pretvaramo u dosledan način rada — bez tvrdnji o formalnim partnerstvima.",
      "points": [
        [
          "Stipendijski procesi",
          "Iskustvo obuhvata DAAD, Erasmus Mundus, OeAD i France Excellence prijave."
        ],
        [
          "Evropske prijave",
          "Osnovni i master programi, različiti uslovi, rokovi i modeli finansiranja."
        ],
        [
          "Jedan standard rada",
          "Svaki kandidat prolazi isti okvir: usklađenost, trošak, finansiranje, rokovi i rizik."
        ]
      ]
    },
    "trust": {
      "title": "Poverenje gradimo sistemom, ne velikim obećanjima.",
      "body": "Poverenje gradimo jasnim obimom, proverljivim radom i pisanom potvrdom onoga što dobijate.",
      "items": [
        [
          "Jasan pisani obim",
          "Pre plaćanja potvrđujemo šta je uključeno, rok, broj izmena i period podrške."
        ],
        [
          "Kontrola kvaliteta",
          "Svaki rezultat proveravamo prema zahtevima programa, rokovima, doslednosti i autentičnosti."
        ],
        [
          "Privatnost po dizajnu",
          "Stranica ne koristi marketinške ni analitičke kolačiće; Calendly je spoljna usluga."
        ],
        [
          "Etički rad",
          "Ne izmišljamo iskustva, rezultate, partnerstva ni utiske klijenata i ne garantujemo odluku institucije."
        ]
      ],
      "note": "Pre početka rada dobićete pisanu potvrdu obima, rokova, cene i načina plaćanja."
    },
    "faq": {
      "title": "Pitanja pre odluke",
      "items": [
        [
          "Da li garantujete upis ili stipendiju?",
          "Odluku uvek donosi univerzitet ili stipendijsko telo. Mi ulažemo maksimalan trud u strategiju, dokumente, rokove i završnu kontrolu kako bi kandidat predao svoju najsnažniju autentičnu prijavu."
        ],
        [
          "Pišete li motivaciono pismo umesto kandidata?",
          "Ne preuzimamo autorstvo. Pomažemo sa idejama, strukturom, pitanjima, komentarima i doradama kako bi kandidatov glas bio jasan i uverljiv."
        ],
        [
          "Za koje zemlje radite?",
          "Fokusirani smo na evropske univerzitete. Program biramo prema profilu, budžetu, cilju i rokovima kandidata, a ne prema unapred zadatoj listi."
        ],
        [
          "Pomažete li sa stipendijama?",
          "Da. Tim ima iskustvo sa DAAD, Erasmus Mundus, OeAD i France Excellence procesima. Važeće uslove uvek proveravamo u zvaničnim izvorima."
        ],
        [
          "Kada je najbolje početi?",
          "Idealno je javiti se 6–12 meseci pre prvog važnog roka. Ako je rok bliži, na uvodnom razgovoru procenićemo šta je još realno uraditi kvalitetno."
        ],
        [
          "Kako počinje saradnja?",
          "Nakon uvodnog razgovora predlažemo najmanji koristan oblik podrške. Pre početka pisano potvrđujemo obim, rokove, cenu i način plaćanja."
        ]
      ]
    },
    "booking": {
      "title": "Prvo kratak upitnik. Zatim termin.",
      "body": "Upitnik nam daje početne informacije kako bismo 15 minuta razgovora iskoristili za vaše najvažnije pitanje.",
      "team": "Razgovaraćete s jednim članom našeg tima. Svi članovi tima deo svog obrazovanja završili su u inostranstvu. Ako naša podrška nije pravi izbor za vaš slučaj, reći ćemo vam to tokom razgovora.",
      "event": "Besplatan uvodni razgovor",
      "duration": "15 minuta",
      "location": "Onlajn video-poziv",
      "timezone": "Termin u vašoj vremenskoj zoni",
      "button": "Izaberite termin",
      "note": "Razgovor vas ni na šta ne obavezuje."
    }
  },
  "hr": {
    "hero": {
      "title": "Studirajte u inozemstvu.",
      "accent": "Prijavite se s jasnim planom.",
      "body": "Za kandidate za prijediplomske i diplomske studije te stipendije koji žele usporediti programe, troškove i financiranje — i predati snažnu, uređenu prijavu bez nepotrebnog lutanja.",
      "primary": "3-minutni upitnik → besplatan razgovor",
      "secondary": "Pogledajte kako izgleda postupak",
      "proof": [
        "Neovisno savjetovanje",
        "Jasne cijene",
        "Europske prijave"
      ]
    },
    "decision": {
      "title": "Prije nego što preporučimo program",
      "note": "Provjeravamo pet stvari:",
      "paid": "Tek tada program ulazi u preporuku.",
      "factors": [
        [
          "Akademska usklađenost",
          "profil + uvjeti"
        ],
        [
          "Ukupan trošak",
          "školarina + životni troškovi"
        ],
        [
          "Financiranje",
          "stipendije + proračun"
        ],
        [
          "Rokovi",
          "izvediv kalendar"
        ],
        [
          "Rizik",
          "uravnotežen izbor"
        ]
      ]
    },
    "independent": {
      "title": "Prvo dobra odluka. Zatim snažna prijava.",
      "body": "Program biramo prema vašem profilu, proračunu, ciljevima i rokovima. Tek nakon toga gradimo prijavu koja jasno pokazuje zašto baš vi odgovarate tom programu.",
      "statement": "Nas plaćate vi, a ne sveučilišta. Zato svaku preporuku temeljimo isključivo na tome što najbolje odgovara vašem profilu, ciljevima i proračunu."
    },
    "audiences": {
      "title": "Kada Adria Admissions donosi najviše vrijednosti.",
      "body": "Najbolje radimo s kandidatima koji žele donijeti promišljenu odluku i aktivno sudjelovati u procesu.",
      "groups": [
        {
          "title": "Za vas je ako",
          "lead": "Želite osobnu, stručnu podršku umjesto generičke liste programa.",
          "points": [
            "birate prijediplomski ili diplomski studij u Europi",
            "uspoređujete mnogo opcija, troškova i rokova",
            "želite ozbiljno pristupiti stipendijama",
            "treba vam stručno drugo mišljenje prije prijave"
          ]
        },
        {
          "title": "Najviše ćete dobiti ako",
          "lead": "Spremni ste zajedno s nama graditi promišljen izbor i snažnu, autentičnu prijavu.",
          "points": [
            "želite realnu procjenu bez velikih obećanja",
            "želite zadržati vlastiti glas u prijavi",
            "spremni ste prilagoditi dokumente svakom programu",
            "možete aktivno sudjelovati i poštovati rokove"
          ]
        }
      ]
    },
    "method": {
      "title": "Od profila do predaje, u tri jasna koraka.",
      "body": "Svaki korak završava konkretnom odlukom, dokumentom ili sljedećim potezom.",
      "steps": [
        [
          "Upoznajemo vaš profil",
          "Akademski rezultati, interesi, proračun, jezici, zemlje i karijerni cilj."
        ],
        [
          "Gradimo strategiju",
          "Izbor programa, plan rokova, financijska slika i prioriteti."
        ],
        [
          "Jačamo i vodimo prijavu",
          "Komentari i dorade dokumenata, kontrola zahtjeva i podrška do predaje."
        ]
      ]
    },
    "sample": {
      "title": "Pogledajte što dobivate.",
      "body": "Umjesto 40 otvorenih kartica — jedan dokument i jasna odluka.",
      "badge": "Ilustrativni primjer",
      "documentTitle": "Izbor programa",
      "documentMeta": "Diplomski studij · Europa · 8 programa",
      "rows": [
        [
          "Program A",
          "Odlično odgovara profilu",
          "Srednji rizik"
        ],
        [
          "Program B",
          "Uklapa se u proračun",
          "Niži rizik"
        ],
        [
          "Program C",
          "Zahtjevna stipendija",
          "Viši rizik"
        ]
      ],
      "timeline": [
        "Rok i dokumenti",
        "Školarina i životni troškovi",
        "Mogućnosti financiranja",
        "Razlog i prioritet prijave"
      ],
      "note": "Primjer ne sadrži podatke stvarnog kandidata, stvarne rezultate niti obećanje ishoda."
    },
    "offers": {
      "title": "Platite samo onoliko podrške koliko vam treba.",
      "body": "Za svaku uslugu unaprijed znate što dobivate, što nije uključeno i koliko košta.",
      "cta": "Pokrenite 3-minutni upitnik",
      "bestFor": "Najbolje za",
      "includes": "Dobivate",
      "limits": "Opseg",
      "cards": [
        {
          "name": "Uvodni razgovor",
          "label": "Prvi korak",
          "price": "Besplatno",
          "meta": "15 min",
          "bestFor": "provjeru možemo li vam pomoći",
          "summary": "Upoznajemo cilj, rok i vrstu podrške koja vam treba.",
          "includes": [
            "preporuku najkorisnijeg sljedećeg koraka"
          ],
          "limits": [
            "bez analize profila i dokumenata"
          ]
        },
        {
          "name": "Strateško savjetovanje",
          "label": "Jedna važna odluka",
          "price": "70 €",
          "meta": "60 min",
          "bestFor": "drugo mišljenje ili jasno usmjerenje",
          "summary": "Usmjeren razgovor o profilu, zemljama, proračunu, rizicima i sljedećim koracima.",
          "includes": [
            "kratku pripremu",
            "60 minuta razgovora 1 na 1",
            "pisani sažetak sljedećih koraka"
          ],
          "limits": [
            "jedan razgovor",
            "bez detaljnog izvješća o programima"
          ]
        },
        {
          "name": "Izbor programa",
          "label": "Obrazložena lista",
          "price": "350 €",
          "meta": "do 8 programa",
          "bestFor": "odluku gdje se zaista vrijedi prijaviti",
          "summary": "Uspoređujemo programe, troškove, uvjete, financiranje i rokove.",
          "includes": [
            "do 8 programa",
            "jednu doradu",
            "kratak završni razgovor"
          ],
          "limits": [
            "jedna povezana skupina zemalja i ciljeva",
            "ne uključuje izradu prijave"
          ],
          "featured": true
        },
        {
          "name": "Podrška za prijavu",
          "label": "Jedan program",
          "price": "390 €",
          "meta": "1 prijava",
          "bestFor": "kandidata koji već zna gdje se prijavljuje",
          "summary": "Pomažemo da vaši dokumenti budu jasni, uvjerljivi i usklađeni sa zahtjevima programa.",
          "includes": [
            "komentare i dorade životopisa i motivacijskog pisma",
            "dva kruga komentara po glavnom dokumentu",
            "popis dokumenata i završnu kontrolu"
          ],
          "limits": [
            "jedan standardni program",
            "kandidat piše i predaje prijavu"
          ]
        },
        {
          "name": "Potpuno vođenje",
          "label": "Cijeli prijavni ciklus",
          "price": "1.400 €",
          "meta": "do 3 prijave",
          "bestFor": "standardni europski ciklus od izbora do predaje",
          "summary": "Vodimo strategiju, izbor programa, dokumente, rokove i završnu kontrolu.",
          "includes": [
            "izbor programa i do 3 standardne prijave",
            "dva kruga komentara po glavnom dokumentu",
            "podršku do 4 mjeseca"
          ],
          "limits": [
            "bez posebnih testova, portfelja i složenih postupaka s više eseja"
          ]
        },
        {
          "name": "Prijava za stipendiju",
          "label": "Jedna stipendija",
          "price": "590 €",
          "meta": "standardni opseg",
          "bestFor": "jednu jasno odabranu stipendiju",
          "summary": "Gradimo jasnu strategiju i pomažemo da kandidatovi eseji pokažu motivaciju, iskustvo i plan.",
          "includes": [
            "strategiju prijave",
            "do tri kruga komentara na eseje kandidata",
            "upute za preporuke i završnu kontrolu"
          ],
          "limits": [
            "jedna standardna prijava za stipendiju",
            "posebno složene prijave dogovaramo prije početka"
          ]
        }
      ]
    },
    "pricing": {
      "title": "Cijena je jasna prije početka.",
      "body": "Dodatni rad i cijenu potvrđujemo unaprijed, prije nego što počnemo.",
      "addonsTitle": "Fiksni dodaci",
      "addons": [
        [
          "Dodatna standardna prijava",
          "uz aktivni paket",
          "280 €"
        ],
        [
          "Dodatna prijava za stipendiju",
          "standardni opseg",
          "300 €"
        ],
        [
          "Priprema za razgovor",
          "priprema + simulacija",
          "140 €"
        ],
        [
          "Dodatno strateško savjetovanje",
          "60 minuta",
          "70 €"
        ]
      ],
      "instalmentsTitle": "Obročno plaćanje",
      "instalments": [
        "Potpuno vođenje od 1.400 €: do 3 obroka"
      ],
      "credit": "Ako u roku od 14 dana nakon savjetovanja od 70 € ugovorite odgovarajući veći paket, tih 70 € uračunavamo u cijenu."
    },
    "value": {
      "title": "Iskustvo koje stoji iza procesa.",
      "body": "Naš savjetodavni tim poznaje europske akademske sustave, međunarodne prijave i stipendijske postupke. To iskustvo pretvaramo u dosljedan način rada — bez tvrdnji o formalnim partnerstvima.",
      "points": [
        [
          "Stipendijski postupci",
          "Iskustvo obuhvaća DAAD, Erasmus Mundus, OeAD i France Excellence prijave."
        ],
        [
          "Europske prijave",
          "Prijediplomski i diplomski programi, različiti uvjeti, rokovi i modeli financiranja."
        ],
        [
          "Jedan standard rada",
          "Svaki kandidat prolazi isti okvir: usklađenost, trošak, financiranje, rokovi i rizik."
        ]
      ]
    },
    "trust": {
      "title": "Povjerenje gradimo sustavom, ne velikim obećanjima.",
      "body": "Povjerenje gradimo jasnim opsegom, provjerljivim radom i pisanom potvrdom onoga što dobivate.",
      "items": [
        [
          "Jasan pisani opseg",
          "Prije plaćanja potvrđujemo što je uključeno, rok, broj dorada i razdoblje podrške."
        ],
        [
          "Kontrola kvalitete",
          "Svaki rezultat provjeravamo prema uvjetima programa, rokovima, dosljednosti i autentičnosti."
        ],
        [
          "Privatnost po dizajnu",
          "Stranica ne koristi marketinške ni analitičke kolačiće; Calendly je vanjska usluga."
        ],
        [
          "Etički rad",
          "Ne izmišljamo iskustva, rezultate, partnerstva ni izjave klijenata i ne jamčimo odluku institucije."
        ]
      ],
      "note": "Prije početka rada dobit ćete pisanu potvrdu opsega, rokova, cijene i načina plaćanja."
    },
    "faq": {
      "title": "Pitanja prije odluke",
      "items": [
        [
          "Jamčite li upis ili stipendiju?",
          "Odluku uvijek donosi sveučilište ili stipendijsko tijelo. Mi ulažemo maksimalan trud u strategiju, dokumente, rokove i završnu kontrolu kako bi kandidat predao svoju najsnažniju autentičnu prijavu."
        ],
        [
          "Pišete li motivacijsko pismo umjesto kandidata?",
          "Ne preuzimamo autorstvo. Pomažemo s idejama, strukturom, pitanjima, komentarima i doradama kako bi kandidatov glas bio jasan i uvjerljiv."
        ],
        [
          "Za koje zemlje radite?",
          "Fokusirani smo na europska sveučilišta. Program biramo prema profilu, proračunu, cilju i rokovima kandidata, a ne prema unaprijed zadanoj listi."
        ],
        [
          "Pomažete li sa stipendijama?",
          "Da. Tim ima iskustvo s prijavama za DAAD, Erasmus Mundus, OeAD i France Excellence. Važeće uvjete uvijek provjeravamo u službenim izvorima."
        ],
        [
          "Kada je najbolje početi?",
          "Idealno je javiti se 6–12 mjeseci prije prvog važnog roka. Ako je rok bliži, na uvodnom razgovoru procijenit ćemo što je još realno kvalitetno napraviti."
        ],
        [
          "Kako počinje suradnja?",
          "Nakon uvodnog razgovora predlažemo najmanji koristan oblik podrške. Prije početka pisano potvrđujemo opseg, rokove, cijenu i način plaćanja."
        ]
      ]
    },
    "booking": {
      "title": "Prvo kratki upitnik. Zatim termin.",
      "body": "Upitnik nam daje početne informacije kako bismo 15 minuta razgovora iskoristili za vaše najvažnije pitanje.",
      "team": "Razgovarat ćete s jednim članom našeg tima. Svi članovi tima dio svog obrazovanja završili su u inozemstvu. Ako naša podrška nije pravi izbor za vaš slučaj, reći ćemo vam to tijekom razgovora.",
      "event": "Besplatan uvodni razgovor",
      "duration": "15 minuta",
      "location": "Videopoziv",
      "timezone": "Termin u vašoj vremenskoj zoni",
      "button": "Odaberite termin",
      "note": "Razgovor vas ni na što ne obvezuje."
    }
  },
  "en": {
    "hero": {
      "title": "Study abroad.",
      "accent": "Apply with a clear plan.",
      "body": "For bachelor’s, master’s and scholarship applicants who want to compare programmes, total costs and funding — and submit a strong, well-organised application without unnecessary guesswork.",
      "primary": "3-minute questionnaire → free call",
      "secondary": "See how the process works",
      "proof": [
        "Independent advice",
        "Clear pricing",
        "European applications"
      ]
    },
    "decision": {
      "title": "Before we recommend a programme",
      "note": "We check five things:",
      "paid": "Only then does a programme make our shortlist.",
      "factors": [
        [
          "Academic fit",
          "profile + criteria"
        ],
        [
          "Total cost",
          "tuition + living costs"
        ],
        [
          "Funding",
          "scholarships + budget"
        ],
        [
          "Deadlines",
          "workable calendar"
        ],
        [
          "Risk",
          "balanced selection"
        ]
      ]
    },
    "independent": {
      "title": "Make the right decision first. Then build a strong application.",
      "body": "We select programmes around your profile, budget, goals and deadlines. Only then do we build an application that makes your fit clear.",
      "statement": "You pay us — universities do not. Every recommendation is therefore based solely on what best fits your profile, goals and budget."
    },
    "audiences": {
      "title": "When Adria Admissions brings the most value.",
      "body": "We work best with applicants who want to make a considered decision and take an active role in the process.",
      "groups": [
        {
          "title": "A strong fit if you",
          "lead": "Want personal, expert support instead of a generic programme list.",
          "points": [
            "are choosing a bachelor’s or master’s degree in Europe",
            "are comparing many options, costs and deadlines",
            "want to approach scholarships seriously",
            "need an expert second opinion before applying"
          ]
        },
        {
          "title": "You will get the most value if",
          "lead": "You are ready to work with us on a considered choice and a strong, authentic application.",
          "points": [
            "you want a realistic assessment without big promises",
            "you want to keep your own voice in the application",
            "you are ready to tailor documents to each programme",
            "you can participate actively and meet deadlines"
          ]
        }
      ]
    },
    "method": {
      "title": "From profile to submission in three clear steps.",
      "body": "Each step ends with a concrete decision, document or next move.",
      "steps": [
        [
          "We understand your profile",
          "Academic record, interests, budget, languages, countries and career goal."
        ],
        [
          "We build the strategy",
          "Programme selection, deadline plan, financial picture and priorities."
        ],
        [
          "We strengthen and guide the application",
          "Document feedback, requirement checks and support through submission."
        ]
      ]
    },
    "sample": {
      "title": "See what you receive.",
      "body": "Instead of 40 open tabs — one document and a clear decision.",
      "badge": "Illustrative sample",
      "documentTitle": "Programme selection",
      "documentMeta": "Master’s · Europe · 8 programmes",
      "rows": [
        [
          "Programme A",
          "Strong profile match",
          "Medium risk"
        ],
        [
          "Programme B",
          "Fits the budget",
          "Lower risk"
        ],
        [
          "Programme C",
          "Competitive scholarship",
          "Higher risk"
        ]
      ],
      "timeline": [
        "Deadline and documents",
        "Tuition and living costs",
        "Funding opportunities",
        "Reason and application priority"
      ],
      "note": "This sample contains no real applicant data, outcomes or promise of admission."
    },
    "offers": {
      "title": "Pay only for the support you need.",
      "body": "For every service, you know the deliverables, boundaries and price before work begins.",
      "cta": "Start the 3-minute questionnaire",
      "bestFor": "Best for",
      "includes": "You receive",
      "limits": "Scope",
      "cards": [
        {
          "name": "Introductory call",
          "label": "First step",
          "price": "Free",
          "meta": "15 min",
          "bestFor": "checking whether we can help",
          "summary": "We learn your goal, deadline and the support you need.",
          "includes": [
            "a recommendation for the most useful next step"
          ],
          "limits": [
            "no profile or document analysis"
          ]
        },
        {
          "name": "Strategy consultation",
          "label": "One important decision",
          "price": "€70",
          "meta": "60 min",
          "bestFor": "a second opinion or clear direction",
          "summary": "A focused conversation about profile, countries, budget, risks and next steps.",
          "includes": [
            "brief preparation",
            "a 60-minute one-to-one conversation",
            "written next-step summary"
          ],
          "limits": [
            "one session",
            "no detailed programme report"
          ]
        },
        {
          "name": "Programme selection",
          "label": "A reasoned list",
          "price": "€350",
          "meta": "up to 8 programmes",
          "bestFor": "deciding where an application is worth the effort",
          "summary": "We compare programmes, costs, criteria, funding and deadlines.",
          "includes": [
            "up to 8 programmes",
            "one revision",
            "a short review call"
          ],
          "limits": [
            "one coherent group of countries and goals",
            "application documents not included"
          ],
          "featured": true
        },
        {
          "name": "Application support",
          "label": "One programme",
          "price": "€390",
          "meta": "1 application",
          "bestFor": "applicants who already know where to apply",
          "summary": "We help make your documents clear, persuasive and aligned with programme requirements.",
          "includes": [
            "comments and revisions on your CV and motivation letter",
            "two feedback rounds per main document",
            "document checklist and final quality check"
          ],
          "limits": [
            "one standard programme",
            "the applicant writes and submits the application"
          ]
        },
        {
          "name": "Complete support",
          "label": "Full application cycle",
          "price": "€1,400",
          "meta": "up to 3 applications",
          "bestFor": "a standard European cycle from selection to submission",
          "summary": "We guide strategy, programme selection, documents, deadlines and final checks.",
          "includes": [
            "programme selection and up to 3 standard applications",
            "two feedback rounds per main document",
            "support for up to 4 months"
          ],
          "limits": [
            "special tests, portfolios and complex multi-essay processes excluded"
          ]
        },
        {
          "name": "Scholarship application",
          "label": "One scholarship",
          "price": "€590",
          "meta": "standard scope",
          "bestFor": "one clearly selected scholarship",
          "summary": "We shape the strategy and help the applicant’s essays communicate motivation, experience and direction.",
          "includes": [
            "application strategy",
            "up to three feedback rounds on applicant-authored essays",
            "guidance on recommendation letters and a final check"
          ],
          "limits": [
            "one standard scholarship application",
            "unusually complex scholarship processes are scoped separately before work begins"
          ]
        }
      ]
    },
    "pricing": {
      "title": "The price is clear before work begins.",
      "body": "Any additional work and its price are confirmed before we start.",
      "addonsTitle": "Fixed add-ons",
      "addons": [
        [
          "Additional standard application",
          "with an active package",
          "€280"
        ],
        [
          "Additional scholarship application",
          "standard scope",
          "€300"
        ],
        [
          "Interview preparation",
          "preparation + mock",
          "€140"
        ],
        [
          "Additional strategy consultation",
          "60 minutes",
          "€70"
        ]
      ],
      "instalmentsTitle": "Instalments",
      "instalments": [
        "Complete support at €1,400: up to 3 payments"
      ],
      "credit": "If you purchase a qualifying larger package within 14 days of the €70 consultation, we credit the €70 toward that package."
    },
    "value": {
      "title": "Experience that informs our process.",
      "body": "Our advisory team understands European academic systems, international applications and scholarship processes. We turn that experience into a consistent way of working — without implying formal partnerships.",
      "points": [
        [
          "Scholarship processes",
          "Experience includes DAAD, Erasmus Mundus, OeAD and France Excellence applications."
        ],
        [
          "European applications",
          "Bachelor’s and master’s programmes with different requirements, deadlines and funding models."
        ],
        [
          "One working standard",
          "Every applicant follows the same framework: fit, cost, funding, deadlines and risk."
        ]
      ]
    },
    "trust": {
      "title": "Trust built on a clear process, not big promises.",
      "body": "We earn trust through clear scope, verifiable work and written confirmation of what you receive.",
      "items": [
        [
          "Written scope",
          "Before payment, we confirm what is included, the deadline, the number of revisions and the support period."
        ],
        [
          "Quality control",
          "Every output is checked against programme requirements, deadlines, consistency and authenticity."
        ],
        [
          "Privacy by design",
          "The site uses no analytics or marketing cookies; Calendly is an external service."
        ],
        [
          "Ethical support",
          "We do not invent experience, outcomes, partnerships or testimonials, and never guarantee an institution’s decision."
        ]
      ],
      "note": "Before work begins, you receive written confirmation of scope, deadlines, price and payment method."
    },
    "faq": {
      "title": "Questions before you decide",
      "items": [
        [
          "Do you guarantee admission or a scholarship?",
          "The university or funding body always makes the decision. We give full attention to the strategy, documents, deadlines and final checks so each applicant can submit the strongest authentic application possible."
        ],
        [
          "Do you write the motivation letter for the applicant?",
          "We do not take over authorship. We help with ideas, structure, questions, detailed feedback and revisions so the applicant’s own voice stays clear and convincing."
        ],
        [
          "Which countries do you cover?",
          "We focus on European universities. Programmes are selected around the applicant’s profile, budget, goals and deadlines — not a predetermined list."
        ],
        [
          "Do you help with scholarships?",
          "Yes. The team has experience with DAAD, Erasmus Mundus, OeAD and France Excellence processes. Current rules are always checked against official sources."
        ],
        [
          "When should I start?",
          "Ideally, contact us 6–12 months before the first important deadline. If it is closer, the introductory call will establish what can still be done well."
        ],
        [
          "How does an engagement begin?",
          "After the introductory call, we recommend the simplest level of support that will genuinely help. Before work starts, we confirm the scope, deadlines, price and payment method in writing."
        ]
      ]
    },
    "booking": {
      "title": "A short questionnaire first. Then your call.",
      "body": "The questionnaire gives us the starting information we need to use the 15-minute call for your most important question.",
      "team": "You will speak with one member of our team. Every team member completed part of their education abroad. If our support is not the right fit for your situation, we will tell you during the call.",
      "event": "Free introductory call",
      "duration": "15 minutes",
      "location": "Online video call",
      "timezone": "Shown in your time zone",
      "button": "Choose a time",
      "note": "The call does not commit you to any paid service."
    }
  },
  "de": {
    "hero": {
      "title": "Studieren Sie im Ausland.",
      "accent": "Bewerben Sie sich mit einem klaren Plan.",
      "body": "Für Personen, die sich für Bachelor- oder Masterstudiengänge beziehungsweise um Stipendien bewerben, Programme, Gesamtkosten und Finanzierung vergleichen und eine starke, gut organisierte Bewerbung ohne unnötige Umwege einreichen möchten.",
      "primary": "3-Minuten-Fragebogen → kostenloses Gespräch",
      "secondary": "So funktioniert der Ablauf",
      "proof": [
        "Unabhängige Beratung",
        "Klare Preise",
        "Europäische Bewerbungen"
      ]
    },
    "decision": {
      "title": "Bevor wir einen Studiengang empfehlen",
      "note": "Wir prüfen fünf Punkte:",
      "paid": "Erst dann nehmen wir einen Studiengang in unsere Empfehlung auf.",
      "factors": [
        [
          "Akademische Passung",
          "Profil + Kriterien"
        ],
        [
          "Gesamtkosten",
          "Studiengebühren + Lebenshaltungskosten"
        ],
        [
          "Finanzierung",
          "Stipendien + Budget"
        ],
        [
          "Fristen",
          "machbarer Zeitplan"
        ],
        [
          "Risiko",
          "ausgewogene Auswahl"
        ]
      ]
    },
    "independent": {
      "title": "Zuerst die richtige Entscheidung. Dann die starke Bewerbung.",
      "body": "Wir wählen Studiengänge nach Ihrem Profil, Ihrem Budget, Ihren Zielen und Fristen aus. Erst danach entwickeln wir eine Bewerbung, die überzeugend zeigt, warum Sie zum Studiengang passen.",
      "statement": "Sie bezahlen uns — nicht die Hochschulen. Deshalb richten wir jede Empfehlung ausschließlich an Ihrem Profil, Ihren Zielen und Ihrem Budget aus."
    },
    "audiences": {
      "title": "Wann Adria Admissions den größten Mehrwert bietet.",
      "body": "Wir arbeiten am besten mit Bewerbenden, die bewusst entscheiden und aktiv am Prozess mitwirken möchten.",
      "groups": [
        {
          "title": "Passend für Sie, wenn Sie",
          "lead": "Persönliche, fachkundige Unterstützung statt einer generischen Programmliste wünschen.",
          "points": [
            "ein Bachelor- oder Masterstudium in Europa wählen",
            "viele Optionen, Kosten und Fristen vergleichen",
            "Stipendien ernsthaft angehen möchten",
            "vor der Bewerbung eine fachkundige zweite Meinung brauchen"
          ]
        },
        {
          "title": "Sie profitieren am meisten, wenn Sie",
          "lead": "Gemeinsam mit uns eine fundierte Auswahl und eine starke, authentische Bewerbung entwickeln möchten.",
          "points": [
            "eine realistische Einschätzung statt großer Versprechen wünschen",
            "Ihre eigene Stimme in der Bewerbung bewahren möchten",
            "Unterlagen auf jeden Studiengang abstimmen möchten",
            "aktiv mitarbeiten und Fristen einhalten können"
          ]
        }
      ]
    },
    "method": {
      "title": "Vom Profil bis zur Einreichung in drei klaren Schritten.",
      "body": "Jeder Schritt endet mit einer konkreten Entscheidung, einem Dokument oder dem nächsten Schritt.",
      "steps": [
        [
          "Wir verstehen Ihr Profil",
          "Akademischer Hintergrund, Interessen, Budget, Sprachen, Länder und Karriereziel."
        ],
        [
          "Wir entwickeln die Strategie",
          "Programmauswahl, Fristenplan, Kostenübersicht und Prioritäten."
        ],
        [
          "Wir stärken und begleiten die Bewerbung",
          "Feedback zu Unterlagen, Prüfung der Anforderungen und Begleitung bis zur Einreichung."
        ]
      ]
    },
    "sample": {
      "title": "Sehen Sie, was Sie erhalten.",
      "body": "Statt 40 offener Tabs — ein Dokument und eine klare Entscheidung.",
      "badge": "Illustratives Beispiel",
      "documentTitle": "Programmauswahl",
      "documentMeta": "Master · Europa · 8 Programme",
      "rows": [
        [
          "Programm A",
          "Sehr gute Profilpassung",
          "Mittleres Risiko"
        ],
        [
          "Programm B",
          "Passt zum Budget",
          "Niedrigeres Risiko"
        ],
        [
          "Programm C",
          "Anspruchsvolles Stipendium",
          "Höheres Risiko"
        ]
      ],
      "timeline": [
        "Frist und Unterlagen",
        "Gebühren und Lebenshaltung",
        "Finanzierungsoptionen",
        "Begründung und Priorität"
      ],
      "note": "Das Beispiel enthält keine echten Bewerberdaten, Ergebnisse oder Zulassungsversprechen."
    },
    "offers": {
      "title": "Bezahlen Sie nur für die Unterstützung, die Sie brauchen.",
      "body": "Leistung, Umfang und Preis stehen fest, bevor die Arbeit beginnt.",
      "cta": "3-Minuten-Fragebogen starten",
      "bestFor": "Geeignet für",
      "includes": "Sie erhalten",
      "limits": "Umfang",
      "cards": [
        {
          "name": "Erstgespräch",
          "label": "Erster Schritt",
          "price": "Kostenlos",
          "meta": "15 Min.",
          "bestFor": "die Klärung, ob wir helfen können",
          "summary": "Wir lernen Ziel, Frist und Unterstützungsbedarf kennen.",
          "includes": [
            "Empfehlung für den sinnvollsten nächsten Schritt"
          ],
          "limits": [
            "keine Profil- oder Dokumentenanalyse"
          ]
        },
        {
          "name": "Strategieberatung",
          "label": "Eine wichtige Entscheidung",
          "price": "70 €",
          "meta": "60 Min.",
          "bestFor": "eine zweite Meinung oder klare Richtung",
          "summary": "Fokussiertes Gespräch über Profil, Länder, Budget, Risiken und nächste Schritte.",
          "includes": [
            "kurze Vorbereitung",
            "60 Minuten im Einzelgespräch",
            "schriftliche Zusammenfassung der nächsten Schritte"
          ],
          "limits": [
            "eine Sitzung",
            "kein detaillierter Programmbericht"
          ]
        },
        {
          "name": "Programmauswahl",
          "label": "Begründete Liste",
          "price": "350 €",
          "meta": "bis zu 8 Programme",
          "bestFor": "die Entscheidung, wo sich eine Bewerbung lohnt",
          "summary": "Wir vergleichen Programme, Kosten, Kriterien, Finanzierung und Fristen.",
          "includes": [
            "bis zu 8 Programme",
            "eine Überarbeitung",
            "kurzes Abschlussgespräch"
          ],
          "limits": [
            "eine zusammenhängende Gruppe von Ländern und Studienzielen",
            "Erstellung der Bewerbungsunterlagen nicht enthalten"
          ],
          "featured": true
        },
        {
          "name": "Bewerbungsunterstützung",
          "label": "Ein Programm",
          "price": "390 €",
          "meta": "1 Bewerbung",
          "bestFor": "Bewerbende, die ihr Zielprogramm bereits kennen",
          "summary": "Wir helfen, Unterlagen klar, überzeugend und an den Anforderungen ausgerichtet zu gestalten.",
          "includes": [
            "Kommentare und Überarbeitungen zu Lebenslauf und Motivationsschreiben",
            "zwei Feedbackrunden je Kerndokument",
            "Dokumentenliste und Abschlussprüfung"
          ],
          "limits": [
            "ein Standardprogramm",
            "Bewerbende verfassen und übermitteln die Bewerbung selbst"
          ]
        },
        {
          "name": "Komplette Begleitung",
          "label": "Gesamter Bewerbungszyklus",
          "price": "1.400 €",
          "meta": "bis zu 3 Bewerbungen",
          "bestFor": "einen europäischen Standardzyklus von Auswahl bis Einreichung",
          "summary": "Wir begleiten Strategie, Programmauswahl, Unterlagen, Fristen und Abschlussprüfung.",
          "includes": [
            "Programmauswahl und bis zu 3 Standardbewerbungen",
            "zwei Feedbackrunden je Kerndokument",
            "bis zu 4 Monate Unterstützung"
          ],
          "limits": [
            "Sondertests, Portfolios und komplexe Verfahren mit mehreren Essays ausgenommen"
          ]
        },
        {
          "name": "Stipendienbewerbung",
          "label": "Ein Stipendium",
          "price": "590 €",
          "meta": "Standardumfang",
          "bestFor": "ein klar ausgewähltes Stipendium",
          "summary": "Wir entwickeln die Strategie und helfen, Motivation, Erfahrung und Ziele überzeugend darzustellen.",
          "includes": [
            "Bewerbungsstrategie",
            "bis zu drei Feedbackrunden auf selbst verfasste Essays",
            "Hinweise für Empfehlungsschreiben und Abschlussprüfung"
          ],
          "limits": [
            "eine Standard-Stipendienbewerbung",
            "besonders komplexe Verfahren werden vor Beginn gesondert vereinbart"
          ]
        }
      ]
    },
    "pricing": {
      "title": "Der Preis steht vor Beginn fest.",
      "body": "Zusatzarbeit und Preis bestätigen wir, bevor wir beginnen.",
      "addonsTitle": "Feste Zusatzpreise",
      "addons": [
        [
          "Zusätzliche Standardbewerbung",
          "mit aktivem Paket",
          "280 €"
        ],
        [
          "Zusätzliche Stipendienbewerbung",
          "Standardumfang",
          "300 €"
        ],
        [
          "Interviewvorbereitung",
          "Vorbereitung + Simulation",
          "140 €"
        ],
        [
          "Zusätzliche Strategieberatung",
          "60 Minuten",
          "70 €"
        ]
      ],
      "instalmentsTitle": "Ratenzahlung",
      "instalments": [
        "Komplette Begleitung für 1.400 €: bis zu 3 Raten"
      ],
      "credit": "Wenn Sie innerhalb von 14 Tagen nach der 70-€-Beratung ein geeignetes größeres Paket buchen, werden die 70 € angerechnet."
    },
    "value": {
      "title": "Erfahrung, die in unsere Beratung einfließt.",
      "body": "Unser Beratungsteam kennt europäische Hochschulsysteme, internationale Bewerbungen und Stipendienverfahren. Daraus entsteht ein einheitlicher Arbeitsstandard — ohne den Eindruck formeller Partnerschaften.",
      "points": [
        [
          "Stipendienverfahren",
          "Erfahrung umfasst Bewerbungen für DAAD, Erasmus Mundus, OeAD und France Excellence."
        ],
        [
          "Europäische Bewerbungen",
          "Bachelor- und Masterprogramme mit unterschiedlichen Anforderungen, Fristen und Finanzierungsmodellen."
        ],
        [
          "Ein Arbeitsstandard",
          "Jede Bewerbung folgt demselben Rahmen: Passung, Kosten, Finanzierung, Fristen und Risiko."
        ]
      ]
    },
    "trust": {
      "title": "Vertrauen durch einen klaren Prozess statt großer Versprechen.",
      "body": "Vertrauen entsteht durch klaren Umfang, nachvollziehbare Arbeit und eine schriftliche Leistungsbestätigung.",
      "items": [
        [
          "Schriftlicher Umfang",
          "Vor der Zahlung bestätigen wir Leistungsumfang, Frist, Überarbeitungsrunden und Unterstützungszeitraum."
        ],
        [
          "Qualitätskontrolle",
          "Jedes Ergebnis wird auf Anforderungen, Fristen, Konsistenz und Authentizität geprüft."
        ],
        [
          "Datenschutz mitgedacht",
          "Die Website nutzt keine Analyse- oder Marketing-Cookies; Calendly ist ein externer Dienst."
        ],
        [
          "Ethische Begleitung",
          "Wir erfinden keine Erfahrungen, Ergebnisse, Partnerschaften oder Bewertungen und garantieren keine Entscheidung."
        ]
      ],
      "note": "Vor Beginn erhalten Sie eine schriftliche Bestätigung von Umfang, Fristen, Preis und Zahlungsweise."
    },
    "faq": {
      "title": "Fragen vor Ihrer Entscheidung",
      "items": [
        [
          "Garantieren Sie Zulassung oder Stipendium?",
          "Die Entscheidung trifft immer die Hochschule oder Förderstelle. Wir investieren maximale Sorgfalt in Strategie, Unterlagen, Fristen und Abschlussprüfung, damit eine möglichst starke und authentische Bewerbung entsteht."
        ],
        [
          "Schreiben Sie das Motivationsschreiben für Bewerbende?",
          "Wir übernehmen nicht die Autorenschaft. Wir helfen mit Ideen, Struktur, Fragen, präzisem Feedback und Überarbeitungen, damit die eigene Stimme klar und überzeugend bleibt."
        ],
        [
          "Welche Länder decken Sie ab?",
          "Unser Fokus liegt auf europäischen Hochschulen. Programme wählen wir nach Profil, Budget, Zielen und Fristen — nicht aus einer vorgegebenen Liste."
        ],
        [
          "Helfen Sie bei Stipendien?",
          "Ja. Das Team hat Erfahrung mit DAAD-, Erasmus-Mundus-, OeAD- und France-Excellence-Verfahren. Aktuelle Regeln prüfen wir immer in offiziellen Quellen."
        ],
        [
          "Wann sollte ich beginnen?",
          "Idealerweise 6–12 Monate vor der ersten wichtigen Frist. Ist sie näher, klären wir im Erstgespräch, was sich noch sorgfältig umsetzen lässt."
        ],
        [
          "Wie beginnt die Zusammenarbeit?",
          "Nach dem Erstgespräch empfehlen wir den kleinsten sinnvollen Leistungsumfang. Vor Beginn bestätigen wir Umfang, Fristen, Preis und Zahlungsweise schriftlich."
        ]
      ]
    },
    "booking": {
      "title": "Zuerst der kurze Fragebogen. Dann Ihr Termin.",
      "body": "Der Fragebogen gibt uns die nötigen Ausgangsinformationen, damit wir das 15-minütige Gespräch für Ihre wichtigste Frage nutzen können.",
      "team": "Sie sprechen mit einem Mitglied unseres Teams. Alle Teammitglieder haben einen Teil ihres Studiums im Ausland absolviert. Wenn unsere Unterstützung nicht zu Ihrer Situation passt, sagen wir es Ihnen im Gespräch.",
      "event": "Kostenloses Erstgespräch",
      "duration": "15 Minuten",
      "location": "Online-Videogespräch",
      "timezone": "In Ihrer Zeitzone angezeigt",
      "button": "Termin wählen",
      "note": "Das Gespräch ist unverbindlich."
    }
  },
  "fr": {
    "hero": {
      "title": "Étudiez à l’étranger.",
      "accent": "Préparez votre candidature avec un plan clair.",
      "body": "Pour toute personne qui prépare une candidature en licence, en master ou à une bourse et souhaite comparer les programmes, le coût total et les financements — puis déposer un dossier solide et bien organisé, sans tâtonnements inutiles.",
      "primary": "Questionnaire de 3 min → appel gratuit",
      "secondary": "Voir comment fonctionne le processus",
      "proof": [
        "Accompagnement indépendant",
        "Prix clairs",
        "Candidatures européennes"
      ]
    },
    "decision": {
      "title": "Avant de recommander un programme",
      "note": "Nous vérifions cinq points :",
      "paid": "Ce n’est qu’ensuite qu’un programme est retenu dans notre sélection.",
      "factors": [
        [
          "Adéquation académique",
          "profil + critères"
        ],
        [
          "Coût total",
          "frais de scolarité + coût de la vie"
        ],
        [
          "Financement",
          "bourses + budget"
        ],
        [
          "Échéances",
          "calendrier réaliste"
        ],
        [
          "Risque",
          "sélection équilibrée"
        ]
      ]
    },
    "independent": {
      "title": "D’abord la bonne décision. Ensuite la candidature solide.",
      "body": "Nous sélectionnons les programmes selon votre profil, votre budget, vos objectifs et vos échéances. Nous construisons ensuite une candidature qui rend votre adéquation évidente.",
      "statement": "C’est vous qui nous rémunérez, pas les universités. Chaque recommandation repose donc uniquement sur votre profil, vos objectifs et votre budget."
    },
    "audiences": {
      "title": "Quand Adria Admissions apporte le plus de valeur.",
      "body": "Nous travaillons surtout avec les personnes qui veulent décider avec discernement et participer activement au processus.",
      "groups": [
        {
          "title": "Pour vous si vous",
          "lead": "Recherchez un accompagnement personnel et expert plutôt qu’une liste générique.",
          "points": [
            "choisissez une licence ou un master en Europe",
            "comparez de nombreuses options, coûts et échéances",
            "voulez aborder les bourses sérieusement",
            "avez besoin d’un second avis expert avant de candidater"
          ]
        },
        {
          "title": "Vous tirerez le meilleur parti de notre accompagnement si vous",
          "lead": "Souhaitez construire avec nous un choix réfléchi et une candidature solide et authentique.",
          "points": [
            "recherchez une évaluation réaliste sans grande promesse",
            "souhaitez conserver votre propre voix dans le dossier",
            "êtes prêt·e à adapter les documents à chaque programme",
            "pouvez participer activement et respecter les échéances"
          ]
        }
      ]
    },
    "method": {
      "title": "Du profil au dépôt en trois étapes claires.",
      "body": "Chaque étape aboutit à une décision, un document ou une prochaine action concrète.",
      "steps": [
        [
          "Nous comprenons votre profil",
          "Parcours académique, intérêts, budget, langues, pays et objectif professionnel."
        ],
        [
          "Nous construisons la stratégie",
          "Sélection des programmes, calendrier, vision financière et priorités."
        ],
        [
          "Nous renforçons et guidons le dossier",
          "Retours sur les documents, contrôle des exigences et accompagnement jusqu’au dépôt."
        ]
      ]
    },
    "sample": {
      "title": "Voyez ce que vous recevez.",
      "body": "Au lieu de 40 onglets ouverts — un document et une décision claire.",
      "badge": "Exemple illustratif",
      "documentTitle": "Sélection de programmes",
      "documentMeta": "Master · Europe · 8 programmes",
      "rows": [
        [
          "Programme A",
          "Très bonne adéquation au profil",
          "Risque moyen"
        ],
        [
          "Programme B",
          "Respecte le budget",
          "Risque plus faible"
        ],
        [
          "Programme C",
          "Bourse très sélective",
          "Risque plus élevé"
        ]
      ],
      "timeline": [
        "Échéance et documents",
        "Frais et coût de la vie",
        "Possibilités de financement",
        "Justification et priorité"
      ],
      "note": "Cet exemple ne contient aucune donnée réelle, aucun résultat et aucune promesse d’admission."
    },
    "offers": {
      "title": "Payez uniquement pour l’accompagnement dont vous avez besoin.",
      "body": "Prestations, limites et prix sont connus avant le début du travail.",
      "cta": "Commencer le questionnaire de 3 min",
      "bestFor": "Idéal pour",
      "includes": "Vous recevez",
      "limits": "Périmètre",
      "cards": [
        {
          "name": "Appel découverte",
          "label": "Première étape",
          "price": "Gratuit",
          "meta": "15 min",
          "bestFor": "vérifier si nous pouvons vous aider",
          "summary": "Nous découvrons votre objectif, votre échéance et votre besoin.",
          "includes": [
            "une recommandation pour la prochaine étape utile"
          ],
          "limits": [
            "sans analyse du profil ni des documents"
          ]
        },
        {
          "name": "Consultation stratégique",
          "label": "Une décision importante",
          "price": "70 €",
          "meta": "60 min",
          "bestFor": "un second avis ou une direction claire",
          "summary": "Échange ciblé sur le profil, les pays, le budget, les risques et les prochaines étapes.",
          "includes": [
            "courte préparation",
            "60 minutes en individuel",
            "synthèse écrite des prochaines étapes"
          ],
          "limits": [
            "une séance",
            "sans rapport détaillé sur les programmes"
          ]
        },
        {
          "name": "Sélection de programmes",
          "label": "Liste argumentée",
          "price": "350 €",
          "meta": "jusqu’à 8 programmes",
          "bestFor": "déterminer pour quels programmes il est réellement pertinent de candidater",
          "summary": "Nous comparons programmes, coûts, critères, financements et échéances.",
          "includes": [
            "jusqu’à 8 programmes",
            "une révision",
            "court appel de restitution"
          ],
          "limits": [
            "un ensemble cohérent de pays et d’objectifs",
            "préparation des candidatures non incluse"
          ],
          "featured": true
        },
        {
          "name": "Accompagnement de candidature",
          "label": "Un programme",
          "price": "390 €",
          "meta": "1 candidature",
          "bestFor": "les candidats qui savent déjà où postuler",
          "summary": "Nous aidons à rendre vos documents clairs, convaincants et conformes aux exigences.",
          "includes": [
            "commentaires et révisions du CV et de la lettre de motivation",
            "deux cycles de retours par document principal",
            "liste des pièces et contrôle final"
          ],
          "limits": [
            "un programme standard",
            "le candidat rédige et dépose sa candidature"
          ]
        },
        {
          "name": "Accompagnement complet",
          "label": "Cycle complet",
          "price": "1 400 €",
          "meta": "jusqu’à 3 candidatures",
          "bestFor": "un cycle européen standard, de la sélection au dépôt",
          "summary": "Nous guidons la stratégie, la sélection, les documents, les échéances et le contrôle final.",
          "includes": [
            "sélection et jusqu’à 3 candidatures standards",
            "deux cycles de retours par document principal",
            "jusqu’à 4 mois de suivi"
          ],
          "limits": [
            "hors tests spécifiques, portfolios et procédures complexes comprenant plusieurs textes"
          ]
        },
        {
          "name": "Candidature à une bourse",
          "label": "Une bourse",
          "price": "590 €",
          "meta": "périmètre standard",
          "bestFor": "une bourse clairement sélectionnée",
          "summary": "Nous construisons la stratégie et aidons le candidat à exprimer clairement sa motivation, son expérience et son projet dans ses propres textes.",
          "includes": [
            "stratégie de candidature",
            "jusqu’à trois cycles de retours sur les textes rédigés par le candidat",
            "conseils pour les recommandations et contrôle final"
          ],
          "limits": [
            "une candidature à une bourse standard",
            "les sélections très complexes sont cadrées avant le début"
          ]
        }
      ]
    },
    "pricing": {
      "title": "Le prix est clair avant de commencer.",
      "body": "Tout travail supplémentaire et son prix sont confirmés avant de commencer.",
      "addonsTitle": "Options à prix fixe",
      "addons": [
        [
          "Candidature standard supplémentaire",
          "avec un forfait actif",
          "280 €"
        ],
        [
          "Candidature à une bourse supplémentaire",
          "périmètre standard",
          "300 €"
        ],
        [
          "Préparation à l’entretien",
          "préparation + simulation",
          "140 €"
        ],
        [
          "Consultation stratégique supplémentaire",
          "60 minutes",
          "70 €"
        ]
      ],
      "instalmentsTitle": "Paiement échelonné",
      "instalments": [
        "Accompagnement complet à 1 400 € : jusqu’à 3 paiements"
      ],
      "credit": "Si vous choisissez une formule d’accompagnement éligible dans les 14 jours suivant la consultation de 70 €, ces 70 € sont déduits du prix."
    },
    "value": {
      "title": "L’expérience qui guide notre méthode.",
      "body": "Notre équipe maîtrise les systèmes universitaires européens, les candidatures internationales et les procédures de bourse. Cette expérience devient une méthode cohérente — sans suggérer de partenariat officiel.",
      "points": [
        [
          "Procédures de bourse",
          "Expérience des candidatures aux dispositifs DAAD, Erasmus Mundus, OeAD et France Excellence."
        ],
        [
          "Candidatures européennes",
          "Licences et masters aux exigences, échéances et modèles de financement variés."
        ],
        [
          "Une méthode commune",
          "Chaque candidature suit le même cadre : adéquation, coût, financement, échéances et risque."
        ]
      ]
    },
    "trust": {
      "title": "La confiance repose sur une méthode, pas sur de grandes promesses.",
      "body": "Nous construisons la confiance par un périmètre clair, un travail vérifiable et une confirmation écrite de ce que vous recevez.",
      "items": [
        [
          "Périmètre écrit",
          "Avant paiement, nous confirmons les livrables, le délai, les révisions et la durée du suivi."
        ],
        [
          "Contrôle qualité",
          "Chaque résultat est vérifié au regard des exigences, des échéances, de la cohérence et de l’authenticité."
        ],
        [
          "Confidentialité dès la conception",
          "Le site n’utilise aucun cookie analytique ou marketing ; Calendly est un service externe."
        ],
        [
          "Accompagnement éthique",
          "Nous n’inventons ni expérience, ni résultat, ni partenariat, ni témoignage client, et nous ne garantissons jamais une décision."
        ]
      ],
      "note": "Avant de commencer, vous recevez une confirmation écrite du périmètre, des délais, du prix et du mode de paiement."
    },
    "faq": {
      "title": "Questions avant de décider",
      "items": [
        [
          "Garantissez-vous une admission ou une bourse ?",
          "La décision appartient toujours à l’université ou à l’organisme financeur. Nous apportons un soin maximal à la stratégie, aux documents, aux échéances et au contrôle final pour construire le dossier authentique le plus solide possible."
        ],
        [
          "Rédigez-vous la lettre de motivation à la place du candidat ?",
          "Nous ne rédigeons pas à la place du candidat. Nous aidons avec les idées, la structure, les questions, des retours précis et les révisions afin de préserver une voix claire et convaincante."
        ],
        [
          "Quels pays couvrez-vous ?",
          "Nous nous concentrons sur les universités européennes. Les programmes sont choisis selon le profil, le budget, les objectifs et les échéances — jamais à partir d’une liste imposée."
        ],
        [
          "Aidez-vous pour les bourses ?",
          "Oui. L’équipe connaît les procédures DAAD, Erasmus Mundus, OeAD et France Excellence. Les règles en vigueur sont toujours vérifiées dans les sources officielles."
        ],
        [
          "Quand faut-il commencer ?",
          "Idéalement 6 à 12 mois avant la première échéance importante. Si elle est plus proche, l’appel découverte permet d’établir ce qui peut encore être réalisé avec soin."
        ],
        [
          "Comment commence l’accompagnement ?",
          "Après l’appel découverte, nous recommandons la formule d’accompagnement la plus simple qui réponde réellement à votre besoin. Avant de commencer, nous confirmons par écrit le périmètre, les délais, le prix et le mode de paiement."
        ]
      ]
    },
    "booking": {
      "title": "D’abord le court questionnaire. Puis votre créneau.",
      "body": "Le questionnaire nous donne les premières informations nécessaires pour consacrer les 15 minutes à votre question la plus importante.",
      "team": "Vous parlerez avec un membre de notre équipe. Tous ont effectué une partie de leurs études à l’étranger. Si notre accompagnement n’est pas adapté à votre situation, nous vous le dirons pendant l’appel.",
      "event": "Appel découverte gratuit",
      "duration": "15 minutes",
      "location": "Appel vidéo en ligne",
      "timezone": "Affiché dans votre fuseau horaire",
      "button": "Choisir un créneau",
      "note": "Cet appel ne vous engage à rien."
    }
  }
};
