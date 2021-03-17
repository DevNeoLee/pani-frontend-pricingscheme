
# Pani React ContextAPI and 'useReducer' Hook Frontend

### Dynamic recursive UI components were built depending on another recursive structure of backend API Json data set
---
### live site: https://devneolee.github.io/pani-frontend-pricingscheme/
---

## React Frontend for a Service-based Pricing Scheme

It fetches the JSON data object from Heroku served backend built by Rails and stores in a reducer state.

Beased on the JSON data set, UI components are built dynamically and recursively
to represent again dynamic and recursive nature of JSON API backend data set. 

Recursive method, 'Features' component is implemented to call itelf to create
more 'subcategory' components.

Local state management is applied using 'useState' hook because some recursive states,
for example 'toggle features' is reasonable to be contained in the local component independently 
from other parent or children components in the global store.

Global state management also is implied in the main App component to support management of global data, 
for example, total price, features purchased list were sent to in the array at the global state.
And stored information in the global state can be used for future implementation of more sophisticated
features in overall app building progress. 

Context API, 'useReducer', and 'useContext' hooks are chosen in this project for its simple yet effectivive quality.
They served well for the required business logic of the global state management without a complicated boilerplating 
tool like 'Redux'.

## Assumption
 Users can buy as many unique feature products under as many category and sub-categories.
 

