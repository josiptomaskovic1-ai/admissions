# Adria Admissions — audit i spremnost za lansiranje

Datum audita: 29. rujna 2026.
Status: tehnički spremna javna, neindeksirana preview verzija; nije pravno spremna za sklapanje ugovora ili naplatu.

## Sažetak

Stranica je kompaktna, server-renderirana i dostupna na šest stabilnih jezičnih ruta. Najnovija izmjena poboljšava prvo razumijevanje ponude: hero sada govori „Studirajte vani. Birajte neovisno.”, a odmah nakon njega slijede neovisnost i Adria standard odlučivanja.

Povjerenje se ne gradi identitetima članova tima. Stranica umjesto toga pokazuje:

- da Adria nije prodajni kanal sveučilišta;
- kriterije preporuke;
- jasan proces;
- transparentan raspon cijena i opseg;
- etičku granicu da kandidat ostaje autor prijave.

Nema izmišljenih rezultata, partnerstava, testimonijala ili jamstava.

## Vizualni i UX audit

Provjereno na desktopu i mobilnom viewportu od 390 px:

- nema horizontalnog preljeva (`scrollWidth` odgovara viewportu);
- osnovni tekst je 16 px, a naslov je responzivan;
- primarni CTA je vidljiv u prvom mobilnom ekranu;
- njemački naslov i duge lokalizacije ne izlaze iz okvira;
- ruta Profil → Smjer → Prijava ostaje jedini naglašeni vizualni motiv;
- neovisnost je vidljiva odmah nakon prvog ekrana;
- ukrasni section labeli i brojevi bez funkcije uklonjeni su s naslovnice;
- procesni brojevi ostaju samo gdje objašnjavaju stvarni slijed;
- booking i FAQ ostaju nativni, bez nepotrebnog klijentskog JavaScripta.

Stranica je namjerno gušća od tipične lifestyle landing stranice. Ne koristi puni viewport za dekoraciju, generičke fotografije kampusa, višestruke CTA bannere ili dugačke prazne razmake.

## Accessibility audit

Potvrđeno:

- jedan H1 na svakoj ruti;
- header, main i footer landmarki;
- skip link;
- semantički linkovi, tablica, definicijske liste i native `details/summary` kontrole;
- vidljiv keyboard focus;
- globalno stilizirani scrollbar s Firefox i WebKit putanjom;
- reduced-motion i forced-colors pravila;
- minimalni touch targeti za glavne kontrole;
- nema `alert`, `confirm`, `prompt`, lažnih `href="#"` akcija ili klikabilnih nesemantičkih elemenata.

Projektni strict UI audit: 0 nalaza, 0 upozorenja.

## SEO audit

Implementirano:

- server-renderiran sadržaj;
- lokalizirani canonical URL-ovi;
- recipročni `hreflang` linkovi i `x-default`;
- Open Graph i Twitter metapodaci;
- brand-only naslov taba „Adria Admissions”;
- `ProfessionalService` structured data;
- `robots.txt` i `sitemap.xml`;
- 24 lokalizirane stranice provjerene automatiziranim auditom.

Indeksiranje je namjerno isključeno:

- meta robots: `noindex, nofollow, nocache`;
- `robots.txt` blokira crawling;
- sitemap je prazan.

To je ispravno dok pravni podaci i komercijalni uvjeti nisu završeni. Uključivanje indeksiranja prije toga stvorilo bi javni trag nepotpune pravne verzije.

## Performanse i tehnička kvaliteta

Aktualna produkcijska provjera:

- ESLint: prolaz;
- strict TypeScript: prolaz;
- produkcijski Vinext/Vite build: prolaz;
- 24 lokalizirane rute, 6 Calendly preusmjerenja, metapodaci i sidra: prolaz;
- strict design/project audit: 0 nalaza;
- sve glavne sadržajne rute ostaju statički generirane;
- stranica nema analitiku, chat widget, iframe kalendar, bazu podataka ili web obrazac;
- aplikacijski kod ne dodaje klijentsko stanje na sadržajne stranice.

Build prikazuje samo upozorenje o deprecated Node `punycode` ovisnosti unutar alata i Vinext preporuku za buduću migraciju na `vite build`; build završava uspješno.

## Sigurnosni audit

Površina napada je mala jer stranica:

- ne prima lozinke;
- ne pohranjuje kontaktne upite;
- nema bazu podataka ni korisničke račune;
- nema upload dokumenata;
- ne izvršava marketinške skripte;
- Calendly otvara kao vanjsku stranicu, bez embeda;
- ne izlaže identitete savjetnika.

Nijedna javna stranica ne može biti „nehakabilna”. Najvažnije vanjske kontrole ostaju dvofaktorska autentifikacija i jedinstvene lozinke za GitHub, hosting, Gmail i Calendly, te pravovremena ažuriranja ovisnosti.

## Kolačići, privatnost i kontakt

Trenutačno:

- nema analitičkih ili oglašivačkih kolačića;
- nema local/session storagea;
- nema first-party obrasca;
- upiti idu izravno na `adria.admissions@gmail.com`;
- booking ide na vanjski Calendly profil;
- privacy stranica transparentno opisuje hosting logove i vanjski kalendar.

Cookie banner se sada ne dodaje jer nema neobaveznih kolačića za koje bi se tražila privola. Potrebna je nova procjena prije dodavanja analitike, Meta/Google piksela, newslettera, chat alata, videa ili embedded kalendara.

## Uvodni razgovor i cijene

Besplatni uvodni razgovor ostaje 15 minuta. To je fit i routing razgovor, ne detaljna procjena profila.

Aktualni javni proizvodi:

| Usluga | Cijena | Javni opseg |
|---|---:|---|
| Uvodni fit razgovor | 0 € | 15 minuta |
| Strategy Consultation | 100 € | 60 minuta |
| Admissions Blueprint | 240 € | profilni inputi, razgovor i pisani plan |
| University Direction | od 490 € | do 8 programa, rokovi/troškovi i jedna revizija |
| Full Application Partnership | 1.400–2.500 € | do četiri europska programa i unaprijed definiran period podrške |

Benchmark potvrđuje da su to validacijske, regionalno pristupačne cijene, ali donji prag Full Partnershipa može biti ekonomski slab bez strogog ograničenja sati i revizija. Detaljna preporuka nalazi se u `docs/GROWTH_AND_CONVERSION_STRATEGY.md`.

## Pravni audit — blokatori prije naplate

Ovo je product-readiness pregled, ne pravni savjet. Prije ugovora ili naplate potrebno je dodati i provjeriti:

1. puni naziv, pravni oblik i adresu poslovnog subjekta;
2. registry/VAT/porezne identifikatore kada su primjenjivi;
3. identitet i kontakt voditelja obrade;
4. uvjete pružanja usluge;
5. točan opseg, cijenu, rok, broj revizija i komunikacijska pravila;
6. otkazivanje, povrat i zakonsko pravo na odustanak;
7. politiku za dokumente kandidata, e-poštu, Calendly i budući CRM;
8. protokol za obradu podataka maloljetnih kandidata;
9. izjavu da Adria ne jamči upis ili stipendiju i da konačne odluke donose institucije.

Primarni izvori za konačnu provjeru: [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj), [EU Consumer Rights Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011L0083), [Calendly privacy notice](https://calendly.com/legal/privacy-notice).

## Odluka o lansiranju

Stranicu je sigurno koristiti kao javnu neindeksiranu preview verziju i za testiranje potražnje bez naplate. Ne treba uključiti indeksiranje, online naplatu, lead-capture obrazac ili advertising tracking dok se ne riješe navedeni pravni i operativni podaci.
