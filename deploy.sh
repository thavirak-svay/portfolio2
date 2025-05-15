#!/bin/bash

echo "🚀 Building and preparing DevBackend Portfolio for deployment..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
else
  echo "✅ Dependencies already installed"
fi

# Build the application
echo "🏗️ Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
  echo ""
  echo "🔍 Next steps:"
  echo "1. Deploy the application to Vercel with:"
  echo "   vercel deploy"
  echo ""
  echo "2. Or deploy to other platforms by configuring their settings to build with:"
  echo "   npm run build"
  echo ""
  echo "3. To run the production build locally:"
  echo "   npm start"
else
  echo "❌ Build failed. Please fix the errors and try again."
fi
