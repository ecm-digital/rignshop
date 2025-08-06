# Smart Ring E-commerce Store

A modern, multilingual e-commerce website for Smart Ring - an intelligent health monitoring device. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Multilingual Support**: Available in Polish, English, and German
- **Responsive Design**: Optimized for all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Complete E-commerce Flow**: Product showcase, variants selection, and order form
- **Performance Optimized**: Built with Next.js 14 and modern best practices

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Forms**: React Hook Form + Zod validation
- **Development**: ESLint, Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ecm-digital/rignshop.git
cd rignshop
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Language Support

The website supports three languages:
- **Polish** (default): `/pl` or `/`
- **English**: `/en`
- **German**: `/de`

## 📱 Sections

### Hero Section
- Eye-catching product presentation
- Animated smart ring visualization
- Call-to-action buttons

### Features Section
- 4 main product features with icons
- Performance statistics
- Hover animations

### Lifestyle Section
- Product usage scenarios
- Image gallery with modal view
- Key benefits showcase

### Specifications Section
- Detailed technical specifications
- Expandable categories
- Comparison with competitors

### Product Variants
- 3 color options (Black, Silver, Gold)
- Interactive variant selector
- Size guide

### Order Section
- Complete order form
- Real-time validation
- Order summary
- Multiple payment options ready

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Project Structure

```
src/
├── app/
│   ├── [locale]/          # Internationalized pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── i18n/
│   └── request.ts         # i18n configuration
├── lib/                   # Utilities and configurations
├── types/                 # TypeScript type definitions
└── middleware.ts          # Next.js middleware
messages/                  # Translation files
├── pl.json               # Polish translations
├── en.json               # English translations
└── de.json               # German translations
```

## 🎨 Customization

### Colors
The design uses a blue color scheme that can be customized in `tailwind.config.js`:
- Primary: Blue (600, 700)
- Secondary: Gray shades
- Accent: Various colors for features

### Translations
Add or modify translations in the `messages/` directory:
- `pl.json` - Polish
- `en.json` - English  
- `de.json` - German

### Components
All components are modular and can be easily customized:
- Sections in `src/components/sections/`
- UI components in `src/components/ui/`
- Layout components in `src/components/layout/`

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any other platform that supports Next.js.

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy

### Environment Variables
No environment variables are required for the basic setup. Add them as needed for:
- Payment processing (Stripe)
- Email services (Resend)
- Analytics

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and modern web technologies.