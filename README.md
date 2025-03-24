# Wieloetapowy formularz w Vue 3

Projekt formularza wieloetapowego zbudowanego w Vue 3 z użyciem TypeScript i Composition API. Formularz składa się z trzech kroków:

1. **Dane podstawowe** – Imię, Nazwisko, Data urodzenia
2. **Dane kontaktowe** – Telefon, E-mail
3. **Doświadczenie zawodowe** – Tabelka z możliwością dodawania wielu pozycji (firma, stanowisko, zakres dat)

## Funkcjonalności

- Nawigacja między krokami za pomocą steppera
- Walidacja formularza dla każdego kroku
- Dynamiczna tabela dodawania doświadczenia zawodowego

## Struktura projektu

- src/assets # Globalne pliki styli
- src/components # Komponenty formularza
- src/models # Modele dla formularza
- src/services # Symulacja serwisu

## Technologie

- **Vue 3** + Composition API
- **TypeScript**
- **SCSS**

### Konfiguracja projektu

```sh
npm install
```

### Uruchomienie w trybie deweploperskim

```sh
npm run dev
```

### Kompilowanie na produkcję

```sh
npm run build
```

### Poprawa kodu ESLint

```sh
npm run lint
```
