# Enhanced Presentation Template

This project is a reusable JavaScript-based presentation template created with React, featuring improved performance, accessibility, and error handling.

## Features

- Multiple slide types (opening, images, chart, code block, Python compiler, closing)
- Light and dark modes with smooth transitions
- Responsive design optimized for mobile devices
- Error boundary for graceful error handling
- Lazy loading of slide components for improved performance
- Improved accessibility with keyboard navigation and ARIA labels
- Demo logo and watermark

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## Customizing the Presentation

To modify the presentation content, edit the individual slide components in the `src/slides` directory. The slides are now lazy-loaded for improved performance.

## Adding New Slides

1. Create a new slide component in `src/slides`
2. Import the new slide in `App.js` using `React.lazy`
3. Add the new slide to the `slides` array in `App.js`

## Keyboard Navigation

- Use the right arrow key to move to the next slide
- Use the left arrow key to move to the previous slide

## Dependencies

- React
- Tailwind CSS
- Recharts (for charts)
- Lucide React (for icons)

## Future Improvements

- Implement a backend service for securely executing Python code
- Add unit and integration tests
- Implement more advanced animations for slide transitions

## License

This project is licensed under the MIT License.