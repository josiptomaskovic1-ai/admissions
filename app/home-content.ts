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
  bs: {
    hero: {
      title: 'Studirajte u Evropi po planu koji odgovara', accent: 'vama.',
      body: 'Nezavisno biramo programe prema vašem profilu, ciljevima, budžetu, finansiranju i rokovima — za bachelor, master i stipendijske prijave.',
      primary: 'Besplatan fit razgovor — 15 min', secondary: 'Pogledajte šta dobijate',
      proof: ['Evropski univerziteti', 'Bachelor i master', 'Stipendijska strategija'],
    },
    decision: {
      title: 'Kako nastaje preporuka', note: 'Svaki program mora proći isti provjerljiv okvir.', paid: 'Plaćate savjet usmjeren na vas — ne mjesto na partnerskoj listi.',
      factors: [['Akademski fit', 'profil + uslovi'], ['Ukupan trošak', 'školarina + život'], ['Finansiranje', 'stipendije + budžet'], ['Rokovi', 'realan kalendar'], ['Rizik', 'balansirana lista']],
    },
    independent: {
      title: 'Prvo dobra odluka. Zatim snažna prijava.',
      body: 'Univerzitet nije dobar izbor samo zato što prima prijave. Provjeravamo da li program ima smisla akademski, finansijski i dugoročno — pa tek onda gradimo prijavu.',
      factors: [['Usklađenost', 'Preduslovi, sadržaj programa i realan nivo konkurentnosti.'], ['Trošak', 'Školarina, životni troškovi i ukupna finansijska slika.'], ['Finansiranje', 'Relevantne stipendije i rokovi koji utiču na izbor.'], ['Izvodljivost', 'Dokumenti, rokovi i vrijeme koje kandidat zaista ima.'], ['Budući smjer', 'Veza programa s karijerom, daljim studijem i ličnim ciljem.']],
    },
    audiences: {
      title: 'Za različite odluke, isti standard.', body: 'Podršku prilagođavamo nivou studija i osobi koja donosi odluku.',
      groups: [
        { title: 'Master i stipendije', lead: 'Za kandidate koji porede zemlje, programe, povrat ulaganja i konkurentne izvore finansiranja.', points: ['pozicioniranje profila i priče', 'DAAD, Erasmus Mundus, OeAD i France Excellence iskustvo', 'rokovi, finansiranje i kvalitet prijave'] },
        { title: 'Bachelor kandidati i roditelji', lead: 'Za porodice kojima trebaju realne opcije, potpuna slika troška i uredan proces bez iznenađenja.', points: ['ukupan budžet i smještaj', 'sigurnost izbora i legitimnost programa', 'jasni rokovi, uloge i redovna komunikacija'] },
      ],
    },
    method: {
      title: 'Jedan proces, šest kontrolnih tačaka.', body: 'Svaki korak završava odlukom ili dokumentom koji pomjera prijavu naprijed.',
      steps: [['Profil', 'Ciljevi, iskustvo, ocjene, budžet i ograničenja.'], ['Strategija', 'Prioriteti, zemlje i realan nivo ambicije.'], ['Izbor', 'Obrazložena lista programa, ne generičan spisak.'], ['Finansiranje', 'Trošak, stipendije i rokovi u jednoj slici.'], ['Prijava', 'Autentični dokumenti uz jasnu strukturu i feedback.'], ['Kontrola', 'Završna provjera zahtjeva, dosljednosti i spremnosti.']],
    },
    sample: {
      title: 'Vidite proizvod prije nego što ga kupite.', body: 'Naši izvještaji pretvaraju istraživanje u odluku. Ovo je skraćeni ilustrativni prikaz strukture University Direction dokumenta.',
      badge: 'Ilustrativni primjer', documentTitle: 'University Direction', documentMeta: 'Master · Evropa · 8 programa',
      rows: [['Program A', 'Jak akademski fit', 'Srednji rizik'], ['Program B', 'Dobar finansijski fit', 'Niži rizik'], ['Program C', 'Konkurentna stipendija', 'Viši rizik']],
      timeline: ['Rok i dokumenti', 'Školarina i životni troškovi', 'Mogućnosti finansiranja', 'Razlog i prioritet prijave'],
      note: 'Primjer ne sadrži podatke stvarnog kandidata, stvarne rezultate niti obećanje ishoda.',
    },
    offers: {
      title: 'Od jedne odluke do cijelog prijavnog ciklusa.', body: 'Svaka usluga ima jasan rezultat, granice i cijenu. Počnite samo onim nivoom podrške koji vam sada treba.', cta: 'Provjerite koja usluga vam odgovara', bestFor: 'Najbolje za', includes: 'Dobijate', limits: 'Obim',
      cards: [
        { name: 'Fit Call', label: 'Uvodni razgovor', price: '0 €', meta: '15 min', bestFor: 'provjeru da li vam možemo pomoći', summary: 'Kratko upoznajemo cilj, rok i vrstu podrške.', includes: ['preporuka sljedeće usluge'], limits: ['bez analize profila i dokumenata'] },
        { name: 'Strategy Consultation', label: 'Ekspertska konsultacija', price: '70 €', meta: '60 min', bestFor: 'jednu važnu odluku ili drugo mišljenje', summary: 'Fokusiran razgovor o profilu, zemljama, budžetu, rizicima i sljedećim koracima.', includes: ['kratka priprema', '60 min 1 na 1', 'sažetak narednih koraka'], limits: ['jedna sesija', 'bez detaljnog shortlist izvještaja'] },
        { name: 'Admissions Blueprint', label: 'Strategija prijave', price: '220 €', meta: 'fiksno', bestFor: 'kandidata koji još nema čvrst plan', summary: 'Pisani strateški dokument koji spaja profil, smjer, finansije, rizike i akcije.', includes: ['analiza profila', '8–12 smislenih stranica kada je primjenjivo', 'rokovi i akcioni plan'], limits: ['jedna uvodna sesija', 'jedna korekcija činjenica'] },
        { name: 'University Direction', label: 'Izbor univerziteta i programa', price: '350 €', meta: 'do 8 programa', bestFor: 'odluku gdje se zaista vrijedi prijaviti', summary: 'Obrazložena analiza programa, troškova, zahtjeva, finansiranja i prioriteta.', includes: ['do 8 programa', 'jedna revizija', 'kratki review poziv'], limits: ['jedna grupa zemalja/ciljeva', 'ne uključuje izradu prijave'], featured: true },
        { name: 'Guided Application', label: 'Vođena prijava', price: '800 €', meta: 'do 2 programa', bestFor: 'kandidata koji predaje prijave, uz našu kontrolu', summary: 'Strategija, raspored, feedback na dokumente i završna kontrola kvaliteta.', includes: ['CV i motivaciono pismo', 'dvije runde feedbacka po glavnom dokumentu', 'podrška do 8 sedmica'], limits: ['do 2 standardna programa', 'kandidat administrativno predaje prijavu'] },
        { name: 'Full Partnership', label: 'Kompletno vođenje prijave', price: '1.400 €', meta: 'do 3 prijave', bestFor: 'cijeli standardni evropski ciklus', summary: 'Blueprint, shortlist, dokumenti, rokovi i kontinuirana kontrola kroz dogovoreni ciklus.', includes: ['do 3 standardne prijave', 'dvije runde feedbacka po dokumentu', 'podrška do 4 mjeseca'], limits: ['bez posebnih testova, portfolija i višestrukih stipendijskih eseja'] },
        { name: 'Full Partnership Plus', label: 'Prošireno vođenje', price: '1.700 €', meta: 'do 4 prijave', bestFor: 'širi izbor i intenzivniju podršku', summary: 'Sve iz Full Partnership paketa, uz četvrtu prijavu, dodatnu reviziju i više strateških kontrola.', includes: ['do 4 standardne prijave', 'tri runde feedbacka po dokumentu', 'podrška do 6 mjeseci i 2 check-in poziva'], limits: ['složene stipendijske i selektivne prijave procjenjujemo posebno'] },
        { name: 'Scholarship / Selective Intensive', label: 'Stipendijske i selektivne prijave', price: '1.900–2.500 €', meta: 'prema složenosti', bestFor: 'Erasmus Mundus, DAAD i slične zahtjevne procese', summary: 'Intenzivan rad za prijave s više eseja, intervjuima, posebnim komponentama ili izrazitom konkurencijom.', includes: ['strategija i kompleksna dokumentacija', 'priprema za intervju kada je potrebna', 'pojačana završna kontrola'], limits: ['cijena zavisi od broja eseja, stipendija, intervjua i posebnih zahtjeva'] },
      ],
    },
    pricing: {
      title: 'Cijena je jasna prije početka.', body: 'Nema automatskih popusta ni neodređenog “od” za standardne pakete. Dodatni rad dogovaramo unaprijed.', addonsTitle: 'Fiksni dodaci',
      addons: [['Dodatna standardna prijava', 'uz aktivni paket', '280 €'], ['Dodatna stipendijska prijava', 'standardni obim', '300 €'], ['Intenzivna priprema za intervju', 'jedna priprema + simulacija', '140 €'], ['Dodatna strateška sesija', '60 minuta', '100 €']],
      instalmentsTitle: 'Plaćanje na rate', instalments: ['Paket od 800 €: do 2 rate', 'Paketi od 1.400 € naviše: do 3 rate'], credit: 'Ako u roku od 14 dana nakon konsultacije od 70 € ugovorite kvalifikovani veći paket, tih 70 € uračunavamo u cijenu.',
    },
    value: {
      title: 'Plaćate savjet usmjeren na vas.', body: 'Naš model počinje kandidatovim interesom. Zato vrijeme ulažemo u poređenje opcija, finansijsku sliku, realan rizik i kvalitet prijave.',
      points: [['Nezavisan izbor', 'Preporuke ne ograničavamo unaprijed definisanom partnerskom listom.'], ['Rad koji možete vidjeti', 'Dobijate obrazložen plan, shortlist ili pregled prijave — ne samo razgovor.'], ['Autentična prijava', 'Pomažemo maksimalno, ali kandidat zadržava svoj glas i autorstvo.']],
    },
    trust: {
      title: 'Povjerenje gradimo sistemom, ne velikim obećanjima.', body: 'Savjetnici ostaju privatni, ali način rada nije skriven.',
      items: [['Jasan pisani obim', 'Prije plaćanja potvrđujemo šta je uključeno, rok, broj revizija i period podrške.'], ['Kontrola kvaliteta', 'Svaki rezultat provjeravamo prema zahtjevima programa, rokovima, dosljednosti i autentičnosti.'], ['Privatnost po dizajnu', 'Stranica ne koristi marketinške ni analitičke kolačiće; Calendly je vanjska usluga.'], ['Etički rad', 'Ne izmišljamo iskustva, rezultate, partnerstva ni svjedočanstva i ne garantujemo odluku institucije.']],
      note: 'Puni podaci poslovnog subjekta, ugovorni uslovi i pravila plaćanja moraju biti potvrđeni prije prve naplate.',
    },
    faq: {
      title: 'Pitanja prije odluke',
      items: [
        ['Zašto platiti ako neke agencije nude besplatnu prijavu?', 'Plaćeni model omogućava da preporuku gradimo oko vašeg profila, budžeta i ciljeva. Dobijate obrazloženu analizu i jasno definisan rad, bez oslanjanja na unaprijed određenu listu programa.'],
        ['Da li ste partner univerziteta?', 'Naša usluga je nezavisno savjetovanje. Program biramo prema kandidatu, a ne prema partnerskoj mreži.'],
        ['Možete li garantovati upis ili stipendiju?', 'Odluku uvijek donosi univerzitet ili stipendijsko tijelo. Mi ćemo se maksimalno posvetiti strategiji, dokumentima, rokovima i završnoj kontroli kako bi prijava bila što snažnija.'],
        ['Pišete li motivaciono pismo umjesto kandidata?', 'Ne preuzimamo autorstvo. Pomažemo s idejama, strukturom, pitanjima i detaljnim feedbackom kako bi kandidatov glas bio jasan i uvjerljiv.'],
        ['Šta se dešava na besplatnom razgovoru?', 'U 15 minuta upoznajemo cilj, rokove i vrstu pomoći te kažemo odgovaramo li slučaju i koja usluga ima smisla.'],
        ['Mogu li roditelji prisustvovati?', 'Da. Za bachelor odluke roditelj je dobrodošao, posebno kada razgovaramo o budžetu, rokovima i procesu.'],
        ['Mogu li platiti na rate?', 'Da. Paket od 800 € može se platiti u najviše dvije, a paketi od 1.400 € naviše u najviše tri rate, prema pisanom dogovoru.'],
        ['Već imam listu univerziteta. Možete li je provjeriti?', 'Da. Konsultacija može riješiti usko pitanje, a University Direction može provjeriti i unaprijediti cijelu listu.'],
        ['Pomažete li sa stipendijama?', 'Da. Tim ima iskustvo s procesima kao što su DAAD, Erasmus Mundus, OeAD i France Excellence. Tačni uslovi se uvijek provjeravaju u zvaničnim izvorima.'],
        ['Treba mi pregled samo jedne prijave.', 'Javite nam rok i šta je već pripremljeno. Ako je obim manji od Guided Application paketa, ponudit ćemo fokusirani dodatak ili sesiju s jasnom cijenom.'],
      ],
    },
    booking: {
      title: 'Niste sigurni odakle početi?', body: 'Rezervišite kratki razgovor. Upoznat ćemo cilj i predložiti najmanji nivo podrške koji ima smisla.', team: 'Razgovarat ćete s jednim članom tima. Svi članovi imaju dio obrazovanja završen u inostranstvu i rade prema istom Adria standardu.', event: 'Besplatan fit razgovor', duration: '15 minuta', location: 'Online video poziv', timezone: 'Termin u vašoj vremenskoj zoni', button: 'Odaberite termin', note: 'Bez obaveze kupovine. Za detaljnu strategiju služi plaćena konsultacija.',
    },
  },
  sr: undefined as never,
  hr: undefined as never,
  en: undefined as never,
  de: undefined as never,
  fr: undefined as never,
};

