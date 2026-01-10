# Beginner Investor Hub (Demo)

![Dashboard Preview](./public/dashboard-preview.png)
*A precision-engineered educational platform for mastering investment strategies.*

An educational investment platform helping new investors understand portfolios, markets, and investing behavior through interactive simulations and guided content.

## 🎯 Purpose

This is a **demo deployment** showcasing the frontend architecture and user experience. Backend services are mocked to allow evaluation without requiring paid cloud infrastructure.

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Design System**: Mechanica (Custom Design Tokens)
- **UI Components**: Custom components with Headless UI
- **State Management**: Zustand
- **Authentication**: NextAuth.js (mocked in demo)
- **Testing**: Jest + Playwright
- **Deployment**: Vercel

## ✨ Core Capabilities

| Feature | Description | Status |
| :--- | :--- | :--- |
| **Portfolio Simulator** | Build and test strategies with virtual capital in a risk-free environment. | ✅ Active |
| **AI Behavioral Coach** | Get insights on emotional decision-making patterns and biases. | ✅ Active |
| **Risk Analytics** | Engineering-grade metrics including Sharpe ratio and volatility analysis. | ✅ Active |
| **ESG Screener** | Screen investments for Environmental, Social, and Governance factors. | 🚧 Coming Soon |
| **Fractional Calculator** | Precise calculation engine for fractional share purchasing power. | ✅ Active |

## 🏗️ Architecture

The application is designed to switch seamlessly between a lightweight **Demo Mode** (current) and a scalable **Production Mode**.

```mermaid
graph TD
    User[User / Client] --> Frontend[Next.js Frontend]
    
    subgraph "Demo Architecture"
        Frontend -- "Mock Data" --> LocalMocks[Local API Routes]
        LocalMocks --> MockAuth[Mock Auth Provider]
    end
    
    subgraph "Production Architecture"
        Frontend -. "API Calls" .-> Gateway[API Gateway]
        Gateway -.-> Auth[Firebase Auth]
        Gateway -.-> CoreAPI[Core Service (Node.js)]
        Gateway -.-> Analytics[Analytics Engine (Python)]
        CoreAPI -.-> DB[(PostgreSQL)]
        Analytics -.-> Cache[(Redis)]
    end
    
    style LocalMocks fill:#e1f5fe,stroke:#01579b
    style MockAuth fill:#e1f5fe,stroke:#01579b
    style Frontend fill:#fff9c4,stroke:#fbc02d
```

## 🚀 Demo Mode

This Vercel deployment runs in **demo mode** with mocked APIs:

- Authentication is bypassed (pre-filled credentials available)
- Data is simulated locally for instant feedback
- No external services required
- Full UI/UX functionality preserved

## 📦 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Validate code quality
npm run validate
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