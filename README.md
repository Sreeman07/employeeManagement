 - Create HTTP Server
        - Create Employee Schema(
                name,email,mobile,designation & companyName) and model
        - Define REST API routes for
                - Create Employee
                - Read all employees
                - Edit employee
                - Delete Employee
client side application and server side application can interact with each other over http protocol by making http request and receiving http response .
to make the http request from client side application one can use either fetch function or axios module
the following are the http request types
=GET-to read all resources
=POST-to create a new resource
=PUT-to update entire resource
=DELETE-to delete a resource
=PATCH-to update a resource partially
the post put and patch request types can have body property which can hold json data whereas
get abd delete request do not have body property and can send data through URL
# STATE MANAGEMENT
        sharing state+ keeping state sync across app

        Context API--->small apps
        redux/Zustand--->large app
# Context api
     -create context object



# issues with context
context with use state hook is a best and simple state management mechaism for small applications but it creates unecessary rerendering issues when multiple state is part of a context
to overcome this unnecessary rerendering issue create multiple context ad make sure each contex have a single state
when the application size is huge then maintainance of multiple context will become an issue.
for such large applications advance state management tools like redux or zustand can be used
# advanced state management with zustand