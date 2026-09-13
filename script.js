const modal=document.getElementById('quoteModal');
const serviceInput=document.getElementById('service');
document.querySelectorAll('[data-service]').forEach(el=>el.addEventListener('click',()=>{serviceInput.value=el.dataset.service||'General cleaning enquiry';modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModal));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const area=document.getElementById('area').value.trim();const service=serviceInput.value.trim();const details=document.getElementById('details').value.trim();const msg=`Hi Gadget Cleaning, my name is ${name}. I'm in ${area}. I'd like a quote for ${service}.${details?` Details: ${details}`:''}`;window.open(`https://wa.me/27781737462?text=${encodeURIComponent(msg)}`,'_blank','noopener');});
