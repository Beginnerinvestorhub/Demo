# Beginner Investor Hub (Demo)

An educational investment platform helping new investors understand portfolios, markets, and investing behavior through interactive simulations and guided content.

## 🎯 Purpose

This is a **demo deployment** showcasing the frontend architecture and user experience. Backend services are mocked to allow evaluation without requiring paid cloud infrastructure.

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Headless UI
- **State Management**: Zustand
- **Authentication**: NextAuth.js (mocked in demo)
- **Testing**: Jest + Playwright
- **Deployment**: Vercel

## ✨ Features

- Portfolio simulation interface
- Interactive learning dashboards
- Behavioral finance concepts
- ESG screening tools
- Risk assessment forms
- Fractional share calculator
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

## 📦 Local Development

```bash
# Install dependencies (from root)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Validate code quality
npm run validate

# Health check
npm run health-check
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

## 📁 Project Structure

```
├── frontend/           # Main Next.js application
│   ├── components/     # React components
│   ├── pages/          # Next.js pages
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility libraries
│   ├── styles/         # CSS/styling
│   ├── public/         # Static assets
│   └── scripts/        # Build/deployment scripts
├── .gitignore          # Git ignore rules
├── package.json        # Root package.json (workspace config)
└── README.md          # This file
```

## 🔗 Live Demo

**URL**: [https://beginnerinvestorhub.vercel.app/](https://beginnerinvestorhub.vercel.app/)

## 🧪 Testing

- **Unit Tests**: Jest
- **Integration Tests**: Playwright (E2E)

```bash
# Run unit tests
npm test

# Run E2E tests
npm run e2e
```

## ⚠️ Disclaimer

This is an educational project created for learning purposes. 

**Not financial advice.** Always consult with qualified financial advisors before making investment decisions.

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

## 👤 Author

**Kevin Ringler**
Full-Stack Software Engineer

- **GitHub Repository**: [https://github.com/Beginnerinvestorhub/Demo](https://github.com/Beginnerinvestorhub/Demo)
- **LinkedIn**: [https://www.linkedin.com/in/kevin-ringler](https://www.linkedin.com/in/kevin-ringler)
- **Portfolio**: [kevinringler.dev](https://kevinringler.dev)

---

*Built with ❤️ using Next.js, TypeScript, and modern web technologies.*
