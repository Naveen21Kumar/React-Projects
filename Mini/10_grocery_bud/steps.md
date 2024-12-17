## Grocery Bud Project

#### Step 1:- Form Component
- Create a Form component in Form.jsx
- Create a state value ***newItemName*** = Usestate(" ");
- Render the Form in UI with Title, input, Button & submit.
- Create a handle submit function to log new Item Name.
- When User Enter a value in Form, it should be log in console through Use state
  
---
#### Step 2 - Add Item
- Create a state value ***items*** = usestate ([]);
- Create a addItem function with itemName parameter.
- Create a newItem object inside function.
- After object, call the setItem function & assign newItem after spreading the items state value.
- Pass the add Item function to Form component.
- Call the add Itan function inside handle submit function.
- Ensure Empty are not passed, clear form input after submit. 
- Pass the value to state assay, check in debug components.
   
---
#### Step 3:- Render Items
- Create Items component in Items.jsx & call it in App.jsx.
- Create a removeItem function.
- Create a singleItem component in SingleItem.jsx
- Iterate over singleItem in Items.jsx & Render SingleItem.  
- When user add a item it should render singleItem.
---

#### Step 4:- Single Item
- Render Single Item with check box, Item name & delete Button.
- Create a state value ***isChecked*** for check box.
- Use isChecked in input & p tag to strike through Item name using inline css styling.
  
---
#### Step 5- Remove Item
- Filter items inside RemoveItem function. by comparing ID's.
- Pass the function to singleItem component.
- Check whether item are able to delete.
  
---
#### Step 6:- Local Storage
- Create a function setLocalStorage and write the local storage set item logic.
- Call this function in addItem and removeItem and pass the value as a argument.
- Create a function getLocalStorage and write the get Item logic , check for the string value exist or not and write the parse logic inside the conditional statement.
- Pass this function to  the items useState value.
- Can create a one-liner variable for the same above function.

---
#### Step 7:- Edit Item (Global Setup)
- Create a editItem function and iterate over the items, create a condition statement for the matching ids and toggle the items completed value, else return a item.
- after condition statement, call setItems and SetLocalStorage inside this function. 
- remove the isChecked state value and replace all the isChecked logic with editItem logic.

---
#### Step 8:- React Toastify
- Install in terminal:
    ``` cmd
    npm install --save react-toastify
    ```
- Import the CSS file in Main.jsx:
    ``` js
    import 'react-toastify/dist/ReactToastify.css';
    ```
- Import ToastContainer in App.jsx and call it:
    ``` js
    import { ToastContainer, toast } from 'react-toastify';
     <ToastContainer position='top-right' />
    ```
- Add the toast message in the required line:
  ``` jsx
  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId);
    setItems(newItem);
    setLocalStorage(newItem);
    toast.success('Item deleted');
  };
  ```