homeContent.sr = {
  ...homeContent.bs,
  hero: { ...homeContent.bs.hero, title: 'Studirajte u Evropi po planu koji odgovara', body: 'Nezavisno biramo programe prema vašem profilu, ciljevima, budžetu, finansiranju i rokovima — za osnovne, master i stipendijske prijave.', primary: 'Besplatan fit razgovor — 15 min' },
  decision: { ...homeContent.bs.decision, factors: [['Akademski fit', 'profil + uslovi'], ['Ukupan trošak', 'školarina + život'], ['Finansiranje', 'stipendije + budžet'], ['Rokovi', 'realan kalendar'], ['Rizik', 'balansirana lista']] },
  independent: { ...homeContent.bs.independent, title: 'Prvo dobra odluka. Zatim snažna prijava.', body: 'Univerzitet nije dobar izbor samo zato što prima prijave. Proveravamo da li program ima smisla akademski, finansijski i dugoročno — pa tek onda gradimo prijavu.' },
  audiences: { ...homeContent.bs.audiences, body: 'Podršku prilagođavamo nivou studija i osobi koja donosi odluku.', groups: [
    { title: 'Master i stipendije', lead: 'Za kandidate koji porede zemlje, programe, povrat ulaganja i konkurentne izvore finansiranja.', points: ['pozicioniranje profila i priče', 'DAAD, Erasmus Mundus, OeAD i France Excellence iskustvo', 'rokovi, finansiranje i kvalitet prijave'] },
    { title: 'Osnovne studije i roditelji', lead: 'Za porodice kojima trebaju realne opcije, potpuna slika troška i uredan proces bez iznenađenja.', points: ['ukupan budžet i smeštaj', 'sigurnost izbora i legitimnost programa', 'jasni rokovi, uloge i redovna komunikacija'] },
  ] },
  sample: { ...homeContent.bs.sample, body: 'Naši izveštaji pretvaraju istraživanje u odluku. Ovo je skraćeni ilustrativni prikaz strukture University Direction dokumenta.', note: 'Primer ne sadrži podatke stvarnog kandidata, stvarne rezultate niti obećanje ishoda.' },
  offers: { ...homeContent.bs.offers, title: 'Od jedne odluke do celog prijavnog ciklusa.', body: 'Svaka usluga ima jasan rezultat, granice i cenu. Počnite samo onim nivoom podrške koji vam sada treba.', cta: 'Proverite koja usluga vam odgovara', cards: homeContent.bs.offers.cards.map((card) => ({ ...card, price: card.price.replaceAll('.', '.'), summary: card.summary.replaceAll('provjer', 'prover').replaceAll('sedmica', 'nedelja'), includes: card.includes.map((item) => item.replaceAll('provjer', 'prover').replaceAll('sedmica', 'nedelja')), limits: card.limits.map((item) => item.replaceAll('provjer', 'prover')) })) },
  pricing: { ...homeContent.bs.pricing, title: 'Cena je jasna pre početka.', body: 'Nema automatskih popusta ni neodređenog “od” za standardne pakete. Dodatni rad dogovaramo unapred.', credit: 'Ako u roku od 14 dana nakon konsultacije od 70 € ugovorite kvalifikovani veći paket, tih 70 € uračunavamo u cenu.' },
  value: { ...homeContent.bs.value, title: 'Plaćate savet usmeren na vas.', body: 'Naš model počinje interesom kandidata. Zato vreme ulažemo u poređenje opcija, finansijsku sliku, realan rizik i kvalitet prijave.' },
  trust: { ...homeContent.bs.trust, body: 'Savetnici ostaju privatni, ali način rada nije skriven.', note: 'Puni podaci poslovnog subjekta, ugovorni uslovi i pravila plaćanja moraju biti potvrđeni pre prve naplate.' },
  faq: { ...homeContent.bs.faq, items: homeContent.bs.faq.items.map(([q, a]) => [q.replaceAll('Da li', 'Da li').replaceAll('univerziteta', 'univerziteta'), a.replaceAll('provjer', 'prover').replaceAll('ćemo', 'ćemo').replaceAll('ponudit ćemo', 'ponudićemo').replaceAll('zvaničnim', 'zvaničnim')] as [string, string]) },
  booking: { ...homeContent.bs.booking, body: 'Rezervišite kratak razgovor. Upoznaćemo cilj i predložiti najmanji nivo podrške koji ima smisla.', team: 'Razgovaraćete s jednim članom tima. Svi članovi imaju deo obrazovanja završen u inostranstvu i rade prema istom Adria standardu.', button: 'Izaberite termin' },
};

homeContent.sr.independent.factors = [['Usklađenost', 'Preduslovi, sadržaj programa i realan nivo konkurentnosti.'], ['Trošak', 'Školarina, životni troškovi i ukupna finansijska slika.'], ['Finansiranje', 'Relevantne stipendije i rokovi koji utiču na izbor.'], ['Izvodljivost', 'Dokumenti, rokovi i vreme koje kandidat zaista ima.'], ['Budući smer', 'Veza programa s karijerom, daljim studijama i ličnim ciljem.']];
homeContent.sr.offers.cards = [
  { name: 'Fit Call', label: 'Uvodni razgovor', price: '0 €', meta: '15 min', bestFor: 'proveru da li možemo da vam pomognemo', summary: 'Ukratko upoznajemo cilj, rok i vrstu potrebne podrške.', includes: ['preporuka sledeće usluge'], limits: ['bez analize profila i dokumenata'] },
  { name: 'Strategy Consultation', label: 'Ekspertska konsultacija', price: '70 €', meta: '60 min', bestFor: 'jednu važnu odluku ili drugo mišljenje', summary: 'Fokusiran razgovor o profilu, zemljama, budžetu, rizicima i sledećim koracima.', includes: ['kratka priprema', '60 minuta 1 na 1', 'sažetak narednih koraka'], limits: ['jedna sesija', 'bez detaljnog shortlist izveštaja'] },
  { name: 'Admissions Blueprint', label: 'Strategija prijave', price: '220 €', meta: 'fiksno', bestFor: 'kandidata koji još nema čvrst plan', summary: 'Pisani strateški dokument koji povezuje profil, smer, finansije, rizike i akcije.', includes: ['analiza profila', '8–12 smislenih strana kada je primenljivo', 'rokovi i akcioni plan'], limits: ['jedna uvodna sesija', 'jedna korekcija činjenica'] },
  { name: 'University Direction', label: 'Izbor univerziteta i programa', price: '350 €', meta: 'do 8 programa', bestFor: 'odluku gde zaista vredi poslati prijavu', summary: 'Obrazložena analiza programa, troškova, zahteva, finansiranja i prioriteta.', includes: ['do 8 programa', 'jedna revizija', 'kratak razgovor o izveštaju'], limits: ['jedna grupa zemalja/ciljeva', 'ne uključuje izradu prijave'], featured: true },
  { name: 'Guided Application', label: 'Vođena prijava', price: '800 €', meta: 'do 2 programa', bestFor: 'kandidata koji predaje prijave uz našu kontrolu', summary: 'Strategija, raspored, povratne informacije na dokumente i završna kontrola kvaliteta.', includes: ['CV i motivaciono pismo', 'dve runde komentara po glavnom dokumentu', 'podrška do 8 nedelja'], limits: ['do 2 standardna programa', 'kandidat administrativno predaje prijavu'] },
  { name: 'Full Partnership', label: 'Kompletno vođenje prijave', price: '1.400 €', meta: 'do 3 prijave', bestFor: 'ceo standardni evropski ciklus', summary: 'Blueprint, shortlist, dokumenti, rokovi i kontinuirana kontrola kroz dogovoreni ciklus.', includes: ['do 3 standardne prijave', 'dve runde komentara po dokumentu', 'podrška do 4 meseca'], limits: ['bez posebnih testova, portfolija i više stipendijskih eseja'] },
  { name: 'Full Partnership Plus', label: 'Prošireno vođenje', price: '1.700 €', meta: 'do 4 prijave', bestFor: 'širi izbor i intenzivniju podršku', summary: 'Sve iz Full Partnership paketa, uz četvrtu prijavu, dodatnu reviziju i više strateških provera.', includes: ['do 4 standardne prijave', 'tri runde komentara po dokumentu', 'podrška do 6 meseci i 2 kontrolna poziva'], limits: ['složene stipendijske i selektivne prijave procenjujemo posebno'] },
  { name: 'Scholarship / Selective Intensive', label: 'Stipendijske i selektivne prijave', price: '1.900–2.500 €', meta: 'prema složenosti', bestFor: 'Erasmus Mundus, DAAD i slične zahtevne procese', summary: 'Intenzivan rad za prijave s više eseja, intervjuima, posebnim komponentama ili izrazitom konkurencijom.', includes: ['strategija i kompleksna dokumentacija', 'priprema za intervju kada je potrebna', 'pojačana završna kontrola'], limits: ['cena zavisi od broja eseja, stipendija, intervjua i posebnih zahteva'] },
];
homeContent.sr.pricing = { title: 'Cena je jasna pre početka.', body: 'Nema automatskih popusta ni neodređenog „od” za standardne pakete. Dodatni rad dogovaramo unapred.', addonsTitle: 'Fiksni dodaci', addons: [['Dodatna standardna prijava', 'uz aktivni paket', '280 €'], ['Dodatna stipendijska prijava', 'standardni obim', '300 €'], ['Intenzivna priprema za intervju', 'priprema + simulacija', '140 €'], ['Dodatna strateška sesija', '60 minuta', '100 €']], instalmentsTitle: 'Plaćanje na rate', instalments: ['Paket od 800 €: do 2 rate', 'Paketi od 1.400 € naviše: do 3 rate'], credit: 'Ako u roku od 14 dana nakon konsultacije od 70 € ugovorite kvalifikovani veći paket, tih 70 € uračunavamo u cenu.' };
homeContent.sr.value.points = [['Nezavisan izbor', 'Preporuke ne ograničavamo unapred definisanom partnerskom listom.'], ['Rad koji možete videti', 'Dobijate obrazložen plan, shortlist ili pregled prijave — ne samo razgovor.'], ['Autentična prijava', 'Pomažemo maksimalno, ali kandidat zadržava svoj glas i autorstvo.']];
homeContent.sr.trust.items = [['Jasan pisani obim', 'Pre plaćanja potvrđujemo šta je uključeno, rok, broj revizija i period podrške.'], ['Kontrola kvaliteta', 'Svaki rezultat proveravamo prema zahtevima programa, rokovima, doslednosti i autentičnosti.'], ['Privatnost po dizajnu', 'Stranica ne koristi marketinške ni analitičke kolačiće; Calendly je spoljna usluga.'], ['Etički rad', 'Ne izmišljamo iskustva, rezultate, partnerstva ni utiske klijenata i ne garantujemo odluku institucije.']];
homeContent.sr.faq.items = [
  ['Zašto platiti ako neke agencije nude besplatnu prijavu?', 'Plaćeni model omogućava da preporuku gradimo oko vašeg profila, budžeta i ciljeva. Dobijate obrazloženu analizu i jasno definisan rad, bez oslanjanja na unapred određenu listu programa.'],
  ['Da li ste partner univerziteta?', 'Naša usluga je nezavisno savetovanje. Program biramo prema kandidatu, a ne prema partnerskoj mreži.'],
  ['Možete li garantovati upis ili stipendiju?', 'Odluku uvek donosi univerzitet ili stipendijsko telo. Maksimalno ćemo se posvetiti strategiji, dokumentima, rokovima i završnoj kontroli kako bi prijava bila što snažnija.'],
  ['Pišete li motivaciono pismo umesto kandidata?', 'Ne preuzimamo autorstvo. Pomažemo s idejama, strukturom, pitanjima i detaljnim komentarima kako bi kandidatov glas bio jasan i uverljiv.'],
  ['Šta se dešava na besplatnom razgovoru?', 'U 15 minuta upoznajemo cilj, rokove i vrstu pomoći, pa kažemo da li odgovaramo slučaju i koja usluga ima smisla.'],
  ['Mogu li roditelji da prisustvuju?', 'Da. Za odluke o osnovnim studijama roditelj je dobrodošao, posebno kada razgovaramo o budžetu, rokovima i procesu.'],
  ['Mogu li da platim na rate?', 'Da. Paket od 800 € može se platiti u najviše dve, a paketi od 1.400 € naviše u najviše tri rate, prema pisanom dogovoru.'],
  ['Već imam listu univerziteta. Možete li da je proverite?', 'Da. Konsultacija može da reši usko pitanje, a University Direction može da proveri i unapredi celu listu.'],
  ['Pomažete li sa stipendijama?', 'Da. Tim ima iskustvo s procesima kao što su DAAD, Erasmus Mundus, OeAD i France Excellence. Tačne uslove uvek proveravamo u zvaničnim izvorima.'],
  ['Treba mi pregled samo jedne prijave.', 'Pošaljite rok i ono što je već pripremljeno. Ako je obim manji od Guided Application paketa, ponudićemo fokusirani dodatak ili sesiju s jasnom cenom.'],
];

homeContent.hr = {
  ...homeContent.bs,
  hero: { ...homeContent.bs.hero, title: 'Studirajte u Europi po planu koji odgovara', body: 'Neovisno biramo programe prema vašem profilu, ciljevima, budžetu, financiranju i rokovima — za preddiplomske, diplomske i stipendijske prijave.', primary: 'Besplatan fit razgovor — 15 min' },
  decision: { ...homeContent.bs.decision, paid: 'Plaćate savjet usmjeren na vas — ne mjesto na partnerskoj listi.', factors: [['Akademska usklađenost', 'profil + uvjeti'], ['Ukupan trošak', 'školarina + život'], ['Financiranje', 'stipendije + budžet'], ['Rokovi', 'izvediv kalendar'], ['Rizik', 'uravnotežen izbor']] },
  independent: { ...homeContent.bs.independent, title: 'Prvo dobra odluka. Zatim snažna prijava.', body: 'Sveučilište nije dobar izbor samo zato što prima prijave. Provjeravamo ima li program smisla akademski, financijski i dugoročno — pa tek onda gradimo prijavu.', factors: [['Usklađenost', 'Preduvjeti, sadržaj programa i realna razina konkurentnosti.'], ['Trošak', 'Školarina, životni troškovi i ukupna financijska slika.'], ['Financiranje', 'Relevantne stipendije i rokovi koji utječu na izbor.'], ['Izvedivost', 'Dokumenti, rokovi i vrijeme koje kandidat zaista ima.'], ['Budući smjer', 'Veza programa s karijerom, daljnjim studijem i osobnim ciljem.']] },
  audiences: { ...homeContent.bs.audiences, body: 'Podršku prilagođavamo razini studija i osobi koja donosi odluku.', groups: [
    { title: 'Diplomski studij i stipendije', lead: 'Za kandidate koji uspoređuju zemlje, programe, povrat ulaganja i konkurentne izvore financiranja.', points: ['pozicioniranje profila i priče', 'iskustvo s DAAD, Erasmus Mundus, OeAD i France Excellence procesima', 'rokovi, financiranje i kvaliteta prijave'] },
    { title: 'Preddiplomski kandidati i roditelji', lead: 'Za obitelji kojima trebaju realne opcije, potpuna slika troška i uredan proces bez iznenađenja.', points: ['ukupan budžet i smještaj', 'sigurnost izbora i vjerodostojnost programa', 'jasni rokovi, uloge i redovita komunikacija'] },
  ] },
  method: { ...homeContent.bs.method, steps: [['Profil', 'Ciljevi, iskustvo, ocjene, budžet i ograničenja.'], ['Strategija', 'Prioriteti, zemlje i realna razina ambicije.'], ['Izbor', 'Obrazložena lista programa, ne generičan popis.'], ['Financiranje', 'Trošak, stipendije i rokovi u jednoj slici.'], ['Prijava', 'Autentični dokumenti uz jasnu strukturu i povratne informacije.'], ['Kontrola', 'Završna provjera uvjeta, dosljednosti i spremnosti.']] },
  sample: { ...homeContent.bs.sample, body: 'Naši izvještaji pretvaraju istraživanje u odluku. Ovo je skraćeni ilustrativni prikaz strukture University Direction dokumenta.', rows: [['Program A', 'Snažna akademska usklađenost', 'Srednji rizik'], ['Program B', 'Dobra financijska usklađenost', 'Niži rizik'], ['Program C', 'Konkurentna stipendija', 'Viši rizik']], timeline: ['Rok i dokumenti', 'Školarina i životni troškovi', 'Mogućnosti financiranja', 'Razlog i prioritet prijave'] },
  offers: { ...homeContent.bs.offers, body: 'Svaka usluga ima jasan rezultat, granice i cijenu. Počnite samo onom razinom podrške koja vam sada treba.', cards: homeContent.bs.offers.cards.map((card) => ({ ...card, summary: card.summary.replaceAll('sedmica', 'tjedana').replaceAll('finans', 'financ'), includes: card.includes.map((item) => item.replaceAll('sedmica', 'tjedana').replaceAll('finans', 'financ')), limits: card.limits.map((item) => item.replaceAll('finans', 'financ')) })) },
  pricing: { ...homeContent.bs.pricing, title: 'Cijena je jasna prije početka.', credit: 'Ako u roku od 14 dana nakon konzultacije od 70 € ugovorite kvalificirani veći paket, tih 70 € uračunavamo u cijenu.' },
  value: { ...homeContent.bs.value, title: 'Plaćate savjet usmjeren na vas.', body: 'Naš model počinje interesom kandidata. Zato vrijeme ulažemo u usporedbu opcija, financijsku sliku, realan rizik i kvalitetu prijave.' },
  trust: { ...homeContent.bs.trust, title: 'Povjerenje gradimo sustavom, ne velikim obećanjima.', body: 'Savjetnici ostaju privatni, ali način rada nije skriven.', note: 'Puni podaci poslovnog subjekta, ugovorni uvjeti i pravila plaćanja moraju biti potvrđeni prije prve naplate.' },
  faq: { ...homeContent.bs.faq, items: [
    ['Zašto platiti ako neke agencije nude besplatnu prijavu?', 'Plaćeni model omogućuje da preporuku gradimo oko vašeg profila, budžeta i ciljeva. Dobivate obrazloženu analizu i jasno definiran rad, bez oslanjanja na unaprijed određenu listu programa.'],
    ['Jeste li partner sveučilišta?', 'Naša je usluga neovisno savjetovanje. Program biramo prema kandidatu, a ne prema partnerskoj mreži.'],
    ['Možete li jamčiti upis ili stipendiju?', 'Odluku uvijek donosi sveučilište ili stipendijsko tijelo. Maksimalno ćemo se posvetiti strategiji, dokumentima, rokovima i završnoj kontroli kako bi prijava bila što snažnija.'],
    ['Pišete li motivacijsko pismo umjesto kandidata?', 'Ne preuzimamo autorstvo. Pomažemo idejama, strukturom, pitanjima i detaljnim povratnim informacijama kako bi kandidatov glas bio jasan i uvjerljiv.'],
    ['Što se događa na besplatnom razgovoru?', 'U 15 minuta upoznajemo cilj, rokove i vrstu pomoći te kažemo odgovaramo li slučaju i koja usluga ima smisla.'],
    ['Mogu li roditelji prisustvovati?', 'Da. Za preddiplomske odluke roditelj je dobrodošao, osobito kada razgovaramo o budžetu, rokovima i procesu.'],
    ['Mogu li platiti na rate?', 'Da. Paket od 800 € može se platiti u najviše dvije, a paketi od 1.400 € naviše u najviše tri rate, prema pisanom dogovoru.'],
    ['Već imam listu sveučilišta. Možete li je provjeriti?', 'Da. Konzultacija može riješiti usko pitanje, a University Direction može provjeriti i unaprijediti cijelu listu.'],
    ['Pomažete li sa stipendijama?', 'Da. Tim ima iskustvo s procesima kao što su DAAD, Erasmus Mundus, OeAD i France Excellence. Točni se uvjeti uvijek provjeravaju u službenim izvorima.'],
    ['Trebam pregled samo jedne prijave.', 'Pošaljite rok i što je već pripremljeno. Ako je opseg manji od Guided Application paketa, ponudit ćemo fokusirani dodatak ili sesiju s jasnom cijenom.'],
  ] },
  booking: { ...homeContent.bs.booking, body: 'Rezervirajte kratak razgovor. Upoznat ćemo cilj i predložiti najmanju razinu podrške koja ima smisla.', team: 'Razgovarat ćete s jednim članom tima. Svi članovi imaju dio obrazovanja završen u inozemstvu i rade prema istom Adria standardu.', button: 'Odaberite termin', note: 'Bez obveze kupnje. Za detaljnu strategiju služi plaćena konzultacija.' },
};

