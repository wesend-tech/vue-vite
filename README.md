# Sample Vue + Vite
## This simple example will update a ref'd object
### If a ref object, or its properties are updated, the new object will re-render
This is a simple example of using Vue with Vite, and updating a ref object
1. Creates a get request to (using nestjs, outside the scope of this project), or returns a mocked object
2. After 2 seconds the client's name on the object is updated, and the ref renders the changes

This was for my own understanding of using a "mounted" view (async request) and updating refs
To run this use `npm run dev` to see the ref'd object update.