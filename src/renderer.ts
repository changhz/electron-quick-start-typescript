// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

(async () => {
  const res = await fetch(`https://github.com`);
  const html = await res.text();
  console.log(html);
  const container = document.getElementById("app");
  container.innerHTML = "";
})();