homeContent.hr.offers.cards = [
  { name: 'Fit Call', label: 'Uvodni razgovor', price: '0 €', meta: '15 min', bestFor: 'provjeru možemo li vam pomoći', summary: 'Ukratko upoznajemo cilj, rok i vrstu potrebne podrške.', includes: ['preporuka sljedeće usluge'], limits: ['bez analize profila i dokumenata'] },
  { name: 'Strategy Consultation', label: 'Stručna konzultacija', price: '70 €', meta: '60 min', bestFor: 'jednu važnu odluku ili drugo mišljenje', summary: 'Fokusiran razgovor o profilu, zemljama, budžetu, rizicima i sljedećim koracima.', includes: ['kratka priprema', '60 minuta 1 na 1', 'sažetak sljedećih koraka'], limits: ['jedna sesija', 'bez detaljnog izvještaja o užem izboru'] },
  { name: 'Admissions Blueprint', label: 'Strategija prijave', price: '220 €', meta: 'fiksno', bestFor: 'kandidata koji još nema čvrst plan', summary: 'Pisani strateški dokument koji povezuje profil, smjer, financije, rizike i akcije.', includes: ['analiza profila', '8–12 smislenih stranica kada je primjenjivo', 'rokovi i akcijski plan'], limits: ['jedna uvodna sesija', 'jedna korekcija činjenica'] },
  { name: 'University Direction', label: 'Izbor sveučilišta i programa', price: '350 €', meta: 'do 8 programa', bestFor: 'odluku gdje se zaista vrijedi prijaviti', summary: 'Obrazložena analiza programa, troškova, uvjeta, financiranja i prioriteta.', includes: ['do 8 programa', 'jedna revizija', 'kratki razgovor o izvještaju'], limits: ['jedna skupina zemalja/ciljeva', 'ne uključuje izradu prijave'], featured: true },
  { name: 'Guided Application', label: 'Vođena prijava', price: '800 €', meta: 'do 2 programa', bestFor: 'kandidata koji predaje prijave uz našu kontrolu', summary: 'Strategija, raspored, povratne informacije na dokumente i završna kontrola kvalitete.', includes: ['CV i motivacijsko pismo', 'dvije runde komentara po glavnom dokumentu', 'podrška do 8 tjedana'], limits: ['do 2 standardna programa', 'kandidat administrativno predaje prijavu'] },
  { name: 'Full Partnership', label: 'Cjelovito vođenje prijave', price: '1.400 €', meta: 'do 3 prijave', bestFor: 'cijeli standardni europski ciklus', summary: 'Blueprint, uži izbor, dokumenti, rokovi i kontinuirana kontrola kroz dogovoreni ciklus.', includes: ['do 3 standardne prijave', 'dvije runde komentara po dokumentu', 'podrška do 4 mjeseca'], limits: ['bez posebnih testova, portfolija i više stipendijskih eseja'] },
  { name: 'Full Partnership Plus', label: 'Prošireno vođenje', price: '1.700 €', meta: 'do 4 prijave', bestFor: 'širi izbor i intenzivniju podršku', summary: 'Sve iz Full Partnership paketa, uz četvrtu prijavu, dodatnu reviziju i više strateških provjera.', includes: ['do 4 standardne prijave', 'tri runde komentara po dokumentu', 'podrška do 6 mjeseci i 2 kontrolna poziva'], limits: ['složene stipendijske i selektivne prijave procjenjujemo posebno'] },
  { name: 'Scholarship / Selective Intensive', label: 'Stipendijske i selektivne prijave', price: '1.900–2.500 €', meta: 'prema složenosti', bestFor: 'Erasmus Mundus, DAAD i slične zahtjevne procese', summary: 'Intenzivan rad za prijave s više eseja, intervjuima, posebnim sastavnicama ili izrazitom konkurencijom.', includes: ['strategija i složena dokumentacija', 'priprema za intervju kada je potrebna', 'pojačana završna kontrola'], limits: ['cijena ovisi o broju eseja, stipendija, intervjua i posebnih zahtjeva'] },
];
homeContent.hr.pricing = { title: 'Cijena je jasna prije početka.', body: 'Nema automatskih popusta ni neodređenog „od” za standardne pakete. Dodatni rad dogovaramo unaprijed.', addonsTitle: 'Fiksni dodaci', addons: [['Dodatna standardna prijava', 'uz aktivni paket', '280 €'], ['Dodatna stipendijska prijava', 'standardni opseg', '300 €'], ['Intenzivna priprema za intervju', 'priprema + simulacija', '140 €'], ['Dodatna strateška sesija', '60 minuta', '100 €']], instalmentsTitle: 'Plaćanje na rate', instalments: ['Paket od 800 €: do 2 rate', 'Paketi od 1.400 € naviše: do 3 rate'], credit: 'Ako u roku od 14 dana nakon konzultacije od 70 € ugovorite kvalificirani veći paket, tih 70 € uračunavamo u cijenu.' };
homeContent.hr.value.points = [['Neovisan izbor', 'Preporuke ne ograničavamo unaprijed definiranom partnerskom listom.'], ['Rad koji možete vidjeti', 'Dobivate obrazložen plan, uži izbor ili pregled prijave — ne samo razgovor.'], ['Autentična prijava', 'Pomažemo maksimalno, ali kandidat zadržava svoj glas i autorstvo.']];
homeContent.hr.trust.items = [['Jasan pisani opseg', 'Prije plaćanja potvrđujemo što je uključeno, rok, broj revizija i razdoblje podrške.'], ['Kontrola kvalitete', 'Svaki rezultat provjeravamo prema uvjetima programa, rokovima, dosljednosti i autentičnosti.'], ['Privatnost po dizajnu', 'Stranica ne koristi marketinške ni analitičke kolačiće; Calendly je vanjska usluga.'], ['Etički rad', 'Ne izmišljamo iskustva, rezultate, partnerstva ni izjave klijenata i ne jamčimo odluku institucije.']];

homeContent.en = {
  hero: { title: 'Study in Europe with a plan built around', accent: 'you.', body: 'We independently select programmes around your profile, goals, budget, funding options and deadlines — for bachelor’s, master’s and scholarship applications.', primary: 'Free fit call — 15 min', secondary: 'See what you receive', proof: ['European universities', 'Bachelor’s and master’s', 'Scholarship strategy'] },
  decision: { title: 'How a recommendation is made', note: 'Every programme goes through the same visible framework.', paid: 'You pay for advice aligned with you — not a place on a partner list.', factors: [['Academic fit', 'profile + criteria'], ['Total cost', 'tuition + living'], ['Funding', 'scholarships + budget'], ['Deadlines', 'workable calendar'], ['Risk', 'balanced shortlist']] },
  independent: { title: 'Make the right decision first. Build the strong application next.', body: 'A university is not a good choice simply because it accepts applications. We test academic, financial and long-term fit before shaping the application.', factors: [['Fit', 'Prerequisites, curriculum and a realistic level of competition.'], ['Cost', 'Tuition, living expenses and the complete financial picture.'], ['Funding', 'Relevant scholarships and the deadlines that influence your choice.'], ['Feasibility', 'Documents, deadlines and the time the applicant actually has.'], ['Direction', 'How the programme supports career, further study and personal goals.']] },
  audiences: { title: 'Different decisions. One standard.', body: 'Support is shaped around the study level and the people making the decision.', groups: [
    { title: 'Master’s and scholarships', lead: 'For ambitious applicants comparing countries, programmes, return on investment and competitive funding.', points: ['profile positioning and narrative', 'experience with DAAD, Erasmus Mundus, OeAD and France Excellence processes', 'deadlines, funding and application quality'] },
    { title: 'Bachelor’s applicants and parents', lead: 'For families that need realistic options, a complete cost picture and an organised process.', points: ['total budget and accommodation considerations', 'programme legitimacy and decision confidence', 'clear deadlines, roles and communication'] },
  ] },
  method: { title: 'One process. Six quality gates.', body: 'Each step ends with a decision or deliverable that moves the application forward.', steps: [['Profile', 'Goals, experience, grades, budget and constraints.'], ['Strategy', 'Priorities, countries and a realistic level of ambition.'], ['Selection', 'A reasoned shortlist, not a generic search result.'], ['Funding', 'Costs, scholarships and deadlines in one view.'], ['Application', 'Authentic documents with structure and precise feedback.'], ['Quality control', 'Final check of requirements, consistency and readiness.']] },
  sample: { title: 'See the product before you buy it.', body: 'Our reports turn research into a decision. This shortened illustration shows the structure of a University Direction report.', badge: 'Illustrative sample', documentTitle: 'University Direction', documentMeta: 'Master’s · Europe · 8 programmes', rows: [['Programme A', 'Strong academic fit', 'Medium risk'], ['Programme B', 'Good financial fit', 'Lower risk'], ['Programme C', 'Competitive funding route', 'Higher risk']], timeline: ['Deadline and documents', 'Tuition and living costs', 'Funding opportunities', 'Reason and application priority'], note: 'This sample contains no real applicant data, outcomes or promise of admission.' },
  offers: { title: 'From one decision to the full application cycle.', body: 'Every service has a clear outcome, boundary and price. Start with only the level of support you need now.', cta: 'Find the right level of support', bestFor: 'Best for', includes: 'You receive', limits: 'Scope', cards: [
    { name: 'Fit Call', label: 'Introductory call', price: '€0', meta: '15 min', bestFor: 'checking whether we can help', summary: 'We briefly understand the goal, deadline and type of support.', includes: ['a recommendation for the next service'], limits: ['no profile or document analysis'] },
    { name: 'Strategy Consultation', label: 'Expert consultation', price: '€70', meta: '60 min', bestFor: 'one important decision or a second opinion', summary: 'A focused discussion of profile, countries, budget, risks and next steps.', includes: ['short preparation', '60-minute one-to-one call', 'next-step summary'], limits: ['one session', 'no detailed shortlist report'] },
    { name: 'Admissions Blueprint', label: 'Application strategy', price: '€220', meta: 'fixed fee', bestFor: 'an applicant without a firm plan yet', summary: 'A written strategy connecting profile, direction, finances, risks and actions.', includes: ['profile analysis', '8–12 meaningful pages where appropriate', 'timeline and action plan'], limits: ['one intake session', 'one factual correction round'] },
    { name: 'University Direction', label: 'University and programme selection', price: '€350', meta: 'up to 8 programmes', bestFor: 'deciding where an application is genuinely worthwhile', summary: 'A reasoned analysis of programmes, costs, requirements, funding and priorities.', includes: ['up to 8 programmes', 'one revision', 'short review call'], limits: ['one coherent country/goal group', 'application preparation not included'], featured: true },
    { name: 'Guided Application', label: 'Guided application', price: '€800', meta: 'up to 2 programmes', bestFor: 'applicants submitting their own forms with our quality control', summary: 'Strategy, schedule, document feedback and a final quality check.', includes: ['CV and motivation letter', 'two feedback rounds per core document', 'up to 8 weeks of support'], limits: ['up to 2 standard programmes', 'the applicant completes administrative submission'] },
    { name: 'Full Partnership', label: 'Complete application support', price: '€1,400', meta: 'up to 3 applications', bestFor: 'a complete standard European cycle', summary: 'Blueprint, shortlist, documents, deadlines and ongoing quality control.', includes: ['up to 3 standard applications', 'two feedback rounds per document', 'up to 4 months of support'], limits: ['special tests, portfolios and multiple scholarship essays excluded'] },
    { name: 'Full Partnership Plus', label: 'Extended application support', price: '€1,700', meta: 'up to 4 applications', bestFor: 'a wider selection and deeper ongoing support', summary: 'Everything in Full Partnership, plus a fourth application, another revision and more strategy checks.', includes: ['up to 4 standard applications', 'three feedback rounds per document', 'up to 6 months and 2 check-in calls'], limits: ['complex scholarship and selective applications assessed separately'] },
    { name: 'Scholarship / Selective Intensive', label: 'Scholarship and selective applications', price: '€1,900–2,500', meta: 'scope-based', bestFor: 'Erasmus Mundus, DAAD and similarly complex processes', summary: 'Intensive support for multiple essays, interviews, special components or unusually competitive applications.', includes: ['strategy and complex documentation', 'interview preparation where needed', 'enhanced final quality control'], limits: ['price depends on essay, scholarship, interview and special-component workload'] },
  ] },
  pricing: { title: 'The price is clear before work begins.', body: 'No automatic discounts and no vague “from” pricing for standard packages. Additional work is agreed in advance.', addonsTitle: 'Fixed add-ons', addons: [['Additional standard application', 'with an active package', '€280'], ['Additional scholarship application', 'standard scope', '€300'], ['Interview preparation intensive', 'preparation + mock', '€140'], ['Additional strategy session', '60 minutes', '€100']], instalmentsTitle: 'Instalments', instalments: ['€800 package: up to 2 payments', 'Packages of €1,400 or more: up to 3 payments'], credit: 'If you purchase a qualifying larger package within 14 days of the €70 consultation, we credit the €70 toward that package.' },
  value: { title: 'You pay for advice aligned with you.', body: 'Our model begins with the applicant’s interests. Time goes into comparing options, building the financial picture, balancing risk and improving application quality.', points: [['Independent selection', 'Recommendations are not limited to a predetermined partner list.'], ['Work you can see', 'You receive a reasoned plan, shortlist or application review — not only a conversation.'], ['Authentic application', 'We bring maximum care while the applicant keeps their voice and authorship.']] },
  trust: { title: 'Trust through a system, not oversized promises.', body: 'Adviser identities remain private. The way the work is done does not.', items: [['Written scope', 'Before payment, we confirm what is included, the deadline, revisions and support period.'], ['Quality control', 'Every output is checked against programme requirements, deadlines, consistency and authenticity.'], ['Privacy by design', 'The site uses no analytics or marketing cookies; Calendly is an external service.'], ['Ethical support', 'We do not invent experience, outcomes, partnerships or testimonials, and never guarantee an institution’s decision.']], note: 'Full business identity, contract terms and payment rules must be confirmed before the first paid engagement.' },
  faq: { title: 'Questions before you decide', items: [
    ['Why pay when some agencies offer free application support?', 'A paid model lets the recommendation begin with your profile, budget and goals. You receive a defined piece of work rather than advice shaped around a predetermined programme list.'],
    ['Are you partnered with universities?', 'Our service is independent admissions advice. We select programmes around the applicant, not a partner network.'],
    ['Can you guarantee admission or a scholarship?', 'The university or scholarship body always decides. We put maximum effort into the strategy, documents, deadlines and final checks so the application can be as strong as possible.'],
    ['Do you write motivation letters for applicants?', 'We do not take over authorship. We help with ideas, structure, questions and detailed feedback so the applicant’s own voice is clear and persuasive.'],
    ['What happens during the free call?', 'In 15 minutes, we understand your goal, deadline and support needs, then explain whether we are a fit and which service makes sense.'],
    ['Can parents join?', 'Yes. For bachelor’s decisions, parents are welcome, especially when discussing budget, deadlines and the process.'],
    ['Can I pay in instalments?', 'Yes. The €800 package can be paid in up to two instalments; packages of €1,400 or more in up to three, subject to a written agreement.'],
    ['I already have a university list. Can you review it?', 'Yes. A consultation can address one focused concern, while University Direction can test and improve the entire list.'],
    ['Do you support scholarship applications?', 'Yes. The team has experience with processes including DAAD, Erasmus Mundus, OeAD and France Excellence. Current rules are always checked against official sources.'],
    ['I only need one application reviewed.', 'Send us the deadline and what is already prepared. If the scope is smaller than Guided Application, we will quote a focused add-on or session clearly.'],
  ] },
  booking: { title: 'Not sure where to begin?', body: 'Book a short call. We will understand the goal and recommend the smallest useful level of support.', team: 'You will meet one member of our team. Every team member completed part of their education abroad and works to the same Adria standard.', event: 'Free fit call', duration: '15 minutes', location: 'Online video call', timezone: 'Shown in your time zone', button: 'Choose a time', note: 'No obligation to purchase. Detailed strategy belongs in the paid consultation.' },
};

