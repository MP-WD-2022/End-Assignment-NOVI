Installatiehandleiding:

Beschrijving van de functionaliteit van de applicatie:

Recepten zoekpagina
Op deze pagina kan de gebruiker naar de naam van een specifiek recept zoeken, of recepten zoeken op basis van een aantal ingrediënten. Hierbij kan onderscheid gemaakt worden tussen het type van de maaltijd. De pagina geeft vervolgens een overzicht van recepten die voldoen aan de gestelde zoekopdracht. Hierbij word gebruik gemaakt van de Edamam Recipe Search API.

Recept bereidingswijze- en voedingswaardepagina
Indien de gebruiker op één van de recepten klikt, komt deze op de pagina terecht waar de details van het recept te zien zijn, zoals een lijst van de verschillende benodigdheden, de bereidingswijzen en een overzicht van de voedingswaardes van het recept. Hierbij word gebruik gemaakt van de Edamam Recipe Search API en de Nutrition Analysis API.

Calorieën calculator
Op deze pagina kan de gebruiker een productnaam of barcode van een product invoeren om te zien hoeveel calorieën het bevat. De gebruiker kan hier ook een portiegrootte invoeren of meerdere producten tegelijkertijd toevoegen. Hierbij word gebruik gemaakt van de Edamam Food Database API.

Sreenshot van de belangrijkste pagina van de applicatie:

assets/images/homepage.jpg

Lijst van benodigdheden om de applicatie te kunnen gebruiken:
API-ID (Recipe Search and Meal Planner API):	in Deelopdracht.4 vermeld
API-ID (Food Database API):			              in Deelopdracht.4 vermeld
API-ID (Nutrition Analysis API):			        in Deelopdracht.4 vermeld
API-key (Recipe Search and Meal Planner API):	in Deelopdracht.4 vermeld
API-key (Food Database API):			            in Deelopdracht.4 vermeld
API-key (Nutrition Analysis API):		          in Deelopdracht.4 vermeld

Stappenplan installatie:

Downloaden en vervolgens installeren van een IDE (bijvoorbeeld Webstorm): 
https://www.jetbrains.com/webstorm/download/?utm_campaign=getting-started-with-webstorm&utm_content=installation&utm_medium=referral&utm_source=youtube.com#section=windows

Downloaden en vervolgens installeren van Node.js via:
https://nodejs.org/en/download/

Na installatie van Node.js dient m’n te testen of de installatie succesvol was door het volgende commando in de terminal van de IDE te typen en dan op enter te drukken:
node -v
Als Node.js aanwezig is zal m’n een versienummer te zien krijgen (bijvoorbeeld: v13.9.3). Krijgt m’n een andere melding (bijvoorbeeld: node: command not found) dan is het nog niet (juist) geïnstalleerd. 
Vervolgens dient m’n te checken of NPM correct mee geïnstalleerd is. Vraag het versienummer op van de huidige geïnstalleerde versie op je computer door het volgende in te toetsen in de terminal van de IDE, en daarna op enter te drukken:
npm -v
M’n zal opnieuw een (ander) versienummer te zien krijgen, dit keer zonder de letter v (bijvoorbeeld 6.4.1). Krijgt m’n de melding: npm: command not found installeer Node.js dan opnieuw.

Installeren van nodemon: 
door het volgende commando in te typen in de terminal van de IDE:
npm install -g nodemon


Installeren van Parcel:
door het volgende commando in te typen in de terminal van de IDE:
npm install  --save-dev parcel

Het aanmaken van een (nieuwe) Git-repository:
door het volgende commando in te typen in de terminal van de IDE:
git init
Vervolgens binnen projectmap van de IDE .gitignore-bestand aanmaken, met daarin:
/.idea
/node_modules
/.parcel-cache

Installeren van Axios:
door het volgende commando in te typen in de terminal van de IDE:
npm install axios

