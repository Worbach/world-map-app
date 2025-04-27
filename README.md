# Interactive World Map

## Overview

This project is an interactive world map web application developed as part of the D280 JavaScript Programming course. The application uses an SVG map of the world converted into an Angular component to provide an engaging visual interface. By integrating data from external APIs (GeoNames and Worldbank), the app dynamically displays detailed country information—such as country name, capital, region, income level, and additional properties—when a user interacts with the map.

## Key Features

- **SVG Map Integration**  
  - An SVG map of the world is identified and used as the basis for the visual interface.
  - All “path” tags in the SVG are connected to mouse event handlers, enabling interactivity and transmitting the selected country’s data to the parent Angular component.

- **Angular Routing & Layout**  
  - The map component is assigned to the default URL using an Angular routing module.
  - The application layout is structured into two columns: one displaying the interactive map and the other showing country details retrieved from API calls.

- **API Integration**  
  - Uses the built-in Angular HTTP client to call external APIs (GeoNames or Worldbank).
  - Retrieves six properties for each country, including country name, capital, region, income level, and two additional properties of choice.
  - Provides a method that accepts a country name to trigger the API call and set a local variable with the country’s information for display.

- **User Experience & Documentation**  
  - The HTML layout is designed with clarity and ease-of-use in mind, ensuring that country information is readily available alongside the interactive map.
  - The project includes all required files (HTML, TypeScript, SVG, and JSON configuration files) and is version controlled via GitLab.

## Setup and Usage

### Prerequisites
- **Node.js** and **Angular CLI**
- **MS Visual Studio Code** or your preferred IDE

### Installation
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd world-map-app

2. Install Dependencies
   In terminal:
   npm install

3. Run the Application
   In terminal:
   ng serve

4. Access the App
Open your browser and navigate to http://localhost:4200 to interact with the map.

### File Structure
HTML Layout:
Contains a two-column design with one column dedicated to the SVG map and the other to display country information.

Angular Components:

The map component is interactive and captures mouse events on each country.

The parent component handles API calls and displays the retrieved data.

API Service:
Uses Angular’s HTTP client to perform GET requests based on the selected country name.