homeContent.de = {
  ...homeContent.en,
  hero: { title: 'Studieren Sie in Europa mit einem Plan, der zu', accent: 'Ihnen passt.', body: 'Wir wählen Studiengänge unabhängig nach Profil, Zielen, Budget, Finanzierung und Fristen aus — für Bachelor-, Master- und Stipendienbewerbungen.', primary: 'Kostenloses Kennenlerngespräch — 15 Min.', secondary: 'Leistungsbeispiele ansehen', proof: ['Europäische Hochschulen', 'Bachelor und Master', 'Stipendienstrategie'] },
  decision: { title: 'So entsteht eine Empfehlung', note: 'Jeder Studiengang durchläuft denselben nachvollziehbaren Rahmen.', paid: 'Sie bezahlen für eine Beratung, die sich an Ihnen orientiert — nicht für einen Platz auf einer Partnerliste.', factors: [['Akademische Passung', 'Profil + Kriterien'], ['Gesamtkosten', 'Gebühren + Leben'], ['Finanzierung', 'Stipendien + Budget'], ['Fristen', 'machbarer Zeitplan'], ['Risiko', 'ausgewogene Auswahl']] },
  independent: { title: 'Zuerst die richtige Entscheidung. Dann die starke Bewerbung.', body: 'Eine Hochschule ist nicht automatisch passend, nur weil sie Bewerbungen annimmt. Wir prüfen akademische, finanzielle und langfristige Passung, bevor wir die Bewerbung entwickeln.', factors: [['Passung', 'Voraussetzungen, Curriculum und realistisches Wettbewerbsniveau.'], ['Kosten', 'Studiengebühren, Lebenshaltung und das gesamte Finanzbild.'], ['Finanzierung', 'Relevante Stipendien und entscheidende Fristen.'], ['Machbarkeit', 'Dokumente, Fristen und die tatsächlich verfügbare Zeit.'], ['Perspektive', 'Verbindung zu Karriere, weiterem Studium und persönlichen Zielen.']] },
  audiences: { title: 'Verschiedene Entscheidungen. Ein Standard.', body: 'Die Unterstützung richtet sich nach Studienniveau und Entscheidungssituation.', groups: [{ title: 'Master und Stipendien', lead: 'Für ambitionierte Bewerberinnen und Bewerber, die Länder, Programme, Nutzen und Finanzierung vergleichen.', points: ['Profilpositionierung und Bewerbungsnarrativ', 'Erfahrung mit DAAD-, Erasmus-Mundus-, OeAD- und France-Excellence-Verfahren', 'Fristen, Finanzierung und Bewerbungsqualität'] }, { title: 'Bachelor und Eltern', lead: 'Für Familien, die realistische Optionen, vollständige Kosten und einen geordneten Prozess brauchen.', points: ['Gesamtbudget und Wohnen', 'Seriosität der Programme und Entscheidungssicherheit', 'klare Fristen, Rollen und Kommunikation'] }] },
  method: { title: 'Ein Prozess. Sechs Qualitätsstufen.', body: 'Jeder Schritt endet mit einer Entscheidung oder einem konkreten Ergebnis.', steps: [['Profil', 'Ziele, Erfahrung, Noten, Budget und Grenzen.'], ['Strategie', 'Prioritäten, Länder und realistisches Ambitionsniveau.'], ['Auswahl', 'Eine begründete Shortlist statt beliebiger Suchergebnisse.'], ['Finanzierung', 'Kosten, Stipendien und Fristen auf einen Blick.'], ['Bewerbung', 'Authentische Unterlagen mit Struktur und präzisem Feedback.'], ['Qualitätskontrolle', 'Prüfung von Anforderungen, Konsistenz und Abgabereife.']] },
  sample: { title: 'Sehen Sie das Produkt vor dem Kauf.', body: 'Unsere Berichte machen aus Recherche eine Entscheidung. Diese gekürzte Darstellung zeigt den Aufbau eines University-Direction-Berichts.', badge: 'Illustratives Beispiel', documentTitle: 'University Direction', documentMeta: 'Master · Europa · 8 Programme', rows: [['Programm A', 'Starke akademische Passung', 'Mittleres Risiko'], ['Programm B', 'Gute finanzielle Passung', 'Niedrigeres Risiko'], ['Programm C', 'Kompetitive Förderung', 'Höheres Risiko']], timeline: ['Frist und Unterlagen', 'Gebühren und Lebenshaltung', 'Finanzierungsoptionen', 'Begründung und Priorität'], note: 'Das Beispiel enthält keine echten Bewerberdaten, Ergebnisse oder Aufnahmeversprechen.' },
  offers: { ...homeContent.en.offers, title: 'Von einer Entscheidung bis zum gesamten Bewerbungszyklus.', body: 'Jede Leistung hat ein klares Ergebnis, Grenzen und einen Preis. Starten Sie nur mit der Unterstützung, die Sie jetzt brauchen.', cta: 'Passende Unterstützung finden', bestFor: 'Geeignet für', includes: 'Enthalten', limits: 'Umfang', cards: [
    { ...homeContent.en.offers.cards[0], label: 'Kennenlerngespräch', price: '0 €', bestFor: 'die Prüfung, ob wir helfen können', summary: 'Wir klären kurz Ziel, Frist und Unterstützungsbedarf.', includes: ['Empfehlung für den nächsten sinnvollen Schritt'], limits: ['keine Profil- oder Dokumentenanalyse'] },
    { ...homeContent.en.offers.cards[1], label: 'Strategieberatung', price: '70 €', bestFor: 'eine wichtige Entscheidung oder zweite Einschätzung', summary: 'Fokussiertes Gespräch zu Profil, Ländern, Budget, Risiken und nächsten Schritten.', includes: ['kurze Vorbereitung', '60 Minuten persönlich', 'Zusammenfassung der nächsten Schritte'], limits: ['eine Sitzung', 'kein detaillierter Shortlist-Bericht'] },
    { ...homeContent.en.offers.cards[2], label: 'Bewerbungsstrategie', price: '220 €', bestFor: 'Bewerbende ohne belastbaren Plan', summary: 'Schriftliche Strategie zu Profil, Richtung, Finanzen, Risiken und Maßnahmen.', includes: ['Profilanalyse', '8–12 aussagekräftige Seiten, soweit passend', 'Zeit- und Aktionsplan'], limits: ['ein Intake-Termin', 'eine sachliche Korrekturrunde'] },
    { ...homeContent.en.offers.cards[3], label: 'Hochschul- und Programmauswahl', price: '350 €', bestFor: 'die Entscheidung, wo sich eine Bewerbung lohnt', summary: 'Begründete Analyse von Programmen, Kosten, Anforderungen, Finanzierung und Prioritäten.', includes: ['bis zu 8 Programme', 'eine Überarbeitung', 'kurzes Auswertungsgespräch'], limits: ['eine zusammenhängende Länder-/Zielgruppe', 'keine Bewerbungsunterlagen enthalten'] },
    { ...homeContent.en.offers.cards[4], label: 'Begleitete Bewerbung', price: '800 €', bestFor: 'eigene Einreichung mit unserer Qualitätskontrolle', summary: 'Strategie, Zeitplan, Dokumentenfeedback und Abschlussprüfung.', includes: ['CV und Motivationsschreiben', 'zwei Feedbackrunden je Kerndokument', 'bis zu 8 Wochen Unterstützung'], limits: ['bis zu 2 Standardprogramme', 'administrative Einreichung durch Bewerbende'] },
    { ...homeContent.en.offers.cards[5], label: 'Komplette Bewerbungsbegleitung', price: '1.400 €', bestFor: 'einen vollständigen europäischen Standardzyklus', summary: 'Blueprint, Shortlist, Dokumente, Fristen und laufende Qualitätskontrolle.', includes: ['bis zu 3 Standardbewerbungen', 'zwei Feedbackrunden je Dokument', 'bis zu 4 Monate Unterstützung'], limits: ['Sondertests, Portfolios und mehrere Stipendienessays ausgenommen'] },
    { ...homeContent.en.offers.cards[6], label: 'Erweiterte Bewerbungsbegleitung', price: '1.700 €', bestFor: 'mehr Auswahl und intensivere laufende Unterstützung', summary: 'Alles aus Full Partnership plus vierte Bewerbung, weitere Revision und zusätzliche Strategietermine.', includes: ['bis zu 4 Standardbewerbungen', 'drei Feedbackrunden je Dokument', 'bis zu 6 Monate und 2 Check-ins'], limits: ['komplexe Stipendien- und Auswahlverfahren separat'] },
    { ...homeContent.en.offers.cards[7], label: 'Stipendien und selektive Verfahren', price: '1.900–2.500 €', bestFor: 'Erasmus Mundus, DAAD und ähnlich komplexe Verfahren', summary: 'Intensive Begleitung bei mehreren Essays, Interviews, Sonderkomponenten oder besonders hohem Wettbewerb.', includes: ['Strategie und komplexe Unterlagen', 'Interviewvorbereitung bei Bedarf', 'vertiefte Abschlusskontrolle'], limits: ['Preis abhängig von Essays, Stipendien, Interviews und Sonderanforderungen'] },
  ] },
  pricing: { title: 'Der Preis steht vor Beginn fest.', body: 'Keine automatischen Rabatte und keine vagen „ab“-Preise für Standardpakete. Zusatzarbeit wird vorab vereinbart.', addonsTitle: 'Feste Zusatzpreise', addons: [['Zusätzliche Standardbewerbung', 'mit aktivem Paket', '280 €'], ['Zusätzliche Stipendienbewerbung', 'Standardumfang', '300 €'], ['Intensive Interviewvorbereitung', 'Vorbereitung + Simulation', '140 €'], ['Zusätzliche Strategiestunde', '60 Minuten', '100 €']], instalmentsTitle: 'Ratenzahlung', instalments: ['800-€-Paket: bis zu 2 Raten', 'Pakete ab 1.400 €: bis zu 3 Raten'], credit: 'Wenn Sie innerhalb von 14 Tagen nach der 70-€-Beratung ein geeignetes größeres Paket buchen, werden die 70 € angerechnet.' },
  value: { title: 'Sie bezahlen für Beratung, die zu Ihnen passt.', body: 'Unser Modell beginnt bei den Interessen der Bewerbenden. Wir investieren Zeit in Optionen, Finanzplanung, Risikobalance und Bewerbungsqualität.', points: [['Unabhängige Auswahl', 'Empfehlungen sind nicht auf eine vorgegebene Partnerliste beschränkt.'], ['Sichtbare Arbeit', 'Sie erhalten einen begründeten Plan, eine Shortlist oder Bewerbungsprüfung — nicht nur ein Gespräch.'], ['Authentische Bewerbung', 'Wir geben volle Unterstützung; Stimme und Autorenschaft bleiben bei den Bewerbenden.']] },
  trust: { title: 'Vertrauen durch System statt großer Versprechen.', body: 'Die Identität der Beratenden bleibt privat. Die Arbeitsweise nicht.', items: [['Schriftlicher Umfang', 'Vor Zahlung bestätigen wir Leistungen, Frist, Revisionen und Unterstützungszeitraum.'], ['Qualitätskontrolle', 'Jedes Ergebnis wird auf Anforderungen, Fristen, Konsistenz und Authentizität geprüft.'], ['Datenschutz mitgedacht', 'Die Website nutzt keine Analyse- oder Marketing-Cookies; Calendly ist ein externer Dienst.'], ['Ethische Begleitung', 'Wir erfinden keine Erfahrungen, Ergebnisse, Partnerschaften oder Bewertungen und garantieren keine Entscheidung.']], note: 'Vollständige Unternehmensdaten, Vertrags- und Zahlungsbedingungen müssen vor dem ersten bezahlten Auftrag bestätigt sein.' },
  faq: { title: 'Fragen vor Ihrer Entscheidung', items: [
    ['Warum bezahlen, wenn manche Agenturen Bewerbungen kostenlos unterstützen?', 'Das bezahlte Modell richtet die Empfehlung an Profil, Budget und Zielen aus. Sie erhalten eine klar definierte Analyse statt einer Auswahl aus einer vorgegebenen Programmliste.'], ['Haben Sie Partnerhochschulen?', 'Unsere Leistung ist unabhängige Zulassungsberatung. Wir wählen Programme nach der Person, nicht nach einem Partnernetzwerk.'], ['Können Sie Zulassung oder Stipendium garantieren?', 'Die Entscheidung trifft immer die Hochschule oder Förderstelle. Wir investieren maximale Sorgfalt in Strategie, Unterlagen, Fristen und Abschlusskontrolle.'], ['Schreiben Sie Motivationsschreiben für Bewerbende?', 'Wir übernehmen nicht die Autorenschaft. Wir helfen mit Ideen, Struktur, Fragen und präzisem Feedback, damit die eigene Stimme überzeugt.'], ['Was passiert im kostenlosen Gespräch?', 'In 15 Minuten klären wir Ziel, Frist und Bedarf und sagen, ob wir passen und welche Leistung sinnvoll ist.'], ['Können Eltern teilnehmen?', 'Ja. Bei Bachelor-Entscheidungen sind Eltern besonders bei Budget, Fristen und Ablauf willkommen.'], ['Kann ich in Raten zahlen?', 'Ja. Das 800-€-Paket ist in bis zu zwei, Pakete ab 1.400 € in bis zu drei Raten möglich — nach schriftlicher Vereinbarung.'], ['Ich habe bereits eine Hochschulliste. Prüfen Sie sie?', 'Ja. Eine Beratung klärt eine Einzelfrage; University Direction kann die gesamte Liste prüfen und verbessern.'], ['Unterstützen Sie Stipendienbewerbungen?', 'Ja. Das Team hat Erfahrung mit DAAD, Erasmus Mundus, OeAD und France Excellence. Aktuelle Regeln prüfen wir immer in offiziellen Quellen.'], ['Ich brauche nur die Prüfung einer Bewerbung.', 'Senden Sie Frist und aktuellen Stand. Ist der Umfang kleiner als Guided Application, bieten wir einen klar bepreisten Zusatz oder eine Sitzung an.'],
  ] },
  booking: { title: 'Sie wissen noch nicht, wo Sie beginnen sollen?', body: 'Buchen Sie ein kurzes Gespräch. Wir klären das Ziel und empfehlen die kleinste sinnvolle Unterstützungsstufe.', team: 'Sie sprechen mit einem Teammitglied. Alle Teammitglieder haben einen Teil ihrer Ausbildung im Ausland absolviert und arbeiten nach demselben Adria-Standard.', event: 'Kostenloses Kennenlerngespräch', duration: '15 Minuten', location: 'Online-Videogespräch', timezone: 'In Ihrer Zeitzone angezeigt', button: 'Termin wählen', note: 'Keine Kaufverpflichtung. Die detaillierte Strategie gehört in die bezahlte Beratung.' },
};

