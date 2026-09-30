# Adria Admissions — audit i spremnost za lansiranje

Datum audita: 30. rujna 2026.
Status: tehnički spremna javna, neindeksirana preview verzija; nije pravno spremna za sklapanje ugovora ili naplatu.

## Sažetak

Stranica je kompaktna, server-renderirana i dostupna na šest stabilnih jezičnih ruta. Nova naslovnica u prvom ekranu objašnjava europske prijave, ciljnu skupinu, neovisni model, plaćenu vrijednost i sljedeći korak. Petofaktorska decision kartica odmah pokazuje da se svaki program procjenjuje kroz akademsku usklađenost, ukupan trošak, financiranje, rokove i rizik.

Povjerenje se ne gradi identitetima članova tima. Stranica umjesto toga pokazuje:

- da Adria nije prodajni kanal sveučilišta;
- kriterije preporuke;
- jasan proces;
- potpunu cjenovnu ljestvicu, broj prijava, revizije i trajanje podrške;
- ilustrativni sample izvještaja bez podataka stvarnog kandidata;
- etičku granicu da kandidat ostaje autor prijave.

Nema izmišljenih rezultata, partnerstava, testimonijala ili jamstava.

## Vizualni i UX audit

Provjereno na desktopu i mobilnom viewportu od 390 px:

- nema horizontalnog preljeva (`scrollWidth` odgovara viewportu);
- osnovni tekst je 16 px, a naslov je responzivan;
- primarni CTA je vidljiv u prvom mobilnom ekranu;
- njemački naslov i duge lokalizacije ne izlaze iz okvira;
- petofaktorska decision kartica i dossier sample ostaju dva naglašena vizualna motiva;
- neovisnost je vidljiva u prvom ekranu;
- ukrasni section labeli i brojevi bez funkcije uklonjeni su s naslovnice;
- procesni brojevi ostaju samo gdje objašnjavaju stvarni slijed;
- osam paketa koristi kompaktne nativne disclosure redove pa su naziv, publika, cijena i limit vidljivi bez dugog niza kartica;
- booking, paketi i FAQ ostaju nativne kontrole, bez dodatnog klijentskog stanja.

Stranica je namjerno gušća od tipične lifestyle landing stranice. Ne koristi puni viewport za dekoraciju, generičke fotografije kampusa, višestruke CTA bannere ili dugačke prazne razmake.

## Accessibility audit

Potvrđeno na šest mobilnih lokalizacija i hrvatskom desktop prikazu:

- jedan H1 na svakoj ruti;
- header, main i footer landmarki;
- skip link;
- semantički linkovi, tablica, definicijske liste i native `details/summary` kontrole;
- vidljiv keyboard focus;
- globalno stilizirani scrollbar s Firefox i WebKit putanjom;
- reduced-motion i forced-colors pravila;
- minimalni touch targeti za glavne kontrole;
- nema `alert`, `confirm`, `prompt`, lažnih `href="#"` akcija ili klikabilnih nesemantičkih elemenata.

Ručna provjera uključuje desktop, mobilni viewport od 390 px, otvaranje paketa te mjerenje horizontalnog preljeva. Automatizirani projektni UI audit treba ponoviti nakon svake veće promjene dizajna.

## SEO audit

Implementirano:

- server-renderiran sadržaj;
- lokalizirani canonical URL-ovi;
- recipročni `hreflang` linkovi i `x-default`;
- Open Graph i Twitter metapodaci;
- brand-only naslov taba „Adria Admissions”;
- `ProfessionalService` structured data;
- `robots.txt` i `sitemap.xml`;
- 24 lokalizirane stranice, šest Calendly preusmjerenja, cijene, metadata, sidra, robots i sitemap provjereni automatiziranim auditom.

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
- browser tab na svim rutama ostaje „Adria Admissions”;
- sve glavne sadržajne rute ostaju statički generirane;
- stranica nema analitiku, chat widget, iframe kalendar, bazu podataka ili web obrazac;
- aplikacijski kod ne dodaje klijentsko stanje na sadržajne stranice.

Build prikazuje samo upozorenje o deprecated Node `punycode` ovisnosti unutar alata i Vinext preporuku za buduću migraciju na `vite build`; build završava uspješno. Produkcijski `npm audit --omit=dev` nalazi 0 poznatih ranjivosti. Razvojni build alat zadržava četiri umjerena nalaza u `fflate` lancu kroz Vinext/Satori; automatsko uklanjanje traži prisilni breaking downgrade Vinexta pa nije primijenjeno. To nije kod koji se isporučuje posjetiteljima, ali treba ga ponovno provjeriti pri sljedećem ažuriranju Vinexta.

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
| Strategy Consultation | 70 € | 60 minuta; priznaje se za kvalificirani veći paket u 14 dana |
| Admissions Blueprint | 220 € | pisana strategija i akcijski plan |
| University Direction | 350 € | do 8 programa, jedna revizija i kratki review poziv |
| Guided Application | 800 € | do dvije standardne prijave i osam tjedana |
| Full Partnership | 1.400 € | do tri standardne europske prijave i četiri mjeseca |
| Full Partnership Plus | 1.700 € | do četiri prijave, dodatna revizija i šest mjeseci |
| Scholarship / Selective Intensive | 1.900–2.500 € | opseg raste s esejima, stipendijama, intervjuima i posebnim komponentama |

Regionalni benchmark pokazuje besplatne i vrlo jeftine partner-agency modele, dok međunarodni specijalisti naplaćuju znatno više. Ova ljestvica zato ne pokušava biti najjeftinija: 70 € smanjuje rizik prvog plaćenog koraka, 220–350 € prodaju samostalne dokumente, a 800–1.700 € imaju precizan broj prijava, revizija i mjeseci podrške. Detaljna preporuka nalazi se u `docs/GROWTH_AND_CONVERSION_STRATEGY.md`.

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
