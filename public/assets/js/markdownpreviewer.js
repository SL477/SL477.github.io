const renderer1 = new marked.Renderer();
renderer1.link = function (href, title, text) {
  return '<a target="_blank" href="' + href + '">' + text + '</a>';
};

const markedOptions = {
  gfm: true,
  breaks: true,
  renderer: renderer1,
};

function updatePreview() {
  const previewElement = document.getElementById('preview');
  if (previewElement) {
    const editorElement = document.getElementById('editor');
    if (editorElement && editorElement.value) {
      const rawMarkDown = editorElement.value;
      const text = marked(rawMarkDown, markedOptions);
      console.log(rawMarkDown);

      previewElement.innerHTML = text;
    } else {
      previewElement.innerHTML = '';
    }
  }
}

updatePreview();