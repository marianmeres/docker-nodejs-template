
// hello world from client
(() => {
    const element = document.createElement('div');
    element.innerHTML = `<b>Client:</b> Hello World (${new Date().toISOString()})`;
    document.body.appendChild(element);
})();

// hello world from server
(async () => {
    const response = await fetch(process.env.API_URL);
    const element = document.createElement('div');
    element.innerHTML = '<b>Server:</b> ' + (await response.text());
    document.body.appendChild(element);
})();
