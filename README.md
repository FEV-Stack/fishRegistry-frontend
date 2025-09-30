
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Hvordan sette opp og kjøre applikasjonen

Sørg for at du har Node.js og npm installert.

fra project root folder kjør:

npm install
npm start


Frontend starter på http://localhost:3000.

## Kodestruktur og begrunnelse

Frontend

api/ – Axios-kall mot backend (fishApi.ts).

components/ – små komponenter som kan gjenbrukes:

FishForm.tsx - skjema for å legge til ny fisk

FishList.tsx - tabell med fisker, redigering og sletting

FishInfo.tsx - enkel statistikkvisning

pages/ – Fishes.tsx, hovedsiden som binder alt sammen.

validation/ – fishValidation.ts, frontend-validering. Denne kan gjenbrukes men har bevisst valgt å bare bruke den på
fishForm. På fishList vil jeg demonstrere valideringen som gjøres fra backend. 

Denne oppdelingen gjør det lett å finne fram i prosjektet, og skiller tydelig mellom logikk, visning og datatilgang.
 
## Testing

Jest som testrammeverk.

React Testing Library for å teste komponenter slik brukeren faktisk opplever dem.

Skjemaene er testet for validering, f.eks. at navn og art ikke kan være tomme.

Hvis man ønsker å se testene kjøre i en ekte nettleser, kan man utvide med Playwright eller Cypress til ende-til-ende-testing.

Oppsummering

Applikasjonen er bygget i Spring Boot og React, med H2 som enkel database for lokal kjøring. Backend følger en lagdelt arkitektur, mens frontend er komponentbasert. Testing er gjort både på backend (JUnit/Mockito) og frontend (Jest/RTL) for å sikre at både logikk og brukerflyt fungerer som forventet.