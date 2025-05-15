#!/bin/bash

# Exit on any error
set -e

echo "🚀 Deploying DevBackend Portfolio"
echo "--------------------------------"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found"
    echo "Please install Vercel CLI with: npm install -g vercel"
    exit 1
fi

# Make sure we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found"
    echo "Please run this script from the project root directory"
    exit 1
fi

# Check if there are uncommitted changes
if [ -d ".git" ] && ! git diff-index --quiet HEAD --; then
    echo "⚠️  You have uncommitted changes"
    read -p "Do you want to continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled"
        exit 1
    fi
fi

# Run tests if available
if grep -q "\"test\":" package.json; then
    echo "🧪 Running tests..."
    npm test
fi

# Build the project
echo "🏗️  Building project..."
npm run build

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel deploy --prod

echo "✅ Deployment complete!"
echo "Visit your deployed site using the URL provided by Vercel above."
