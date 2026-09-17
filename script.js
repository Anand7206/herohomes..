document.addEventListener('DOMContentLoaded', () => {
  const EMAIL_ENDPOINT = 'https://formsubmit.co/ajax/digitaldasofficial@gmail.com';

  // Sticky Navbar on Scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  }

  // Modal Functionality
  const modals = document.querySelectorAll('.modal-overlay');
  
  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      modals.forEach(m => m.classList.remove('active'));
      targetModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Bind click triggers with [data-modal-target]
  document.querySelectorAll('[data-modal-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      openModal(targetId);
    });
  });

  // Bind close buttons
  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  // Close modal when clicking outside card
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Timed Auto Popup (Show after 2 seconds on homepage only)
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    let popupShown = false;
    setTimeout(() => {
      if (!popupShown) {
        openModal('enquireModal');
        popupShown = true;
      }
    }, 2000);
  }

  // Lead Form Submission Handler (Sends email to digitaldasofficial@gmail.com & redirects to thank-you.html)
  const forms = document.querySelectorAll('form.leadForm');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
      }

      const formData = new FormData(form);
      const data = {
        _subject: '🔥 New Lead: Hero Homes Lucknow Landing Page',
        _captcha: 'false',
        _template: 'table',
        _replyto: 'digitaldasofficial@gmail.com'
      };

      formData.forEach((value, key) => {
        data[key] = value;
      });

      try {
        await fetch(EMAIL_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });

        // Redirect to Thank You Page for conversion tracking
        window.location.href = 'thank-you.html';

      } catch (error) {
        console.error('Form submission error:', error);
        // Redirect to Thank You Page even if network error
        window.location.href = 'thank-you.html';
      }
    });
  });
});
