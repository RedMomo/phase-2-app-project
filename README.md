# Phase-2-App
## Application
We will be creating a plant-purchasing application. Users will be able to search for different plants (via a searchbar), view the plants, "like" and "unlike" them, and add them to their cart. Users will also be able to go to a special "plant request" page, request new plants via a submission page, and view other people's requests.
### MVP Core Features
This application will use at least eight components: App, Homepage, NavBar, AboutPage, PlantList, PlantCards, PlantRequests, and RequestedCards.
There will be at least four client-side routes using React Router: routing to an About Page from the HomePage, routing to the Plant Request Page from the HomePage, and routing back to the Home Page from any other page. They will be able to do this via navigation buttons.
We will be using a free House Plants RESTful API for the backend to hold the plant information for the purchase page. We will also be using our own API for the request page. Should anything go wrong with the House Plants API, we will instead be creating a second API to hold the plant information.
Users will begin at a Home Page where they will see the plants available for sale. From here, they will be able to add plants to their cart. They will also be able to go to the website's About Page or Plant Request Page by clicking the corresponding buttons in the Navigation Bar. The About Page will provide a little bit of information about the site and its creators. But the Plant Request Page will allow users to request new plants via a controlled submittable form. They will also be able to delete their requests, view requests made by other people, and vote on requests. The ever-present Home Page button will take them bavk to the Home Page regardless of where they are in the site.
### Component Tree Draft
Component tree is subject to change as we add code, specially when we get into stretch goals. But for the MVP, with App at the top of the tree:
App -> HomePage ->  NavBar    ->
                    AboutPage ->
                    PlantRequests -> RequestedPlants
                    PlantList ->  PlantCards
### Stretch Goals
1. We hope to include a very special plant page where users can order experimental plants generated by object-recognizing technology. The site will recognize users or objects held to the camera by the users and create a new plant. [See legal disclaimers].
2. Once the project is done, we hope to deploy it.