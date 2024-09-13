# Blog App

[![GitHub Tag](https://img.shields.io/github/v/tag/mldxo/blog-app)](https://github.com/mldxo/blog-app/)
[![License](https://img.shields.io/github/license/mldxo/blog-app)](LICENSE)
[![GitHub Pages](https://github.com/mldxo/blog-app/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/mldxo/blog-app/actions/workflows/pages/pages-build-deployment)

Fullstack [blog](https://github.com/mldxo/blog-app) application with frontend and backend components. The frontend is built with React and the backend is built with Node.js and Express. The frontend and backend are connected with a RESTful API. The Application can be set to either act like personal blog or platform for people to create their blog postings.

## Schema

Schema is generated using Swagger UI and Redoc. After running the app, schema is available at [http://localhost:8000/schema/swagger-ui](http://localhost:8000/schema/swagger-ui/) and [http://localhost:8000/schema/redoc/](http://localhost:8000/schema/redoc/).

## Features

### Frontend

- [ ] Main page with blog posts and features
- [x] User logout

### Backend

- [x] User registration
- [x] User login
- [x] Dynamic user profile picture using base64 encoding
- [x] Dynamic blog post miniature using base64 encoding
- [x] Functional admin panel with image downloads

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
- [Undraw code thinking illustration](https://github.com/chriscarlisle/chriscarlisle.github.io/blob/master/undraw_code_thinking_1jeh.svg)
- [Undraw programming illustration](https://github.com/WebsyIO/blog-posts/blob/master/undraw_programming_2svr.svg)
- [Undraw code review illustration](https://github.com/jetleebruce/jetleebruce.github.io/blob/master/undraw_code_review_l1q9.svg)
- [Undraw version control illustration](https://github.com/ayushhurdey/ayushhurdey/blob/main/undraw_version_control_9bpv.svg)
