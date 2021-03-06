# Firebase 

Dette repoet kommer til å inneholde en boilerplate som har fokus på å dokumentere bruk av Firebase som er et populært serverless rammeverk som vil kjøre backend kode ved HTTP-triggers fra klient, eller innebygde firebase feautres. Altså slipper du å forholde deg til å vedlideholde en server, men "backend" koden din i javascript/typescript er lagret og kjøres i et miljø som vedlikeholdes av Google Cloud. Om dette hørtes gresk ut, vil vi under prøve å ta deg gjennon alt fra hva det i praksis vil si at firebase er et serverless rammeverk, til hvordan du konkret kan bruke dette til å raskt gå fra idé til et faktisk produkt/nettside du kan vise til venner og familie. Eller en startup?


## Innhold

### Prosjektidé
For å ha noe konkret å jobbe med skal vi i dette prosjektet lage en side der man se sanger og artister folk har lagt inn. Alle brukere må kunne registrere seg og logge seg inn. De skal også ha muligheten til å se alle sangene i en form for liste format og når de trykker på en sang så skal de få opp detaljert vising av sangen. Et lignende view skal være tilgjengelig for artister. Man kan også slette sanger og arister man har lagt inn selv. 

### REST Api Basics

### **Serverless arkitektur**

### React 
Vi har allerede en innføring i React liggende som kan sjekkes ut for å oppfriske React skills: https://github.com/koseprogg/react-kurs

### **Firebase**
  * Auth
  * Cloud Firestore
  * Cloud Storage
  * Cloud Functions
  * Deploye webapp

## Oppsett av Firebase

1. Gå inn [her](https://console.firebase.google.com/u/0/) og lag et nytt Firebase-prosjekt. Velg de tjenestene du vil ha
2. Gå inn på "Firestore Database" i menyen til venstre når du er inne i Firebase Console og sett opp dette. Her kan du velge regler som lar deg lese og skrive fritt i 30 dager
3. Gå inn i dette repoet og installer Firebase sitt CLI via NPM med `npm install -g firebase-tools`
4. Kjør `firebase init` og velg begge alternativer (med mellomrom) som omhandler "Firebase Hosting", samt den som omhandler "Cloud Firestore", "Cloud Storage", og "Cloud Functions".
