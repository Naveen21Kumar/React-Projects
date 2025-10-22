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
- chain filter method to to filter the items that contain `strIngredient` and exclude `strIngredient` that are null
- (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
- chain map method to return key of singleDrink. 
- iterate over the `validIngredients`
- handle comma at the last item
  
### Additional Check
- if data or the id is incorrect, create a condition on data and a fallback h2 element to display error.
- if data or id is incorrect, import `Navigate` from react-router-dom and use it in condition to redirect to homepage.

### Single Cocktail CSS
- assets/wrappers/CocktailPage.js  
- Complete CSS code using styled component in `CocktailPage.js`

## 16. Setup React Toastify
```jsx
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
```
- setup ToastContainer in `Main.jsx` with position top-center and autoclose 2000ms

## 17. Newsletter Page

### Form Structure
- Create a Form with name, last name, email input fields with labels for each input and provide a default value.
- Create a block submit button.
- Use Global styles and inline styles to styles the form elements.

### Action setup and formData API
- import `Form` from react-router-dom
- change the from element to Form in the HTML and define the method.
- create a action async function and destructure request in the parameter.
- import the action function as alias in the App.jsx
- assign the action function  to `action` property in the newsletter route.
- create a `formData` variable and assign `formData()` coming from request.
- create a `data` variable and assign `Object.fromEntries` method and pass `formData` variable inside the method.
- log the `data`

### Form Submit
- import axios, toast, redirect from react-router-dom
- create the url and get the URL link from readme.md
- create axios response
- create toast success message and redirect to home page. 

### handle Errors
- add a try catch block
- keep the response and redirect code in try block
- catch the error and pass the error msg to the toast, use optional chaining.
- add required field for name and last name and remove default value.

### Navigation State
- import useNavigation from react-router-dom
- invoke useNavigation() and assign it a variable
- Create a variable and check the navigation state.
- Based on the boolean value of navigation state, make the disabled/Enabled.

## Search Form Component

### Form Structure
- Call the SearchForm in the Landing page.
- - import `Form` from react-router-dom
- change the from element to Form in the HTML.
- Create a input field with type search and a default value.
- Create a submit button.
- apply the CSS classes for form, input, button.
- check for navigation state (refer previous block).

### Search Funtionality
- Destructure `request` in the loader function in Landing.jsx
- In JavaScript, `new URL()` is a constructor that creates a new URL object representing a parsed URL.
- Create a variable url and assign `new URL()` constructor.
- Pass the `url` from `request` to the new URL() constructor.
- In searchTerm variable, access `searchParams` and get `query parameter` from the `url`
```JS
url.searchParams.get('search');
```
- is used in JavaScript to retrieve the value of a query parameter named "search" from a URL.
- pass the `searchTerm` as props to SearchForm.
- Change the default value in the input to `searchTerm`. 

### Search Form CSS
- assets/wrappers/SearchForm.js  
- Complete CSS code using styled component in `SearchForm.js`

## React Query

### Setup
- import `QueryClient` & `QueryClientProvider` from `@tanstack/react-query`
- import `ReactQueryDevtools` from `@tanstack/react-query-devtools`
- create a queryClient variable and assign the `QueryClient`.
- Provide defaultOptions in the QueryClient with staleTime as 5 mins.
- Wrap the RouterProvider inside the QueryClientProvider and pass the client.
- Wrap the ReactQueryDevtools inside the QueryClientProvider with initialIsOpen as value false.

### React Query - Landing Page Setup
- Remove the axios response and drinks from loader function.
- import `useQuery` from `@tanstack/react-query`.
- Create a function `searchCocktailsQuery` and pass `searchTerm` as parameter.
- inside the function return a object of `queryKey` and `queryFn`
- the queryKey contains the searchTerm or 'all'.
- the queryFn conatins a async function with the axios response and returns a response of the drinks
- define useQuery inside the Landing component function, and pass the searchCocktailsQuery inside the `useQuery`.
- Destructure `data` with alias `drinks` from the `useQuery`.  

### React Query - Information
- loader function is not a hook, useQuery is a hook
- so need to find a way to invoke queryClient inside loader function.
- Solution: Need to pass the useQuery from app.jsx down to loader.

### React Query - Landing Page Complete
- In App.jsx, pass the `queryClient` as argument to the loader function (alias landingLoader)
- Transform the loader function to a function that takes a function as parameter and returns a function.
- In Landing.jsx, pass the queryClient as parameter to the loader function and returns queryClient.
- queryClient is a async function, that returns url searchTerm, and use queryClient to ensure the Query data by using `ensureQueryData` method.
- pass the function `searchCocktailsQuery` to the `ensureQueryData` method.

## React Query - Single Cocktail Page
- In App.jsx, pass the `queryClient` as a parameter to the loader function.
- Transform the loader function to a function that takes a function as parameter and returns a function.
- In Cocktail.jsx, pass the queryClient as parameter to the loader function and returns queryClient.
- import `useQuery` from `@tanstack/react-query`.
- Create a function `singleCocktailQuery` and pass `id` as parameter.
- inside the function return a object of `queryKey` and `queryFn`
- the queryKey contains array of 'cocktail' and id.
- the queryFn conatins a async function with the axios response and returns a response of the single cocktail
- define useQuery inside the Cocktail component function, and pass the singleCocktailQuery inside the `useQuery`.
- Destructure `data` from the `useQuery`.  
- queryClient is a async function, that returns id, and use queryClient to ensure the Query data by using `ensureQueryData` method.

## Redirects
- in public folder,  create a file "\_redirects"

```
/* /index.html 200
```

