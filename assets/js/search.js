const urlParams = new URLSearchParams(window.location.search);
console.log('urlParams', urlParams);
console.log('q', urlParams.get('q'));
console.log('tag', urlParams.get('tag'));
console.log('posts', urlParams.get('posts'));
console.log('notes', urlParams.get('notes'));
console.log('pages', urlParams.get('pages'));

const searchCtrl = document.getElementById('search');
if (searchCtrl) {
  searchCtrl.value = urlParams.get('q');
}
const tagsCtrl = document.getElementById('tag');
if (tagsCtrl) {
  tagsCtrl.value = urlParams.get('tag');
}
const postCtrl = document.getElementById('posts');
if (postCtrl) {
  postCtrl.checked = urlParams.get('posts') ? true : false;
}
const noteCtrl = document.getElementById('notes');
if (noteCtrl) {
  noteCtrl.checked = urlParams.get('notes') ? true : false;
}
const pageCtrl = document.getElementById('pages');
if (pageCtrl) {
  pageCtrl.checked = urlParams.get('pages') ? true : false;
}

const resultsCtrl = document.getElementById('results');
