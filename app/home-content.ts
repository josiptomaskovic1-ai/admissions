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
    factors: Array<[string, string]>;
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
