# Supabase Configuration for Survey Forms

This repository has been configured to securely inject Supabase credentials during the build process using GitHub repository secrets.

## Setup Required

To enable the survey functionality, you need to configure the following repository secrets in your GitHub repository:

### 1. Navigate to Repository Settings
- Go to your repository on GitHub
- Click on "Settings" tab
- In the left sidebar, click on "Secrets and variables" → "Actions"

### 2. Add the Required Secrets
Add the following secrets by clicking "New repository secret":

**Secret Name:** `SUPABASE_URL`  
**Secret Value:** Your Supabase project URL (e.g., `https://yourproject.supabase.co`)

**Secret Name:** `SUPABASE_ANON_KEY`  
**Secret Value:** Your Supabase anonymous/public key

### 3. How It Works

The build process uses these secrets to inject the real Supabase credentials into the survey forms during deployment:

1. **Source Files**: The survey files (`content/pre-workshop-survey.qmd` and `content/post-workshop-survey.qmd`) contain placeholder variables `${SUPABASE_URL}` and `${SUPABASE_ANON_KEY}`
2. **Build Process**: During GitHub Actions deployment, these placeholders are replaced with the actual values from repository secrets
3. **Fallback**: If secrets are not configured (e.g., for forks or pull requests), the placeholders are replaced with safe default values

### 4. Security Benefits

- ✅ No sensitive credentials are stored in source code
- ✅ Credentials are securely managed through GitHub secrets
- ✅ Forks and pull requests can still build without access to secrets
- ✅ Credentials are only available during the build process

### 5. Local Development

For local development, the survey forms will use placeholder values. The actual Supabase integration will only work on the deployed site with proper secrets configured.

### 6. Troubleshooting

If survey forms are not working:
1. Verify that both secrets are correctly set in repository settings
2. Check the GitHub Actions logs for any errors during the "Inject Supabase secrets" step
3. Ensure the secret values don't contain special characters that might interfere with the substitution process

## File Changes Made

The following files were modified to implement secret injection:

- `.github/workflows/render-and-deploy.yml` - Added secret injection step
- `content/pre-workshop-survey.qmd` - Replaced hardcoded values with placeholders
- `content/post-workshop-survey.qmd` - Replaced hardcoded values with placeholders