homeContent.fr = {
  ...homeContent.en,
  hero: { title: 'Étudiez en Europe avec un plan construit pour', accent: 'vous.', body: 'Nous sélectionnons les programmes en toute indépendance selon votre profil, vos objectifs, votre budget, vos financements et vos échéances — en licence, master et bourses.', primary: 'Appel de cadrage gratuit — 15 min', secondary: 'Voir ce que vous recevez', proof: ['Universités européennes', 'Licence et master', 'Stratégie de financement'] },
  decision: { title: 'Comment naît une recommandation', note: 'Chaque programme passe par le même cadre vérifiable.', paid: 'Vous payez pour un conseil aligné sur votre intérêt — pas pour une place dans une liste partenaire.', factors: [['Adéquation académique', 'profil + critères'], ['Coût total', 'frais + vie'], ['Financement', 'bourses + budget'], ['Échéances', 'calendrier réaliste'], ['Risque', 'sélection équilibrée']] },
  independent: { title: 'D’abord la bonne décision. Ensuite la candidature solide.', body: 'Une université n’est pas un bon choix simplement parce qu’elle accepte des dossiers. Nous vérifions l’adéquation académique, financière et à long terme avant de construire la candidature.', factors: [['Adéquation', 'Prérequis, contenu du programme et niveau réel de concurrence.'], ['Coût', 'Frais de scolarité, coût de la vie et budget complet.'], ['Financement', 'Bourses pertinentes et échéances qui influencent le choix.'], ['Faisabilité', 'Documents, délais et temps réellement disponible.'], ['Projection', 'Lien avec la carrière, la poursuite d’études et le projet personnel.']] },
  audiences: { title: 'Des décisions différentes. Un même standard.', body: 'L’accompagnement s’adapte au niveau d’études et aux personnes qui décident.', groups: [{ title: 'Master et bourses', lead: 'Pour les candidats ambitieux qui comparent pays, programmes, retour sur investissement et financements compétitifs.', points: ['positionnement du profil et récit', 'expérience des procédures DAAD, Erasmus Mundus, OeAD et France Excellence', 'échéances, financement et qualité du dossier'] }, { title: 'Licence et parents', lead: 'Pour les familles qui veulent des options réalistes, une vision complète des coûts et un processus structuré.', points: ['budget total et logement', 'légitimité des programmes et sécurité de décision', 'échéances, rôles et communication clairs'] }] },
  method: { title: 'Un processus. Six points de contrôle.', body: 'Chaque étape se termine par une décision ou un livrable qui fait avancer le dossier.', steps: [['Profil', 'Objectifs, expérience, notes, budget et contraintes.'], ['Stratégie', 'Priorités, pays et niveau d’ambition réaliste.'], ['Sélection', 'Une liste argumentée, pas un résultat de recherche générique.'], ['Financement', 'Coûts, bourses et échéances dans une seule vue.'], ['Candidature', 'Des documents authentiques, structurés et précisément commentés.'], ['Contrôle qualité', 'Vérification finale des exigences, de la cohérence et de l’état de préparation.']] },
  sample: { title: 'Voyez le produit avant de l’acheter.', body: 'Nos rapports transforment la recherche en décision. Cet aperçu illustre la structure d’un rapport University Direction.', badge: 'Exemple illustratif', documentTitle: 'University Direction', documentMeta: 'Master · Europe · 8 programmes', rows: [['Programme A', 'Forte adéquation académique', 'Risque moyen'], ['Programme B', 'Bonne adéquation financière', 'Risque plus faible'], ['Programme C', 'Financement très compétitif', 'Risque plus élevé']], timeline: ['Échéance et documents', 'Frais et coût de la vie', 'Possibilités de financement', 'Justification et priorité'], note: 'Cet exemple ne contient aucune donnée réelle, aucun résultat et aucune promesse d’admission.' },
  offers: { ...homeContent.en.offers, title: 'D’une décision au cycle complet de candidature.', body: 'Chaque service a un résultat, des limites et un prix clairs. Commencez uniquement par le niveau dont vous avez besoin.', cta: 'Trouver le bon accompagnement', bestFor: 'Idéal pour', includes: 'Vous recevez', limits: 'Périmètre', cards: [
    { ...homeContent.en.offers.cards[0], label: 'Appel de cadrage', price: '0 €', bestFor: 'vérifier si nous pouvons vous aider', summary: 'Nous clarifions brièvement l’objectif, l’échéance et le besoin.', includes: ['recommandation du prochain service utile'], limits: ['pas d’analyse du profil ni des documents'] },
    { ...homeContent.en.offers.cards[1], label: 'Consultation stratégique', price: '70 €', bestFor: 'une décision importante ou un second avis', summary: 'Échange ciblé sur le profil, les pays, le budget, les risques et les prochaines étapes.', includes: ['courte préparation', '60 minutes en individuel', 'synthèse des prochaines étapes'], limits: ['une séance', 'pas de rapport détaillé de sélection'] },
    { ...homeContent.en.offers.cards[2], label: 'Stratégie de candidature', price: '220 €', bestFor: 'un candidat sans plan ferme', summary: 'Stratégie écrite reliant profil, orientation, finances, risques et actions.', includes: ['analyse du profil', '8 à 12 pages utiles lorsque pertinent', 'calendrier et plan d’action'], limits: ['un entretien initial', 'une correction factuelle'] },
    { ...homeContent.en.offers.cards[3], label: 'Choix des universités et programmes', price: '350 €', bestFor: 'décider où candidater vaut réellement la peine', summary: 'Analyse argumentée des programmes, coûts, exigences, financements et priorités.', includes: ['jusqu’à 8 programmes', 'une révision', 'court appel de restitution'], limits: ['un groupe cohérent de pays/objectifs', 'préparation des dossiers non incluse'] },
    { ...homeContent.en.offers.cards[4], label: 'Candidature accompagnée', price: '800 €', bestFor: 'déposer soi-même avec notre contrôle qualité', summary: 'Stratégie, planning, retours sur documents et vérification finale.', includes: ['CV et lettre de motivation', 'deux cycles de retours par document principal', 'jusqu’à 8 semaines'], limits: ['jusqu’à 2 programmes standards', 'dépôt administratif par le candidat'] },
    { ...homeContent.en.offers.cards[5], label: 'Accompagnement complet', price: '1 400 €', bestFor: 'un cycle européen standard complet', summary: 'Blueprint, sélection, documents, échéances et contrôle qualité continu.', includes: ['jusqu’à 3 candidatures standards', 'deux cycles de retours par document', 'jusqu’à 4 mois'], limits: ['tests spéciaux, portfolios et multiples essais de bourse exclus'] },
    { ...homeContent.en.offers.cards[6], label: 'Accompagnement complet Plus', price: '1 700 €', bestFor: 'une sélection plus large et un suivi approfondi', summary: 'Tout le Full Partnership, plus une quatrième candidature, une révision et davantage de points stratégiques.', includes: ['jusqu’à 4 candidatures standards', 'trois cycles de retours par document', 'jusqu’à 6 mois et 2 points de suivi'], limits: ['bourses complexes et sélections exigeantes évaluées séparément'] },
    { ...homeContent.en.offers.cards[7], label: 'Bourses et sélections intensives', price: '1 900–2 500 €', bestFor: 'Erasmus Mundus, DAAD et procédures comparables', summary: 'Accompagnement intensif pour plusieurs essais, entretiens, composantes spéciales ou forte concurrence.', includes: ['stratégie et documentation complexe', 'préparation aux entretiens si nécessaire', 'contrôle final renforcé'], limits: ['prix selon les essais, bourses, entretiens et exigences spéciales'] },
  ] },
  pricing: { title: 'Le prix est clair avant de commencer.', body: 'Pas de remise automatique ni de tarif vague « à partir de » pour les forfaits standards. Tout travail supplémentaire est convenu à l’avance.', addonsTitle: 'Options à prix fixe', addons: [['Candidature standard supplémentaire', 'avec un forfait actif', '280 €'], ['Candidature de bourse supplémentaire', 'périmètre standard', '300 €'], ['Préparation intensive à l’entretien', 'préparation + simulation', '140 €'], ['Séance stratégique supplémentaire', '60 minutes', '100 €']], instalmentsTitle: 'Paiement échelonné', instalments: ['Forfait de 800 € : jusqu’à 2 paiements', 'Forfaits de 1 400 € ou plus : jusqu’à 3 paiements'], credit: 'Si vous achetez un forfait supérieur éligible dans les 14 jours suivant la consultation de 70 €, les 70 € sont déduits.' },
  value: { title: 'Vous payez pour un conseil aligné sur vous.', body: 'Notre modèle part de l’intérêt du candidat. Le temps est consacré aux options, aux finances, au niveau de risque et à la qualité du dossier.', points: [['Sélection indépendante', 'Les recommandations ne se limitent pas à une liste partenaire prédéfinie.'], ['Un travail visible', 'Vous recevez un plan argumenté, une sélection ou une revue du dossier — pas seulement une conversation.'], ['Candidature authentique', 'Nous nous impliquons pleinement, tandis que le candidat conserve sa voix et son statut d’auteur.']] },
  trust: { title: 'La confiance par le système, pas par de grandes promesses.', body: 'L’identité des conseillers reste privée. La méthode de travail, non.', items: [['Périmètre écrit', 'Avant paiement, nous confirmons les livrables, le délai, les révisions et la durée du suivi.'], ['Contrôle qualité', 'Chaque résultat est vérifié selon les exigences, échéances, cohérence et authenticité.'], ['Confidentialité dès la conception', 'Le site n’utilise aucun cookie analytique ou marketing ; Calendly est un service externe.'], ['Accompagnement éthique', 'Nous n’inventons ni expérience, ni résultat, ni partenariat, ni avis, et ne garantissons jamais une décision.']], note: 'L’identité complète de l’entreprise, les conditions contractuelles et les règles de paiement doivent être confirmées avant la première mission payante.' },
  faq: { title: 'Questions avant de décider', items: [
    ['Pourquoi payer si certaines agences aident gratuitement ?', 'Le modèle payant permet de partir de votre profil, de votre budget et de vos objectifs. Vous recevez une analyse définie plutôt qu’une recommandation issue d’une liste prédéterminée.'], ['Êtes-vous partenaires d’universités ?', 'Notre service est un conseil indépendant. Nous choisissons les programmes selon le candidat, pas selon un réseau partenaire.'], ['Pouvez-vous garantir une admission ou une bourse ?', 'La décision appartient toujours à l’université ou à l’organisme. Nous apportons un soin maximal à la stratégie, aux documents, aux délais et au contrôle final.'], ['Rédigez-vous la lettre à la place du candidat ?', 'Nous ne remplaçons pas l’auteur. Nous aidons avec les idées, la structure, les questions et des retours précis pour faire entendre sa voix.'], ['Que se passe-t-il pendant l’appel gratuit ?', 'En 15 minutes, nous clarifions l’objectif, l’échéance et le besoin, puis indiquons si nous pouvons aider et quel service convient.'], ['Les parents peuvent-ils participer ?', 'Oui. Pour une licence, ils sont les bienvenus, surtout pour le budget, les échéances et le processus.'], ['Puis-je payer en plusieurs fois ?', 'Oui. Le forfait de 800 € peut être réglé en deux fois, ceux de 1 400 € ou plus en trois, selon accord écrit.'], ['J’ai déjà une liste d’universités. Pouvez-vous la revoir ?', 'Oui. Une consultation traite une question ciblée ; University Direction peut tester et améliorer toute la liste.'], ['Aidez-vous pour les bourses ?', 'Oui. L’équipe connaît les procédures DAAD, Erasmus Mundus, OeAD et France Excellence. Les règles actuelles sont toujours vérifiées dans les sources officielles.'], ['Je veux seulement faire relire une candidature.', 'Envoyez l’échéance et l’état actuel. Si le besoin est inférieur à Guided Application, nous proposerons une option ou une séance clairement tarifée.'],
  ] },
  booking: { title: 'Vous ne savez pas par où commencer ?', body: 'Réservez un court appel. Nous clarifierons l’objectif et recommanderons le niveau d’aide le plus léger qui soit utile.', team: 'Vous rencontrerez un membre de l’équipe. Tous ont effectué une partie de leurs études à l’étranger et suivent le même standard Adria.', event: 'Appel de cadrage gratuit', duration: '15 minutes', location: 'Appel vidéo en ligne', timezone: 'Affiché dans votre fuseau horaire', button: 'Choisir un créneau', note: 'Sans obligation d’achat. La stratégie détaillée relève de la consultation payante.' },
};

