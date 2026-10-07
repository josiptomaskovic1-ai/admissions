export type Locale = 'bs' | 'sr' | 'hr' | 'en' | 'de' | 'fr';

type ChromeContent = {
  nav: { services: string; process: string; pricing: string; faq: string; book: string };
  hero: { titleA: string; titleB: string };
  booking: { event: string; body: string; button: string };
  footer: { rights: string };
};

export const translations: Record<Locale, ChromeContent> = {
  bs: {
    nav: { services: 'Usluge', process: 'Kako radimo', pricing: 'Cijene', faq: 'Pitanja', book: 'Upitnik + termin' },
    hero: { titleA: 'Studirajte u inostranstvu.', titleB: 'Prijavite se s jasnim planom.' },
    booking: { event: 'Besplatan uvodni razgovor', body: 'U 15 minuta razjasnimo vaš cilj, rokove i vrstu podrške koja vam treba.', button: 'Odaberite termin' },
    footer: { rights: 'Sva prava zadržana.' },
  },
  sr: {
    nav: { services: 'Usluge', process: 'Kako radimo', pricing: 'Cene', faq: 'Pitanja', book: 'Upitnik + termin' },
    hero: { titleA: 'Studirajte u inostranstvu.', titleB: 'Prijavite se sa jasnim planom.' },
    booking: { event: 'Besplatan uvodni razgovor', body: 'U 15 minuta razjasnimo vaš cilj, rokove i vrstu podrške koja vam treba.', button: 'Izaberite termin' },
    footer: { rights: 'Sva prava zadržana.' },
  },
  hr: {
    nav: { services: 'Usluge', process: 'Kako radimo', pricing: 'Cijene', faq: 'Pitanja', book: 'Upitnik + termin' },
    hero: { titleA: 'Studirajte u inozemstvu.', titleB: 'Prijavite se s jasnim planom.' },
    booking: { event: 'Besplatan uvodni razgovor', body: 'U 15 minuta razjasnimo vaš cilj, rokove i vrstu podrške koja vam treba.', button: 'Odaberite termin' },
    footer: { rights: 'Sva prava pridržana.' },
  },
  en: {
    nav: { services: 'Services', process: 'How it works', pricing: 'Pricing', faq: 'FAQ', book: 'Questionnaire + booking' },
    hero: { titleA: 'Study abroad.', titleB: 'Apply with a clear plan.' },
    booking: { event: 'Free introductory call', body: 'In 15 minutes, we clarify your goal, deadlines and the support you need.', button: 'Choose a time' },
    footer: { rights: 'All rights reserved.' },
  },
  de: {
    nav: { services: 'Leistungen', process: 'Ablauf', pricing: 'Preise', faq: 'FAQ', book: 'Fragebogen + Termin' },
    hero: { titleA: 'Studieren Sie im Ausland.', titleB: 'Bewerben Sie sich mit einem klaren Plan.' },
    booking: { event: 'Kostenloses Erstgespräch', body: 'In 15 Minuten klären wir Ihr Ziel, Ihre Fristen und den passenden Unterstützungsbedarf.', button: 'Termin wählen' },
    footer: { rights: 'Alle Rechte vorbehalten.' },
  },
  fr: {
    nav: { services: 'Services', process: 'Notre méthode', pricing: 'Tarifs', faq: 'Questions', book: 'Questionnaire + créneau' },
    hero: { titleA: 'Étudiez à l’étranger.', titleB: 'Préparez votre candidature avec un plan clair.' },
    booking: { event: 'Appel découverte gratuit', body: 'En 15 minutes, nous clarifions votre objectif, vos échéances et l’accompagnement utile.', button: 'Choisir un créneau' },
    footer: { rights: 'Tous droits réservés.' },
  },
};
