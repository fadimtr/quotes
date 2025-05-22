# Quotes of the Day Application

A full-stack application that displays inspirational quotes using the FavQs API. The application consists of a React frontend and a Node.js/Express backend.

## 🚀 Features

- Display daily inspirational quotes
- Modern and responsive UI built with React and Material-UI
- Efficient data caching on the backend
- TypeScript support for both frontend and backend
- RESTful API architecture

## 🛠️ Tech Stack

### Backend
- Node.js with Express
- TypeScript
- Axios for HTTP requests
- Node-cache for data caching
- CORS enabled
- Environment variables support

### Frontend
- React 18
- TypeScript
- Material-UI for components
- Styled Components
- React Query for data fetching
- Axios for API calls

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TypeScript

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

1. Create a `.env` file in the backend directory:
```env
PORT=3001
FAVQS_API_KEY=your_api_key_here
```

2. Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:3001
```

## 🚀 Running the Application

### Backend
```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

### Frontend
```bash
# Development mode
npm start

# Production build
npm run build
```

## 📁 Project Structure

```
├── backend/
│   ├── src/
│   │   ├── app.ts
│   │   ├── routes/
│   │   ├── services/
│   │   └── types/
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── types/
    ├── package.json
    └── tsconfig.json
```

## 🔍 API Endpoints

### Random Quotes Endpoint
`GET /api/random`

Get random inspirational quotes with various filtering options.

#### Query Parameters:
- `count` (optional): Number of quotes to return (default: 1)
- `page` (optional): Page number for pagination (default: 1)
- `filter` (optional): Filter quotes by specific criteria
  - Example: `?filter=author:Albert Einstein`

#### Example Requests:
```bash
# Get a single random quote
GET /api/random

# Get 5 random quotes
GET /api/random?count=5

# Get quotes from page 2
GET /api/random?page=2

# Get 3 random quotes filtered by author
GET /api/random?count=3&filter=author:Albert Einstein
```

#### Response Format:
```json
{
  "quotes": [
    {
      "id": "string",
      "text": "string",
      "author": "string",
      "tags": ["string"]
    }
  ],
  "pagination": {
    "currentPage": number,
    "totalPages": number,
    "totalQuotes": number
  }
}

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- FavQs API for providing the quotes data
- Material-UI for the component library
- React Query for data fetching and caching