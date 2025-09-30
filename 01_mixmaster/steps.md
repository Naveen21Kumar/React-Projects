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

