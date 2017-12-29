# Expensify
A Basic Expense manager crud app - SPA built with react and redux.

App Link: https://expensifyaks.herokuapp.com

## Features
1. Google authentication.
1. Text, amount and date based filters.
1. Basic CRUD operations.
1. Connected with realtime firebase db.
1. Testing using Jest and Enzyme.
1. Styled with Sass.

## Setting up the App

* ### Firebase app setup
1. For local setup, you have to first and setup create your firebase app and setup database, then in 
rules tab of database, paste following code : 
```
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid",
        "expenses": {
          "$expense_id": {
            ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
            "description": { 
            	".validate": "newData.isString() && newData.val().length > 0"
            },
            "note": { 
            	".validate": "newData.isString()"
            },
            "createdAt": { 
            	".validate": "newData.isNumber()"
            },
            "amount": { 
            	".validate": "newData.isNumber()"
            },
            "$other": {
              ".validate": false
            }
          }
        },
        "$other": {
          ".validate": false
        }
      }
    }
  }
}
```
* ### Firebase credential setup
1. Clone the repo.

1. Create a file in root directory of app named as '.env.developement.' and use the following markup and add your firebase app credentials.
```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
```
* ### Running the app
1. Yarn must be installed to setup the app.

1. cd into the root dir of app and run following commands and then open http://localhost:8080 to access the app. 
```
yarn install
yarn run dev-server
```
