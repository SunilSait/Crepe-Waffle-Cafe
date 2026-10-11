/* ===== CREPE & WAFFLE CAFÉ — SHARED COMPONENTS ===== */
'use strict';

/* ─── Monochrome SVG Icons (Lucide-style, single color) ─────────── */
const ICONS = {
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
    twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    heart: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    gift: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
    leaf: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 20 2 20 2s-1.7 5.3-3.8 9.8A7 7 0 0 1 11 20z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    coffee: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    utensils: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
    truck: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
    timer: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></svg>',
};

/* ─── Brand Logo SVG ──────────────────────────────────── */
const LOGO_SVG = `<svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="35" width="70" height="55" rx="10" fill="var(--primary)"/>
    <line x1="35" y1="35" x2="35" y2="90" stroke="var(--secondary)" stroke-width="2" opacity="0.3"/>
    <line x1="50" y1="35" x2="50" y2="90" stroke="var(--secondary)" stroke-width="2" opacity="0.3"/>
    <line x1="65" y1="35" x2="65" y2="90" stroke="var(--secondary)" stroke-width="2" opacity="0.3"/>
    <line x1="15" y1="52" x2="85" y2="52" stroke="var(--secondary)" stroke-width="2" opacity="0.3"/>
    <line x1="15" y1="70" x2="85" y2="70" stroke="var(--secondary)" stroke-width="2" opacity="0.3"/>
    <ellipse cx="50" cy="30" rx="28" ry="12" fill="var(--primary-light)"/>
    <ellipse cx="50" cy="30" rx="20" ry="8" fill="var(--primary-dark)" opacity="0.4"/>
    <circle cx="40" cy="22" r="5" fill="var(--secondary)"/>
    <circle cx="55" cy="20" r="4" fill="var(--secondary)" opacity="0.8"/>
    <circle cx="50" cy="15" r="3" fill="var(--secondary)" opacity="0.6"/>
</svg>`;

/* ─── Social Login SVGs ───────────────────────────────── */
const GOOGLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`;

const APPLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>`;

