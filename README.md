<!-- <div align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaKh6HIMYJzi_P4DpqhwfhSHHX0mRCSW78mA&usqp=CAU" width="450" height="300"/>
</div> -->

![Homepage](/src/assets/imgs/food-selector_main.PNG?raw=true "Pizza Order")

# Individual Meal Order

This was created during my time as a student at Code Chrysalis.

Main technologies that have been used include:

- Node.js with express server
- React.js
- Redux

## Features

- Food builder (currently only pizza)
- Checkout
- Validated user input form
- Order history
- Authentication (WIP)

## Installation

Use yarn to install all dependencies

Visit https://food-order-mvp.web.app/ for a live preview

### Database Setup

Connections to the database are made in the following files:

- axios-orders.js
- PizzaBuilder.js

Replace the URL with a database of your choice

### Starting the server

Run the following command to connect to the database and run the express server.

```bash
 yarn run dev
```

**Please note:** Some scripts defined in package.json require the usage of the npm env-cmd package, which is set up to expect environment variables in the following path:

```bash
 ./config/dev.env
```

This includes the following variables:

- PORT - the port to access the server
- JWT_SECRET - the secret used for JWT generation

## Endpoints

### Order Related Endpoints (Firebase)

- GET /checkout
- GET /checkout/contact-data
- POST (/orders.json, order)

## Tests

Not yet implemented

## Potential Additional Features

- [ ] adding authentication
- [ ] adding user settings
- [ ] adding additional types of food
- [ ] more realistic builder graphics

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
