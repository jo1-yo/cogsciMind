// YouTube IFrame API
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('heroVideo', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // 延迟3秒后开始播放视频
    setTimeout(() => {
        event.target.playVideo();
    }, 3000); // 3000毫秒 = 3秒
}

// 加载YouTube IFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Fullscreen Video Function
function openFullscreenVideo() {
    window.open('https://www.youtube.com/watch?v=bwBK9QV7C5Y', '_blank');
}

// Scroll to Content Function
function scrollToContent() {
    const contentSection = document.getElementById('content');
    if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show/Hide Navigation on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-video-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Show navbar after scrolling past hero section
    window.addEventListener('scroll', () => {
        const heroHeight = heroSection.offsetHeight;
        
        if (window.pageYOffset > heroHeight - 100) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }

        // Update active link on scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll and active link handling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});

// Show content function
function showContent(lessonNumber) {
    const contentCard = document.getElementById(`content-${lessonNumber}`);
    if (contentCard) {
        contentCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        contentCard.style.animation = 'none';
        setTimeout(() => {
            contentCard.style.animation = 'fadeIn 0.6s ease-out';
        }, 10);
    }
}

// Video upload handler
function handleVideoUpload(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            addVideoCard(file.name, e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid video file.');
    }
}

// Add new video card
function addVideoCard(title, videoSrc) {
    const videoGrid = document.querySelector('.video-grid');
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    
    const videoNumber = document.querySelectorAll('.video-card').length + 1;
    
    videoCard.innerHTML = `
        <div class="video-thumbnail">
            <video controls class="video-player">
                <source src="${videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="video-info">
            <h3 class="video-title">Lesson ${videoNumber}: ${title.replace(/\.[^/.]+$/, '')}</h3>
            <p class="video-description">Newly added content</p>
            <div class="video-meta">
                <span class="duration">⏱ New video</span>
                <button class="btn-text" onclick="showContent(${videoNumber})">View notes</button>
            </div>
        </div>
    `;
    
    videoGrid.appendChild(videoCard);
    
    // Scroll to the new video
    videoCard.scrollIntoView({ behavior: 'smooth' });
}

// Edit content function
function editContent(lessonNumber) {
    const contentCard = document.getElementById(`content-${lessonNumber}`);
    const contentBody = contentCard.querySelector('.content-body');
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Edit Content</h3>
                <button class="modal-close" onclick="closeModal(this)">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">Title</label>
                    <input type="text" class="form-input" id="edit-title" value="${contentCard.querySelector('.content-title').textContent}">
                </div>
                <div class="form-group">
                    <label class="form-label">Content (HTML supported)</label>
                    <textarea class="form-textarea" id="edit-content">${contentBody.innerHTML}</textarea>
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn btn-secondary" onclick="closeModal(this)">Cancel</button>
                <button class="btn btn-primary" onclick="saveContent(${lessonNumber}, this)">Save</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.querySelector('.modal-close'));
        }
    });
}

// Close modal
function closeModal(button) {
    const modal = button.closest('.modal');
    modal.remove();
}

// Save content
function saveContent(lessonNumber, button) {
    const modal = button.closest('.modal');
    const newTitle = document.getElementById('edit-title').value;
    const newContent = document.getElementById('edit-content').value;
    
    const contentCard = document.getElementById(`content-${lessonNumber}`);
    contentCard.querySelector('.content-title').textContent = newTitle;
    contentCard.querySelector('.content-body').innerHTML = newContent;
    
    closeModal(button);
    
    // Show success message
    showNotification('Content updated successfully!');
}

// Add new content
function addNewContent() {
    const contentGrid = document.querySelector('.content-grid');
    const contentNumber = document.querySelectorAll('.content-card').length + 1;
    
    const newCard = document.createElement('div');
    newCard.className = 'content-card';
    newCard.id = `content-${contentNumber}`;
    newCard.innerHTML = `
        <div class="content-header">
            <h3 class="content-title">Part ${contentNumber}: New Content</h3>
            <span class="content-badge">New</span>
        </div>
        <div class="content-body">
            <h4>Heading</h4>
            <p>Add your content here...</p>
            
            <div class="content-highlight">
                <h5>💡 Tip</h5>
                <p>Click the "Edit" button below to modify this content.</p>
            </div>
        </div>
        <div class="content-footer">
            <button class="btn-text" onclick="editContent(${contentNumber})">✏️ Edit</button>
        </div>
    `;
    
    contentGrid.appendChild(newCard);
    newCard.scrollIntoView({ behavior: 'smooth' });
    
    // Automatically open edit modal
    setTimeout(() => {
        editContent(contentNumber);
    }, 500);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #10B981;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1001;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Pause all videos when one starts playing
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('play', () => {
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });
});

// Sticker Note Functions
function openStickerNote(noteId) {
    const popup = document.getElementById(`popup-${noteId}`);
    const overlay = document.getElementById(`overlay-${noteId}`);
    if (popup && overlay) {
        popup.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeStickerNote(noteId) {
    const popup = document.getElementById(`popup-${noteId}`);
    const overlay = document.getElementById(`overlay-${noteId}`);
    if (popup && overlay) {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close sticker note with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activePopups = document.querySelectorAll('.sticker-popup.active');
        activePopups.forEach(popup => {
            const noteId = popup.id.replace('popup-', '');
            closeStickerNote(noteId);
        });
    }
});

