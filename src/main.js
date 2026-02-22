setTimeout(() => {
  const app = document.getElementById("app");
  if (typeof window.OBR !== "undefined") {
    app.innerHTML = `<div style="color:lime;padding:20px">✅ OBR SDK loaded!</div>`;
  } else {
    app.innerHTML = `<div style="color:red;padding:20px">❌ OBR SDK not found on window</div>`;
  }
}, 1000);
