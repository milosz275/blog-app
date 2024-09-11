# Blog

Fullstack blog application with frontend and backend components. The frontend is built with React and the backend is built with Node.js and Express. The frontend and backend are connected with a RESTful API. The Application can be set to either act like personal blog or platform for people to create their blog postings.

## Schema

Schema is generated using Swagger UI and Redoc. After running the app, schema is available at [http://localhost:8000/schema/swagger-ui](http://localhost:8000/schema/swagger-ui/) and [http://localhost:8000/schema/redoc/](http://localhost:8000/schema/redoc/).

## Features

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
