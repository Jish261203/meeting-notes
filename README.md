<div align="center">

# 📝 Meeting Notes Summarizer

Transform your meeting transcripts into AI-powered summaries with custom instructions and easy sharing capabilities.

</div>

<div align="center">

<img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/-AI_SDK-FF6B6B?style=for-the-badge&logoColor=white" alt="AI SDK" />

</div>

<div align="center">

  <!-- Add your screenshots here -->
  <img src="public/img1.png?height=400&width=600" alt="Meeting Notes Summarizer Interface" width="80%" />
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🚀 [Quick Start](#quick-start)

## 🤖 Introduction

**Meeting Notes Summarizer** is an AI-powered web application that transforms lengthy meeting transcripts into concise, actionable summaries.

Simply upload your meeting transcript and the system will:

- 📄 Process text files with drag-and-drop functionality  
- 🎯 Apply custom instructions for tailored summaries  
- 🤖 Generate AI-powered summaries with intelligent formatting  
- ✏️ Allow real-time editing of generated summaries  
- 📧 Share summaries via email or copy to clipboard  

Built with modern web technologies and designed for seamless user experience.

## ⚙️ Tech Stack

- **Next.js 14+** – React framework with App Router for optimal performance  
- **React 18** – Modern UI library with hooks and server components  
- **TypeScript** – Type-safe development and better code quality  
- **Tailwind CSS** – Utility-first CSS framework for rapid styling  
- **shadcn/ui** – Beautiful and accessible UI component library  
- **AI SDK** – Standardized AI integration for text generation  
- **Vercel** – Deployment platform with seamless CI/CD

## 🔋 Features

👉 **Drag & Drop Upload**  
Intuitive file upload interface with support for text files and drag-and-drop functionality.

👉 **Custom Instructions**  
Add specific instructions to tailor the AI summary to your needs and preferences.

👉 **AI-Powered Summarization**  
Advanced AI processing to extract key points, decisions, and action items from meetings.

👉 **Real-time Editing**  
Edit and refine generated summaries with a built-in text editor.

👉 **Multiple Sharing Options**  
Share summaries via email or copy to clipboard for easy distribution.

👉 **Responsive Design**  
Fully responsive interface that works seamlessly on desktop and mobile devices.

👉 **Modern UI/UX**  
Clean, professional interface built with shadcn/ui components and Tailwind CSS.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Node.js 18+](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

**Cloning the Repository**

```bash
git clone https://github.com/your-username/meeting-notes-summarizer.git
cd meeting-notes-summarizer
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# Add your AI service API key here
# OPENAI_API_KEY=your_openai_api_key
# GROQ_API_KEY=your_groq_api_key
```

Replace the placeholder values with your actual API credentials for AI services.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

**Building for Production**

```bash
npm run build
npm start
```

## 🚀 Deployment

The easiest way to deploy your Meeting Notes Summarizer is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/meeting-notes-summarizer)

## 📝 Usage

1. **Upload Transcript**: Drag and drop or click to upload your meeting transcript text file
2. **Add Instructions**: Provide custom instructions for how you want the summary formatted
3. **Generate Summary**: Click "Generate Summary" to process your transcript with AI
4. **Edit & Refine**: Make any necessary edits to the generated summary
5. **Share**: Use email sharing or copy to clipboard to distribute your summary

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
