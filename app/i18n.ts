import type { Locale } from './content';

export const locales: Locale[] = ['sr', 'hr', 'bs', 'en', 'de', 'fr'];

export const localeMeta: Record<Locale, { html: string; hrefLang: string; openGraph: string; short: string; native: string }> = {
  hr: { html: 'hr', hrefLang: 'hr', openGraph: 'hr_HR', short: 'HR', native: 'Hrvatski' },
  bs: { html: 'bs', hrefLang: 'bs', openGraph: 'bs_BA', short: 'BS', native: 'Bosanski / bošnjački' },
  sr: { html: 'sr-Latn', hrefLang: 'sr-Latn', openGraph: 'sr_RS', short: 'SR/ME', native: 'Srpski / crnogorski' },
  en: { html: 'en', hrefLang: 'en', openGraph: 'en_GB', short: 'EN', native: 'English' },
  de: { html: 'de', hrefLang: 'de', openGraph: 'de_DE', short: 'DE', native: 'Deutsch' },
  fr: { html: 'fr', hrefLang: 'fr', openGraph: 'fr_FR', short: 'FR', native: 'Français' },
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
  intakeButton: string;
  intakeNote: string;
  intakeRequired: string;
  intakeAfter: string;
  intakeSteps: [string, string, string];
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
    contactTitle: 'Napravimo prvi korak zajedno.', contactLead: 'Najprije ispunite kratki upitnik, a zatim odaberite termin za besplatan razgovor od 15 minuta.', contactDirect: 'Izravni kontakt', contactPending: 'Kontaktirajte nas na adria.admissions@gmail.com.', contactTiming: 'Kada se javljamo', contactTimingBody: 'Na upite odgovaramo radnim danom.', contactPrepare: 'Za razgovor je dovoljno pripremiti', contactPrepareItems: ['željenu zemlju i razinu studija', 'okvirni proračun i važne rokove', 'glavna pitanja'],
    intakeButton: 'Ispunite upitnik i nastavite na termin', intakeNote: 'Upitnik traje oko 3 minute. Životopis i drugi dokumenti nisu obvezni.', intakeRequired: 'Obvezno prije rezervacije', intakeAfter: 'Nakon slanja upitnika odmah ćete dobiti poveznicu za odabir termina.', intakeSteps: ['Ispunite kratki upitnik', 'Odaberite termin', 'Razgovarajte 15 minuta'],
    privacyTitle: 'Privatnost i kolačići', privacyLead: 'Stranica koristi samo nužne tehničke funkcije. Za kontakt koristite e-poštu, vanjski Calendly kalendar ili naš obrazac u Google Forms.', privacySections: [['Vaši podaci na ovoj stranici', 'Jezik je dio URL-a. Hosting i Cloudflare mogu obraditi standardne tehničke zapise te postaviti nužne sigurnosne kolačiće (cf_clearance, __cf_bm i __Host-appgarden-visitor) radi zaštite, sprječavanja zloupotrebe i dostupnosti. Ne koristimo analitičke ni marketinške kolačiće.'], ['Calendly', 'Rezervacijom termina prelazite na Calendly, gdje vrijede njihova pravila privatnosti.'], ['Početni upitnik', 'Kratki upitnik otvara se u Google Forms. Ako odlučite učitati neobvezne dokumente, Google zahtijeva prijavu; odgovori i datoteke obrađuju se putem Googlea i pohranjuju na Google Driveu računa Adria Admissions. Koristimo ih samo za procjenu upita i pripremu razgovora. Ne šaljite osobnu iskaznicu, putovnicu ni druge nepotrebne osjetljive podatke. Primjenjuju se Googleova pravila privatnosti.'], ['Kontakt', 'Za pitanja o privatnosti javite se na adria.admissions@gmail.com. Podaci voditelja obrade bit će dopunjeni nakon registracije poslovnog subjekta.']],
    serviceTitle: 'Kako radimo za vas', serviceLead: 'Vaš cilj, snažna autentična prijava i jasan dogovor od prvog koraka.', serviceSections: [['Vaš interes na prvom mjestu', 'Svaku preporuku temeljimo na vašem profilu, ciljevima, budžetu i rokovima kako bi svaki odabir imao jasan razlog.'], ['Najbolja verzija vaše prijave', 'Maksimalno se posvećujemo tome da kandidat izgradi što snažniju, osobnu i vjerodostojnu prijavu. Kandidat zadržava vlastiti glas, a konačne odluke donose sveučilišta i stipendijska tijela.'], ['Jasan dogovor od početka', 'Prije početka pisanim putem potvrđujemo opseg, cijenu, raspored, uvjete otkazivanja i pravo na odustanak. Aktualne zahtjeve provjeravamo prema službenim izvorima.']],
    backHome: 'Natrag na naslovnicu', teamNote: 'Razgovarat ćete s jednim savjetnikom. Cijeli tim radi prema istom Adria standardu: profil, trošak, rokovi, financiranje i realna procjena opcija.',
  },
  bs: {
    skip: 'Preskočite na sadržaj', navigation: 'Glavna navigacija', language: 'Jezik', currentLanguage: 'Izaberite jezik', contact: 'Kontakt', privacy: 'Privatnost i kolačići', serviceInfo: 'Kako radimo', external: 'Otvara vanjsku stranicu', unavailable: 'Kalendar još nije aktivan', pricingDetails: 'Detaljne cijene i dodaci', pricingScope: 'Prva četiri reda sažimaju osnovnu ponudu. Preostali redovi su samostalne usluge ili dodaci. Konačan obim potvrđujemo pisanim putem prije plaćanja.', core: 'Cjelovita podrška', close: 'Zatvori',
    contactTitle: 'Napravimo prvi korak zajedno.', contactLead: 'Prvo ispunite kratki upitnik, a zatim odaberite termin za besplatan razgovor od 15 minuta.', contactDirect: 'Direktan kontakt', contactPending: 'Kontaktirajte nas na adria.admissions@gmail.com.', contactTiming: 'Kada odgovaramo', contactTimingBody: 'Na upite odgovaramo radnim danima.', contactPrepare: 'Za razgovor je dovoljno pripremiti', contactPrepareItems: ['željenu zemlju i nivo studija', 'okvirni budžet i važne rokove', 'glavna pitanja'],
    intakeButton: 'Ispunite upitnik i nastavite na termin', intakeNote: 'Upitnik traje oko 3 minute. CV i drugi dokumenti nisu obavezni.', intakeRequired: 'Obavezno prije rezervacije', intakeAfter: 'Nakon slanja upitnika odmah ćete dobiti link za odabir termina.', intakeSteps: ['Ispunite kratki upitnik', 'Odaberite termin', 'Razgovarajte 15 minuta'],
    privacyTitle: 'Privatnost i kolačići', privacyLead: 'Stranica koristi samo neophodne tehničke funkcije. Za kontakt koristite e-poštu, vanjski Calendly kalendar ili naš obrazac u Google Forms.', privacySections: [['Vaši podaci na ovoj stranici', 'Jezik je dio URL-a. Hosting i Cloudflare mogu obrađivati standardne tehničke zapise i postaviti neophodne sigurnosne kolačiće (cf_clearance, __cf_bm i __Host-appgarden-visitor) radi zaštite, sprečavanja zloupotrebe i dostupnosti. Ne koristimo analitičke ni marketinške kolačiće.'], ['Calendly', 'Rezervacijom termina prelazite na Calendly, gdje važe njihova pravila privatnosti.'], ['Početni upitnik', 'Kratki upitnik otvara se u Google Forms. Ako odlučite učitati neobavezne dokumente, Google zahtijeva prijavu; odgovori i datoteke obrađuju se putem Googlea i pohranjuju na Google Drive računu Adria Admissions. Koristimo ih samo za procjenu upita i pripremu razgovora. Nemojte slati ličnu kartu, pasoš niti druge nepotrebne osjetljive podatke. Primjenjuju se Googleova pravila privatnosti.'], ['Kontakt', 'Za pitanja o privatnosti javite se na adria.admissions@gmail.com. Podaci kontrolora obrade bit će dopunjeni nakon registracije poslovnog subjekta.']],
    serviceTitle: 'Kako radimo za vas', serviceLead: 'Vaš cilj, snažna autentična prijava i jasan dogovor od prvog koraka.', serviceSections: [['Vaš interes na prvom mjestu', 'Svaku preporuku zasnivamo na vašem profilu, ciljevima, budžetu i rokovima kako bi svaki izbor imao jasan razlog.'], ['Najjača verzija vaše prijave', 'Maksimalno se posvećujemo tome da kandidat izgradi što snažniju, ličnu i vjerodostojnu prijavu. Kandidat zadržava svoj glas, a konačne odluke donose univerziteti i stipendijska tijela.'], ['Jasan dogovor od početka', 'Prije početka pisanim putem potvrđujemo obim, cijenu, raspored, uslove otkazivanja i pravo na odustanak. Aktuelne zahtjeve provjeravamo prema službenim izvorima.']],
    backHome: 'Nazad na naslovnu', teamNote: 'Razgovarat ćete s jednim savjetnikom. Cijeli tim radi prema istom Adria standardu: profil, trošak, rokovi, finansiranje i realna procjena opcija.',
  },
  sr: {
    skip: 'Preskočite na sadržaj', navigation: 'Glavna navigacija', language: 'Jezik', currentLanguage: 'Izaberite jezik', contact: 'Kontakt', privacy: 'Privatnost i kolačići', serviceInfo: 'Kako radimo', external: 'Otvara spoljnu stranicu', unavailable: 'Kalendar još nije aktivan', pricingDetails: 'Detaljne cene i dodaci', pricingScope: 'Prva četiri reda sažimaju osnovnu ponudu. Preostali redovi su samostalne usluge ili dodaci. Konačan obim potvrđujemo pisanim putem pre plaćanja.', core: 'Celovita podrška', close: 'Zatvori',
    contactTitle: 'Napravimo prvi korak zajedno.', contactLead: 'Prvo popunite kratki upitnik, a zatim izaberite termin za besplatan razgovor od 15 minuta.', contactDirect: 'Direktan kontakt', contactPending: 'Kontaktirajte nas na adria.admissions@gmail.com.', contactTiming: 'Kada odgovaramo', contactTimingBody: 'Na upite odgovaramo radnim danima.', contactPrepare: 'Za razgovor je dovoljno pripremiti', contactPrepareItems: ['željenu zemlju i nivo studija', 'okvirni budžet i važne rokove', 'glavna pitanja'],
    intakeButton: 'Popunite upitnik i nastavite na termin', intakeNote: 'Upitnik traje oko 3 minuta. CV i drugi dokumenti nisu obavezni.', intakeRequired: 'Obavezno pre rezervacije', intakeAfter: 'Nakon slanja upitnika odmah ćete dobiti link za izbor termina.', intakeSteps: ['Popunite kratki upitnik', 'Izaberite termin', 'Razgovarajte 15 minuta'],
    privacyTitle: 'Privatnost i kolačići', privacyLead: 'Stranica koristi samo neophodne tehničke funkcije. Za kontakt koristite e-poštu, spoljni Calendly kalendar ili naš obrazac u Google Forms.', privacySections: [['Vaši podaci na ovoj stranici', 'Jezik je deo URL-a. Hosting i Cloudflare mogu obrađivati standardne tehničke zapise i postaviti neophodne bezbednosne kolačiće (cf_clearance, __cf_bm i __Host-appgarden-visitor) radi zaštite, sprečavanja zloupotrebe i dostupnosti. Ne koristimo analitičke niti marketinške kolačiće.'], ['Calendly', 'Rezervacijom termina prelazite na Calendly, gde važe njihova pravila privatnosti.'], ['Početni upitnik', 'Kratki upitnik otvara se u Google Forms. Ako odlučite da otpremite neobavezne dokumente, Google zahteva prijavu; odgovori i datoteke obrađuju se putem Googlea i čuvaju na Google Drive nalogu Adria Admissions. Koristimo ih samo za procenu upita i pripremu razgovora. Nemojte slati ličnu kartu, pasoš niti druge nepotrebne osetljive podatke. Primenjuju se Googleova pravila privatnosti.'], ['Kontakt', 'Za pitanja o privatnosti javite se na adria.admissions@gmail.com. Podaci rukovaoca biće dopunjeni nakon registracije poslovnog subjekta.']],
    serviceTitle: 'Kako radimo za vas', serviceLead: 'Vaš cilj, snažna autentična prijava i jasan dogovor od prvog koraka.', serviceSections: [['Vaš interes na prvom mestu', 'Svaku preporuku zasnivamo na vašem profilu, ciljevima, budžetu i rokovima kako bi svaki izbor imao jasan razlog.'], ['Najjača verzija vaše prijave', 'Maksimalno se posvećujemo tome da kandidat izgradi što snažniju, ličnu i verodostojnu prijavu. Kandidat zadržava svoj glas, a konačne odluke donose univerziteti i stipendijska tela.'], ['Jasan dogovor od početka', 'Pre početka pisanim putem potvrđujemo obim, cenu, raspored, uslove otkazivanja i pravo na odustanak. Aktuelne zahteve proveravamo prema zvaničnim izvorima.']],
    backHome: 'Nazad na početnu', teamNote: 'Razgovaraćete s jednim savetnikom. Ceo tim radi prema istom Adria standardu: profil, trošak, rokovi, finansiranje i realna procena opcija.',
  },
  en: {
    skip: 'Skip to content', navigation: 'Main navigation', language: 'Language', currentLanguage: 'Choose language', contact: 'Contact', privacy: 'Privacy & cookies', serviceInfo: 'How we work', external: 'Opens an external site', unavailable: 'Calendar not active yet', pricingDetails: 'Detailed pricing and add-ons', pricingScope: 'The first four rows summarize the core offer. The remaining rows are standalone services or add-ons. We confirm the final scope in writing before payment.', core: 'Complete support', close: 'Close',
    contactTitle: 'Let’s take the first step together.', contactLead: 'Complete the short questionnaire first, then choose a time for your free 15-minute call.', contactDirect: 'Direct contact', contactPending: 'Contact us at adria.admissions@gmail.com.', contactTiming: 'When we reply', contactTimingBody: 'We answer enquiries on business days.', contactPrepare: 'For the call, simply prepare', contactPrepareItems: ['target country and study level', 'approximate budget and key deadlines', 'your main questions'],
    intakeButton: 'Complete the questionnaire and choose a time', intakeNote: 'The questionnaire takes about 3 minutes. A CV and supporting documents are optional.', intakeRequired: 'Required before booking', intakeAfter: 'After submitting the questionnaire, you will immediately receive the link to choose a time.', intakeSteps: ['Complete the short questionnaire', 'Choose a time', 'Join the 15-minute call'],
    privacyTitle: 'Privacy & cookies', privacyLead: 'This site uses only essential technical functions. Contact us by email, through the external Calendly calendar or through our Google Forms questionnaire.', privacySections: [['Your data on this site', 'The hosting platform and Cloudflare may process standard technical logs and set essential security cookies (cf_clearance, __cf_bm and __Host-appgarden-visitor) to protect the site, prevent abuse and keep it available. We do not use analytics or marketing cookies.'], ['Calendly', 'When you book a call, you are redirected to Calendly, where its privacy rules apply.'], ['Initial questionnaire', 'The short questionnaire opens in Google Forms. If you choose to upload optional documents, Google requires you to sign in; responses and files are processed by Google and stored in the Adria Admissions Google Drive account. We use them only to assess your enquiry and prepare for the introductory call. Do not upload an identity card, passport or other unnecessary sensitive data. Google’s privacy rules apply.'], ['Contact', 'For privacy questions, contact adria.admissions@gmail.com. Controller details will be completed after the business entity is registered.']],
    serviceTitle: 'How we work for you', serviceLead: 'Your goal, a strong authentic application and a clear agreement from the first step.', serviceSections: [['Your interests come first', 'Every recommendation is grounded in your profile, goals, budget and deadlines so that each choice has a clear reason.'], ['The strongest version of your application', 'We put our full effort into helping each applicant build a strong, personal and credible application. The applicant keeps their own voice, while universities and scholarship bodies make the final decisions.'], ['A clear agreement from the start', 'Before work begins, we confirm the scope, price, schedule, cancellation terms and withdrawal rights in writing. We check current requirements against official sources.']],
    backHome: 'Back to home', teamNote: 'You will speak with one adviser. The entire team follows the same Adria standard: profile, cost, deadlines, funding and a realistic assessment of options.',
  },
  de: {
    skip: 'Zum Inhalt springen', navigation: 'Hauptnavigation', language: 'Sprache', currentLanguage: 'Sprache wählen', contact: 'Kontakt', privacy: 'Datenschutz & Cookies', serviceInfo: 'So arbeiten wir', external: 'Öffnet eine externe Website', unavailable: 'Kalender noch nicht aktiv', pricingDetails: 'Preisübersicht und Zusatzmodule', pricingScope: 'Die ersten vier Zeilen fassen das Kernangebot zusammen. Die übrigen Zeilen sind Einzelleistungen oder Zusatzmodule. Den endgültigen Umfang bestätigen wir vor der Zahlung schriftlich.', core: 'Komplette Begleitung', close: 'Schließen',
    contactTitle: 'Machen wir gemeinsam den ersten Schritt.', contactLead: 'Füllen Sie zuerst den kurzen Fragebogen aus und wählen Sie anschließend einen Termin für das kostenlose 15-minütige Gespräch.', contactDirect: 'Direkter Kontakt', contactPending: 'Kontaktieren Sie uns unter adria.admissions@gmail.com.', contactTiming: 'Wann wir antworten', contactTimingBody: 'Wir beantworten Anfragen an Werktagen.', contactPrepare: 'Für das Gespräch genügen', contactPrepareItems: ['Zielland und Studienniveau', 'ungefähres Budget und wichtige Fristen', 'Ihre wichtigsten Fragen'],
    intakeButton: 'Fragebogen ausfüllen und Termin wählen', intakeNote: 'Der Fragebogen dauert etwa 3 Minuten. Lebenslauf und weitere Unterlagen sind optional.', intakeRequired: 'Vor der Buchung erforderlich', intakeAfter: 'Nach dem Absenden erhalten Sie sofort den Link zur Terminwahl.', intakeSteps: ['Kurzen Fragebogen ausfüllen', 'Termin wählen', '15-minütiges Gespräch führen'],
    privacyTitle: 'Datenschutz & Cookies', privacyLead: 'Diese Website nutzt nur technisch notwendige Funktionen. Kontaktieren Sie uns per E-Mail, über den externen Calendly-Kalender oder über unseren Fragebogen in Google Forms.', privacySections: [['Ihre Daten auf dieser Website', 'Die Hosting-Plattform und Cloudflare können technische Standardprotokolle verarbeiten und notwendige Sicherheits-Cookies (cf_clearance, __cf_bm und __Host-appgarden-visitor) setzen, um die Website zu schützen, Missbrauch zu verhindern und ihre Verfügbarkeit sicherzustellen. Wir verwenden keine Analyse- oder Marketing-Cookies.'], ['Calendly', 'Bei einer Buchung werden Sie zu Calendly weitergeleitet; dort gelten die Datenschutzbestimmungen von Calendly.'], ['Erstfragebogen', 'Der kurze Fragebogen wird in Google Forms geöffnet. Wenn Sie optionale Unterlagen hochladen, verlangt Google eine Anmeldung; Antworten und Dateien werden von Google verarbeitet und im Google-Drive-Konto von Adria Admissions gespeichert. Wir verwenden sie ausschließlich zur Einschätzung Ihrer Anfrage und zur Vorbereitung des Erstgesprächs. Laden Sie keinen Personalausweis, Reisepass oder andere nicht erforderliche sensible Daten hoch. Es gelten die Datenschutzbestimmungen von Google.'], ['Kontakt', 'Bei Datenschutzfragen schreiben Sie an adria.admissions@gmail.com. Die Angaben zum Verantwortlichen werden nach der Registrierung des Unternehmens ergänzt.']],
    serviceTitle: 'So arbeiten wir für Sie', serviceLead: 'Ihr Ziel, eine starke authentische Bewerbung und eine klare Vereinbarung vom ersten Schritt an.', serviceSections: [['Ihre Ziele stehen an erster Stelle', 'Jede Empfehlung richtet sich nach Ihrem Profil, Ihren Zielen, Ihrem Budget und Ihren Fristen, damit jede Entscheidung gut begründet ist.'], ['Die stärkste Version Ihrer Bewerbung', 'Wir setzen uns mit vollem Einsatz dafür ein, gemeinsam mit Ihnen eine möglichst starke, persönliche und glaubwürdige Bewerbung zu entwickeln. Ihre eigene Stimme bleibt erhalten; die endgültigen Entscheidungen treffen Hochschulen und Stipendiengeber.'], ['Klare Vereinbarung von Anfang an', 'Vor Beginn bestätigen wir Umfang, Preis, Zeitplan, Stornobedingungen und Widerrufsrechte schriftlich. Aktuelle Anforderungen prüfen wir anhand offizieller Quellen.']],
    backHome: 'Zurück zur Startseite', teamNote: 'Sie sprechen mit einem Mitglied unseres Beratungsteams. Das ganze Team arbeitet nach demselben Adria-Standard: Profil, Kosten, Fristen, Finanzierung und eine realistische Bewertung der Optionen.',
  },
  fr: {
    skip: 'Aller au contenu', navigation: 'Navigation principale', language: 'Langue', currentLanguage: 'Choisir la langue', contact: 'Contact', privacy: 'Confidentialité et cookies', serviceInfo: 'Notre méthode', external: 'Ouvre un site externe', unavailable: 'Calendrier pas encore actif', pricingDetails: 'Tarifs détaillés et options', pricingScope: 'Les quatre premières lignes résument l’offre principale. Les autres correspondent à des services individuels ou à des options. Le périmètre final est confirmé par écrit avant paiement.', core: 'Accompagnement complet', close: 'Fermer',
    contactTitle: 'Faisons ensemble le premier pas.', contactLead: 'Remplissez d’abord le court questionnaire, puis choisissez un créneau pour l’appel gratuit de 15 minutes.', contactDirect: 'Contact direct', contactPending: 'Contactez-nous à adria.admissions@gmail.com.', contactTiming: 'Quand nous répondons', contactTimingBody: 'Nous répondons les jours ouvrés.', contactPrepare: 'Pour l’appel, il suffit de préparer', contactPrepareItems: ['le pays visé et le niveau d’études', 'le budget approximatif et les échéances clés', 'vos principales questions'],
    intakeButton: 'Remplir le questionnaire et choisir un créneau', intakeNote: 'Le questionnaire prend environ 3 minutes. Le CV et les autres documents sont facultatifs.', intakeRequired: 'Obligatoire avant la réservation', intakeAfter: 'Après l’envoi, vous recevrez immédiatement le lien pour choisir un créneau.', intakeSteps: ['Remplir le court questionnaire', 'Choisir un créneau', 'Participer à l’appel de 15 minutes'],
    privacyTitle: 'Confidentialité et cookies', privacyLead: 'Ce site utilise uniquement les fonctions techniques essentielles. Contactez-nous par e-mail, via le calendrier Calendly externe ou grâce à notre questionnaire Google Forms.', privacySections: [['Vos données sur ce site', 'La plateforme d’hébergement et Cloudflare peuvent traiter des journaux techniques standard et déposer des cookies de sécurité essentiels (cf_clearance, __cf_bm et __Host-appgarden-visitor) afin de protéger le site, prévenir les abus et assurer sa disponibilité. Nous n’utilisons ni cookies d’analyse ni cookies marketing.'], ['Calendly', 'En réservant, vous passez sur Calendly, où ses règles de confidentialité s’appliquent.'], ['Questionnaire initial', 'Le court questionnaire s’ouvre dans Google Forms. Si vous choisissez de téléverser des documents facultatifs, Google exige une connexion ; les réponses et les fichiers sont traités par Google et stockés dans le compte Google Drive d’Adria Admissions. Nous les utilisons uniquement pour évaluer votre demande et préparer l’appel découverte. Ne téléversez pas de carte d’identité, de passeport ni d’autres données sensibles qui ne sont pas nécessaires. Les règles de confidentialité de Google s’appliquent.'], ['Contact', 'Pour toute question de confidentialité, écrivez à adria.admissions@gmail.com. Les informations sur le responsable du traitement seront complétées après l’immatriculation de l’entreprise.']],
    serviceTitle: 'Comment nous travaillons pour vous', serviceLead: 'Votre objectif, une candidature authentique et solide, et un accord clair dès la première étape.', serviceSections: [['Vos intérêts d’abord', 'Chaque recommandation s’appuie sur votre profil, vos objectifs, votre budget et vos échéances afin que chaque choix soit clairement motivé.'], ['La meilleure version de votre candidature', 'Nous nous engageons pleinement à aider chaque candidat à construire une candidature aussi solide, personnelle et crédible que possible. Le candidat conserve sa propre voix, tandis que les universités et les organismes financeurs prennent les décisions finales.'], ['Un accord clair dès le départ', 'Avant de commencer, nous confirmons par écrit le périmètre, le prix, le calendrier, les conditions d’annulation et le droit de rétractation. Nous vérifions les exigences actuelles auprès des sources officielles.']],
    backHome: 'Retour à l’accueil', teamNote: 'Vous échangerez avec un conseiller. Toute l’équipe suit le même standard Adria : profil, coût, échéances, financement et évaluation réaliste des options.',
  },
};

