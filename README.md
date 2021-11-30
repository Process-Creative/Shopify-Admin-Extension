# Shopify Admin Extension
Custom JavaScript to be rendered when within the Shopify Admin Panel.

# How
This script is meant to be loaded using some form of browser extension that will
allow you to inject JavaScript. Find your specific browser extension below;

1. [Firefox](https://addons.mozilla.org/en-US/firefox/addon/shark-javascript-injector/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) - Set up with URL rule; `*://*.myshopify.com/admin*`
2. [Chrome](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk) - Set up with REGEXP; `(.*?)\.myshopify.com\/admin(.*?)`
3. Safari
4. Edge

Then have the following code be injected;
```js
fetch('https://raw.githubusercontent.com/Process-Creative/Shopify-Admin-Extension/main/extension.js', { mode: 'cors' }).then(e => e.text()).then(e => {
  const s = document.createElement('script');
  s.innerHTML = e, s.type = 'text/javascript';
  document.body.appendChild(s);
});
```