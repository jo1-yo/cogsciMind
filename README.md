# Explaining Explanations of Cognition

An interactive educational website exploring the question: **Are Humans, Bees, and AI Doing the Same Thing When They Navigate?**

This website presents three different approaches to understanding cognition: symbolic systems, connectionist approaches, and embodied cognition.

## 🎓 Project Information

**Title:** Explaining Explanations of Cognition  
**Author:** Yueqi Zhang  
**Institution:** Vassar College  
**Topic:** Cognitive Science - Navigation and Cognition across Different Agents

## 📚 Content Overview

The website is structured into several parts:

### Introduction (0:00 - 0:45)
- The central question: Do different agents perform the same cognitive task in the same way?
- Exploring biological vs. artificial cognition

### Part 1: The Symbolic System Approach (0:45 - 2:00)
- Cognition as rule-based symbol manipulation
- GOFAI (Good Old-Fashioned AI)
- Limitations of purely logical models

### Part 2: The Connectionist Approach (2:00 - 3:00)
- Pattern-based learning instead of rules
- Neural networks and distributed processing
- Modern AI systems like autonomous vehicles

### Part 3: Embodied and Extended Cognition (3:00 - 4:15)
- Mind extends beyond the brain
- The role of body and environment in thinking
- Examples from humans, bees, and AI

### Part 4: The Philosophical Tension (4:15 - 5:15)
- Functionalism vs. mechanism
- The question of conscious experience
- Science vs. philosophy of mind

### Closing Thoughts (5:15 - 5:50)
- Different paths through cognition
- The nature of being alive and thinking

## 🚀 Features

### 📹 Video Lecture
- Main video player with chapter navigation
- Interactive chapter links that jump to corresponding text sections
- Timestamp-based content organization

### 📝 Written Content
- Full transcript and detailed explanations
- Organized by video chapters
- Visual concept descriptions for video production
- Editable content sections

### ✏️ Editing Capabilities
- Edit any content section directly in the browser
- Add new content sections
- Upload additional videos
- All changes are client-side (no server required)

### 🎨 Design Features
- Modern, clean interface
- Responsive design for mobile and desktop
- Smooth animations and transitions
- Accessible typography and layout

## 📂 File Structure

```
cognsci网站/
├── index.html          # Main page
├── styles.css          # Stylesheet
├── script.js           # Interactive functionality
├── README.md           # This file
├── videos/             # Video files folder
│   └── main-lecture.mp4 (place your main video here)
└── assets/             # Assets folder
    └── main-thumbnail.jpg (optional video thumbnail)
```

## 🔗 How to Access

### Option 1: Direct File Path
Open in your browser:
```
file:///Users/jane/Desktop/cognsci网站/index.html
```

### Option 2: Double-click
Simply double-click `index.html` in Finder

### Option 3: Command Line
```bash
open "/Users/jane/Desktop/cognsci网站/index.html"
```

## 🎥 Adding Your Video

1. Place your main lecture video in the `videos` folder
2. Name it `main-lecture.mp4` (or update the path in `index.html`)
3. Optionally, add a thumbnail image to the `assets` folder named `main-thumbnail.jpg`

## ✏️ Editing Content

### Edit Existing Content
1. Click the "✏️ Edit" button below any content card
2. Modify the title and content (HTML supported)
3. Click "Save"

### Add New Content
1. Click the "Add New Content" button
2. The edit dialog will open automatically
3. Enter your title and content
4. Click "Save"

## 🎨 Customization

### Change Color Theme
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4F46E5;    /* Main theme color */
    --secondary-color: #10B981;  /* Accent color */
    /* ... other color variables */
}
```

### Modify Layout
The website uses CSS Grid for responsive layouts. Key sections:
- `.main-video-container` - Video player and chapter list (2:1 ratio)
- `.content-grid` - Content cards (single column)
- Responsive breakpoint at 768px for mobile devices

## 💡 Space Allocation Strategy

The website is designed with a clear hierarchy:

1. **Hero Section** (Full width)
   - Title and description centered
   - Author attribution
   - Call-to-action buttons

2. **Video Section** (2:1 Grid Layout)
   - Left: Main video player (2/3 width)
   - Right: Chapter navigation (1/3 width)
   - Provides easy access to both video and content sections

3. **Content Section** (Single Column)
   - Each part gets a full-width card
   - Clear visual hierarchy with headers
   - Highlight boxes for key concepts
   - Collapsible/scrollable for long content

4. **Mobile Layout** (Stacked)
   - Video player full width
   - Chapters below video
   - Content cards full width
   - Optimized for touch interaction

## 🌐 Browser Compatibility

Tested and works on:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Other modern browsers

## 📝 Technical Notes

- Pure HTML, CSS, and JavaScript (no frameworks required)
- No server needed (runs entirely in the browser)
- All editing is client-side (changes reset on page refresh)
- Video uses HTML5 video player for broad compatibility
- Responsive design using CSS Grid and Flexbox

## 🔧 Troubleshooting

**Video not playing?**
- Ensure the video file is in MP4 format
- Check the file path in `index.html`
- Some browsers require user interaction before playing videos

**Content not saving?**
- This is a static website - changes are temporary
- Refresh the page to reset content
- For permanent changes, edit `index.html` directly

**Styling issues?**
- Clear browser cache
- Check that `styles.css` is in the same folder as `index.html`
- Verify no browser extensions are interfering

## 📖 Citation

If you use this website or adapt it for your work, please cite:

```
Zhang, Y. (2025). Explaining Explanations of Cognition: 
Are Humans, Bees, and AI Doing the Same Thing When They Navigate?
Vassar College.
```

## 📧 Contact

Yueqi Zhang  
Vassar College

---

**Last Updated:** November 2025  
**Version:** 1.0