const FACEBOOK_LOGIN_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`;

/* ─── THEME & DIRECTION ───────────────────────────────── */
(function initThemeDir() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('cw_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('cw_dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleTheme(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('cw_theme', html.classList.contains('dark') ? 'dark' : 'light');
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
}

function updateThemeIcon(el) {
    if (!el) return;
    const isDark = document.documentElement.classList.contains('dark');
    el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
}

function toggleDir(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    localStorage.setItem('cw_dir', isRTL ? 'ltr' : 'rtl');
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = isRTL ? 'LTR' : 'RTL';
    });
}

/* ─── PASSWORD TOGGLE ────────────────────────────────── */
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const iconWrap = (btn && btn.querySelector) ? (btn.querySelector('.pw-icon') || btn) : btn;
    if (iconWrap) {
        iconWrap.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
    }
}

/* ─── AUTH PAGE HELPERS ──────────────────────────────── */
function initAuthPage() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('cw_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('cw_dir') === 'rtl') html.setAttribute('dir', 'rtl');

    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = html.getAttribute('dir') === 'rtl' ? 'RTL' : 'LTR';
    });
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function buildNavbar() {
    const el = document.getElementById('navbar-placeholder') || document.getElementById('main-nav');
    if (!el) return;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'menu.html', label: 'Menu' },
        { href: 'catering.html', label: 'Catering' },
        { href: 'locations.html', label: 'Locations' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHTML = links.map(l => {
        const isActive = currentPage === l.href || (currentPage === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobileLinksHTML = links.map(l => {
        const isActive = currentPage === l.href || (currentPage === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const nav = document.createElement('div');
    nav.innerHTML = `
    <header class="navbar" id="navbar">
        <div class="nav-inner">
            <a href="index.html" class="nav-logo" aria-label="Crepe & Waffle Café Home">
                ${LOGO_SVG}
                <div class="nav-logo-text">
                    <span class="brand-top">CREPE</span>
                    <span class="brand-bottom">& Waffle</span>
                </div>
            </a>

            <nav class="nav-links" aria-label="Main navigation">
                ${navLinksHTML}
            </nav>

            <div class="nav-actions">
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle direction">
                    <span class="dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <a href="login.html" class="btn btn-primary btn-sm">Sign In</a>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Toggle navigation menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <div class="mobile-menu" id="mobile-menu">
            ${mobileLinksHTML}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle direction">
                    <span class="dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </header>
    <div class="navbar-spacer"></div>`;

    el.replaceWith(nav);
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
        document.body.classList.remove('nav-open');
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (iconEl) iconEl.innerHTML = ICONS.x;
        document.body.classList.add('nav-open');
    }
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu || !menu.classList.contains('open')) return;
    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (menu.contains(e.target)) return;
    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.classList.remove('nav-open');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (iconEl) iconEl.innerHTML = ICONS.menu;
});

/* ─── FOOTER ─────────────────────────────────────────── */
function buildFooter() {
    const el = document.getElementById('footer-placeholder') || document.getElementById('main-footer');
    if (!el) return;
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.id = 'site-footer';
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo" aria-label="Home">
                        ${LOGO_SVG}
                        <div class="nav-logo-text">
                            <span class="brand-top">CREPE</span>
                            <span class="brand-bottom">& Waffle</span>
                        </div>
                    </a>
                    <p>Handcrafted French crepes and Belgian waffles made with premium ingredients. Serving sweet and savory perfection since 2018.</p>
                    <div class="footer-socials">
                        <a href="#" class="footer-social-link" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="#" class="footer-social-link" aria-label="Instagram">${ICONS.instagram}</a>
                        <a href="#" class="footer-social-link" aria-label="YouTube">${ICONS.youtube}</a>
                        <a href="#" class="footer-social-link" aria-label="Twitter">${ICONS.twitter}</a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4 class="footer-col-title">QUICK LINKS</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="home2.html">Home 2 — Premium</a></li>
                        <li><a href="menu.html">Our Menu</a></li>
                        <li><a href="catering.html">Catering Orders</a></li>
                        <li><a href="locations.html">Locations</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-col-title">RESOURCES</h4>
                    <ul class="footer-links">
                        <li><a href="coming-soon.html">Careers</a></li>
                        <li><a href="coming-soon.html">Franchise Info</a></li>
                        <li><a href="login.html">Member Sign In</a></li>
                        <li><a href="signup.html">Create Account</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Updated</h4>
                        <p class="footer-newsletter-desc">Get the latest seasonal specials, new flavors, and exclusive offers delivered to your inbox.</p>
                        <form onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();" class="footer-newsletter-form">
                            <input type="email" placeholder="your@email.com" class="footer-newsletter-input" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} Crepe & Waffle Café. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy Policy</a>
                    <a href="coming-soon.html">Terms of Service</a>
                    <a href="coming-soon.html">Cookie Settings</a>
                </div>
            </div>
        </div>
    `;
    el.replaceWith(footer);
}

/* ─── BACK TO TOP ──────────────────────────────────────── */
function buildBackToTop() {
    if (document.body.classList.contains('auth-page') || document.body.classList.contains('fullscreen-page')) return;
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = ICONS.arrowUp;
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
}

/* ─── SCROLL ANIMATIONS ──────────────────────────────── */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-up, .fade-in, .scale-in, .slide-left, .slide-right').forEach(el => {
        observer.observe(el);
    });
}

/* ─── HEADER SCROLL ────────────────────────────────────── */
function initHeaderScroll() {
    const header = document.getElementById('navbar');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    });
}

