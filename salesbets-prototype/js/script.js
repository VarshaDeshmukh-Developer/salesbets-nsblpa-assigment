
document.addEventListener('DOMContentLoaded', ()=>{
  const menuToggle = document.querySelector('.menu-toggle');
  const mobile = document.querySelector('.nav-mobile');
  if(menuToggle && mobile){
    menuToggle.addEventListener('click', ()=>{
      mobile.classList.toggle('hidden');
      const expanded = mobile.classList.contains('hidden') ? 'false' : 'true';
      menuToggle.setAttribute('aria-expanded', expanded);
    });
    document.addEventListener('click', (e)=>{
      if(!mobile.contains(e.target) && !menuToggle.contains(e.target)) mobile.classList.add('hidden');
    });
  }
});

function scrollToSection(id){ const el = document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}); }

function handleContact(e){ e.preventDefault(); const f = document.getElementById('contact-form'); if(!f) return; alert('Thanks '+(f.name.value||'')+' — message received (demo).'); f.reset(); }
