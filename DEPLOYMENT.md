# Deployment Guide

This document explains how to securely deploy the AI-Mediated Learning Assessment Tool with proper API key management.

## 🔐 Security Overview

The tool uses Azure OpenAI GPT-5 for the chat feature. API credentials are handled securely through a configuration system that keeps sensitive data out of the repository.

### Configuration System

- `config.template.js` - Template with placeholder values (committed to repo)
- `config.js` - Actual credentials (gitignored, never committed)
- Graceful degradation when chat is not configured

## 🚀 Local Development

### 1. Clone Repository
```bash
git clone https://github.com/menonpg/ai-learning-assessment.git
cd ai-learning-assessment
```

### 2. Configure API Credentials (Optional)
```bash
# Copy template to config file
cp config.template.js config.js

# Edit config.js with your Azure OpenAI credentials
nano config.js
```

### 3. Run Locally
```bash
# Simple HTTP server (Python 3)
python -m http.server 8000

# Or using Node.js
npx http-server

# Or just open index.html in browser
open index.html
```

## 🌐 GitHub Pages Deployment

### Option 1: Assessment Only (Recommended for Public)
Deploy without chat functionality - the assessment tool works perfectly without AI integration.

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch `main`
   - Folder: `/` (root)

3. **Access your tool:**
   - URL: `https://menonpg.github.io/ai-learning-assessment/`

### Option 2: Full Functionality with Secure Deployment ⭐ **Recommended**

This approach gives users full chat functionality at your hosted URL while keeping API keys secure in the source code.

#### Step 1: Set Up GitHub Secrets
1. **Go to Repository Settings:**
   - Navigate to your repository on GitHub
   - Click Settings → Secrets and variables → Actions
   - Click "New repository secret"

2. **Add these secrets:**
   ```
   AZURE_ENDPOINT: https://your-resource.openai.azure.com/
   API_KEY: your-actual-api-key-here
   DEPLOYMENT: your-deployment-name
   API_VERSION: 2024-12-01-preview
   ```

#### Step 2: Enable GitHub Actions Deployment
The repository includes `.github/workflows/deploy.yml` which will:
- ✅ Generate `config.js` with your secrets at build time
- ✅ Deploy to GitHub Pages with full functionality
- ✅ Keep your source code completely clean
- ✅ Provide full chat experience to end users

#### Step 3: Enable GitHub Pages with Actions
1. **Repository Settings → Pages:**
   - Source: "GitHub Actions"
   - The workflow will handle everything automatically

#### Step 4: Trigger Deployment
```bash
git push origin main
```

**Result:** Users get full functionality at `https://menonpg.github.io/ai-learning-assessment/` while your source code remains secure! 🎉

#### Alternative Hosting Solutions

**Netlify (with Environment Variables):**
```bash
# Build command (add to netlify.toml)
[build]
  command = """
    echo 'window.AI_LEARNING_CONFIG = {
      AZURE_ENDPOINT: "'$AZURE_ENDPOINT'",
      API_KEY: "'$API_KEY'",
      DEPLOYMENT: "'$DEPLOYMENT'",
      API_VERSION: "'$API_VERSION'",
      ENVIRONMENT: "production"
    };' > config.js
  """
  publish = "."
```

**Vercel (with Environment Variables):**
```json
{
  "buildCommand": "echo 'window.AI_LEARNING_CONFIG={AZURE_ENDPOINT:\"'$AZURE_ENDPOINT'\",API_KEY:\"'$API_KEY'\",DEPLOYMENT:\"'$DEPLOYMENT'\",API_VERSION:\"'$API_VERSION'\",ENVIRONMENT:\"production\"};' > config.js"
}
```

## 🔒 Security Best Practices

### DO ✅
- Use environment variables or secrets management
- Keep `config.js` in `.gitignore`
- Rotate API keys regularly
- Use least-privilege API permissions
- Monitor API usage for anomalies

### DON'T ❌
- Commit API keys to public repositories
- Share config.js files
- Use production keys in development
- Ignore API rate limits
- Expose keys in client-side code for production

## 🛠️ API Key Setup

### Azure OpenAI Configuration
1. **Create Azure OpenAI Resource:**
   - Go to Azure Portal
   - Create "Azure OpenAI" resource
   - Note the endpoint URL

2. **Deploy GPT Model:**
   - Go to Azure OpenAI Studio
   - Deploy a GPT-4 or GPT-3.5 model
   - Note the deployment name

3. **Get API Key:**
   - Azure OpenAI resource → Keys and Endpoint
   - Copy Key 1 or Key 2

4. **Update config.js:**
```javascript
window.AI_LEARNING_CONFIG = {
    AZURE_ENDPOINT: "https://your-resource.openai.azure.com/",
    API_KEY: "your-api-key-here",
    DEPLOYMENT: "your-deployment-name",
    API_VERSION: "2024-12-01-preview",
    ENVIRONMENT: "production"
};
```

## 🧪 Testing

### Local Testing
```bash
# Test assessment without chat
open index.html

# Test with configuration
cp config.template.js config.js
# Edit config.js with test credentials
open index.html
```

### Production Testing
- Test assessment functionality
- Verify chat configuration warnings
- Test API rate limiting
- Monitor API costs

## 📊 Monitoring

### API Usage
- Monitor Azure OpenAI usage in Azure Portal
- Set up billing alerts
- Track API response times
- Monitor error rates

### Performance
- Use browser dev tools for performance
- Monitor Core Web Vitals
- Test on various devices/browsers

## 🚨 Troubleshooting

### Common Issues

**Chat not working:**
- Check browser console for errors
- Verify `config.js` exists and is loaded
- Check API key validity
- Verify network connectivity

**API Errors:**
- Check rate limits
- Verify deployment name
- Check API version compatibility
- Monitor Azure service status

**Deployment Issues:**
- Verify GitHub Pages is enabled
- Check build logs in GitHub Actions
- Ensure all files are committed
- Verify branch settings

## 📞 Support

For deployment issues:
- Check GitHub repository issues
- Review Azure OpenAI documentation
- Contact Dr. Menon: prahlad.menon@quant.md

---

**Remember:** The assessment tool provides valuable insights even without the AI chat feature. Deploy the core functionality first, then add AI integration as needed.