// Accepted simplification: one decision framework, six clearly scoped services,
// local-language names and positive, specific trust copy across every locale.
Object.assign(homeContent.bs, {
  hero: { ...homeContent.bs.hero, primary: 'Zakažite besplatan uvodni razgovor — 15 min' },
  decision: {
    title: 'Prije nego što preporučimo program',
    note: 'Provjeravamo pet stvari:',
    paid: 'Tek tada program ulazi u preporuku.',
    factors: [['Akademska usklađenost', 'profil + uslovi'], ['Ukupan trošak', 'školarina + život'], ['Finansiranje', 'stipendije + budžet'], ['Rokovi', 'realan kalendar'], ['Rizik', 'uravnotežen izbor']],
  },
  independent: {
    title: 'Prvo dobra odluka. Zatim snažna prijava.',
    body: 'Program biramo prema vašem profilu, budžetu, ciljevima i rokovima. Tek poslije toga gradimo prijavu koja jasno pokazuje zašto baš vi odgovarate tom programu.',
    statement: 'Nas plaćate vi, a ne univerziteti. Zato vam možemo reći i: tamo se nemojte prijaviti.',
  },
  method: {
    title: 'Šest koraka do predate prijave.',
    body: 'Poslije svakog koraka imate odluku ili gotov dokument.',
    steps: [['Profil', 'Ciljevi, iskustvo, ocjene, budžet i ograničenja.'], ['Strategija', 'Prioriteti, zemlje i realan nivo ambicije.'], ['Izbor', 'Obrazložena lista programa, a ne generičan spisak.'], ['Finansiranje', 'Troškovi, stipendije i rokovi u jednoj slici.'], ['Prijava', 'Komentari i dorade vašeg CV-a i motivacionog pisma.'], ['Kontrola', 'Završna provjera uslova, dosljednosti i spremnosti.']],
  },
  sample: {
    ...homeContent.bs.sample,
    title: 'Pogledajte kako izvještaj izgleda prije naručivanja.',
    body: 'Umjesto 40 otvorenih kartica — jedan dokument i jasna odluka.',
    documentTitle: 'Izbor programa',
    rows: [['Program A', 'Odlično odgovara profilu', 'Srednji rizik'], ['Program B', 'Uklapa se u budžet', 'Niži rizik'], ['Program C', 'Zahtjevna stipendija', 'Viši rizik']],
  },
  offers: {
    title: 'Platite samo onoliko podrške koliko vam treba.',
    body: 'Za svaku uslugu unaprijed znate šta dobijate, šta nije uključeno i koliko košta.',
    cta: 'Zakažite besplatan uvodni razgovor', bestFor: 'Najbolje za', includes: 'Dobijate', limits: 'Obim',
    cards: [
      { name: 'Uvodni razgovor', label: 'Prvi korak', price: 'Besplatno', meta: '15 min', bestFor: 'provjeru možemo li vam pomoći', summary: 'Upoznajemo cilj, rok i vrstu podrške koja vam treba.', includes: ['preporuku najkorisnijeg sljedećeg koraka'], limits: ['bez analize profila i dokumenata'] },
      { name: 'Strateška konsultacija', label: 'Jedna važna odluka', price: '70 €', meta: '60 min', bestFor: 'drugo mišljenje ili jasno usmjerenje', summary: 'Fokusiran razgovor o profilu, zemljama, budžetu, rizicima i narednim koracima.', includes: ['kratku pripremu', '60 minuta razgovora 1 na 1', 'pisani sažetak narednih koraka'], limits: ['jedna sesija', 'bez detaljnog izvještaja o programima'] },
      { name: 'Izbor programa', label: 'Obrazložena lista', price: '350 €', meta: 'do 8 programa', bestFor: 'odluku gdje se zaista vrijedi prijaviti', summary: 'Poredimo programe, troškove, uslove, finansiranje i rokove.', includes: ['do 8 programa', 'jednu reviziju', 'kratki završni razgovor'], limits: ['jedna povezana grupa zemalja i ciljeva', 'ne uključuje izradu prijave'], featured: true },
      { name: 'Podrška za prijavu', label: 'Jedan program', price: '390 €', meta: '1 prijava', bestFor: 'kandidata koji već zna gdje se prijavljuje', summary: 'Pomažemo da vaši dokumenti budu jasni, uvjerljivi i usklađeni sa zahtjevima programa.', includes: ['komentare i dorade CV-a i motivacionog pisma', 'dvije runde komentara po glavnom dokumentu', 'spisak dokumenata i završnu kontrolu'], limits: ['jedan standardni program', 'kandidat piše i predaje prijavu'] },
      { name: 'Kompletno vođenje', label: 'Cijeli prijavni ciklus', price: '1.400 €', meta: 'do 3 prijave', bestFor: 'standardni evropski ciklus od izbora do predaje', summary: 'Vodimo strategiju, izbor programa, dokumente, rokove i završnu kontrolu.', includes: ['izbor programa i do 3 standardne prijave', 'dvije runde komentara po glavnom dokumentu', 'podršku do 4 mjeseca'], limits: ['bez posebnih testova, portfolija i složenih višestrukih eseja'] },
      { name: 'Stipendijska prijava', label: 'Jedna stipendija', price: '590 €', meta: 'standardni obim', bestFor: 'jednu jasno odabranu stipendiju', summary: 'Gradimo jasnu strategiju i pomažemo da kandidatovi eseji pokažu motivaciju, iskustvo i plan.', includes: ['strategiju prijave', 'do tri runde komentara na eseje kandidata', 'upute za preporuke i završnu kontrolu'], limits: ['jedna standardna stipendijska prijava', 'posebno složene selekcije dogovaramo prije početka'] },
    ],
  },
  pricing: {
    title: 'Cijena je jasna prije početka.',
    body: 'Dodatni rad i cijenu potvrđujemo unaprijed, prije nego što počnemo.',
    addonsTitle: 'Fiksni dodaci',
    addons: [['Dodatna standardna prijava', 'uz aktivni paket', '280 €'], ['Dodatna stipendijska prijava', 'standardni obim', '300 €'], ['Priprema za intervju', 'priprema + simulacija', '140 €'], ['Dodatna strateška konsultacija', '60 minuta', '70 €']],
    instalmentsTitle: 'Plaćanje na rate', instalments: ['Kompletno vođenje od 1.400 €: do 3 rate'],
    credit: 'Ako u roku od 14 dana nakon konsultacije od 70 € ugovorite odgovarajući veći paket, tih 70 € uračunavamo u cijenu.',
  },
  trust: {
    ...homeContent.bs.trust,
    body: 'Povjerenje gradimo jasnim obimom, provjerljivim radom i pisanom potvrdom onoga što dobijate.',
    note: 'Prije početka rada dobit ćete pisanu potvrdu obima, rokova, cijene i načina plaćanja.',
  },
  booking: {
    ...homeContent.bs.booking,
    body: 'U 15 minuta upoznat ćemo vaš cilj, rokove i vrstu podrške koja vam treba.',
    team: 'Razgovarat ćete s jednim članom našeg tima. Svi članovi imaju dio obrazovanja završen u inostranstvu. Ako nismo prava pomoć za vaš slučaj, reći ćemo vam to u prvih 15 minuta.',
    event: 'Besplatan uvodni razgovor', note: 'Razgovor vas ni na šta ne obavezuje.',
  },
});

homeContent.bs.faq.items[3] = ['Pišete li motivaciono pismo umjesto kandidata?', 'Ne preuzimamo autorstvo. Pomažemo s idejama, strukturom, pitanjima te komentarima i doradama kako bi kandidatov glas bio jasan i uvjerljiv.'];
homeContent.bs.faq.items[6] = ['Mogu li platiti na rate?', 'Da. Kompletno vođenje od 1.400 € može se platiti u najviše tri rate, prema pisanom dogovoru.'];
homeContent.bs.faq.items[7] = ['Već imam listu univerziteta. Možete li je provjeriti?', 'Da. Strateška konsultacija može riješiti usko pitanje, a Izbor programa može provjeriti i unaprijediti cijelu listu.'];
homeContent.bs.faq.items[9] = ['Treba mi pomoć samo s jednom prijavom.', 'Podrška za prijavu namijenjena je upravo jednom standardnom programu: dobijate komentare i dorade glavnih dokumenata, spisak zahtjeva i završnu kontrolu.'];

Object.assign(homeContent.sr, {
  hero: { ...homeContent.sr.hero, primary: 'Zakažite besplatan uvodni razgovor — 15 min' },
  decision: { title: 'Pre nego što preporučimo program', note: 'Proveravamo pet stvari:', paid: 'Tek tada program ulazi u preporuku.', factors: [['Akademska usklađenost', 'profil + uslovi'], ['Ukupan trošak', 'školarina + život'], ['Finansiranje', 'stipendije + budžet'], ['Rokovi', 'realan kalendar'], ['Rizik', 'uravnotežen izbor']] },
  independent: { title: 'Prvo dobra odluka. Zatim snažna prijava.', body: 'Program biramo prema vašem profilu, budžetu, ciljevima i rokovima. Tek posle toga gradimo prijavu koja jasno pokazuje zašto baš vi odgovarate tom programu.', statement: 'Nas plaćate vi, a ne univerziteti. Zato možemo da vam kažemo i: tamo se nemojte prijavljivati.' },
  method: { title: 'Šest koraka do predate prijave.', body: 'Posle svakog koraka imate odluku ili gotov dokument.', steps: [['Profil', 'Ciljevi, iskustvo, ocene, budžet i ograničenja.'], ['Strategija', 'Prioriteti, zemlje i realan nivo ambicije.'], ['Izbor', 'Obrazložena lista programa, a ne generičan spisak.'], ['Finansiranje', 'Troškovi, stipendije i rokovi u jednoj slici.'], ['Prijava', 'Komentari i dorade vašeg CV-a i motivacionog pisma.'], ['Kontrola', 'Završna provera uslova, doslednosti i spremnosti.']] },
  sample: { ...homeContent.sr.sample, title: 'Pogledajte kako izveštaj izgleda pre naručivanja.', body: 'Umesto 40 otvorenih kartica — jedan dokument i jasna odluka.', documentTitle: 'Izbor programa', rows: [['Program A', 'Odlično odgovara profilu', 'Srednji rizik'], ['Program B', 'Uklapa se u budžet', 'Niži rizik'], ['Program C', 'Zahtevna stipendija', 'Viši rizik']] },
  offers: {
    title: 'Platite samo onoliko podrške koliko vam treba.', body: 'Za svaku uslugu unapred znate šta dobijate, šta nije uključeno i koliko košta.', cta: 'Zakažite besplatan uvodni razgovor', bestFor: 'Najbolje za', includes: 'Dobijate', limits: 'Obim',
    cards: [
      { name: 'Uvodni razgovor', label: 'Prvi korak', price: 'Besplatno', meta: '15 min', bestFor: 'proveru možemo li da vam pomognemo', summary: 'Upoznajemo cilj, rok i vrstu podrške koja vam treba.', includes: ['preporuku najkorisnijeg sledećeg koraka'], limits: ['bez analize profila i dokumenata'] },
      { name: 'Strateška konsultacija', label: 'Jedna važna odluka', price: '70 €', meta: '60 min', bestFor: 'drugo mišljenje ili jasno usmerenje', summary: 'Fokusiran razgovor o profilu, zemljama, budžetu, rizicima i sledećim koracima.', includes: ['kratku pripremu', '60 minuta razgovora 1 na 1', 'pisani sažetak sledećih koraka'], limits: ['jedna sesija', 'bez detaljnog izveštaja o programima'] },
      { name: 'Izbor programa', label: 'Obrazložena lista', price: '350 €', meta: 'do 8 programa', bestFor: 'odluku gde se zaista vredi prijaviti', summary: 'Poredimo programe, troškove, uslove, finansiranje i rokove.', includes: ['do 8 programa', 'jednu reviziju', 'kratak završni razgovor'], limits: ['jedna povezana grupa zemalja i ciljeva', 'ne uključuje izradu prijave'], featured: true },
      { name: 'Podrška za prijavu', label: 'Jedan program', price: '390 €', meta: '1 prijava', bestFor: 'kandidata koji već zna gde se prijavljuje', summary: 'Pomažemo da vaši dokumenti budu jasni, uverljivi i usklađeni sa zahtevima programa.', includes: ['komentare i dorade CV-a i motivacionog pisma', 'dve runde komentara po glavnom dokumentu', 'spisak dokumenata i završnu kontrolu'], limits: ['jedan standardni program', 'kandidat piše i predaje prijavu'] },
      { name: 'Kompletno vođenje', label: 'Ceo prijavni ciklus', price: '1.400 €', meta: 'do 3 prijave', bestFor: 'standardni evropski ciklus od izbora do predaje', summary: 'Vodimo strategiju, izbor programa, dokumente, rokove i završnu kontrolu.', includes: ['izbor programa i do 3 standardne prijave', 'dve runde komentara po glavnom dokumentu', 'podršku do 4 meseca'], limits: ['bez posebnih testova, portfolija i složenih višestrukih eseja'] },
      { name: 'Stipendijska prijava', label: 'Jedna stipendija', price: '590 €', meta: 'standardni obim', bestFor: 'jednu jasno odabranu stipendiju', summary: 'Gradimo jasnu strategiju i pomažemo da kandidatovi eseji pokažu motivaciju, iskustvo i plan.', includes: ['strategiju prijave', 'do tri runde komentara na eseje kandidata', 'uputstva za preporuke i završnu kontrolu'], limits: ['jedna standardna stipendijska prijava', 'posebno složene selekcije dogovaramo pre početka'] },
    ],
  },
  pricing: { title: 'Cena je jasna pre početka.', body: 'Dodatni rad i cenu potvrđujemo unapred, pre nego što počnemo.', addonsTitle: 'Fiksni dodaci', addons: [['Dodatna standardna prijava', 'uz aktivni paket', '280 €'], ['Dodatna stipendijska prijava', 'standardni obim', '300 €'], ['Priprema za intervju', 'priprema + simulacija', '140 €'], ['Dodatna strateška konsultacija', '60 minuta', '70 €']], instalmentsTitle: 'Plaćanje na rate', instalments: ['Kompletno vođenje od 1.400 €: do 3 rate'], credit: 'Ako u roku od 14 dana nakon konsultacije od 70 € ugovorite odgovarajući veći paket, tih 70 € uračunavamo u cenu.' },
  trust: { ...homeContent.sr.trust, body: 'Poverenje gradimo jasnim obimom, proverljivim radom i pisanom potvrdom onoga što dobijate.', note: 'Pre početka rada dobićete pisanu potvrdu obima, rokova, cene i načina plaćanja.' },
  booking: { ...homeContent.sr.booking, body: 'U 15 minuta upoznaćemo vaš cilj, rokove i vrstu podrške koja vam treba.', team: 'Razgovaraćete s jednim članom našeg tima. Svi članovi imaju deo obrazovanja završen u inostranstvu. Ako nismo prava pomoć za vaš slučaj, reći ćemo vam to u prvih 15 minuta.', event: 'Besplatan uvodni razgovor', note: 'Razgovor vas ni na šta ne obavezuje.' },
});

homeContent.sr.faq.items[3] = ['Pišete li motivaciono pismo umesto kandidata?', 'Ne preuzimamo autorstvo. Pomažemo idejama, strukturom, pitanjima, komentarima i doradama kako bi glas kandidata bio jasan i uverljiv.'];
homeContent.sr.faq.items[6] = ['Mogu li da platim na rate?', 'Da. Kompletno vođenje od 1.400 € može se platiti u najviše tri rate, prema pisanom dogovoru.'];
homeContent.sr.faq.items[7] = ['Već imam listu univerziteta. Možete li da je proverite?', 'Da. Strateška konsultacija može rešiti usko pitanje, a Izbor programa može proveriti i unaprediti celu listu.'];
homeContent.sr.faq.items[9] = ['Treba mi pomoć samo s jednom prijavom.', 'Podrška za prijavu namenjena je upravo jednom standardnom programu: dobijate komentare i dorade glavnih dokumenata, spisak zahteva i završnu kontrolu.'];

