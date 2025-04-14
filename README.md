# EchoAPI

**EchoAPI** is a back-end API built with **Express.js**, **MongoDB**, and **Mongoose** that powers a simple social network. It allows users to create accounts, post thoughts, react to other users’ thoughts, and manage a friend list. All interactions are handled through RESTful API routes tested using tools like **Insomnia**.

---

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- Native JavaScript Date formatting

---

## Features

- Full CRUD for Users and Thoughts
- Add and remove Friends from a user's list
- Add and remove Reactions (nested replies) on thoughts
- Virtuals: 
  - `friendCount` on users
  - `reactionCount` on thoughts
- Timestamps formatted using JavaScript getters

---

## API Endpoints

### Users – `/api/users`
- `GET /` – Get all users
- `GET /:userId` – Get a single user (with populated thoughts and friends)
- `POST /` – Create a new user
- `PUT /:userId` – Update a user
- `DELETE /:userId` – Delete a user and optionally their thoughts

### Friends – `/api/users/:userId/friends/:friendId`
- `POST` – Add a friend
- `DELETE` – Remove a friend

### Thoughts – `/api/thoughts`
- `GET /` – Get all thoughts
- `GET /:thoughtId` – Get a single thought
- `POST /` – Create a new thought
- `PUT /:thoughtId` – Update a thought
- `DELETE /:thoughtId` – Delete a thought

### Reactions – `/api/thoughts/:thoughtId/reactions`
- `POST` – Add a reaction to a thought
- `DELETE /:reactionId` – Remove a reaction from a thought

---

## How to Test

All API routes can be tested using [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

Example payloads are available in the challenge instructions, or you can test custom JSON objects that match the models.

---

## Walkthrough Video

[Watch the EchoAPI Demo](https://your-demo-video-link.com)

The video includes:
- Starting the Express server
- GET/POST/PUT/DELETE routes for users and thoughts
- Adding/removing friends and reactions
- Verifying database changes in real-time

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Jimmy**  
- [GitHub](https://github.com/jimmykotter)  
- [Email](mailto:Jimmykotter@gmail.com)
