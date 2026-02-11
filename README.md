# Nieh0325 Personal Website

🎯 Personal website showcasing professional background, bookmarks, and YouTube collections.

## 🌐 Live Site

**https://web.nieh0325.ddns-ip.net/**

## 📁 Pages

| Page | Description | URL |
|------|-------------|-----|
| Home | Main landing page | `index.html` |
| Resume | Professional background | `resume.html` |
| Bookmarks | Useful links collection | `bookmarks.html` |
| YouTube | YouTube channel favorites | `youtube.html` |

## ✨ Features

- 🎨 Modern responsive design with glassmorphism
- 🔍 Integrated multi-search engine (Google, Bing, Yahoo, Baidu, DuckDuckGo)
- 📱 Mobile-friendly navigation
- 🔗 Quick access to personal services
- 📚 Organized bookmark collections
- 🎥 YouTube learning resources

## 🚀 Performance Optimizations

- **Images**: WebP format with JPEG fallback (84% smaller)
- **Fonts**: Google Fonts with display:swap
- **Loading**: DNS preconnect, deferred scripts
- **Caching**: Browser cache headers configured
- **Security**: XSS protection, frame options configured

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid
- **JavaScript** - Vanilla ES6+
- **No frameworks** - Lightweight and fast

## 📂 Project Structure

```
web/
├── index.html          # Home page
├── resume.html         # Resume page
├── bookmarks.html      # Bookmarks collection
├── youtube.html        # YouTube favorites
├── styles.css          # Main stylesheet
├── scripts/
│   └── main.js         # JavaScript functions
├── images/
│   ├── profile.jpg     # Profile photo (optimized)
│   ├── profile.webp    # WebP format
│   └── favicon.ico     # Site icon
├── 404.html            # Custom error page
├── robots.txt          # Search engine rules
├── sitemap.xml         # Site map
└── .htaccess           # Server configuration
```

## 🔧 Development

### Local Development

```bash
# Open in browser
open index.html

# Or serve with Python
python3 -m http.server 8000
```

### Build Commands

```bash
# Not required - static site
# Just edit files directly
```

## 📊 Optimization Report

See [OPTIMIZATION_REPORT.md](OPTIMIZATION_REPORT.md) for detailed optimization details.

## 🤝 Contributing

This is a personal website. Feel free to fork and adapt for your own use.

## 📄 License

MIT License - Feel free to use and modify.

---

**Last Updated**: 2025-02-11  
**Author**: Nieh0325