Object.assign(homeContent.hr, {
  hero: { ...homeContent.hr.hero, primary: 'Rezervirajte besplatan uvodni razgovor — 15 min' },
  decision: { title: 'Prije nego što preporučimo program', note: 'Provjeravamo pet stvari:', paid: 'Tek tada program ulazi u preporuku.', factors: [['Akademska usklađenost', 'profil + uvjeti'], ['Ukupan trošak', 'školarina + život'], ['Financiranje', 'stipendije + budžet'], ['Rokovi', 'izvediv kalendar'], ['Rizik', 'uravnotežen izbor']] },
  independent: { title: 'Prvo dobra odluka. Zatim snažna prijava.', body: 'Program biramo prema vašem profilu, proračunu, ciljevima i rokovima. Tek nakon toga gradimo prijavu koja jasno pokazuje zašto baš vi odgovarate tom programu.', statement: 'Nas plaćate vi, a ne sveučilišta. Zato vam možemo reći i: tamo se nemojte prijaviti.' },
  method: { title: 'Šest koraka do predane prijave.', body: 'Nakon svakog koraka imate odluku ili gotov dokument.', steps: [['Profil', 'Ciljevi, iskustvo, ocjene, proračun i ograničenja.'], ['Strategija', 'Prioriteti, zemlje i realna razina ambicije.'], ['Izbor', 'Obrazložena lista programa, a ne generičan popis.'], ['Financiranje', 'Troškovi, stipendije i rokovi na jednom mjestu.'], ['Prijava', 'Komentari i dorade vašeg životopisa i motivacijskog pisma.'], ['Kontrola', 'Završna provjera uvjeta, dosljednosti i spremnosti.']] },
  sample: { ...homeContent.hr.sample, title: 'Pogledajte kako izvještaj izgleda prije naručivanja.', body: 'Umjesto 40 otvorenih kartica — jedan dokument i jasna odluka.', documentTitle: 'Izbor programa', rows: [['Program A', 'Odlično odgovara profilu', 'Srednji rizik'], ['Program B', 'Uklapa se u proračun', 'Niži rizik'], ['Program C', 'Zahtjevna stipendija', 'Viši rizik']] },
  offers: {
    title: 'Platite samo onoliko podrške koliko vam treba.', body: 'Za svaku uslugu unaprijed znate što dobivate, što nije uključeno i koliko košta.', cta: 'Rezervirajte besplatan uvodni razgovor', bestFor: 'Najbolje za', includes: 'Dobivate', limits: 'Opseg',
    cards: [
      { name: 'Uvodni razgovor', label: 'Prvi korak', price: 'Besplatno', meta: '15 min', bestFor: 'provjeru možemo li vam pomoći', summary: 'Upoznajemo cilj, rok i vrstu podrške koja vam treba.', includes: ['preporuku najkorisnijeg sljedećeg koraka'], limits: ['bez analize profila i dokumenata'] },
      { name: 'Strateško savjetovanje', label: 'Jedna važna odluka', price: '70 €', meta: '60 min', bestFor: 'drugo mišljenje ili jasno usmjerenje', summary: 'Usmjeren razgovor o profilu, zemljama, proračunu, rizicima i sljedećim koracima.', includes: ['kratku pripremu', '60 minuta razgovora 1 na 1', 'pisani sažetak sljedećih koraka'], limits: ['jedna sesija', 'bez detaljnog izvještaja o programima'] },
      { name: 'Izbor programa', label: 'Obrazložena lista', price: '350 €', meta: 'do 8 programa', bestFor: 'odluku gdje se zaista vrijedi prijaviti', summary: 'Uspoređujemo programe, troškove, uvjete, financiranje i rokove.', includes: ['do 8 programa', 'jednu reviziju', 'kratki završni razgovor'], limits: ['jedna povezana skupina zemalja i ciljeva', 'ne uključuje izradu prijave'], featured: true },
      { name: 'Podrška za prijavu', label: 'Jedan program', price: '390 €', meta: '1 prijava', bestFor: 'kandidata koji već zna gdje se prijavljuje', summary: 'Pomažemo da vaši dokumenti budu jasni, uvjerljivi i usklađeni sa zahtjevima programa.', includes: ['komentare i dorade životopisa i motivacijskog pisma', 'dva kruga komentara po glavnom dokumentu', 'popis dokumenata i završnu kontrolu'], limits: ['jedan standardni program', 'kandidat piše i predaje prijavu'] },
      { name: 'Potpuno vođenje', label: 'Cijeli prijavni ciklus', price: '1.400 €', meta: 'do 3 prijave', bestFor: 'standardni europski ciklus od izbora do predaje', summary: 'Vodimo strategiju, izbor programa, dokumente, rokove i završnu kontrolu.', includes: ['izbor programa i do 3 standardne prijave', 'dva kruga komentara po glavnom dokumentu', 'podršku do 4 mjeseca'], limits: ['bez posebnih testova, portfelja i složenih višestrukih eseja'] },
      { name: 'Prijava za stipendiju', label: 'Jedna stipendija', price: '590 €', meta: 'standardni opseg', bestFor: 'jednu jasno odabranu stipendiju', summary: 'Gradimo jasnu strategiju i pomažemo da kandidatovi eseji pokažu motivaciju, iskustvo i plan.', includes: ['strategiju prijave', 'do tri kruga komentara na eseje kandidata', 'upute za preporuke i završnu kontrolu'], limits: ['jedna standardna prijava za stipendiju', 'posebno složene selekcije dogovaramo prije početka'] },
    ],
  },
  pricing: { title: 'Cijena je jasna prije početka.', body: 'Dodatni rad i cijenu potvrđujemo unaprijed, prije nego što počnemo.', addonsTitle: 'Fiksni dodaci', addons: [['Dodatna standardna prijava', 'uz aktivni paket', '280 €'], ['Dodatna prijava za stipendiju', 'standardni opseg', '300 €'], ['Priprema za razgovor', 'priprema + simulacija', '140 €'], ['Dodatno strateško savjetovanje', '60 minuta', '70 €']], instalmentsTitle: 'Obročno plaćanje', instalments: ['Potpuno vođenje od 1.400 €: do 3 obroka'], credit: 'Ako u roku od 14 dana nakon savjetovanja od 70 € ugovorite odgovarajući veći paket, tih 70 € uračunavamo u cijenu.' },
  trust: { ...homeContent.hr.trust, body: 'Povjerenje gradimo jasnim opsegom, provjerljivim radom i pisanom potvrdom onoga što dobivate.', note: 'Prije početka rada dobit ćete pisanu potvrdu opsega, rokova, cijene i načina plaćanja.' },
  booking: { ...homeContent.hr.booking, body: 'U 15 minuta upoznat ćemo vaš cilj, rokove i vrstu podrške koja vam treba.', team: 'Razgovarat ćete s jednim članom našeg tima. Svi članovi dio su obrazovanja završili u inozemstvu. Ako nismo prava pomoć za vaš slučaj, reći ćemo vam to u prvih 15 minuta.', event: 'Besplatan uvodni razgovor', note: 'Razgovor vas ni na što ne obvezuje.' },
});

homeContent.hr.faq.items[3] = ['Pišete li motivacijsko pismo umjesto kandidata?', 'Ne preuzimamo autorstvo. Pomažemo idejama, strukturom, pitanjima, komentarima i doradama kako bi glas kandidata bio jasan i uvjerljiv.'];
homeContent.hr.faq.items[6] = ['Mogu li platiti na rate?', 'Da. Potpuno vođenje od 1.400 € može se platiti u najviše tri obroka, prema pisanom dogovoru.'];
homeContent.hr.faq.items[7] = ['Već imam popis sveučilišta. Možete li ga provjeriti?', 'Da. Strateško savjetovanje može riješiti usko pitanje, a Izbor programa može provjeriti i unaprijediti cijeli popis.'];
homeContent.hr.faq.items[9] = ['Treba mi pomoć samo s jednom prijavom.', 'Podrška za prijavu namijenjena je upravo jednom standardnom programu: dobivate komentare i dorade glavnih dokumenata, popis zahtjeva i završnu kontrolu.'];

Object.assign(homeContent.en, {
  hero: { ...homeContent.en.hero, primary: 'Book a free introductory call — 15 min' },
  decision: { title: 'Before we recommend a programme', note: 'We check five things:', paid: 'Only then does a programme enter the recommendation.', factors: [['Academic fit', 'profile + criteria'], ['Total cost', 'tuition + living'], ['Funding', 'scholarships + budget'], ['Deadlines', 'workable calendar'], ['Risk', 'balanced selection']] },
  independent: { title: 'Make the right decision first. Build the strong application next.', body: 'We select programmes around your profile, budget, goals and deadlines. Only then do we build an application that makes your fit clear.', statement: 'You pay us — universities do not. That means we can also tell you where not to apply.' },
  method: { title: 'Six steps to a submitted application.', body: 'Every step ends with a decision or a finished document.', steps: [['Profile', 'Goals, experience, grades, budget and constraints.'], ['Strategy', 'Priorities, countries and a realistic level of ambition.'], ['Selection', 'A reasoned programme list, not generic search results.'], ['Funding', 'Costs, scholarships and deadlines in one view.'], ['Application', 'Comments and revisions on your CV and motivation letter.'], ['Quality control', 'A final check of requirements, consistency and readiness.']] },
  sample: { ...homeContent.en.sample, title: 'See the report before you order it.', body: 'Instead of 40 open tabs — one document and a clear decision.', documentTitle: 'Programme selection', rows: [['Programme A', 'Strong profile match', 'Medium risk'], ['Programme B', 'Fits the budget', 'Lower risk'], ['Programme C', 'Competitive scholarship', 'Higher risk']] },
  offers: {
    title: 'Pay only for the support you need.', body: 'For every service, you know the deliverables, boundaries and price before work begins.', cta: 'Book a free introductory call', bestFor: 'Best for', includes: 'You receive', limits: 'Scope',
    cards: [
      { name: 'Introductory call', label: 'First step', price: 'Free', meta: '15 min', bestFor: 'checking whether we can help', summary: 'We learn your goal, deadline and the support you need.', includes: ['a recommendation for the most useful next step'], limits: ['no profile or document analysis'] },
      { name: 'Strategy consultation', label: 'One important decision', price: '€70', meta: '60 min', bestFor: 'a second opinion or clear direction', summary: 'A focused conversation about profile, countries, budget, risks and next steps.', includes: ['brief preparation', '60 minutes one to one', 'written next-step summary'], limits: ['one session', 'no detailed programme report'] },
      { name: 'Programme selection', label: 'A reasoned list', price: '€350', meta: 'up to 8 programmes', bestFor: 'deciding where an application is worth the effort', summary: 'We compare programmes, costs, criteria, funding and deadlines.', includes: ['up to 8 programmes', 'one revision', 'a short review call'], limits: ['one connected group of countries and goals', 'application preparation not included'], featured: true },
      { name: 'Application support', label: 'One programme', price: '€390', meta: '1 application', bestFor: 'applicants who already know where to apply', summary: 'We help make your documents clear, persuasive and aligned with programme requirements.', includes: ['comments and revisions on your CV and motivation letter', 'two feedback rounds per main document', 'document checklist and final quality check'], limits: ['one standard programme', 'the applicant writes and submits the application'] },
      { name: 'Complete support', label: 'Full application cycle', price: '€1,400', meta: 'up to 3 applications', bestFor: 'a standard European cycle from selection to submission', summary: 'We guide strategy, programme selection, documents, deadlines and final checks.', includes: ['programme selection and up to 3 standard applications', 'two feedback rounds per main document', 'support for up to 4 months'], limits: ['special tests, portfolios and complex multi-essay processes excluded'] },
      { name: 'Scholarship application', label: 'One scholarship', price: '€590', meta: 'standard scope', bestFor: 'one clearly selected scholarship', summary: 'We shape the strategy and help the applicant’s essays communicate motivation, experience and direction.', includes: ['application strategy', 'up to three feedback rounds on applicant-authored essays', 'recommender guidance and final check'], limits: ['one standard scholarship application', 'unusually complex selections scoped before work begins'] },
    ],
  },
  pricing: { title: 'The price is clear before work begins.', body: 'Any additional work and its price are confirmed before we start.', addonsTitle: 'Fixed add-ons', addons: [['Additional standard application', 'with an active package', '€280'], ['Additional scholarship application', 'standard scope', '€300'], ['Interview preparation', 'preparation + mock', '€140'], ['Additional strategy consultation', '60 minutes', '€70']], instalmentsTitle: 'Instalments', instalments: ['Complete support at €1,400: up to 3 payments'], credit: 'If you purchase a qualifying larger package within 14 days of the €70 consultation, we credit the €70 toward that package.' },
  trust: { ...homeContent.en.trust, body: 'We earn trust through clear scope, verifiable work and written confirmation of what you receive.', note: 'Before work begins, you receive written confirmation of scope, deadlines, price and payment method.' },
  booking: { ...homeContent.en.booking, body: 'In 15 minutes, we will understand your goal, deadlines and the support you need.', team: 'You will speak with one member of our team. Every team member completed part of their education abroad. If we are not the right fit for your case, we will tell you in the first 15 minutes.', event: 'Free introductory call', note: 'The call does not commit you to a purchase.' },
});

homeContent.en.faq.items[3] = ['Do you write the motivation letter for the applicant?', 'We do not take over authorship. We help with ideas, structure, questions, comments and revisions so the applicant’s own voice is clear and persuasive.'];
homeContent.en.faq.items[6] = ['Can I pay in instalments?', 'Yes. Complete support at €1,400 can be paid in up to three instalments under a written agreement.'];
homeContent.en.faq.items[7] = ['I already have a university list. Can you review it?', 'Yes. A strategy consultation can resolve a focused question; Programme selection can test and improve the full list.'];
homeContent.en.faq.items[9] = ['I only need help with one application.', 'Application support is designed for one standard programme: it includes comments and revisions on the main documents, a requirements checklist and a final quality check.'];

