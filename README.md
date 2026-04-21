# 🚀 Modern Agency Website Template

A beautiful, fully responsive, and SEO-optimized website template built with **Next.js 15**, **Tailwind CSS**, and **shadcn/ui**. Perfect for agencies, startups, or any business looking for a professional web presence.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=gsap)

[![Watch the video](https://i9.ytimg.com/vi/lKbg6UZc2P4/mqdefault.jpg?sqp=CKSs1MYG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACzAWKAgwIABABGDogUShyMA8=&rs=AOn4CLBRBnaKFTOTmQ-6DfAjTWoyN1WyZQ)]([https://youtu.be/vt5fpE0bzSY](https://youtu.be/lKbg6UZc2P4))


## ✨ Features

### 🎨 **Modern Design**
- Clean, professional design with smooth animations
- Fully responsive across all devices
- Dark/light theme support
- Custom color schemes and branding

### ⚡ **Performance Optimized**
- Built with Next.js 15 App Router
- Static site generation (SSG) for blazing fast loading
- Optimized images and assets
- SEO-friendly with proper meta tags and structured data

### 🎭 **Smooth Animations**
- GSAP-powered animations (no Framer Motion needed!)
- Scroll-triggered animations
- Staggered content reveals
- Smooth page transitions

### 📱 **Responsive & Accessible**
- Mobile-first responsive design
- WCAG 2.1 compliant accessibility
- Keyboard navigation support
- Screen reader friendly

### 🔍 **SEO Ready**
- Centralized metadata management
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Canonical URLs and sitemap ready

### 📝 **Content Management**
- MDX support for blog posts
- Easy content updates
- Dynamic routing for blog posts
- Markdown with syntax highlighting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: GSAP
- **Content**: MDX
- **Deployment**: Vercel Ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd <your-repository-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── custom/            # Custom components
│   ├── landing/           # Landing page sections
│   ├── magicui/           # UI components
│   └── ui/                # shadcn/ui components
├── content/               # MDX blog posts
├── data/                  # Static data
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
│   ├── metadata.ts        # SEO metadata config
│   ├── GSAPAnimations.ts  # Animation utilities
│   └── utils.ts           # Helper functions
└── public/                # Static assets
```

## 🎨 Customization

### Branding
1. **Update the logo** in `components/custom/Navbar.tsx`
2. **Change colors** in `tailwind.config.js`
3. **Update site info** in `lib/metadata.ts`

### Content
1. **Homepage sections** in `components/landing/`
2. **About page** in `app/about/page.tsx`
3. **Blog posts** in `content/` directory

### SEO
1. **Site metadata** in `lib/metadata.ts`
2. **Page-specific metadata** in individual page files
3. **Structured data** for better search visibility

## 📝 Adding Blog Posts

1. Create a new `.mdx` file in the `content/` directory
2. Add frontmatter with required fields:
   ```mdx
   ---
   title: "Your Post Title"
   publishedAt: "2024-01-01"
   summary: "Brief description of your post"
   image: "path/to/image.jpg"
   tag: ["Tag1", "Tag2"]
   ---
   
   Your post content here...
   ```

## 🎭 Animation System

This template uses GSAP for smooth, performant animations:

- **Scroll-triggered animations** for content reveals
- **Staggered animations** for lists and grids
- **Smooth transitions** between pages
- **Custom animation effects** in `lib/GSAPAnimations.ts`


## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Areas for Contribution
- 🎨 New page templates
- 🎭 Additional animation effects
- 📱 Mobile optimizations
- ♿ Accessibility improvements
- 📚 Documentation updates

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [GSAP](https://greensock.com/gsap/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

- 📧 **Email**: [hello@centurionstudio.example](mailto:hello@centurionstudio.example) — or use the contact options in your deployment (see `lib/contact.ts` and `NEXT_PUBLIC_*` environment variables).
- 🐛 **Issues**: Track bugs and requests in whatever issue tracker you use for the project.
- 💬 **Discussions**: Use your team’s preferred channel for design and roadmap conversations.

## 🌟 Show Your Support

If you found this template helpful, share it with someone who might benefit.

---

**Built with ❤️ by Centurion Studio**

*This template is designed to be a starting point for your next project. Feel free to customize it to match your brand and requirements!*
