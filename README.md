# User Data Collection Registration Form Developer's Guide

This guide provides an overview of the folder structure and code for the user data collection registration form built with React and Material-UI components.

## Folder Structure
```
src/
├── components/
│   ├── register/
│   │   ├── BaseFormPage.tsx
│   │   ├── RolesSelectionPage.tsx
│   │   ├── StudyTimeSelectionPage.tsx
│   │   ├── MarketingDataSurveyPage.tsx
│   │   └── InterviewTimelineSelectionPage.tsx
│   ├── utils/
│   │   └── formData.ts
│   └── App.tsx
├── index.tsx
└── styles.css
```
- components/: Contains all the registration form components.
- register/: Contains the individual pages/components of the registration form.
- BaseFormPage.tsx: Provides a base form page layout with a progress bar, previous and next buttons, and a placeholder for the actual form content.
- RolesSelectionPage.tsx: Allows users to select their desired roles from a predefined list.
- StudyTimeSelectionPage.tsx: Allows users to specify the number of hours per week and weeks to commit for their study time.
- MarketingDataSurveyPage.tsx: Allows users to indicate how they heard about the registration form from different marketing platforms.
- InterviewTimelineSelectionPage.tsx: Allows users to select an interview timeline option.
- utils/: Contains utility functions and hooks used in the registration form.
- formData.ts: Defines the form data structure and provides a custom form hook for managing form state.
- App.tsx: The main component that renders the registration form.
- index.tsx: Entry point of the application.
- styles.css: Global CSS styles for the application.

## Development Environment

To run the user data collection registration form locally, follow these steps:

1. Clone the project repository:

git clone <repository-url>

2. Install the project dependencies by navigating to the project directory and running the following command:

cd <project-directory>
npm install

3. Start the development server:

npm run dev

This command will start the development server using Vite, which provides hot module replacement and fast refresh for an optimized development experience.

4. Open your browser and visit http://localhost:3000 to view the registration form.

## Customizing and Extending

The user data collection registration form can be customized and extended based on your specific requirements. Here are a few areas you can consider:

- Adding new pages: You can create new components/pages to expand the registration form flow. Follow the existing components' structure and integrate them into the registration flow.
- Modifying form data: You can update the formData.ts file to include additional form fields or modify the existing ones based on your data collection needs.
- Enhancing UI/UX: You can customize the styles and layout of the components by modifying the CSS in styles.css. Additionally, you can leverage the Material-UI theming system to apply custom themes and styles to the components.

## Deployment

To deploy the user data collection registration form to a production environment, follow these steps:

1. Build the production-ready bundle by running the following command:

npm run build

This command will generate an optimized and minified bundle of your application in the dist/ directory.

2. Deploy the contents of the dist/ directory to your preferred hosting platform or server.

3. Set up the necessary server configurations and environment variables required for the deployment, such as API endpoints or backend integrations.

4. Start your server or hosting platform to make the registration form accessible to users.

## Conclusion

This developer's guide provides an overview of the user data collection registration form's folder structure, code components, and the development environment setup. Use this guide as a reference to understand the project structure and customize the form to suit your specific requirements.