Object.assign(homeContent.de, {
  hero: { ...homeContent.de.hero, primary: 'Kostenloses Erstgespräch buchen — 15 Min.' },
  decision: { title: 'Bevor wir einen Studiengang empfehlen', note: 'Wir prüfen fünf Punkte:', paid: 'Erst dann kommt ein Studiengang in die Empfehlung.', factors: [['Akademische Passung', 'Profil + Kriterien'], ['Gesamtkosten', 'Gebühren + Leben'], ['Finanzierung', 'Stipendien + Budget'], ['Fristen', 'machbarer Zeitplan'], ['Risiko', 'ausgewogene Auswahl']] },
  independent: { title: 'Zuerst die richtige Entscheidung. Dann die starke Bewerbung.', body: 'Wir wählen Studiengänge nach Ihrem Profil, Budget, Ihren Zielen und Fristen aus. Erst danach entwickeln wir eine Bewerbung, die Ihre Passung klar zeigt.', statement: 'Sie bezahlen uns — nicht die Hochschulen. Deshalb sagen wir Ihnen auch, wo Sie sich besser nicht bewerben sollten.' },
  method: { title: 'Sechs Schritte bis zur eingereichten Bewerbung.', body: 'Jeder Schritt endet mit einer Entscheidung oder einem fertigen Dokument.', steps: [['Profil', 'Ziele, Erfahrung, Noten, Budget und Rahmenbedingungen.'], ['Strategie', 'Prioritäten, Länder und ein realistisches Ambitionsniveau.'], ['Auswahl', 'Eine begründete Programmliste statt allgemeiner Suchergebnisse.'], ['Finanzierung', 'Kosten, Stipendien und Fristen auf einen Blick.'], ['Bewerbung', 'Kommentare und Überarbeitungen zu Lebenslauf und Motivationsschreiben.'], ['Qualitätskontrolle', 'Abschlussprüfung von Anforderungen, Konsistenz und Abgabereife.']] },
  sample: { ...homeContent.de.sample, title: 'Sehen Sie den Bericht, bevor Sie ihn bestellen.', body: 'Statt 40 offener Tabs — ein Dokument und eine klare Entscheidung.', documentTitle: 'Programmauswahl', rows: [['Programm A', 'Sehr gute Profilpassung', 'Mittleres Risiko'], ['Programm B', 'Passt zum Budget', 'Niedrigeres Risiko'], ['Programm C', 'Anspruchsvolles Stipendium', 'Höheres Risiko']] },
  offers: {
    title: 'Bezahlen Sie nur für die Unterstützung, die Sie brauchen.', body: 'Leistung, Umfang und Preis stehen fest, bevor die Arbeit beginnt.', cta: 'Kostenloses Erstgespräch buchen', bestFor: 'Geeignet für', includes: 'Sie erhalten', limits: 'Umfang',
    cards: [
      { name: 'Erstgespräch', label: 'Erster Schritt', price: 'Kostenlos', meta: '15 Min.', bestFor: 'die Klärung, ob wir helfen können', summary: 'Wir lernen Ziel, Frist und Unterstützungsbedarf kennen.', includes: ['Empfehlung für den sinnvollsten nächsten Schritt'], limits: ['keine Profil- oder Dokumentenanalyse'] },
      { name: 'Strategieberatung', label: 'Eine wichtige Entscheidung', price: '70 €', meta: '60 Min.', bestFor: 'eine zweite Meinung oder klare Richtung', summary: 'Fokussiertes Gespräch über Profil, Länder, Budget, Risiken und nächste Schritte.', includes: ['kurze Vorbereitung', '60 Minuten im Einzelgespräch', 'schriftliche Zusammenfassung der nächsten Schritte'], limits: ['eine Sitzung', 'kein detaillierter Programmbericht'] },
      { name: 'Programmauswahl', label: 'Begründete Liste', price: '350 €', meta: 'bis zu 8 Programme', bestFor: 'die Entscheidung, wo sich eine Bewerbung lohnt', summary: 'Wir vergleichen Programme, Kosten, Kriterien, Finanzierung und Fristen.', includes: ['bis zu 8 Programme', 'eine Überarbeitung', 'kurzes Abschlussgespräch'], limits: ['eine zusammenhängende Länder- und Zielgruppe', 'Bewerbungserstellung nicht enthalten'], featured: true },
      { name: 'Bewerbungsunterstützung', label: 'Ein Programm', price: '390 €', meta: '1 Bewerbung', bestFor: 'Bewerbende, die ihr Zielprogramm bereits kennen', summary: 'Wir helfen, Unterlagen klar, überzeugend und an den Anforderungen ausgerichtet zu gestalten.', includes: ['Kommentare und Überarbeitungen zu Lebenslauf und Motivationsschreiben', 'zwei Feedbackrunden je Kerndokument', 'Dokumentenliste und Abschlussprüfung'], limits: ['ein Standardprogramm', 'Bewerbende verfassen und übermitteln selbst'] },
      { name: 'Komplette Begleitung', label: 'Gesamter Bewerbungszyklus', price: '1.400 €', meta: 'bis zu 3 Bewerbungen', bestFor: 'einen europäischen Standardzyklus von Auswahl bis Einreichung', summary: 'Wir begleiten Strategie, Programmauswahl, Unterlagen, Fristen und Abschlussprüfung.', includes: ['Programmauswahl und bis zu 3 Standardbewerbungen', 'zwei Feedbackrunden je Kerndokument', 'bis zu 4 Monate Unterstützung'], limits: ['Sondertests, Portfolios und komplexe Verfahren mit mehreren Essays ausgenommen'] },
      { name: 'Stipendienbewerbung', label: 'Ein Stipendium', price: '590 €', meta: 'Standardumfang', bestFor: 'ein klar ausgewähltes Stipendium', summary: 'Wir entwickeln die Strategie und helfen, Motivation, Erfahrung und Ziele überzeugend darzustellen.', includes: ['Bewerbungsstrategie', 'bis zu drei Feedbackrunden auf selbst verfasste Essays', 'Hinweise für Empfehlungsschreiben und Abschlussprüfung'], limits: ['eine Standard-Stipendienbewerbung', 'besonders komplexe Verfahren werden vorab abgegrenzt'] },
    ],
  },
  pricing: { title: 'Der Preis steht vor Beginn fest.', body: 'Zusatzarbeit und Preis bestätigen wir, bevor wir beginnen.', addonsTitle: 'Feste Zusatzpreise', addons: [['Zusätzliche Standardbewerbung', 'mit aktivem Paket', '280 €'], ['Zusätzliche Stipendienbewerbung', 'Standardumfang', '300 €'], ['Interviewvorbereitung', 'Vorbereitung + Simulation', '140 €'], ['Zusätzliche Strategieberatung', '60 Minuten', '70 €']], instalmentsTitle: 'Ratenzahlung', instalments: ['Komplette Begleitung für 1.400 €: bis zu 3 Raten'], credit: 'Wenn Sie innerhalb von 14 Tagen nach der 70-€-Beratung ein geeignetes größeres Paket buchen, werden die 70 € angerechnet.' },
  trust: { ...homeContent.de.trust, body: 'Vertrauen entsteht durch klaren Umfang, nachvollziehbare Arbeit und eine schriftliche Leistungsbestätigung.', note: 'Vor Beginn erhalten Sie eine schriftliche Bestätigung von Umfang, Fristen, Preis und Zahlungsweise.' },
  booking: { ...homeContent.de.booking, body: 'In 15 Minuten klären wir Ziel, Fristen und die benötigte Unterstützung.', team: 'Sie sprechen mit einem Mitglied unseres Teams. Alle Teammitglieder haben einen Teil ihrer Ausbildung im Ausland absolviert. Wenn wir für Ihren Fall nicht die richtige Unterstützung sind, sagen wir es Ihnen in den ersten 15 Minuten.', event: 'Kostenloses Erstgespräch', note: 'Das Gespräch verpflichtet Sie zu keinem Kauf.' },
});

homeContent.de.faq.items[3] = ['Schreiben Sie das Motivationsschreiben für Bewerbende?', 'Wir übernehmen nicht die Autorenschaft. Wir helfen mit Ideen, Struktur, Fragen, Kommentaren und Überarbeitungen, damit die eigene Stimme klar und überzeugend bleibt.'];
homeContent.de.faq.items[6] = ['Kann ich in Raten zahlen?', 'Ja. Die komplette Begleitung für 1.400 € kann nach schriftlicher Vereinbarung in bis zu drei Raten bezahlt werden.'];
homeContent.de.faq.items[7] = ['Ich habe bereits eine Hochschulliste. Prüfen Sie sie?', 'Ja. Eine Strategieberatung kann eine gezielte Frage klären; die Programmauswahl prüft und verbessert die gesamte Liste.'];
homeContent.de.faq.items[9] = ['Ich brauche nur Hilfe bei einer Bewerbung.', 'Die Bewerbungsunterstützung ist für ein Standardprogramm gedacht: Kommentare und Überarbeitungen der Kerndokumente, eine Anforderungsliste und die Abschlussprüfung sind enthalten.'];

Object.assign(homeContent.fr, {
  hero: { ...homeContent.fr.hero, primary: 'Réserver un appel découverte gratuit — 15 min' },
  decision: { title: 'Avant de recommander un programme', note: 'Nous vérifions cinq points :', paid: 'Ce n’est qu’ensuite qu’un programme entre dans notre recommandation.', factors: [['Adéquation académique', 'profil + critères'], ['Coût total', 'frais + vie'], ['Financement', 'bourses + budget'], ['Échéances', 'calendrier réaliste'], ['Risque', 'sélection équilibrée']] },
  independent: { title: 'D’abord la bonne décision. Ensuite la candidature solide.', body: 'Nous sélectionnons les programmes selon votre profil, votre budget, vos objectifs et vos échéances. Nous construisons ensuite une candidature qui rend votre adéquation évidente.', statement: 'C’est vous qui nous payez, pas les universités. Nous pouvons donc aussi vous dire où il vaut mieux ne pas candidater.' },
  method: { title: 'Six étapes jusqu’au dépôt de candidature.', body: 'Chaque étape se termine par une décision ou un document finalisé.', steps: [['Profil', 'Objectifs, expérience, notes, budget et contraintes.'], ['Stratégie', 'Priorités, pays et niveau d’ambition réaliste.'], ['Sélection', 'Une liste argumentée plutôt que des résultats génériques.'], ['Financement', 'Coûts, bourses et échéances dans une seule vue.'], ['Candidature', 'Commentaires et révisions sur votre CV et votre lettre de motivation.'], ['Contrôle qualité', 'Vérification finale des exigences, de la cohérence et de la préparation.']] },
  sample: { ...homeContent.fr.sample, title: 'Voyez le rapport avant de le commander.', body: 'Au lieu de 40 onglets ouverts — un document et une décision claire.', documentTitle: 'Sélection de programmes', rows: [['Programme A', 'Très bonne adéquation au profil', 'Risque moyen'], ['Programme B', 'Respecte le budget', 'Risque plus faible'], ['Programme C', 'Bourse très sélective', 'Risque plus élevé']] },
  offers: {
    title: 'Payez uniquement pour l’accompagnement dont vous avez besoin.', body: 'Prestations, limites et prix sont connus avant le début du travail.', cta: 'Réserver un appel découverte gratuit', bestFor: 'Idéal pour', includes: 'Vous recevez', limits: 'Périmètre',
    cards: [
      { name: 'Appel découverte', label: 'Première étape', price: 'Gratuit', meta: '15 min', bestFor: 'vérifier si nous pouvons vous aider', summary: 'Nous découvrons votre objectif, votre échéance et votre besoin.', includes: ['une recommandation pour la prochaine étape utile'], limits: ['sans analyse du profil ni des documents'] },
      { name: 'Consultation stratégique', label: 'Une décision importante', price: '70 €', meta: '60 min', bestFor: 'un second avis ou une direction claire', summary: 'Échange ciblé sur le profil, les pays, le budget, les risques et les prochaines étapes.', includes: ['courte préparation', '60 minutes en individuel', 'synthèse écrite des prochaines étapes'], limits: ['une séance', 'sans rapport détaillé sur les programmes'] },
      { name: 'Sélection de programmes', label: 'Liste argumentée', price: '350 €', meta: 'jusqu’à 8 programmes', bestFor: 'décider où une candidature vaut réellement la peine', summary: 'Nous comparons programmes, coûts, critères, financements et échéances.', includes: ['jusqu’à 8 programmes', 'une révision', 'court appel de restitution'], limits: ['un ensemble cohérent de pays et d’objectifs', 'préparation des candidatures non incluse'], featured: true },
      { name: 'Accompagnement de candidature', label: 'Un programme', price: '390 €', meta: '1 candidature', bestFor: 'les candidats qui savent déjà où postuler', summary: 'Nous aidons à rendre vos documents clairs, convaincants et conformes aux exigences.', includes: ['commentaires et révisions du CV et de la lettre de motivation', 'deux cycles de retours par document principal', 'liste des pièces et contrôle final'], limits: ['un programme standard', 'le candidat rédige et dépose sa candidature'] },
      { name: 'Accompagnement complet', label: 'Cycle complet', price: '1 400 €', meta: 'jusqu’à 3 candidatures', bestFor: 'un cycle européen standard, de la sélection au dépôt', summary: 'Nous guidons la stratégie, la sélection, les documents, les échéances et le contrôle final.', includes: ['sélection et jusqu’à 3 candidatures standards', 'deux cycles de retours par document principal', 'jusqu’à 4 mois de suivi'], limits: ['tests spéciaux, portfolios et procédures complexes à essais multiples exclus'] },
      { name: 'Candidature de bourse', label: 'Une bourse', price: '590 €', meta: 'périmètre standard', bestFor: 'une bourse clairement sélectionnée', summary: 'Nous construisons la stratégie et aidons les essais du candidat à exprimer motivation, expérience et projet.', includes: ['stratégie de candidature', 'jusqu’à trois cycles de retours sur les essais rédigés par le candidat', 'conseils pour les recommandations et contrôle final'], limits: ['une candidature de bourse standard', 'les sélections très complexes sont cadrées avant le début'] },
    ],
  },
  pricing: { title: 'Le prix est clair avant de commencer.', body: 'Tout travail supplémentaire et son prix sont confirmés avant de commencer.', addonsTitle: 'Options à prix fixe', addons: [['Candidature standard supplémentaire', 'avec un forfait actif', '280 €'], ['Candidature de bourse supplémentaire', 'périmètre standard', '300 €'], ['Préparation à l’entretien', 'préparation + simulation', '140 €'], ['Consultation stratégique supplémentaire', '60 minutes', '70 €']], instalmentsTitle: 'Paiement échelonné', instalments: ['Accompagnement complet à 1 400 € : jusqu’à 3 paiements'], credit: 'Si vous achetez un forfait supérieur éligible dans les 14 jours suivant la consultation de 70 €, les 70 € sont déduits.' },
  trust: { ...homeContent.fr.trust, body: 'Nous construisons la confiance par un périmètre clair, un travail vérifiable et une confirmation écrite de ce que vous recevez.', note: 'Avant de commencer, vous recevez une confirmation écrite du périmètre, des délais, du prix et du mode de paiement.' },
  booking: { ...homeContent.fr.booking, body: 'En 15 minutes, nous clarifions votre objectif, vos échéances et l’accompagnement utile.', team: 'Vous parlerez avec un membre de notre équipe. Tous ont effectué une partie de leurs études à l’étranger. Si nous ne sommes pas la bonne aide pour votre situation, nous vous le dirons dans les 15 premières minutes.', event: 'Appel découverte gratuit', note: 'Cet appel ne vous engage à aucun achat.' },
});

homeContent.fr.faq.items[3] = ['Rédigez-vous la lettre de motivation à la place du candidat ?', 'Nous ne remplaçons pas l’auteur. Nous aidons avec les idées, la structure, les questions, les commentaires et les révisions afin de préserver une voix claire et convaincante.'];
homeContent.fr.faq.items[6] = ['Puis-je payer en plusieurs fois ?', 'Oui. L’accompagnement complet à 1 400 € peut être réglé en trois fois au maximum, selon un accord écrit.'];
homeContent.fr.faq.items[7] = ['J’ai déjà une liste d’universités. Pouvez-vous la revoir ?', 'Oui. Une consultation stratégique peut traiter une question ciblée ; la Sélection de programmes permet de tester et d’améliorer toute la liste.'];
homeContent.fr.faq.items[9] = ['Je veux seulement de l’aide pour une candidature.', 'L’Accompagnement de candidature est conçu pour un programme standard : commentaires et révisions des documents principaux, liste des exigences et contrôle final sont inclus.'];

homeContent.bs.value.points[1] = ['Rad koji možete vidjeti', 'Dobijate obrazložen plan, izbor programa ili pregled prijave — ne samo razgovor.'];
homeContent.sr.value.points[1] = ['Rad koji možete da vidite', 'Dobijate obrazložen plan, izbor programa ili pregled prijave — ne samo razgovor.'];
homeContent.hr.value.points[1] = ['Rad koji možete vidjeti', 'Dobivate obrazložen plan, izbor programa ili pregled prijave — ne samo razgovor.'];
homeContent.de.value.points[1] = ['Sichtbare Arbeit', 'Sie erhalten einen begründeten Plan, eine Programmauswahl oder Bewerbungsprüfung — nicht nur ein Gespräch.'];
