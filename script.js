// Shared interactions and property listings for both pages.
const homes = [
  {name:'Light And Modern House',price:'$4,500/mo',tag:'For Rent',cls:'',img:'photo-1600585154340-be6161a56a0c'},
  {name:'Light And Modern House',price:'$520,000',tag:'For Sale',cls:'blue',img:'photo-1600607687939-ce8a6c25118c'},
  {name:'Modern Family Home',price:'$3,200/mo',tag:'For Rent',cls:'orange',img:'photo-1600566753086-00f18fb6b3ea'},
  {name:'Contemporary Villa',price:'$680,000',tag:'For Sale',cls:'',img:'photo-1600607687920-4e2a09cf159d'},
  {name:'Classic Country House',price:'$450,000',tag:'For Sale',cls:'blue',img:'photo-1600047509807-ba8f99d2cdde'},
  {name:'Warm Family Home',price:'$2,800/mo',tag:'For Rent',cls:'orange',img:'photo-1600210492486-724fe5c67fb0'},
  {name:'Green Garden House',price:'$590,000',tag:'For Sale',cls:'',img:'photo-1600607687644-c7171b42498f'},
  {name:'Suburban Retreat',price:'$3,600/mo',tag:'For Rent',cls:'blue',img:'photo-1600566753190-17f0baa2a6c3'}
];
function propertyCard(p) {
  return `<article class="property-card"><a href="property.html"><div class="property-photo"><img loading="lazy" src="https://images.unsplash.com/${p.img}?auto=format&fit=crop&w=600&q=80" alt="${p.name}"><span class="tag ${p.cls}">${p.tag}</span><span class="price">${p.price}</span></div><h3>${p.name}</h3><div class="property-meta"><span>⌂ 1,950 m²</span><span>▣ 4 beds</span><span>♨ 3 baths</span></div></a></article>`;
}
function renderHomes(list) {
  const grid = document.getElementById('propertyGrid');
  if (grid) grid.innerHTML = list.map(propertyCard).join('') || '<p>No matching properties found. Try another search.</p>';
}
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (grid) grid.innerHTML = homes.slice(0,3).map(propertyCard).join('');
}
function toggleMenu() { document.getElementById('topbar')?.classList.toggle('nav-open'); }
function toggleDetailMenu() { document.getElementById('detailTopbar')?.classList.toggle('nav-open'); }
function changeGallery(img) {
  const main = document.getElementById('mainGallery');
  if (main && img) main.src = img.src.replace(/w=500/, 'w=1200');
}
function submitInquiry(e) {
  e.preventDefault();
  const notice = document.getElementById('inquiryNotice');
  if (notice) notice.style.display = 'block';
  e.target.reset();
}
function submitHomeInquiry(e) {
  e.preventDefault();
  const notice = document.getElementById('homeInquiryNotice');
  if (notice) notice.style.display = 'block';
  e.target.reset();
}
function searchProperties(e) {
  e.preventDefault();
  const status = document.getElementById('type')?.value || 'Any status';
  const query = (document.getElementById('location')?.value || '').toLowerCase();
  const list = homes.filter(p => (status === 'Any status' || p.tag === status) && (query === '' || p.name.toLowerCase().includes(query)));
  renderHomes(list);
  document.getElementById('properties')?.scrollIntoView({behavior:'smooth'});
}
renderHomes(homes);
renderFeatured();
