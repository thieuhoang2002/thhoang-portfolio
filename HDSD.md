# Hướng Dẫn Sử Dụng - THHoang Portfolio

Tài liệu hướng dẫn chi tiết về cách cấu hình, phát triển và deploy portfolio website lên GitHub Pages.

---

## 📋 Mục lục

1. [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
2. [Cài đặt dự án](#cài-đặt-dự-án)
3. [Cấu hình môi trường](#cấu-hình-môi-trường)
4. [Chạy dự án local](#chạy-dự-án-local)
5. [Cấu trúc dự án](#cấu-trúc-dự-án)
6. [Tùy chỉnh nội dung](#tùy-chỉnh-nội-dung)
7. [Build production](#build-production)
8. [Deploy lên GitHub Pages](#deploy-lên-github-pages)
9. [Xử lý sự cố](#xử-lý-sự-cố)

---

## 🖥️ Yêu cầu hệ thống

- **Node.js**: Phiên bản 16 trở lên (khuyến nghị 18+)
- **npm** hoặc **yarn**: Package manager
- **Git**: Để quản lý version control
- **GitHub Account**: Để deploy lên GitHub Pages

Kiểm tra phiên bản:
```bash
node --version    # Nên >= v16.0.0
npm --version     # Nên >= 8.0.0
git --version
```

---

## 📦 Cài đặt dự án

### 1. Clone repository

```bash
# Clone từ GitHub
git clone https://github.com/thieuhoang2002/thhoang-portfolio.git
cd thhoang-portfolio
```

### 2. Cài đặt dependencies

```bash
npm install
```

Các package chính sẽ được cài:
- `react` (v19.2.3) - Framework UI
- `react-router-dom` - Routing
- `framer-motion` - Animations
- `lucide-react` - Icons
- `vite` - Build tool
- `typescript` - Type checking

---

## ⚙️ Cấu hình môi trường

### 1. File `.env.local`

Tạo file `.env.local` trong thư mục gốc (nếu chưa có):

```bash
# API Keys (nếu cần)
GEMINI_API_KEY=your_api_key_here
```

**Lưu ý:** File `.env.local` đã được thêm vào `.gitignore` nên không bị push lên GitHub.

### 2. Cấu hình `vite.config.ts`

File này đã được cấu hình sẵn:

```typescript
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,              // Dev server chạy ở port 3000
      host: '0.0.0.0',         // Cho phép truy cập từ mạng nội bộ
    },
    base: mode === 'production' 
      ? '/thhoang-portfolio/'  // Base URL cho GitHub Pages
      : '/',                   // Base URL cho local dev
    plugins: [react()],
    // ... các config khác
  };
});
```

**Quan trọng:** `base` phải khớp với tên repository GitHub của bạn.

### 3. Cấu hình `package.json`

```json
{
  "name": "thhoang-portfolio",
  "homepage": "https://thieuhoang2002.github.io/thhoang-portfolio",
  "scripts": {
    "dev": "vite",           // Chạy dev server
    "build": "vite build",   // Build production
    "preview": "vite preview" // Preview production build
  }
}
```

**Thay đổi cần thiết:**
- `homepage`: Đổi thành URL GitHub Pages của bạn
- Format: `https://<username>.github.io/<repository-name>`

---

## 🚀 Chạy dự án local

### Development mode

```bash
npm run dev
```

- Server sẽ chạy tại: `http://localhost:3000`
- Hot reload tự động khi sửa code
- Source maps để debug dễ dàng

### Production preview

```bash
npm run build
npm run preview
```

- Build project trước
- Preview build ở `http://localhost:4173`
- Kiểm tra trước khi deploy

---

## 📁 Cấu trúc dự án

```
thhoang-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── BentoCard.tsx       # Component card bento grid
│   │   ├── CreativeCorner.tsx  # Component góc sáng tạo
│   │   ├── Hero.tsx            # Component hero section
│   │   └── TechStack.tsx       # Component tech stack
│   ├── pages/
│   │   ├── Home.tsx            # Trang chủ
│   │   └── ProjectDetail.tsx   # Chi tiết project
│   ├── App.tsx                 # Component chính, router
│   ├── constants.tsx           # Dữ liệu: projects, skills, social links
│   ├── types.ts                # TypeScript types
│   └── index.tsx               # Entry point
├── public/                     # Static assets (nếu có)
├── .env.local                  # Environment variables (local)
├── .gitignore                  # Files không push lên Git
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite config
├── HDSD.md                     # File này
└── README.md                   # Documentation
```

---

## ✏️ Tùy chỉnh nội dung

### 1. Thông tin cá nhân

Mở file `src/constants.tsx`:

```typescript
// Social links
export const SOCIAL_LINKS = [
  { 
    name: 'GitHub', 
    icon: <Github size={20} />, 
    url: 'https://github.com/YOUR_USERNAME' // Đổi URL
  },
  { 
    name: 'Email', 
    icon: <Mail size={20} />, 
    url: 'mailto:your.email@example.com' // Đổi email
  },
  // ... thêm hoặc bớt links
];
```

### 2. Danh sách Projects

Trong `src/constants.tsx`, chỉnh sửa `PROJECTS`:

```typescript
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Tên Project',
    description: 'Mô tả ngắn',
    longDescription: 'Mô tả chi tiết...',
    features: [
      'Feature 1',
      'Feature 2',
    ],
    tags: ['React', 'Node.js'],
    githubUrl: 'https://github.com/...',
    demoUrl: 'https://demo-url.com',
    image: 'https://picsum.photos/800/450' // Hoặc đường dẫn ảnh
  },
  // Thêm projects khác...
];
```

### 3. Kỹ năng (Skills)

```typescript
export const SKILLS: Skill[] = [
  {
    name: 'Frontend',
    icon: <Code2 className="w-6 h-6" />,
    items: ['React', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  // Thêm skill categories...
];
```

### 4. Creative Corner (Blog/Articles)

```typescript
export const CREATIVE_ITEMS: CreativeItem[] = [
  {
    id: '1',
    title: 'Tiêu đề bài viết',
    description: 'Mô tả...',
    type: 'article',
    url: '#',
    date: '2025-01-01'
  },
  // Thêm items khác...
];
```

### 5. Thay đổi màu sắc theme

Mở `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#...', // Màu chính
        // Thêm màu custom
      }
    }
  }
}
```

---

## 🏗️ Build production

### 1. Build project

```bash
npm run build
```

Output:
- Tạo thư mục `dist/` chứa files đã build
- Files được minified và optimized
- CSS được extract và optimize

### 2. Kiểm tra build

```bash
npm run preview
```

- Mở `http://localhost:4173`
- Test toàn bộ features
- Kiểm tra console có lỗi không

### 3. Test trước khi deploy

Checklist:
- [ ] Tất cả links hoạt động
- [ ] Responsive trên mobile/tablet
- [ ] Load time dưới 3s
- [ ] Không có console errors
- [ ] Images load đúng
- [ ] Routing hoạt động

---

## 🌐 Deploy lên GitHub Pages

### Phương pháp 1: Tự động với GitHub Actions (Khuyến nghị)

#### Bước 1: Chuẩn bị repository

```bash
# Tạo repository mới trên GitHub (nếu chưa có)
# Tên repository: thhoang-portfolio

# Push code lên GitHub
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/thhoang-portfolio.git
git push -u origin main
```

#### Bước 2: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. **Settings** → **Pages**
3. **Source**: Chọn **GitHub Actions**

#### Bước 3: Kiểm tra workflow

File `.github/workflows/deploy.yml` đã được cấu hình sẵn:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ] # Auto deploy khi push lên main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      
      - name: Install dependencies
        run: npm install
      
      - name: Build project
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

#### Bước 4: Deploy

```bash
# Mỗi lần push lên main sẽ tự động deploy
git add .
git commit -m "Update content"
git push origin main
```

- Vào tab **Actions** trên GitHub để xem tiến trình
- Deploy thường mất 2-5 phút
- Website sẽ có tại: `https://YOUR_USERNAME.github.io/thhoang-portfolio`

#### Bước 5: Kiểm tra deployment

1. Vào **Actions** tab → Xem build log
2. Nếu thành công, mở URL để test
3. Nếu lỗi, xem logs để debug

### Phương pháp 2: Manual deploy (Không khuyến nghị)

```bash
# Build project
npm run build

# Install gh-pages
npm install -D gh-pages

# Add script vào package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## 🐛 Xử lý sự cố

### 1. Lỗi khi chạy `npm install`

**Nguyên nhân:** Cache bị lỗi hoặc package-lock.json conflict

**Giải pháp:**
```bash
# Xóa cache và node_modules
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### 2. Port 3000 đã được sử dụng

**Giải pháp:**
```bash
# Đổi port trong vite.config.ts
server: {
  port: 3001, // Hoặc port khác
}
```

### 3. Lỗi 404 sau khi deploy

**Nguyên nhân:** `base` URL không đúng

**Giải pháp:**
1. Kiểm tra `vite.config.ts`:
   ```typescript
   base: '/your-repo-name/'
   ```
2. Kiểm tra `package.json`:
   ```json
   "homepage": "https://username.github.io/your-repo-name"
   ```
3. Phải khớp với tên repository

### 4. Routing không hoạt động trên GitHub Pages

**Nguyên nhân:** GitHub Pages không support client-side routing

**Giải pháp:** 
- Sử dụng Hash Router thay vì Browser Router
- Hoặc thêm custom 404.html redirect

File `src/App.tsx`, đổi:
```typescript
import { HashRouter } from 'react-router-dom';
// Thay vì BrowserRouter
```

### 5. Images không load

**Nguyên nhân:** Đường dẫn không đúng với base URL

**Giải pháp:**
```typescript
// Sử dụng đường dẫn tương đối
import.meta.env.BASE_URL + '/path/to/image.jpg'

// Hoặc đặt trong public/
<img src="/image.jpg" /> // Vite tự động resolve
```

### 6. Environment variables không hoạt động

**Lưu ý:** Chỉ các biến bắt đầu bằng `VITE_` mới accessible từ client code

```bash
# .env.local
VITE_API_KEY=your_key

# Sử dụng trong code
import.meta.env.VITE_API_KEY
```

### 7. Build quá chậm

**Giải pháp:**
```bash
# Clear cache
rm -rf node_modules/.vite

# Rebuild
npm run build
```

### 8. GitHub Actions workflow fails

**Debug steps:**
1. Vào **Actions** tab
2. Click vào failed workflow
3. Xem logs chi tiết
4. Thường do:
   - Node version không tương thích
   - Dependencies lỗi
   - Build errors (check local build trước)

---

## 🔄 Quy trình làm việc thường ngày

### 1. Phát triển feature mới

```bash
# 1. Pull code mới nhất
git pull origin main

# 2. Tạo branch mới (optional)
git checkout -b feature/new-feature

# 3. Chạy dev server
npm run dev

# 4. Code và test...

# 5. Commit changes
git add .
git commit -m "Add new feature"

# 6. Push lên GitHub
git push origin feature/new-feature

# 7. Merge vào main (hoặc tạo Pull Request)
git checkout main
git merge feature/new-feature
git push origin main

# 8. Auto deploy sẽ chạy
```

### 2. Update nội dung

```bash
# 1. Sửa src/constants.tsx
# 2. Test local
npm run dev

# 3. Commit và push
git add src/constants.tsx
git commit -m "Update projects"
git push origin main

# 4. Wait for auto deploy
```

### 3. Hot fix bug nhanh

```bash
# 1. Fix bug
# 2. Test ngay
npm run build && npm run preview

# 3. Deploy nhanh
git add .
git commit -m "Fix: [mô tả bug]"
git push origin main
```

---

## 📊 Performance Tips

### 1. Optimize images

```bash
# Sử dụng WebP format
# Compress trước khi upload
# Lazy load images
```

### 2. Code splitting

```typescript
// Trong App.tsx
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
```

### 3. Analyze bundle

```bash
npm install -D rollup-plugin-visualizer

# Thêm vào vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

plugins: [
  react(),
  visualizer()
]

# Build và xem report
npm run build
# Mở stats.html
```

---

## 📚 Tài liệu tham khảo

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

## ✅ Checklist triển khai lần đầu

- [ ] Clone repository về local
- [ ] Cài đặt Node.js (v16+)
- [ ] Chạy `npm install`
- [ ] Tạo file `.env.local` (nếu cần)
- [ ] Đổi thông tin cá nhân trong `constants.tsx`
- [ ] Đổi `homepage` trong `package.json`
- [ ] Đổi `base` trong `vite.config.ts`
- [ ] Test local với `npm run dev`
- [ ] Test production build với `npm run build && npm run preview`
- [ ] Tạo GitHub repository
- [ ] Push code lên GitHub
- [ ] Enable GitHub Pages (Source: GitHub Actions)
- [ ] Đợi auto deploy hoàn thành
- [ ] Kiểm tra website live
- [ ] Share URL với mọi người! 🎉

---

## 💡 Tips & Best Practices

1. **Luôn test local trước khi push**
   ```bash
   npm run build && npm run preview
   ```

2. **Sử dụng meaningful commit messages**
   ```bash
   git commit -m "feat: Add new project to portfolio"
   git commit -m "fix: Resolve mobile responsive issue"
   git commit -m "docs: Update README"
   ```

3. **Backup trước khi thay đổi lớn**
   ```bash
   git checkout -b backup-before-major-change
   ```

4. **Monitor deployment trong Actions tab**
   - Xem logs để hiểu quá trình deploy
   - Debug khi có lỗi

5. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

6. **Optimize for mobile first**
   - Test responsive trên nhiều devices
   - Sử dụng Chrome DevTools

---

## 📞 Hỗ trợ

Nếu gặp vấn đề:

1. Kiểm tra [Issues](https://github.com/thieuhoang2002/thhoang-portfolio/issues) trên GitHub
2. Xem phần [Xử lý sự cố](#xử-lý-sự-cố) ở trên
3. Search trên Google với keywords cụ thể
4. Liên hệ qua email hoặc social media

---

**Chúc bạn deploy thành công! 🚀**

*Cập nhật lần cuối: 30/12/2025*
