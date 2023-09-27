# ReactAdvFinalEventApp2

**Goal:**

In this project, you are going to  use HTML, CSS, JavaScript & React skills together to create your own event app. (Chakra UI for styling)
Create an event app. The theme is up to you, but in our starter JSON file, we have added a few examples, to show what the data structure should look like.

In short, the event dashboard app should display a list of events, add events, edit events, delete events, and show a more detailed page of an event.

**Requirements:**

- The app contains a form.
- You have used React Router.
- Events page
  - The page shows a list of all events that are retrieved from the back-end server with the following details: title, description, image, startTime, endTime and categories.
  - The user can click on an event that leads them to the ‘Event’ page using React Router.
  - There is a button that allows the user to add new events using a form. 
  - A query to add the event to the server is sent as well.
  - You can search through the events based on the name of the event.
  - You can filter through the list/search results based on categories.
- Event page
  - The event page shows the following details:  title, description, image, startTime, endTime, categories and by who it’s created (display their name and image).
  - You can click on an edit button where the user can edit the details shown on the page. This has to be done in a modal or on the same page, not an external page. 
  - The back-end server data is updated after.
  - A succes or fail message is shown after a successful update.
  - You can click on a delete button to delete the event.
  - A delete query is sent to delete the data in the back-end.
  - After deleting an event, you get redirected to the Events page.
