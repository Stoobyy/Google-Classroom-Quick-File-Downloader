function addDownloadButtons() {
const fileCards = document.querySelectorAll(
  'a[href*="drive.google.com"], \
   a[href$=".pdf"], \
   a[href$=".doc"], \
   a[href$=".docx"], \
   a[href$=".ppt"], \
   a[href$=".pptx"], \
   a[href$=".xls"], \
   a[href$=".xlsx"], \
   a[href$=".txt"], \
   a[href$=".jpg"], \
   a[href$=".jpeg"], \
   a[href$=".png"], \
   a[href$=".gif"], \
   a[href$=".webp"]'
);
  fileCards.forEach(card => {
    if (card.parentElement.querySelector('.quick-download')) return;

    const btn = document.createElement('button');
    btn.className = 'quick-download';
    btn.innerText = '⬇️';
    btn.title = 'Quick Download';
    btn.onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      const ids = card.href.match(/[-\w]{25,}/);
      const fileId = ids ? ids[0] : null;
      const userId = card.href.match(/authuser=(\d+)/)[1];
      const url = card.href.replace(/\/file.*/, '/uc?export=download&id=' + fileId + '&authuser=' + userId);
      chrome.runtime.sendMessage({ action: "download", url });
    };
    card.parentElement.style.position = 'relative';
    card.parentElement.appendChild(btn);
  });
}

setInterval(addDownloadButtons, 2000);
