## Beskrivning
Du skall i denna uppgift bygga en blogg med valfritt tema. Bloggen ska innehålla två perspektiv: användare & ägare. Se nedanför för information om perspektiven. Projektet behöver inget API.

Delat perspektiv
Alla perspektiv och vyer ska innehålla en navbar för att navigera mellan vyer. I navbaren ska du också lägga en knapp för att kunna växla mellan perspektiv.


## Användarens perspektiv

Följande gäller för användarens perspektiv:
Bloggen skall bestå av minst tre sidor: huvudsida, bloggsida, och om mig sida.

## Huvudsidan skall minst innehålla:
Alla blogginlägg
Man skall kunna trycka på ett inlägg och komma in på en ny sida som visar blogginlägget i detalj
Ett blogginlägg på denna ska visa en titel och en bild (thumbnailUrl) men inget innehåll (body)


## Bloggsidan skall minst innehålla:
Blogginlägget (som du har tryckt på från huvudsidan)
Du kommer in på denna sida genom huvudsidan
Här visas all information som finns (se blogginlägg struktur nedanför)

Kommentarer
Visa upp alla kommentarer (anonyma, de visar inte vem som har skapat dem)
Ett valfritt sätt att lägga till nya kommentarer (anonyma)
En knapp/länk för att navigera tillbaka till huvudsidan
Ett sätt att gilla och ogilla blogginlägget (räknas oändligt, det finns ingen gräns på antal likes/dislikes)


## Om mig sidan skall minst innehålla:
Information om dig (det är tillåtet att använda låtsas information här)
Formulär för att kontakta dig (på låtsas; printa ut all information i konsolen när man skickar in formuläret)


## Ägarens perspektiv

Ägarens perspektiv innehåller allt som användaren har, men har en till vy:
En till vy för att skapa nya inlägg på valfritt sätt.

Blogginlägg
Alla blogginlägg har följande struktur (men du får gärna lägga till fler saker):

{ title: string; thumbnailUrl: string; body: string; creationDate: Date; likes: number; dislikes: number; comments: string[]; }


De skall sparas i localStorage för att du skall kunna ladda om Appen utan att tappa bort dem. Implementera detta på valfritt sätt.


## Övrig information
Det finns ingen "inloggning" och inga användare även om det finns ett användarperspektiv


Lägg gärna till fler saker i Appen


När man är inne på användarens perspektiv så ser man inget ifrån ägarens perspektiv

# BlogApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
