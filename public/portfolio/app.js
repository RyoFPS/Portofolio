'use strict';

// Content links can be completed here without changing the contact layout.
const contact = {
  email: 'ramdhon1.ssss@gmail.com',
  github: 'https://github.com/RyoFPS',
  linkedin: 'https://www.linkedin.com/in/ramdhon1/',
  instagram: 'https://www.instagram.com/ramdhon1_/'
};

function matchesCategory(category, filter) {
  return filter === 'all' || category === filter;
}

// A small self-check protects the inclusive filter and the empty-result case.
console.assert(matchesCategory('mobile', 'all') && matchesCategory('mobile', 'mobile') && !matchesCategory('web', 'mobile'), 'Filter proyek tidak konsisten');

const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    cards.forEach(card => {
      card.hidden = !matchesCategory(card.dataset.category, button.dataset.filter);
    });
    updateProjectCount();
  });
});

document.querySelectorAll('[data-open]').forEach(button => {
  button.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('portfolio:drawer-open', { detail: button.dataset.open }));
  });
});

document.querySelectorAll('[data-social]').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.social;
    const url = contact[name];
    if (url) {
      // Only ordinary HTTPS profile URLs may be configured here.
      try {
        const target = new URL(url);
        if (target.protocol !== 'https:') throw new Error('HTTPS required');
        window.open(target.href, '_blank', 'noopener,noreferrer');
        return;
      } catch {
        document.querySelector('#profile-message').textContent = feedback[currentLanguage].invalidProfile(button.dataset.label);
      }
    } else {
      document.querySelector('#profile-message').textContent = feedback[currentLanguage].missingProfile(button.dataset.label);
    }
    window.dispatchEvent(new CustomEvent('portfolio:drawer-open', { detail: 'profile-dialog' }));
  });
});

let toastTimeout;
document.querySelector('#copy-email').addEventListener('click', async () => {
  const toast = document.querySelector('#toast');
  clearTimeout(toastTimeout);
  try {
    await navigator.clipboard.writeText(contact.email);
    toast.textContent = feedback[currentLanguage].copied;
  } catch {
    toast.textContent = feedback[currentLanguage].copyFailed;
  }
  toastTimeout = setTimeout(() => { toast.textContent = ''; }, 6000);
});

const navLinks = document.querySelectorAll('.desktop-nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
