[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url-gabriel]
[![GNU License][license-shield]][license-url]


<br />
<p align="center">
  <a href="https://etsy-clone-aa.herokuapp.com/">
    <img src="favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Fretsy</h3>

  <p align="center">
     A social platform for sharing live music video performances.
    <br />
    <a href="https://github.com/gch910/fretsy"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/gch910/fretsy">View Demo</a>
    ·
    <a href="https://github.com/gch910/fretsy/issues">Report a Bug</a>
    ·
    <a href="https://github.com/gch910/fretsy/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<a href="https://etsy-clone-aa.herokuapp.com/">
  <img src="https://i.gyazo.com/f195070017f46cca1ceaa0c51d428bf9.jpg" alt="Logo" >
</a>

## Summary

Fretsy is an e-commerce app for purchasing guitars / equipment (inspired by Etsy).  It was built using Node.js / Express for the backend and React.js/Redux architecture for the frontend. Fretsy allows users to:

- Create an account / profile
- Log in / Log out
- View product listings
- Add / remove musical equipment to their shopping cart
- Checkout / purchase items in shopping cart
- Search for products
- View Purchase history
- Leave reviews / ratings for purchased items

### Built With

- Javascript
- React
- Redux
- Node.js
- Express
- Sequelize
- PostgreSQL
- CSS

## Overall Structure

#### Back end
The app was built using Node.js / Express on the back end with a postgreSQL database. Back end structure is RESTful and all the data requests use AJAX and are fulfilled with a JSON API. Associations are used to prefetch data in order to minimize SQL queries to the database.

#### Front end
The front end is built completely in React / JavaScript and utilizes Redux for global state management. React's virtual DOM allows for very fast rerendering without requiring new pages to be sent from the server.


<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Installations

- npm

  ```sh
  npm install npm@latest -g
  ```

- pipenv

  ```sh
  pipenv install
  ```

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/gch910/fretsy.git

   ```

2. Install Pipenv dependencies

   ```sh
   pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
   ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. Install NPM packages - cd into react-app

   ```sh
   npm install
   ```

7. While still in the react-app folder
   ```sh
   npm start
   ```

## Primary Components


#### Sign-up Modal
Coming Soon

![signup]


#### Home Page
Coming Soon 

![homepage]

#### Product Page
Coming Soon

![productpage]

#### Purchase History
Coming Soon

![purchasehistory]

#### Category Page
Coming Soon

![category]

#### Shopping Cart
Coming Soon

![shoppingcart]

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/gch910/fretsy/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the GNU License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Gabriel - gharris910@icloud.com 

Project Link: [https://etsy-clone-aa.herokuapp.com/](https://etsy-clone-aa.herokuapp.com/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [App Academy](https://www.appacademy.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[signup]: ./readme_images/signup-page-fretsy.PNG
[homepage]: ./readme_images/homepage-fretsy.PNG
[productpage]: ./readme_images/product-page-fretsy.PNG
[purchasehistory]: ./readme_images/purchase-history-fretsy.PNG
[category]: ./readme_images/category-page-fretsy.PNG
[shoppingcart]: ./readme_images/shopping-cart-fretsy.PNG

[contributors-shield]: https://img.shields.io/github/contributors/gch910/fretsy.svg?style=for-the-badge
[contributors-url]: https://github.com/gch910/fretsy/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gch910/fretsy.svg?style=for-the-badge
[forks-url]: https://github.com/gch910/fretsy/network/members
[stars-shield]: https://img.shields.io/github/stars/gch910/fretsy.svg?style=for-the-badge
[stars-url]: https://github.com/gch910/fretsy/stargazers
[issues-shield]: https://img.shields.io/github/issues/gch910/fretsy.svg?style=for-the-badge
[issues-url]: https://github.com/gch910/fretsy/issues
[license-shield]: https://img.shields.io/badge/License-GPL%20v3-blue.svg
[license-url]: https://github.com/gch910/fretsy/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-gabriel]: https://www.linkedin.com/in/gabriel-harris-249231208/
[product-screenshot]: images/screenshot.png