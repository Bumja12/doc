document.addEventListener('DOMContentLoaded', () => {
  const uiSpecs = window.uiSpecs;
  const navList = document.getElementById('nav-list');
  const iframe = document.getElementById('preview-iframe');
  const specTitle = document.getElementById('spec-title');
  const specBody = document.getElementById('spec-body');

  let firstKey = null;

  // Build Sidebar
  Object.keys(uiSpecs).forEach(key => {
    if (!firstKey) firstKey = key;
    const spec = uiSpecs[key];
    const li = document.createElement('li');
    li.className = 'nav-item';
    li.dataset.key = key;
    
    // Extract ID like "UI-001"
    const match = spec.title.match(/UI-\d{3}/);
    const idBadge = match ? match[0] : `UI-${key.padStart(3, '0')}`;
    const name = spec.title.split(': ')[1] || spec.title;
    
    li.innerHTML = `<span class="id-badge">${idBadge}</span> ${name}`;
    
    li.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      loadSpec(key);
    });
    
    navList.appendChild(li);
  });

  // Load Initial
  if (firstKey) {
    document.querySelector(`.nav-item[data-key="${firstKey}"]`).classList.add('active');
    loadSpec(firstKey);
  }

  function loadSpec(key) {
    const spec = uiSpecs[key];
    const fileNum = String(key).padStart(3, '0');
    
    // Update iframe
    iframe.src = `ui_${fileNum}.html`;
    
    // Update Title
    specTitle.textContent = spec.title;
    
    // Parse Desc
    const lines = spec.desc.split('\n');
    let html = '';
    let inList = false;
    let inException = false;
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;
      
      if (trimmed.startsWith('■ 예외 흐름') || trimmed.startsWith('■ 주요')) {
        // Skip header or convert to small badge
        if (trimmed.includes('대응:')) {
           const rqMatch = trimmed.match(/\[대응: (.*?)\]/);
           if (rqMatch) {
             html += `<p style="color: var(--accent); font-size: 0.8rem; font-weight: 600; margin-bottom: 20px;">연계 요구사항: ${rqMatch[1]}</p>`;
           }
        }
        return;
      }
      
      // Exception block
      if (trimmed.includes('error_outline') || trimmed.includes('예외처리')) {
         if (!inException) {
             html += `<div class="exception-box"><h4>⚠️ 예외 케이스</h4>`;
             inException = true;
         }
         html += `<p>${trimmed.replace('error_outline ', '')}</p>`;
         return;
      }

      // Headings
      if (/^\d\./.test(trimmed)) {
        if (inList) { html += '</ul>'; inList = false; }
        if (inException) { html += '</div>'; inException = false; }
        html += `<h3>${trimmed}</h3>`;
      } 
      // Lists
      else if (trimmed.startsWith('-')) {
        if (inException) {
            html += `<p>• ${trimmed.substring(1).trim()}</p>`;
            return;
        }
        if (!inList) { html += '<ul>'; inList = true; }
        html += `<li>${trimmed.substring(1).trim()}</li>`;
      } 
      // Paragraphs
      else {
        if (inList) { html += '</ul>'; inList = false; }
        html += `<p>${trimmed}</p>`;
      }
    });
    
    if (inList) html += '</ul>';
    if (inException) html += '</div>';
    
    specBody.innerHTML = html;
  }
});
