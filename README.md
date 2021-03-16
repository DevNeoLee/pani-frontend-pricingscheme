# React Frontend for a Service-based Pricing Scheme

It fetches a JSON data object from Heroku served backend built by Rails.

Beased on the JSON data object, UI components are built dynamically
to represent again dynamically built JSON API data from backend. 

Recursive method, 'Features' component is implemented to call itelf to create
more 'subcategory' components based on the nature of the JSON data set.

Local state management is applied using 'useState' hook because some recursive states,
'toggle features' is easier to be stayed in the local component independently 
from other parent or children components.

Global state management also is implied to main App component at the roomt to support easier
management of global data, for example, total price, total features selected in the array storage.
These saved information in the global store can be used for future implementation of more sophisticated
features. 

Context API, 'useReducer', and 'useContext' hooks are chosen because it is a simple functing app but still
requires some global state management without too much boilerplate setup like 'Redux'.

## Assumption
 Users can buy as many unique feature products under as many category or sub-categories.
 

