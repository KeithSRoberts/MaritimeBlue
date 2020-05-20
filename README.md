# Blue Funder Portal - MaritimeBlue
### Information School at The University of Washington Capstone Project

This is the code repository for the MVP of the Blue Funder Portal, an Information School capstone project sponsored by Department of Commerce in Washington State. This application provides a central portal for innovators/entrpreneurs to visit and have the ability to search across funding opportunities to fund their projects. 

### Setup and Installation

First you'll need the latest version of node installed to your machine:
```https://nodejs.org/en/download/package-manager/```

Once you have Node installed, clone the project directly with:
```git clone https://github.com/evaingith/MaritimeBlue```
```cd blue-funder```

After cloning the project locally, install all depedencies for the project with (while within the /blue-funder directory):
```npm install keystone-server/.```
```npm install client/.```

Before getting the server up and running, you must first have a running instance of MongoDB on your host machine. To install MongoDB, follow the instructions at: https://docs.mongodb.com/manual/installation/

Once you are able to get your Mongo instance running you should be able to move onto the next step...


To run the app (while within the /keystone-server directory), first compile static files with webpack:
```npm run compile```
This compile step must be ran anytime that there are changes to components/javascript located in the client/ directory

Then run the server in development mode with:
```npm run dev```

You should then see that the keystone-server is now running and listening on port 3000

### Architecture
The application has 4 primary views associated, along with various other forms/screens to accompany functionality in these views. These 4 views are as follows:

* Opportunities/Listings page: The main view of the application that provides the user with a searchable table-list that includes all listings stored in the portal.
* Introduction page: A general information page that provides details about terminology used in the application and further instructions on how to navigate and use the application
* Listing Detail page: A detailed information page that provides the user with more specific information about a listing when clicked on in the listings table.
* Insights page (removed): A data vizualization page that gives a high-level overview of the data contained in the portal at the time, such as distribution of listings by various attributes.

### Further Work
Though we were able to complete a minimum set of requirements/functionality, the following features were unable to be added on and can make good candidates for further improvements/work:
* Make Insights page functional: the insights page currently is only able to be used with mock data, and as such, was removed from the first iteration. Adding this component back into the application and making it work with the current data models would provide an entirely new view.
* Pull in external data from API's: It was in mind that the application could eventually make use of external API's that offer similar funding data such as Grants.gov by pulling listings from these API's into the application. Primary work associated with this would involve writing scripts to pull from external API's and consolidating the data model to work with varying data soruces.
* Automated approval of listings/users/requests: Currently the maintainer/administrator of the application must convert a ListingRequest into a Listing manually via the /admin page. It would be better if a ListingRequest could be approved with a single action and automatically converted to a Listing.
* Automated removal of listings: When a listing currently passes it's end date, it still remains in the listings table and must be removed by the administrator manually. It would be better to have an automated mechanism that checks the end dates of listings in the table and removes listings that have passed their end dates or moves them to a "history" table.
