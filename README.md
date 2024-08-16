# Blog

Fullstack blog application with frontend and backend components. The frontend is built with React and the backend is built with Node.js and Express. The frontend and backend are connected with a RESTful API.

## Features

- [x] Dynamic user profile picture using base64 encoding
- [x] Dynamic blog post miniature using base64 encoding
- [x] Functional admin panel with image downloads
- [ ] Create, read, update, and delete blog posts
- [ ] View all blog posts
- [ ] View all blog posts by a single user
- [ ] View a single blog post
- [ ] View a list of all authors
- [ ] View a single author
- [ ] View all blog posts by a single category
- [ ] View a list of all categories
- [ ] View a single category
- [ ] View all blog posts by a single tag
- [ ] View a list of all tags
- [ ] View a single tag
- [ ] View all blog posts by a single date
- [ ] View a list of all dates
- [ ] View a single date
- [ ] View all blog posts by a single search term
- [ ] View a list of all search terms
- [ ] View a single search term
- [ ] View all blog posts by a single comment
- [ ] View a list of all comments
- [ ] View a single comment

## Technologies

- React
- Django
- RESTful API

## Installation

1. Clone the repository
2. Install the dependencies
3. Start the server

### Frontend

```bash
cd blog-app/frontend
npm install
npm run start
```

### Backend

```bash
cd blog-app/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

- [Django REST framework](https://www.django-rest-framework.org/)
- [React](https://reactjs.org/)
- [Django](https://www.djangoproject.com/)
