# 🚀 Quick Setup Guide

Get your AI-Mediated Learning Assessment Tool running with full chat functionality in 10 minutes!

## ✨ The Magic Solution

**Problem:** You want users to have full AI chat functionality at your hosted URL, but keep API keys secure in your open-source code.

**Solution:** GitHub Actions + Secrets = Secure deployment with full functionality! 🎉

## 📋 Prerequisites

- GitHub repository
- Azure OpenAI resource (or can create one)
- 5-10 minutes

## 🔧 Step-by-Step Setup

### 1. Get Your Azure OpenAI Credentials

**If you don't have Azure OpenAI yet:**
1. Go to [Azure Portal](https://portal.azure.com)
2. Create "Azure OpenAI" resource
3. Go to Azure OpenAI Studio
4. Deploy a GPT-4 model
5. Note your endpoint URL and deployment name

**Collect these 4 values:**
```
✅ AZURE_ENDPOINT: https://your-resource.openai.azure.com/
✅ API_KEY: your-32-character-api-key
✅ DEPLOYMENT: your-model-deployment-name  
✅ API_VERSION: 2024-12-01-preview
```

### 2. Add Secrets to GitHub Repository

1. **Go to your repository on GitHub**
2. **Click Settings tab** (top of repository page)
3. **Click "Secrets and variables" → "Actions"** (left sidebar)
4. **Click "New repository secret"**
5. **Add each secret:**

   | Name | Value |
   |------|-------|
   | `AZURE_ENDPOINT` | `https://your-resource.openai.azure.com/` |
   | `API_KEY` | `your-actual-32-character-key` |
   | `DEPLOYMENT` | `your-deployment-name` |
   | `API_VERSION` | `2024-12-01-preview` |

### 3. Enable GitHub Pages with Actions

1. **Repository Settings → Pages** (left sidebar)
2. **Source:** Select "GitHub Actions"
3. **Save**

### 4. Deploy! 

```bash
git add .
git commit -m "Enable secure deployment with full functionality"
git push origin main
```

**That's it!** 🎉

## ✅ What Happens Next

1. **GitHub Actions runs** (check Actions tab)
2. **Config.js gets generated** with your secrets (build-time only)
3. **Site deploys to GitHub Pages** with full functionality
4. **Users get full AI chat** at your hosted URL
5. **Source code stays clean** - no API keys visible

## 🌐 Your Live URL

After deployment completes (~2 minutes):
```
https://menonpg.github.io/ai-learning-assessment/
```

## ✨ Benefits

✅ **End users:** Full AI chat functionality  
✅ **Your code:** Completely secure, no API keys  
✅ **Deployment:** Automated, zero maintenance  
✅ **Cost:** Free hosting on GitHub Pages  
✅ **Updates:** Just push to main branch  

## 🔍 Verify It's Working

1. **Check GitHub Actions:**
   - Go to "Actions" tab in your repository
   - Should see green checkmark for deployment

2. **Test your live site:**
   - Visit your GitHub Pages URL
   - Complete an assessment
   - Try the "Chat with Dr. Menon" feature

3. **Verify source code security:**
   - Check your repository files
   - No `config.js` should be visible
   - Your API keys are nowhere in the code

## 🆘 Troubleshooting

**Deployment failed?**
- Check Actions tab for error details
- Verify all 4 secrets are added correctly
- Make sure Azure OpenAI resource is active

**Chat not working on live site?**
- Check browser console for errors
- Verify API key permissions in Azure
- Check Azure OpenAI quota/billing

**Still need help?**
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed troubleshooting
- Open an issue in the repository

## 🎯 Pro Tips

- **Monitor usage:** Set up billing alerts in Azure
- **Test locally:** Copy `config.template.js` to `config.js` for development
- **Update secrets:** Rotate API keys regularly in GitHub Secrets
- **Scale up:** Add rate limiting if you get high traffic

---

**🎉 Congratulations!** You now have a production-ready, secure AI learning assessment tool that your users can access with full functionality while keeping your API keys completely safe.
