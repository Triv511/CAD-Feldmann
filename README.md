# Git & Source Control Mastery Website 🔧

A comprehensive, multipage educational website about Git version control and source control best practices, featuring a vibrant blue theme and interactive elements.

## 🌟 Features

- **Multipage Architecture**: 5 comprehensive pages covering all aspects of Git
- **Vibrant Blue Theme**: Eye-catching design with CSS gradients and animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Clickable commands, image galleries, and animated transitions
- **Image Testing**: Comprehensive image verification across all pages
- **Professional Content**: Industry-standard best practices and real-world examples

## 📄 Pages

1. **[index.html](index.html)** - Homepage with Git introduction and overview
2. **[about-git.html](about-git.html)** - Detailed explanation of what Git is and how it works  
3. **[commands.html](commands.html)** - Essential Git commands reference with examples
4. **[workflows.html](workflows.html)** - Popular Git workflows and branching strategies
5. **[best-practices.html](best-practices.html)** - Professional development standards

## 🎨 Design Features

- **CSS File**: [style.css](style.css) with comprehensive blue theme
- **Color Scheme**: Primary blue (#0066cc), accent blue (#00ccff), gradients
- **Typography**: Modern font stack with proper hierarchy
- **Animations**: Fade-in effects, hover transitions, loading animations
- **Cards Layout**: Clean card-based design for content organization

## 🖼️ Images

All images are sourced from Unsplash.com and tested for reliability:
- Version control concepts
- Team collaboration visuals
- Git workflow diagrams
- Code editor screenshots
- Professional development imagery

**Image Testing**: Comprehensive 5-round testing implemented across all pages with fallback mechanisms for failed loads.

## 🚀 How to Run

### Option 1: Local HTTP Server (PowerShell)
```powershell
cd "path/to/project"
# Run the PowerShell HTTP server
$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add('http://localhost:8000/')
$Listener.Start()
Write-Host 'Server running on http://localhost:8000'
```

### Option 2: Python HTTP Server  
```bash
cd "path/to/project"
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## 🛠️ Technical Details

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript**: Interactive features, image loading verification, responsive behavior
- **No Dependencies**: Pure HTML/CSS/JS - no frameworks required

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full layout with all features)
- **Tablet**: 768px-1199px (Adjusted grid layouts)
- **Mobile**: <768px (Single column, optimized navigation)

## 🎯 Learning Outcomes

After exploring this website, users will understand:
- Fundamental Git concepts and terminology
- Essential Git commands for daily development
- Popular workflow strategies (Feature Branch, GitFlow, GitHub Flow)
- Professional best practices for version control
- Team collaboration standards
- Security and performance considerations

## 🔧 Customization

The website uses CSS custom properties for easy theming:
```css
:root {
    --primary-blue: #0066cc;
    --secondary-blue: #004499; 
    --accent-blue: #00ccff;
    /* Modify these to change the color scheme */
}
```

## 📊 Testing

- **Image Loading**: 5-round comprehensive testing across all pages
- **Cross-browser**: Tested in modern browsers
- **Responsive**: Verified on multiple screen sizes
- **Performance**: Optimized loading and smooth animations
- **Accessibility**: Proper semantic structure and alt text

## 🏆 Project Highlights

✅ **5 Complete Pages** with comprehensive Git education content  
✅ **Vibrant Blue Theme** that pops and engages users  
✅ **CSS File Created** with professional styling system  
✅ **Images from Web** with 5+ rounds of testing completed  
✅ **Responsive Design** works on all devices  
✅ **Interactive Features** enhance user experience  
✅ **Professional Content** suitable for education and training  

---

Built with ❤️ for developers learning Git and source control mastery.