const intakePrivacyFlow: Record<Locale, { lead: string; calendly: string }> = {
  hr: {
    lead: 'Stranica koristi samo nužne tehničke funkcije. Za rezervaciju najprije ispunjavate naš upitnik u Google Forms, a zatim prelazite na vanjski Calendly kalendar.',
    calendly: 'Poveznicu za rezervaciju termina dobivate nakon slanja upitnika. Prelaskom na Calendly primjenjuju se njihova pravila privatnosti.',
  },
  bs: {
    lead: 'Stranica koristi samo neophodne tehničke funkcije. Za rezervaciju prvo ispunjavate naš upitnik u Google Forms, a zatim prelazite na vanjski Calendly kalendar.',
    calendly: 'Link za rezervaciju termina dobijate nakon slanja upitnika. Prelaskom na Calendly primjenjuju se njihova pravila privatnosti.',
  },
  sr: {
    lead: 'Stranica koristi samo neophodne tehničke funkcije. Za rezervaciju prvo popunjavate naš upitnik u Google Forms, a zatim prelazite na spoljni Calendly kalendar.',
    calendly: 'Link za rezervaciju termina dobijate nakon slanja upitnika. Prelaskom na Calendly primenjuju se njihova pravila privatnosti.',
  },
  en: {
    lead: 'This site uses only essential technical functions. To book, you first complete our Google Forms questionnaire and then continue to the external Calendly calendar.',
    calendly: 'You receive the booking link after submitting the questionnaire. Calendly’s privacy rules apply when you continue to its website.',
  },
  de: {
    lead: 'Diese Website nutzt nur technisch notwendige Funktionen. Für eine Buchung füllen Sie zuerst unseren Fragebogen in Google Forms aus und wechseln anschließend zum externen Calendly-Kalender.',
    calendly: 'Den Buchungslink erhalten Sie nach dem Absenden des Fragebogens. Beim Wechsel zu Calendly gelten dessen Datenschutzbestimmungen.',
  },
  fr: {
    lead: 'Ce site utilise uniquement les fonctions techniques essentielles. Pour réserver, vous remplissez d’abord notre questionnaire Google Forms, puis vous accédez au calendrier Calendly externe.',
    calendly: 'Vous recevez le lien de réservation après l’envoi du questionnaire. Les règles de confidentialité de Calendly s’appliquent lorsque vous accédez à son site.',
  },
};

for (const locale of locales) {
  utility[locale].privacyLead = intakePrivacyFlow[locale].lead;
  utility[locale].privacySections[1] = ['Calendly', intakePrivacyFlow[locale].calendly];
}
