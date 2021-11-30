
(p => {
  const q = '[Process Creative]';

  // Indicator
  const menu = document.createElement('div');
  menu.innerHTML = `
    <style type="text/css">
      .c-process-tool {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
      }

      .c-process-tool__icon {
        background-image: url('//cdn.shopify.com/s/files/1/1099/4438/users/avatar_250x250_crop_center_a1bab11d-6ea3-427c-9f71-9752871a0024_128x.jpg');
        background-size: cover;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0px 0px 15px 0px rgba(131,131,131,0.2);
        transition: all 0.2s ease-out;
      }
      .c-process-tool:hover .c-process-tool__icon {
        box-shadow: 0px 0px 15px 0px rgba(131,131,131,0.4);
      }
    </style>

    <div class="c-process-tool">
      <div class="c-process-tool__icon" title="Process Tool Loaded"></div>
    </div>
  `;
  document.body.appendChild(menu);

  // Auth
  let authed = false;
  p.auth = () => {
    console.error(q, 'You can\'t do this without authenticating first. Please enter q(""); with the Shopify URL manually typed out below in order to authenticate then run the command again.');
    return window.q = (n) => {
      if(n !== window.location.hostname) return console.error(`URL does not EXACTLY match ${window.location.hostname}!!`);
      authed = true;
      console.error(`You are now authed, dangerous things can now happen.`);
    }
  }

  const withAuth = callback => () => {
    if(authed) return callback();
    return p.auth();
  }
  
  // Danger
  const danger = document.createElement('style');
  danger.innerHTML = `
    [class*="Polaris-Button--destructive"],
    [class*="Polaris-BulkActions__BulkActionButton"]
    { display: none !important; }
  `;

  p.dangerOn = ()=>[ menu.appendChild(danger),console.log(q,'Danger Buttons Hidden') ];
  p.dangerOff = withAuth(()=>[ danger.remove(),console.log(q,'Danger Buttons Visible') ]);
  menu.appendChild(danger);


  console.log(q, 'Script Loaded');
})(window.pcTools = {});