/* ─── MENU TABS ────────────────────────────────────────── */
function initMenuTabs() {
    const tabs = document.querySelectorAll('.menu-tab');
    const cards = document.querySelectorAll('.menu-card');
    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.dataset.category;
            cards.forEach(card => {
                if (cat === 'all' || card.dataset.category === cat) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ─── COUNTDOWN TIMER (COMING SOON) ───────────────────── */
function initCountdown() {
    const target = new Date();
    target.setDate(target.getDate() + 30);

    function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) return;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        const dEl = document.getElementById('cd-days');
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-mins');
        const sEl = document.getElementById('cd-secs');

        if (dEl) dEl.textContent = String(days).padStart(2, '0');
        if (hEl) hEl.textContent = String(hours).padStart(2, '0');
        if (mEl) mEl.textContent = String(mins).padStart(2, '0');
        if (sEl) sEl.textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

/* ─── FAQ ACCORDION ───────────────────────────────────── */
function initFaqAccordion() {
    document.addEventListener('click', (e) => {
        const questionBtn = e.target.closest('.faq-question');
        if (!questionBtn) return;
        const item = questionBtn.closest('.faq-item');
        if (!item) return;
        const parent = item.parentElement;
        
        const wasActive = item.classList.contains('active');
        if (parent) {
            parent.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
        }
        if (!wasActive) {
            item.classList.add('active');
        }
    });
}

/* ─── HERO THEMATIC BACKGROUND ANIMATION & AMBIENT EFFECTS ─ */
function initHeroThemeEffects() {
    const heroSections = document.querySelectorAll('.hero2-section, .hero-section');
    if (!heroSections.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    heroSections.forEach((hero, index) => {
        // Ensure background container exists
        let themeBg = hero.querySelector('.hero-theme-bg');
        if (!themeBg) {
            themeBg = document.createElement('div');
            themeBg.className = 'hero-theme-bg';
            themeBg.setAttribute('aria-hidden', 'true');
            themeBg.innerHTML = `
                <div class="hero-ambient-glow orb-berry"></div>
                <div class="hero-ambient-glow orb-honey"></div>
                <div class="hero-ambient-glow orb-espresso"></div>
                <div class="hero-waffle-lattice"></div>
                <div class="hero-steam-container">
                    <span class="steam-wisp steam-1"></span>
                    <span class="steam-wisp steam-2"></span>
                    <span class="steam-wisp steam-3"></span>
                    <span class="steam-wisp steam-4"></span>
                </div>
                <canvas class="hero-particle-canvas"></canvas>
                <div class="hero-mouse-spotlight"></div>
            `;
            hero.insertBefore(themeBg, hero.firstChild);
        }

        const canvas = themeBg.querySelector('.hero-particle-canvas');
        const spotlight = themeBg.querySelector('.hero-mouse-spotlight');
        if (!canvas) return;

        if (prefersReducedMotion) {
            canvas.style.display = 'none';
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let dpr = 1;
        let particles = [];
        let animationFrameId = null;
        let isVisible = true;

        // Mouse interaction state
        let targetMouseX = -1000;
        let targetMouseY = -1000;
        let currentMouseX = -1000;
        let currentMouseY = -1000;
        let isMouseActive = false;

        function resize() {
            const rect = hero.getBoundingClientRect();
            width = Math.max(rect.width, 320);
            height = Math.max(rect.height, 400);
            dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';

            createParticles();
        }

        function createParticles() {
            particles = [];
            const count = width < 768 ? 26 : 48;

            for (let i = 0; i < count; i++) {
                // Determine particle confectionery type
                const rand = Math.random();
                let type = 'sugar'; // Liege pearl sugar sparkle
                let color = '#FFF5F5';
                let size = 1.2 + Math.random() * 1.8;

                if (rand < 0.40) {
                    type = 'sugar';
                    color = Math.random() > 0.5 ? '#FFFFFF' : '#FFF1F2';
                    size = 1.2 + Math.random() * 1.6;
                } else if (rand < 0.70) {
                    type = 'honey'; // Caramelized honey & amber glaze drop
                    color = Math.random() > 0.5 ? '#FBBF24' : '#F59E0B';
                    size = 1.8 + Math.random() * 2.2;
                } else if (rand < 0.90) {
                    type = 'berry'; // Parisian ruby berry sparkle
                    color = Math.random() > 0.5 ? '#FB7185' : '#E11D48';
                    size = 1.6 + Math.random() * 1.8;
                } else {
                    type = 'star'; // 4-pointed artisan sparkle star
                    color = '#FDE68A';
                    size = 3.5 + Math.random() * 3.5;
                }

                const baseVy = -(0.18 + Math.random() * 0.45);

                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: 0,
                    vy: baseVy,
                    baseVy: baseVy,
                    size: size,
                    type: type,
                    color: color,
                    baseAlpha: 0.25 + Math.random() * 0.65,
                    alpha: 0.25 + Math.random() * 0.65,
                    twinkleSpeed: 0.02 + Math.random() * 0.05,
                    twinklePhase: Math.random() * Math.PI * 2,
                    wobbleSpeed: 0.015 + Math.random() * 0.025,
                    wobbleAmp: 0.35 + Math.random() * 0.65,
                    wobblePhase: Math.random() * Math.PI * 2,
                    rotation: Math.random() * Math.PI * 2,
                    rotSpeed: (Math.random() - 0.5) * 0.03
                });
            }
        }

        // Draw 4-point sparkle star
        function drawSparkleStar(ctx, x, y, r, rot, alpha, color) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rot);
            ctx.fillStyle = color;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
                const angle = (i * Math.PI) / 2;
                ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
                const halfAngle = angle + Math.PI / 4;
                ctx.lineTo(Math.cos(halfAngle) * (r * 0.26), Math.sin(halfAngle) * (r * 0.26));
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        function render(time) {
            if (!isVisible) return;

            ctx.save();
            ctx.scale(dpr, dpr);
            ctx.clearRect(0, 0, width, height);

            const isDark = document.documentElement.classList.contains('dark');
            const t = time * 0.001;

            // Smooth mouse spotlight motion
            if (spotlight && isMouseActive) {
                currentMouseX += (targetMouseX - currentMouseX) * 0.12;
                currentMouseY += (targetMouseY - currentMouseY) * 0.12;
                spotlight.style.left = currentMouseX + 'px';
                spotlight.style.top = currentMouseY + 'px';
                spotlight.style.opacity = '1';
            } else if (spotlight) {
                spotlight.style.opacity = '0';
            }

            // Update & render particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Natural upward float + horizontal gentle sway
                p.wobblePhase += p.wobbleSpeed;
                const sway = Math.sin(p.wobblePhase) * p.wobbleAmp;

                // Mouse deflection physics
                if (isMouseActive) {
                    const dx = p.x - currentMouseX;
                    const dy = p.y - currentMouseY;
                    const dist = Math.hypot(dx, dy);
                    const repelRadius = 110;

                    if (dist < repelRadius && dist > 0) {
                        const force = (1 - dist / repelRadius) * 1.2;
                        p.vx += (dx / dist) * force;
                        p.vy += (dy / dist) * force * 0.6;
                    }
                }

                // Damping
                p.vx *= 0.92;
                p.vy = p.vy * 0.94 + p.baseVy * 0.06;

                p.x += p.vx + sway;
                p.y += p.vy;
                p.rotation += p.rotSpeed;

                // Boundary check
                if (p.y < -20) {
                    p.y = height + 15;
                    p.x = Math.random() * width;
                    p.vx = 0;
                    p.vy = p.baseVy;
                }
                if (p.x < -20) p.x = width + 15;
                if (p.x > width + 20) p.x = -15;

                // Twinkle animation
                p.twinklePhase += p.twinkleSpeed;
                const twinkle = (Math.sin(p.twinklePhase) + 1) * 0.5; // 0 to 1
                const currentAlpha = Math.max(0.12, Math.min(1, p.baseAlpha * (0.45 + twinkle * 0.55)));

                if (p.type === 'star') {
                    drawSparkleStar(ctx, p.x, p.y, p.size, p.rotation, currentAlpha, p.color);
                } else {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = currentAlpha;

                    if (isDark) {
                        ctx.shadowBlur = p.type === 'honey' ? 8 : (p.type === 'berry' ? 9 : 5);
                        ctx.shadowColor = p.color;
                    } else {
                        ctx.shadowBlur = 3;
                        ctx.shadowColor = 'rgba(245, 158, 11, 0.3)';
                    }

                    ctx.fill();
                    ctx.restore();
                }
            }

            ctx.restore();
            animationFrameId = requestAnimationFrame(render);
        }

        // Pointer event listeners
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            targetMouseX = e.clientX - rect.left;
            targetMouseY = e.clientY - rect.top;
            if (!isMouseActive) {
                currentMouseX = targetMouseX;
                currentMouseY = targetMouseY;
            }
            isMouseActive = true;
        }, { passive: true });

        hero.addEventListener('mouseleave', () => {
            isMouseActive = false;
        });

        // IntersectionObserver to pause loop when out of viewport
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!isVisible) {
                            isVisible = true;
                            animationFrameId = requestAnimationFrame(render);
                        }
                    } else {
                        isVisible = false;
                        if (animationFrameId) {
                            cancelAnimationFrame(animationFrameId);
                            animationFrameId = null;
                        }
                    }
                });
            }, { threshold: 0.05 });

            observer.observe(hero);
        }

        // Initial setup and resize handler
        resize();
        window.addEventListener('resize', debounce(resize, 150));
        animationFrameId = requestAnimationFrame(render);
    });
}

// Utility debounce helper
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/* ─── INIT ALL ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    buildNavbar();
    buildFooter();
    buildBackToTop();
    initScrollAnimations();
    initHeaderScroll();
    initMenuTabs();
    initCountdown();
    initFaqAccordion();
    initHeroThemeEffects();
});
