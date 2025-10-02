# Mix Master Application

## Overview
- Users can search for drinks and find out more information about specific cocktail. 
- For Fetching Drinks data we are using Cocktail DB API.
- The App is build using React, React Router DOM, Axios, React Query, React Toastify, Styled Components. 

## 1. Install and Setup
- Pick starter code folder.
- npm install and npm run dev.

## 2. React Router Setup
- install react-router-dom@6.11.2
- import `createBrowserRouter` and `RouterProvider` from react-router-dom.
- create Basic Router by setting up array of `path` and `element` for each route. 
- Setup `RouterProvider` and pass `router` as props.
- pages are components
- create src/pages
- Create About, Cocktail, Error, HomeLayout, Landing, Newsletter, index.js pages.
- export from index.js
- Import and setup `Link` component to create link to other pages. 
  
### Nested Pages
- Create a 3rd property called `children` and set up array of all other pages in the HomeLayout page route to nest other pages.
- Import `Outlet` from react-router-dom and add this in the HomeLayout jsx file to display the nested pages content.
- Replace the path of the default page `path` property with `index:true` property, here `Landing` page is the default page where cocktails are rendered.

## 3. Navbar Component
- Create components folder and inside it create `Navbar.jsx`
- Create HTML struture with classname in Navbar.jsx.
- import `NavLink` from raect-router-dom and use it in the HTML to create nav links for Home, About, Newsletter pages.  

### Styled Components
- npm install `styled-components`
- import `styled` from styled-components
- create a variable for the styled elements
- use vscode-styled-components extension for syntax highlighting
```js
import styled from 'styled-components';

const El = styled.el`
  // styles go here
`;
```
#### Alternative Setup
- style entire react component

```js
const Wrapper = styled.nav``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```
#### Assets
- Create wrappers folder in assets folder
- Place all the Styled component JS files inside assets/wrappers 

## 4. About Page
- Create HTML structure
- Create CSS code using styled component in `AboutPage.js`

## 5. Page Layout
- Create a section with `page` className in HomeLayout.jsx
- Wrap `<Outlet>` inside the section element
- Style the `.page` to define width, max-width, margin, padding in the `index.css`   
- This will create a common layout for all the pages nested inside the HomeLayout.jsx

## 6. Error Page
- Add a `errorElement` property in the HomeLayout route and assign `Error` page.
- In `Error.jsx` page, import `useRouteError` from react-router-dom and assign a variable for this inside the `Error` component.
- Create a condition to check if the error status is 404.
- if error is 404, return a wrapper with 404 image, and helper text and link to go back to home.
-  return a generic wrapper after the 404 condition to handle the errors which are not 404.
-  Create CSS code using styled component in `Error.js` for the 404 wrapper.


## 7. Loader function
- Each route can define a "loader" function to provide data to the route element before it renders.
- Must return something even "null" otherwise error.

### Loader in Landing page
- import `useLoaderData` from react-router-dom
- Assign `useLoaderData()` to a variable `data` 
- create a `loader` async function and return 'something`
- import loader func. as alias `landingLoader` inside HomeLayout.jsx
- Create a `loader` property in landing route inside HomeLayout.jsx
- Assign landingLoader as the value.

## 8. TheCocktailDB
[API](https://www.thecocktaildb.com/)
- Search cocktail by name
  www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
- Lookup full cocktail details by id
  www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

## 9. Landing - Fetch Drinks
- import axios and store the cocktailDB API url in a variable `cocktailSearchUrl`
- inside the loader function: 
  - store the search term in a variable `searchTerm`.
  - create a axios get response with template string of `cocktailSearchUrl` + `searchTerm`
  - Return a object with 1st property drinks with value of the `response.data.drinks` and 2nd property `serachTerm`
- Destructure the above 2 property in the Landing components, where `useLoaderData()` was defined earlier with `data`
  
## 10. Single Page Error Handling
- create `errorElement` property for a single page and assign `SinglePageError` component as value.

### SinglePageError Component
- create pages/SinglePageError.jsx
- import `useRouteError` from react-router-dom and assign to a variable in SinglePageErrror.jsx
- Render the `error.message` 
- export import (index.js)
- use it in App.jsx

## 11. More Components
- In src/components create SearchForm, CocktailList, CocktailCard
- Render SearchForm and CocktailList in Landing
- Pass drinks, iterate over and render in CocktailCard


## 12. CocktailList Component
- Create a condition to render a fallback UI, if search term don't exist.
- Create `formattedDrinks` variable, to store a map function which returns the formatted names of the properties provided by drinks.
- Iterate over the `formattedDrinks` and return CocktailCard, pass all the data to it.

## 13. CocktailCard Component
- Destructure & render all the properties.
- Create a Link to navigate to single cocktail by passing id as dynamic using template strings. 
- Complete CSS code using styled component in `CocktailList.js` & `CocktailCard`
.js

## 14. Global Loading and Context
- Import `useNavigation` from react-router-dom
- assign it to a variable `navigation` in the HomeLayout
- Create a new variable `isPageLoading` to store the comparison `navigation.state === 'loading'`
- use ternary operator to render the `? loading : Outlet` based on `isPageLoading`

### Context
- use context to pass data from Outlet to other Components. 
- Pass : `<Outlet context={{ value }} />`
- Access:
  
``` jsx
import {useOutletContext } from 'react-router-dom';

const CocktailCard = ({ image, name, id, info, glass }) => {
- const data = useOutletContext();
- console.log(data);
}
```

## 15. Single Cocktail Component
### Fetch data 
- import loader function as `singleCocktailLoader` in App.jsx
- create `errorElement` and `loader` properties for the single cocktail route.
- create a `singleCocktailUrl` URL in Cocktail.jsx
- create a loader function in Cocktail.jsx and access `params` from loader function parameter.
- destructure `id` from params.
- create a axios get request for singleCocktailUrl + id
- return `id` & axios `data` response from loader function
-  use it in the Cocktail component using `useLoaderData()`
  
### Render Data
-  Create a `singleDrink` variable to store data 
-  format the singleDrink format.
-  render the data in the UI expect `ingredients`.  
  
### Render Ingredients
- create a variable `validIngredients` and use Object.keys and assign singleDrink.
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
- chain filter method to to filter the items that contain `strIngredient` and exclude `strIngredient` that are null
- chain map method to return key of singleDrink. 
- iterate over the `validIngredients`
- handle comma at the last item
  
## Additional Check
- if data or the id is incorrect, create a condition on data and a fallback h2 element to display error.
- if data or id is incorrect, import `Navigate` from react-router-dom and use it in condition to redirect to homepage.

## Single Cocktail CSS (optional)
- assets/wrappers/CocktailPage.js  
- Complete CSS code using styled component in `CocktailPage.js`

## Setup React Toastify

```jsx
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
```
- setup ToastContainer in `Main.jsx` with position top-center and autoclose 2000ms