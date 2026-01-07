# Beginner Investor Hub (Demo)

An educational investment platform helping new investors understand portfolios, markets, and investing behavior through interactive simulations and guided content.

## 🎯 Purpose

This is a **demo deployment** showcasing the frontend architecture and user experience. Backend services are mocked to allow evaluation without requiring paid cloud infrastructure.

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: Vercel

## ✨ Features

- Portfolio simulation interface
- Interactive learning dashboards
- Behavioral finance concepts
- Responsive, accessible design
- Mock API integration (demo mode)

## 🚀 Demo Mode

This Vercel deployment runs in **demo mode** with mocked APIs:

- Authentication is bypassed
- Data is simulated locally
- No external services required
- Full UI/UX functionality preserved

**Production architecture** includes:
- Microservices backend (Node.js, Python)
- Cloud infrastructure (Google Cloud Run)
- PostgreSQL database
- Redis caching
- Vertex AI integration

## 🔗 Live Demo

**URL**: https://beginnerinvestorhub.vercel.app

## 📦 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` 

## 🔐 Environment Variables

For demo mode (default):
```env
NEXT_PUBLIC_APP_MODE=demo
```

For production mode:
```env
NEXT_PUBLIC_APP_MODE=production
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

## 🏗️ Related Repositories

**Backend & Infrastructure**: [Link to main repository]

## ⚠️ Disclaimer

This is an educational project created for learning purposes. 

**Not financial advice.** Always consult with qualified financial advisors before making investment decisions.

## 📄 License

[Your License Here]

## 👤 Author

Kevin Ringler
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]