// Configuration Template
// Copy this file to config.js and fill in your actual values
// config.js is gitignored and will not be committed to the repository

window.AI_LEARNING_CONFIG = {
    // Azure OpenAI Configuration
    AZURE_ENDPOINT: "https://your-endpoint.cognitiveservices.azure.com/",
    API_KEY: "your-api-key-here",
    DEPLOYMENT: "your-deployment-name",
    API_VERSION: "2024-12-01-preview",
    
    // Optional: Environment flag
    ENVIRONMENT: "development" // or "production"
};

// Instructions:
// 1. Copy this file to config.js
// 2. Replace the placeholder values with your actual Azure OpenAI credentials
// 3. Never commit config.js to the repository
// 4. For GitHub Pages deployment, use GitHub Secrets (see README.md)
