# Car Dealer App

This is a car dealer application created with Next.js. The app allows users to filter vehicles by type and model year, and view the results on a separate page.

## Features

- **Filter Page:** Allows users to select vehicle type and model year. The "Next" button is enabled only when both filters are selected.
- **Results Page:** Displays vehicle models based on the selected type and year. Uses React Suspense to handle loading states.

## Technologies Used

- **Next.js:** React framework for server-side rendering and static site generation.
- **Tailwind CSS:** CSS library for fast and responsive styling.
- **React Suspense:** Manages loading states and asynchronous operations.

## Setting Up the Environment

### 1. Clone the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/AndreinaLima/car-dealer-app.git
cd repository-name
```

### 2. Install Dependencies

Install the project dependencies with:

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a .env.local file at the root of the project and add the following environment variables:

```plaintext
NEXT_PUBLIC_API_MODELS_URL=https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear
NEXT_PUBLIC_API_MAKES_URL=https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car
```

### 4. Run the Development Server

Start the development server with:

```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:3000.

### 5. Build the Project

To build the project for production, use:

```bash
npm run build
# or
yarn build
```

Then, start the production server with:

```bash
npm start
# or
yarn start
```

## Project Structure

- /pages: Contains Next.js pages. Includes the main filter page and the results page.
- /components: Contains reusable React components.
- /styles: Contains global and custom styles using Tailwind CSS.

## Styling

The project uses Tailwind CSS for styling. Tailwind classes are applied directly to components for modern and responsive design.
