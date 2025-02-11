# Contact Management Application

A full-stack Contact Management application built with Express.js and React, featuring CRUD operations and PostgreSQL database integration.

## Features

- Create new contacts with name, email, phone, and optional address
- View all contacts in a responsive grid layout
- Update existing contact information
- Delete contacts
- Data persistence using PostgreSQL database
- Form validation with Zod
- Real-time updates using React Query
- Modern UI with shadcn/ui components

## Technologies Used

### Backend
- Node.js
- Express.js
- PostgreSQL (via Drizzle ORM)
- Zod for validation

### Frontend
- React
- React Query for data fetching
- React Hook Form for form management
- shadcn/ui components
- Tailwind CSS for styling
- TypeScript

## API Endpoints

### GET /api/contacts
- Fetches all contacts
- Returns an array of contacts with ID, name, email, phone, address, and creation timestamp

### GET /api/contacts/:id
- Fetches a single contact by ID
- Returns contact details or 404 if not found

### POST /api/contacts
- Creates a new contact
- Required fields: name, email, phone
- Optional fields: address
- Returns the newly created contact with ID

### PUT /api/contacts/:id
- Updates an existing contact
- Required fields: name, email, phone
- Optional fields: address
- Returns the updated contact or 404 if not found

### DELETE /api/contacts/:id
- Deletes a contact by ID
- Returns a success message or 404 if not found

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the PostgreSQL database:
   - Ensure PostgreSQL is installed and running
   - Set up environment variables in `.env`:
     ```
     DATABASE_URL=postgresql://...
     ```
4. Push the database schema:
   ```bash
   npm run db:push
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Access the application at `http://localhost:5000`

## Validation Rules

- Name: Minimum 2 characters
- Email: Valid email format
- Phone: Minimum 10 digits
- Address: Optional

## License

MIT
