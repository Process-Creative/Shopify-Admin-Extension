# Shopify Admin Extension
Custom JavaScript to be rendered when within the Shopify Admin Panel.

Add to your favourite JS injector for; `*://*.myshopify.com/admin*`

Code;
```js
fetch('https://raw.githubusercontent.com/Process-Creative/Shopify-Admin-Extension/main/extension.js', { mode: 'cors' }).then(e => e.text()).then(e => {
  const s = document.createElement('script');
  s.innerHTML = e, s.type = 'text/javascript';
  document.body.appendChild(s);
});
```