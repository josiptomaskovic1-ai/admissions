import type { Locale } from './content';

export const locales: Locale[] = ['sr', 'hr', 'bs', 'en', 'de', 'fr'];

export const localeMeta: Record<Locale, { html: string; hrefLang: string; short: string; native: string }> = {
  hr: { html: 'hr', hrefLang: 'hr-HR', short: 'HR', native: 'Hrvatski' },
  bs: { html: 'bs', hrefLang: 'bs-BA', short: 'BS', native: 'Bosanski / bošnjački' },
  sr: { html: 'sr-Latn', hrefLang: 'sr-Latn', short: 'SR/ME', native: 'Srpski / crnogorski' },
  en: { html: 'en', hrefLang: 'en', short: 'EN', native: 'English' },
  de: { html: 'de', hrefLang: 'de-DE', short: 'DE', native: 'Deutsch' },
  fr: { html: 'fr', hrefLang: 'fr-FR', short: 'FR', native: 'Français' },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

type UtilityCopy = {
  skip: string;
  navigation: string;
  language: string;
  currentLanguage: string;
  contact: string;
  privacy: string;
  serviceInfo: string;
  external: string;
  unavailable: string;
  pricingDetails: string;
  pricingScope: string;
  core: string;
  close: string;
  contactTitle: string;
  contactLead: string;
  contactDirect: string;
  contactPending: string;
  contactTiming: string;
  contactTimingBody: string;
  contactPrepare: string;
  contactPrepareItems: string[];
  privacyTitle: string;
  privacyLead: string;
  privacySections: Array<[string, string]>;
  serviceTitle: string;
  serviceLead: string;
  serviceSections: Array<[string, string]>;
  backHome: string;
  teamNote: string;
};

export const utility: Record<Locale, UtilityCopy> = {
  hr: {
    skip: 'Preskoči na sadržaj', navigation: 'Glavna navigacija', language: 'Jezik', currentLanguage: 'Odaberi jezik', contact: 'Kontakt', privacy: 'Privatnost i kolačići', serviceInfo: 'Kako radimo', external: 'Otvara vanjsku stranicu', unavailable: 'Kalendar još nije aktivan', pricingDetails: 'Detaljne cijene i dodaci', pricingScope: 'Prva četiri retka sažimaju osnovnu ponudu. Preostali redci su samostalne usluge ili dodaci. Konačan opseg potvrđujemo pisanim putem prije plaćanja.', core: 'Cjelovita podrška', close: 'Zatvori',
    contactTitle: 'Napravimo prvi korak zajedno.', contactLead: 'Rezervirajte besplatan razgovor od 15 minuta ili nam pošaljite e-poruku.', contactDirect: 'Izravni kontakt', contactPending: 'Kontaktirajte nas na adria.admissions@gmail.com.', contactTiming: 'Kada se javljamo', contactTimingBody: 'Na upite odgovaramo radnim danom.', contactPrepare: 'Za razgovor je dovoljno pripremiti', contactPrepareItems: ['željenu zemlju i razinu studija', 'okvirni budžet i važne rokove', 'glavna pitanja'],
    privacyTitle: 'Privatnost i kolačići', privacyLead: 'Stranica koristi samo nužne tehničke funkcije. Za kontakt koristite e-poštu ili vanjski Calendly kalendar.', privacySections: [['Vaši podaci na ovoj stranici', 'Jezik je dio URL-a. Hosting može obraditi standardne tehničke zapise i postaviti nužni sigurnosni kolačić radi zaštite i dostupnosti. Analitika i marketinški kolačići ostaju isključeni.'], ['Calendly', 'Rezervacijom termina prelazite na Calendly, gdje vrijede njihova pravila privatnosti.'], ['Kontakt', 'Za pitanja o privatnosti javite se na adria.admissions@gmail.com. Podaci voditelja obrade bit će dopunjeni nakon registracije poslovnog subjekta.']],
    serviceTitle: 'Kako radimo za vas', serviceLead: 'Vaš cilj, snažna autentična prijava i jasan dogovor od prvog koraka.', serviceSections: [['Vaš interes na prvom mjestu', 'Svaku preporuku temeljimo na vašem profilu, ciljevima, budžetu i rokovima kako bi svaki odabir imao jasan razlog.'], ['Najbolja verzija vaše prijave', 'Maksimalno se posvećujemo tome da kandidat izgradi što snažniju, osobnu i vjerodostojnu prijavu. Kandidat zadržava vlastiti glas, a konačne odluke donose sveučilišta i stipendijska tijela.'], ['Jasan dogovor od početka', 'Prije početka pisanim putem potvrđujemo opseg, cijenu, raspored, uvjete otkazivanja i pravo na odustanak. Aktualne zahtjeve provjeravamo prema službenim izvorima.']],
    backHome: 'Natrag na naslovnicu', teamNote: 'Razgovarat ćete s jednim savjetnikom. Cijeli tim radi prema istom Adria standardu: profil, trošak, rokovi, financiranje i realna procjena opcija.',
  },
  bs: {
    skip: 'Preskočite na sadržaj', navigation: 'Glavna navigacija', language: 'Jezik', currentLanguage: 'Izaberite jezik', contact: 'Kontakt', privacy: 'Privatnost i kolačići', serviceInfo: 'Kako radimo', external: 'Otvara vanjsku stranicu', unavailable: 'Kalendar još nije aktivan', pricingDetails: 'Detaljne cijene i dodaci', pricingScope: 'Prva četiri reda sažimaju osnovnu ponudu. Preostali redovi su samostalne usluge ili dodaci. Konačan obim potvrđujemo pisanim putem prije plaćanja.', core: 'Cjelovita podrška', close: 'Zatvori',
    contactTitle: 'Napravimo prvi korak zajedno.', contactLead: 'Rezervišite besplatan razgovor od 15 minuta ili nam pošaljite e-poruku.', contactDirect: 'Direktan kontakt', contactPending: 'Kontaktirajte nas na adria.admissions@gmail.com.', contactTiming: 'Kada odgovaramo', contactTimingBody: 'Na upite odgovaramo radnim danima.', contactPrepare: 'Za razgovor je dovoljno pripremiti', contactPrepareItems: ['željenu zemlju i nivo studija', 'okvirni budžet i važne rokove', 'glavna pitanja'],
    privacyTitle: 'Privatnost i kolačići', privacyLead: 'Stranica koristi samo neophodne tehničke funkcije. Za kontakt koristite e-poštu ili vanjski Calendly kalendar.', privacySections: [['Vaši podaci na ovoj stranici', 'Jezik je dio URL-a. Hosting može obrađivati standardne tehničke zapise i postaviti neophodan sigurnosni kolačić radi zaštite i dostupnosti. Analitika i marketinški kolačići ostaju isključeni.'], ['Calendly', 'Rezervacijom termina prelazite na Calendly, gdje važe njihova pravila privatnosti.'], ['Kontakt', 'Za pitanja o privatnosti javite se na adria.admissions@gmail.com. Podaci voditelja obrade bit će dopunjeni nakon registracije poslovnog subjekta.']],
    serviceTitle: 'Kako radimo za vas', serviceLead: 'Vaš cilj, snažna autentična prijava i jasan dogovor od prvog koraka.', serviceSections: [['Vaš interes na prvom mjestu', 'Svaku preporuku zasnivamo na vašem profilu, ciljevima, budžetu i rokovima kako bi svaki izbor imao jasan razlog.'], ['Najjača verzija vaše prijave', 'Maksimalno se posvećujemo tome da kandidat izgradi što snažniju, ličnu i vjerodostojnu prijavu. Kandidat zadržava svoj glas, a konačne odluke donose univerziteti i stipendijska tijela.'], ['Jasan dogovor od početka', 'Prije početka pisanim putem potvrđujemo obim, cijenu, raspored, uslove otkazivanja i pravo na odustanak. Aktuelne zahtjeve provjeravamo prema službenim izvorima.']],
    backHome: 'Nazad na naslovnu', teamNote: 'Razgovarat ćete s jednim savjetnikom. Cijeli tim radi prema istom Adria standardu: profil, trošak, rokovi, finansiranje i realna procjena opcija.',
  },
  sr: {
    skip: 'Preskočite na sadržaj', navigation: 'Glavna navigacija', language: 'Jezik', currentLanguage: 'Izaberite jezik', contact: 'Kontakt', privacy: 'Privatnost i kolačići', serviceInfo: 'Kako radimo', external: 'Otvara spoljnu stranicu', unavailable: 'Kalendar još nije aktivan', pricingDetails: 'Detaljne cene i dodaci', pricingScope: 'Prva četiri reda sažimaju osnovnu ponudu. Preostali redovi su samostalne usluge ili dodaci. Konačan obim potvrđujemo pisanim putem pre plaćanja.', core: 'Celovita podrška', close: 'Zatvori',
    contactTitle: 'Napravimo prvi korak zajedno.', contactLead: 'Rezervišite besplatan razgovor od 15 minuta ili nam pošaljite e-poštu.', contactDirect: 'Direktan kontakt', contactPending: 'Kontaktirajte nas na adria.admissions@gmail.com.', contactTiming: 'Kada odgovaramo', contactTimingBody: 'Na upite odgovaramo radnim danima.', contactPrepare: 'Za razgovor je dovoljno pripremiti', contactPrepareItems: ['željenu zemlju i nivo studija', 'okvirni budžet i važne rokove', 'glavna pitanja'],
    privacyTitle: 'Privatnost i kolačići', privacyLead: 'Stranica koristi samo neophodne tehničke funkcije. Za kontakt koristite e-poštu ili spoljni Calendly kalendar.', privacySections: [['Vaši podaci na ovoj stranici', 'Jezik je deo URL-a. Hosting može obrađivati standardne tehničke zapise i postaviti neophodan bezbednosni kolačić radi zaštite i dostupnosti. Analitika i marketinški kolačići ostaju isključeni.'], ['Calendly', 'Rezervacijom termina prelazite na Calendly, gde važe njihova pravila privatnosti.'], ['Kontakt', 'Za pitanja o privatnosti javite se na adria.admissions@gmail.com. Podaci rukovaoca biće dopunjeni nakon registracije poslovnog subjekta.']],
    serviceTitle: 'Kako radimo za vas', serviceLead: 'Vaš cilj, snažna autentična prijava i jasan dogovor od prvog koraka.', serviceSections: [['Vaš interes na prvom mestu', 'Svaku preporuku zasnivamo na vašem profilu, ciljevima, budžetu i rokovima kako bi svaki izbor imao jasan razlog.'], ['Najjača verzija vaše prijave', 'Maksimalno se posvećujemo tome da kandidat izgradi što snažniju, ličnu i verodostojnu prijavu. Kandidat zadržava svoj glas, a konačne odluke donose univerziteti i stipendijska tela.'], ['Jasan dogovor od početka', 'Pre početka pisanim putem potvrđujemo obim, cenu, raspored, uslove otkazivanja i pravo na odustanak. Aktuelne zahteve proveravamo prema zvaničnim izvorima.']],
    backHome: 'Nazad na početnu', teamNote: 'Razgovaraćete s jednim savetnikom. Ceo tim radi prema istom Adria standardu: profil, trošak, rokovi, finansiranje i realna procena opcija.',
  },
  en: {
    skip: 'Skip to content', navigation: 'Main navigation', language: 'Language', currentLanguage: 'Choose language', contact: 'Contact', privacy: 'Privacy & cookies', serviceInfo: 'How we work', external: 'Opens an external site', unavailable: 'Calendar not active yet', pricingDetails: 'Detailed pricing and add-ons', pricingScope: 'The first four rows summarize the core offer. The remaining rows are standalone services or add-ons. We confirm the final scope in writing before payment.', core: 'Complete support', close: 'Close',
    contactTitle: 'Let’s take the first step together.', contactLead: 'Book a free 15-minute call or send us an email.', contactDirect: 'Direct contact', contactPending: 'Contact us at adria.admissions@gmail.com.', contactTiming: 'When we reply', contactTimingBody: 'We answer enquiries on business days.', contactPrepare: 'For the call, simply prepare', contactPrepareItems: ['target country and study level', 'approximate budget and key deadlines', 'your main questions'],
    privacyTitle: 'Privacy & cookies', privacyLead: 'This site uses only essential technical functions. Contact us by email or through the external Calendly calendar.', privacySections: [['Your data on this site', 'The language is part of the URL. Hosting may process standard technical logs and set a strictly necessary security cookie for protection and availability. Analytics and marketing cookies remain disabled.'], ['Calendly', 'When you book, you move to Calendly, where its privacy rules apply.'], ['Contact', 'For privacy questions, contact adria.admissions@gmail.com. Controller details will be completed after the business entity is registered.']],
    serviceTitle: 'How we work for you', serviceLead: 'Your goal, a strong authentic application and a clear agreement from the first step.', serviceSections: [['Your interests come first', 'Every recommendation is grounded in your profile, goals, budget and deadlines so that each choice has a clear reason.'], ['The strongest version of your application', 'We put our full effort into helping each applicant build the strongest possible personal and credible application. The applicant keeps their own voice, while universities and scholarship bodies make the final decisions.'], ['A clear agreement from the start', 'Before work begins, we confirm the scope, price, schedule, cancellation terms and withdrawal rights in writing. We check current requirements against official sources.']],
    backHome: 'Back to home', teamNote: 'You will speak with one adviser. The entire team follows the same Adria standard: profile, cost, deadlines, funding and a realistic assessment of options.',
  },
  de: {
    skip: 'Zum Inhalt springen', navigation: 'Hauptnavigation', language: 'Sprache', currentLanguage: 'Sprache wählen', contact: 'Kontakt', privacy: 'Datenschutz & Cookies', serviceInfo: 'So arbeiten wir', external: 'Öffnet eine externe Website', unavailable: 'Kalender noch nicht aktiv', pricingDetails: 'Preisübersicht und Zusatzmodule', pricingScope: 'Die ersten vier Zeilen fassen das Kernangebot zusammen. Die übrigen Zeilen sind Einzelleistungen oder Zusatzmodule. Den endgültigen Umfang bestätigen wir vor der Zahlung schriftlich.', core: 'Komplette Begleitung', close: 'Schließen',
    contactTitle: 'Machen wir gemeinsam den ersten Schritt.', contactLead: 'Buchen Sie ein kostenloses 15-minütiges Gespräch oder schreiben Sie uns eine E-Mail.', contactDirect: 'Direkter Kontakt', contactPending: 'Kontaktieren Sie uns unter adria.admissions@gmail.com.', contactTiming: 'Wann wir antworten', contactTimingBody: 'Wir beantworten Anfragen an Werktagen.', contactPrepare: 'Für das Gespräch genügen', contactPrepareItems: ['Zielland und Studienniveau', 'ungefähres Budget und wichtige Fristen', 'Ihre wichtigsten Fragen'],
    privacyTitle: 'Datenschutz & Cookies', privacyLead: 'Diese Website nutzt nur technisch notwendige Funktionen. Kontaktieren Sie uns per E-Mail oder über den externen Calendly-Kalender.', privacySections: [['Ihre Daten auf dieser Website', 'Die Sprache ist Teil der URL. Der Hosting-Anbieter kann technische Standardprotokolle verarbeiten und ein notwendiges Sicherheits-Cookie für Schutz und Verfügbarkeit setzen. Analyse- und Marketing-Cookies bleiben deaktiviert.'], ['Calendly', 'Bei einer Buchung wechseln Sie zu Calendly; dort gelten dessen Datenschutzregeln.'], ['Kontakt', 'Bei Datenschutzfragen schreiben Sie an adria.admissions@gmail.com. Die Angaben zum Verantwortlichen werden nach der Registrierung des Unternehmens ergänzt.']],
    serviceTitle: 'So arbeiten wir für Sie', serviceLead: 'Ihr Ziel, eine starke authentische Bewerbung und eine klare Vereinbarung vom ersten Schritt an.', serviceSections: [['Ihre Ziele stehen an erster Stelle', 'Jede Empfehlung richtet sich nach Ihrem Profil, Ihren Zielen, Ihrem Budget und Ihren Fristen, damit jede Entscheidung gut begründet ist.'], ['Die stärkste Version Ihrer Bewerbung', 'Wir setzen uns mit vollem Einsatz dafür ein, gemeinsam mit Ihnen eine möglichst starke, persönliche und glaubwürdige Bewerbung zu entwickeln. Ihre eigene Stimme bleibt erhalten; die endgültigen Entscheidungen treffen Hochschulen und Stipendiengeber.'], ['Klare Vereinbarung von Anfang an', 'Vor Beginn bestätigen wir Umfang, Preis, Zeitplan, Stornobedingungen und Widerrufsrechte schriftlich. Aktuelle Anforderungen prüfen wir anhand offizieller Quellen.']],
    backHome: 'Zurück zur Startseite', teamNote: 'Sie sprechen mit einer Beratungsperson. Das ganze Team arbeitet nach demselben Adria-Standard: Profil, Kosten, Fristen, Finanzierung und eine realistische Bewertung der Optionen.',
  },
  fr: {
    skip: 'Aller au contenu', navigation: 'Navigation principale', language: 'Langue', currentLanguage: 'Choisir la langue', contact: 'Contact', privacy: 'Confidentialité et cookies', serviceInfo: 'Notre méthode', external: 'Ouvre un site externe', unavailable: 'Calendrier pas encore actif', pricingDetails: 'Tarifs détaillés et options', pricingScope: 'Les quatre premières lignes résument l’offre principale. Les autres correspondent à des services individuels ou à des options. Le périmètre final est confirmé par écrit avant paiement.', core: 'Accompagnement complet', close: 'Fermer',
    contactTitle: 'Faisons ensemble le premier pas.', contactLead: 'Réservez un appel gratuit de 15 minutes ou écrivez-nous par e-mail.', contactDirect: 'Contact direct', contactPending: 'Contactez-nous à adria.admissions@gmail.com.', contactTiming: 'Quand nous répondons', contactTimingBody: 'Nous répondons les jours ouvrés.', contactPrepare: 'Pour l’appel, il suffit de préparer', contactPrepareItems: ['le pays visé et le niveau d’études', 'le budget approximatif et les échéances clés', 'vos principales questions'],
    privacyTitle: 'Confidentialité et cookies', privacyLead: 'Ce site utilise uniquement les fonctions techniques essentielles. Contactez-nous par e-mail ou via le calendrier Calendly externe.', privacySections: [['Vos données sur ce site', 'La langue fait partie de l’URL. L’hébergeur peut traiter des journaux techniques standard et déposer un cookie de sécurité nécessaire à la protection et à la disponibilité du site. La mesure d’audience et les cookies marketing restent désactivés.'], ['Calendly', 'En réservant, vous passez sur Calendly, où ses règles de confidentialité s’appliquent.'], ['Contact', 'Pour toute question de confidentialité, écrivez à adria.admissions@gmail.com. Les informations sur le responsable du traitement seront complétées après l’immatriculation de l’entreprise.']],
    serviceTitle: 'Comment nous travaillons pour vous', serviceLead: 'Votre objectif, une candidature authentique et solide, et un accord clair dès la première étape.', serviceSections: [['Vos intérêts d’abord', 'Chaque recommandation s’appuie sur votre profil, vos objectifs, votre budget et vos échéances afin que chaque choix soit clairement motivé.'], ['La meilleure version de votre candidature', 'Nous nous engageons pleinement à aider chaque candidat à construire la candidature la plus solide, personnelle et crédible possible. Le candidat conserve sa propre voix, tandis que les universités et organismes de bourses prennent les décisions finales.'], ['Un accord clair dès le départ', 'Avant de commencer, nous confirmons par écrit le périmètre, le prix, le calendrier, les conditions d’annulation et le droit de rétractation. Nous vérifions les exigences actuelles auprès des sources officielles.']],
    backHome: 'Retour à l’accueil', teamNote: 'Vous échangerez avec un conseiller. Toute l’équipe suit le même standard Adria : profil, coût, échéances, financement et évaluation réaliste des options.',
  },
};
