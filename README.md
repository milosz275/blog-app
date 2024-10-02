# Blog App

[![Django CI](https://github.com/mldxo/blog-app/actions/workflows/django.yml/badge.svg)](https://github.com/mldxo/blog-app/actions/workflows/django.yml)
[![GitHub Pages](https://github.com/mldxo/blog-app/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/mldxo/blog-app/actions/workflows/pages/pages-build-deployment)
[![GitHub Tag](https://img.shields.io/github/v/tag/mldxo/blog-app)](https://github.com/mldxo/blog-app/)
[![License](https://img.shields.io/github/license/mldxo/blog-app)](LICENSE)

Fullstack [blog](https://github.com/mldxo/blog-app) application with frontend and backend components. The frontend is built with React and the backend is built with Node.js and Express. The frontend and backend are connected with a RESTful API. The Application can be set to either act like personal blog or platform for people to create their blog postings.

## Schema

Schema is generated using Swagger UI and Redoc. After running the app, schema is available at [http://localhost:8000/schema/swagger-ui](http://localhost:8000/schema/swagger-ui/) and [http://localhost:8000/schema/redoc/](http://localhost:8000/schema/redoc/).

## Features

Application variants:

- Personal Blog
- Forum with user registration

Personal blog offers the page owner to create blog posts and modify them with Django admin panel. People can view public posts and provide their feedback if verified the email. Frontend login and registration components are disabled.

Forum offers user registration and login with password, adjustable user profile, and blog post creation with an option to react to other people's posts if logged in.

### Frontend

- [ ] Main page with blog posts and features
- [x] User logout

### Backend

- [x] User registration
- [x] User login
- [x] Dynamic user profile picture using base64 encoding
- [x] Dynamic blog post miniature using base64 encoding
- [x] Functional admin panel with image downloads
- [ ] User profile modification
- [ ] User email registration verification
- [ ] User password reset
- [ ] User password change
- [ ] Language selection

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
python manage.py makemigrations users posts
touch .env
echo "SECRET_KEY=your_secret_key" >> .env
echo "DEBUG=True" >> .env
python manage.py migrate
python manage.py runserver
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

- [Django REST framework](https://www.django-rest-framework.org/)
- [React](https://reactjs.org/)
- [Django](https://www.djangoproject.com/)
- [Undraw illustrations](https://undraw.co/)
