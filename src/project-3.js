import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class Project3 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    @font-face { 
      font-family:'OpenSans-Light';
      font-weight:normal;
      font-style:normal;
      font-display:swap;
      src:url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Light.eot");
      src:url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Light.eot?#iefix") format('embedded-opentype'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans-v17-latin-latinext-cyrillic/opensans-300.woff2") format('woff2'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans-v17-latin-latinext-cyrillic/opensans-300.woff") format('woff'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Light.ttf") format('truetype'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Light.svg#OpenSans-Light") format('svg');
    } 
    @font-face { 
      font-family:'OpenSans';
      font-weight:normal;
      font-style:normal;
      font-display:swap;
      src:url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Regular.eot");
      src:url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Regular.eot?#iefix") format('embedded-opentype'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans-v17-latin-latinext-cyrillic/opensans-regular.woff2") format('woff2'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans-v17-latin-latinext-cyrillic/opensans-regular.woff") format('woff'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Regular.ttf") format('truetype'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Regular.svg#OpenSans-Regular") format('svg');
    } 
    @font-face { 
      font-family:'OpenSans-Bold';
      font-weight:700;
      font-display:swap;
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Bold.eot');
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Bold.eot?#iefix') format('embedded-opentype'),
        url('https://d3njjcbhbojbot.cloudfront.net/web/type/opensans-v17-latin-latinext-cyrillic/opensans-700.woff2') format('woff2'),
        url('https://d3njjcbhbojbot.cloudfront.net/web/type/opensans-v17-latin-latinext-cyrillic/opensans-700.woff') format('woff'),
        url('https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Bold.ttf') format('truetype'),
        url('https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Bold.svg#OpenSans-Bold') format('svg');
    } 
    @font-face { 
      font-family:'OpenSans';
      font-weight:bold;
      font-style:normal;
      font-display:swap;
      src:url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Bold.eot");
      src:url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Bold.eot?#iefix") format('embedded-opentype'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans-v17-latin-latinext-cyrillic/opensans-700.woff2") format('woff2'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans-v17-latin-latinext-cyrillic/opensans-700.woff") format('woff'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Bold.ttf") format('truetype'),
          url("https://d3njjcbhbojbot.cloudfront.net/web/type/opensans/OpenSans-Bold.svg#OpenSans-Bold") format('svg');
    } 
    @font-face { 
      font-family:'Source Sans Pro';
      font-style:normal;
      font-weight:300;
      font-display:swap;
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-300.eot');
      /* IE9 Compat Modes */
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-300.eot?#iefix') format('embedded-opentype'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-300.woff2') format('woff2'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-300.woff') format('woff'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-300.ttf') format('truetype'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-300.svg#SourceSansPro') format('svg');
    } 
    @font-face { 
      font-family:'Source Sans Pro';
      font-style:normal;
      font-weight:400;
      font-display:swap;
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.eot');
      /* IE9 Compat Modes */
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.eot?#iefix') format('embedded-opentype'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.woff2') format('woff2'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.woff') format('woff'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.ttf') format('truetype'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-regular.svg#SourceSansPro') format('svg');
    } 
    @font-face { 
      font-family:'Source Sans Pro';
      font-style:normal;
      font-weight:600;
      font-display:swap;
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-600.eot');
      /* IE9 Compat Modes */
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-600.eot?#iefix') format('embedded-opentype'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-600.woff2') format('woff2'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-600.woff') format('woff'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-600.ttf') format('truetype'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-600.svg#SourceSansPro') format('svg');
    } 
    @font-face { 
      font-family:'Source Sans Pro';
      font-style:normal;
      font-weight:bold;
      font-display:swap;
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-700.eot');
      src:url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-700.eot?#iefix') format('embedded-opentype'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-700.woff2') format('woff2'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-700.woff') format('woff'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-700.ttf') format('truetype'),
          url('https://d3njjcbhbojbot.cloudfront.net/web/type/source-sans-pro-v14-latin/source-sans-pro-v14-latin-700.svg#SourceSansPro') format('svg');
    } 
    * { 
        -webkit-box-sizing:  inherit; 
        -moz-box-sizing:  inherit; 
        box-sizing:  inherit;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;
    } 

    @media all{ 
      * { 
        -webkit-box-sizing:   inherit; 
        -moz-box-sizing:   inherit; 
        box-sizing:   inherit;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;
      } 
    }     

    ._jyhj5r { 
        display:  flex; 
        display:  flex; 
        display:  flex; 
        display:  flex; 
        display:  flex; 
        -webkit-box-lines:  multiple; 
        -webkit-flex-wrap:  wrap; 
        -ms-flex-wrap:  wrap; 
        flex-wrap:  wrap; 
        margin-left:  -12px; 
        margin-right:  -12px;
    } 

    .p-b-3 { 
        padding-bottom: 3rem!important;
    } 

    @media all{ 
      .p-b-3 { 
        padding-bottom: 3rem!important;
      } 
    }     

    ._1d3lkver { 
        margin-left: auto; 
        margin-right: auto; 
        padding-left: 12px; 
        padding-right: 12px;
    } 

    @media (min-width: 608px){ 
      ._1d3lkver { 
        width: 576px;
      } 
    }     

    @media (min-width: 824px){ 
      ._1d3lkver { 
        width: 792px;
      } 
    }     

    @media (min-width: 1040px){ 
      ._1d3lkver { 
        width: 1008px;
      } 
    }     

    @media (min-width: 1184px){ 
      ._1d3lkver { 
        width: 1152px;
      } 
    }     

    @media (min-width: 1472px){ 
      ._1d3lkver { 
        width: 1440px;
      } 
    }     

    .border-bottom { 
        border-bottom: 1px solid #e3e4e5;
    } 

    .border-top { 
        border-top: 1px solid #e3e4e5;
    } 

    @media all{ 
      .border-bottom { 
        border-bottom: 1px solid #e1e1e1;
      } 

      .border-top { 
        border-top: 1px solid #e1e1e1;
      } 

      .border-bottom { 
        border-bottom: 1px solid #e3e4e5;
      } 

      .border-top { 
        border-top: 1px solid #e3e4e5;
      } 
    }     

    .css-yw2k7b:focus { 
        outline: none;
    } 

    ._1jug6qr { 
        min-height: 100vh;
    } 

    main { 
        display: block;
    } 

    @media all{ 
      main { 
        display: block;
      } 
    }     

    #root { 
        overflow-x: hidden;
    } 

    body { 
        font-size:   1rem; 
        line-height:   1.5; 
        font-family:  OpenSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        margin:   0;
        color:  #373a3c; 
        background-color:  #fff;
    } 

    @media all{ 
      body { 
        font-family:  OpenSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
        font-size:   1rem; 
        line-height:   1.5; 
        color:   #373a3c; 
        background-color:   #fff;
        margin:   0;
      } 
    }     

    html { 
        display: block;
        font-family:     sans-serif; 
        line-height:     1.15; 
        -ms-text-size-adjust:     100%; 
        -webkit-text-size-adjust:     100%;
        -webkit-box-sizing:    border-box; 
        -moz-box-sizing:    border-box; 
        box-sizing:    border-box;
        -ms-overflow-style:   scrollbar; 
        -webkit-tap-highlight-color:   transparent;
        position:  relative; 
        min-height:  100%;
        font-size: 16px; 
    } 

    @media all{ 
      html { 
        -webkit-tap-highlight-color:   transparent;
        font-family:    sans-serif; 
        line-height:    1.15; 
        -ms-text-size-adjust:    100%; 
        -webkit-text-size-adjust:    100%;
        -webkit-box-sizing:   border-box; 
        -moz-box-sizing:   border-box; 
        box-sizing:   border-box;
        font-size:  16px; 
        -ms-overflow-style:  scrollbar; 
        position: relative; 
        min-height: 100%;
      } 
    }     

    .p-b-1 { 
        padding-bottom: 1rem!important;
    } 

    @media all{ 
      .p-b-1 { 
        padding-bottom: 1rem!important;
      } 
    }     

    ._1tqo7r77 { 
        position: relative; 
        min-height: 1px; 
        width: 100%; 
        padding-left: 12px; 
        padding-right: 12px;
    } 

    @media (min-width: 320px){ 
      ._1tqo7r77 { 
        width: 100%;
      } 
    }     

    @media (min-width: 824px){ 
      ._1tqo7r77 { 
        width: 83.333333%;
      } 
    }     

    @media (min-width: 1040px){ 
      ._1tqo7r77 { 
        width: 83.333333%;
      } 
    }     

    @media (min-width: 824px){ 
      ._1tqo7r77 { 
        width: 83.3333%;
      } 
    }     

    @media (min-width: 1040px){ 
      ._1tqo7r77 { 
        width: 83.3333%;
      } 
    }     

    *,:after,:before { 
        -webkit-box-sizing: inherit; 
        -moz-box-sizing: inherit; 
        box-sizing: inherit;
    } 

    @media all{ 
      :after,:before { 
        -webkit-box-sizing: border-box; 
        -moz-box-sizing: border-box; 
        box-sizing: border-box;
      } 

      *,:after,:before { 
        -webkit-box-sizing: inherit; 
        -moz-box-sizing: inherit; 
        box-sizing: inherit;
      } 
    }     

    ._1tqo7r77:after { 
        display: table; 
        clear: both;
    } 

    .m-t-1 { 
        margin-top: 1rem!important;
    } 

    .m-b-2 { 
        margin-bottom: 1.5rem!important;
    } 

    @media all{ 
      .m-t-1 { 
        margin-top: 1rem!important;
      } 

      .m-b-2 { 
        margin-bottom: 1.5rem!important;
      } 
    }     

    h3 { 
        margin:     0; 
        padding:     0;
        margin-top:    0; 
        margin-bottom:    .5rem;
        max-width:   100%;
        font-family:  OpenSans-light,Arial,sans-serif;
        font-size: 1.5rem; 
        line-height: 1.875rem;
    } 

    @media all{ 
      h3 { 
        font-family:     OpenSans-light,Arial,sans-serif;
        font-weight:        500; 
        line-height:    1.875rem;
        color:        inherit;
        margin-top:      0; 
        margin-bottom:      .5rem;
        font-size:    1.5rem; 
        margin:  0; 
        padding:  0;
        max-width: 100%;
      } 
    }     

    .headline-2-text { 
        font-weight:    400;
        margin-bottom:   10px;
        font-family:  OpenSans-Light,Arial,sans-serif;
        font-size: 20px; 
        line-height: 24px;
    } 

    .bold { 
        font-family: OpenSans,Arial,sans-serif; 
        font-weight: 700;
    } 

    @media all{ 
      .bold { 
        font-family: OpenSans-Bold,OpenSans,Arial,sans-serif;
      } 

      .headline-2-text { 
        font-weight:  400;
        margin-bottom: 10px;
      } 

      .bold { 
        font-family: OpenSans,Arial,sans-serif; 
        font-weight: 700;
      } 

      .headline-2-text { 
        font-family:  OpenSans-Light,Arial,sans-serif;
        font-size: 20px; 
        line-height: 24px;
      } 

      .SyllabusModule .headline-2-text  { 
        color: #000;
      } 
    }     

    .cds-33 { 
        margin: 0;
    } 

    .cds-35 { 
        font-size: 1rem; 
        font-family: "Source Sans Pro", Arial, sans-serif; 
        font-weight: 400; 
        line-height: 1.5rem; 
        letter-spacing: 0;
    } 

    .css-1j071wf { 
        color: #1f1f1f; 
        letter-spacing: 0; 
        font-size: 1rem; 
        line-height: 1.5rem; 
        font-family: "Source Sans Pro",Arial,sans-serif; 
        font-weight: 400;
    } 

    @media (min-width: 576px){ 
      .hidden-sm-up { 
        display: none!important;
      } 
    }     

    ._1qfi0x77 { 
        display:  flex;
        display:  flex;
        display:  flex;
        display:  flex;
        display:  flex;
        -webkit-box-align:  center; 
        -ms-flex-align:  center; 
        -webkit-align-items:  center; 
        align-items:  center; 
    } 

    .overflow-hidden { 
        overflow: hidden;
    } 

    @media all{ 
      .overflow-hidden { 
        overflow: hidden;
      } 
    }     

    .p-y-1 { 
        padding-top: 1rem!important; 
        padding-bottom: 1rem!important;
    } 

    @media all{ 
      .p-y-1 { 
        padding-top: 1rem!important; 
        padding-bottom: 1rem!important;
      } 
    }     

    button { 
        font:     inherit; 
        margin:     0;
        overflow:    visible;
        text-transform:   none;
        -ms-touch-action:  manipulation; 
        touch-action:  manipulation;
        line-height: inherit;
    } 

    @media all{ 
      button { 
        color:        inherit;
        overflow:       visible;
        -webkit-appearance:      button; 
        cursor:      pointer;
        font-family:     inherit; 
        font-size:     inherit;
        font:    inherit; 
        margin:    0;
        text-transform:   none;
        -ms-touch-action:  manipulation; 
        touch-action:  manipulation;
        line-height: inherit;
      } 
    }     

    .cds-30 { 
        color: inherit; 
        border: 0; 
        cursor: pointer; 
        margin: 0; 
        display: inline-flex; 
        outline: 0; 
        padding: 0; 
        position: relative; 
        align-items: center; 
        user-select: none; 
        border-radius: 0; 
        vertical-align: middle; 
        -moz-appearance: none; 
        justify-content: center; 
        text-decoration: none; 
        background-color: transparent; 
        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
    } 

    .cds-1 { 
        color: rgba(0, 0, 0, 0.87); 
        padding: 6px 16px; 
        min-width: 64px; 
        box-sizing: border-box; 
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; 
        border-radius: 4px;
    } 

    .cds-3 { 
        padding: 6px 8px;
    } 

    .cds-12 { 
        box-shadow: none;
    } 

    .css-1am3j7n { 
        border-radius: 4px; 
        text-transform: none; 
        text-align: center; 
        max-width: 320px; 
        min-width: unset; 
        -webkit-transition: none; 
        transition: none; 
        -webkit-text-decoration: none; 
        text-decoration: none; 
        color: #0056d2; 
        font-size: 0.875rem; 
        line-height: 1.25rem; 
        font-family: "Source Sans Pro",Arial,sans-serif; 
        font-weight: 700; 
        letter-spacing: -0.1px; 
        padding: 8px;
    } 

    button,[type="button"]  { 
        -webkit-appearance: button;
    } 

    @media all{ 
      button,[type="button"]  { 
        -webkit-appearance: button;
      } 
    }     

    .cds-1:hover { 
        text-decoration: none; 
        background-color: rgba(0, 0, 0, 0.04);
    } 

    .cds-12:hover { 
        box-shadow: none;
    } 

    .css-1am3j7n:hover { 
        -webkit-text-decoration: underline; 
        text-decoration: underline; 
        color: #00419e; 
        background-color: #f3f8ff;
    } 

    @media all{ 
      .SyllabusModule .visibility-hidden  { 
        visibility: hidden;
      } 
    }     

    .m-r-1 { 
        margin-right: 1rem!important;
    } 

    @media all{ 
      .m-r-1 { 
        margin-right: 1rem!important;
      } 
    }     

    strong { 
        font-weight: bolder;
    } 

    @media all{ 
      strong { 
        font-family:   OpenSans-Bold,OpenSans,Arial,sans-serif;
        font-weight:  bolder;
      } 
    }     

    .text-secondary { 
        color: #6e767f;
    } 

    @media all{ 
      .text-secondary { 
        color: #6e767f;
      } 
    }     

    .rc-TogglableContent .content  { 
        position: relative;
    } 

    .rc-TogglableContent.collapsed .content  { 
        overflow: hidden;
    } 

    .m-x-1s { 
        margin-left:  .5rem!important;
        margin-right: .5rem!important;
    } 

    @media all{ 
      .m-x-1s { 
        margin-left:  .5rem!important;
        margin-right: .5rem!important;
      } 
    }     

    ._wmgtrl9 { 
        font-size: 0.875rem; 
        line-height: 1.5rem; 
        font-weight: normal; 
        font-family: OpenSans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    } 

    .cds-2 { 
        width: 100%; 
        display: inherit; 
        align-items: inherit; 
        justify-content: inherit;
    } 

    .css-1am3j7n .cds-button-label  { 
        text-transform: none;
    } 

    ._eo0j7w { 
        background-image:  linear-gradient(90deg, rgb(252, 110, 81), rgb(246, 187, 66));
        background-image:  linear-gradient(90deg, rgb(252, 110, 81), rgb(246, 187, 66));
        background-image:  linear-gradient(90deg, rgb(252, 110, 81), rgb(246, 187, 66));
    } 

    ._u2c01j { 
        background-image:  linear-gradient(90deg, rgb(72, 207, 173), rgb(59, 175, 218));
        background-image:  linear-gradient(90deg, rgb(72, 207, 173), rgb(59, 175, 218));
        background-image:  linear-gradient(90deg, rgb(72, 207, 173), rgb(59, 175, 218));
    } 

    .p-t-2 { 
        padding-top: 1.5rem!important;
    } 

    @media all{ 
      .p-t-2 { 
        padding-top: 1.5rem!important;
      } 
    }     

    ._473mf9o { 
        display:  flex; 
        display:  flex; 
        display:  flex; 
        display:  flex; 
        display:  flex; 
        -webkit-box-direction:  normal; 
        -webkit-box-orient:  vertical; 
        -webkit-box-align:  center; 
        -ms-flex-align:  center; 
        -webkit-box-pack:  center; 
        -ms-flex-pack:  center; 
        -webkit-justify-content:  center; 
        justify-content:  center; 
        -webkit-align-items:  center; 
        align-items:  center; 
        -webkit-flex-direction:  column; 
        -ms-flex-direction:  column; 
        flex-direction:  column;
    } 

    p { 
        font-size:   .875rem; 
        line-height:  21px;
        font-family:      OpenSans,Arial,sans-serif;
        margin-bottom:     1rem;
        margin-top:    0; 
        max-width:   100%;
        font-weight:  400;
    } 

    @media all{ 
      p { 
        margin:     0 0 10px;
        font-size:    14px; 
        line-height:    21px; 
        font-family:    OpenSans,Arial,sans-serif;
        margin-top:   0; 
        margin-bottom:   10px;
        max-width: 100%;
      } 
    }     

    ._ufjrdd { 
        display:  inline-block; 
        vertical-align:  middle; 
        color:  rgb(54, 59, 66); 
        -webkit-transition:  all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
        -moz-transition:  all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
        transition:  all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; 
        -webkit-user-select:  none; 
        -moz-user-select:  none; 
        -ms-user-select:  none; 
        user-select:  none;
    } 

    svg:not(:root) { 
        overflow: hidden;
    } 

    @media all{ 
      svg:not(:root) { 
        overflow: hidden;
      } 
    }     

    .cds-62 { 
        display: block;
    } 

    .m-y-2 { 
        margin-top: 1.5rem!important; 
        margin-bottom: 1.5rem!important;
    } 

    @media all{ 
      .m-y-2 { 
        margin-top: 1.5rem!important; 
        margin-bottom: 1.5rem!important;
      } 
    }     

    .m-x-1 { 
        margin-left:  1rem!important;
        margin-right: 1rem!important;
    } 

    @media all{ 
      .m-x-1 { 
        margin-left:  1rem!important;
        margin-right: 1rem!important;
      } 

      .ItemGroupView .learning-item  { 
        color: #3b3b3b;
      } 
    }     

    a { 
        background-color:   transparent; 
        -webkit-text-decoration-skip:   objects;
        color:  #0062e4; 
        text-decoration:  none;
        -ms-touch-action: manipulation; 
        touch-action: manipulation;
    } 

    @media all{ 
      a { 
        background:     transparent;
        color:   #0062e4; 
        background-color:   transparent; 
        -webkit-text-decoration-skip:   objects;
        text-decoration:  none;
        -ms-touch-action: manipulation; 
        touch-action: manipulation;
      } 
    }     

    .text-primary { 
        color: #363b42;
    } 

    @media all{ 
      .link-no-style { 
        text-decoration: none; 
        color: inherit;
      } 

      .text-primary { 
        color: #363b42;
      } 
    }     

    a:active,a:hover { 
        outline-width: 0;
    } 

    a:hover { 
        text-decoration: underline;
    } 

    @media all{ 
      a:active,a:hover { 
        outline: 0;
      } 

      a:hover { 
        color: "#004EB6";
      } 

      a:active,a:hover { 
        outline-width: 0;
      } 

      a:hover { 
        text-decoration: underline;
      } 

      .link-no-style,.link-no-style:hover { 
        text-decoration: none; 
        color: inherit;
      } 
    }     

    a.text-primary:hover { 
        color: #025aa5!important;
    } 

    @media all{ 
      a.text-primary:hover { 
        color: #025aa5!important;
      } 

      .ItemGroupView .duration-text  { 
        color: #3b3b3b;
      } 
    }     


    /* These were inline style tags. Uses id+class to override almost everything */
    #style-Prfyo.style-Prfyo {  
      border-radius:50%;  
    }  
    #style-2n1Yw.style-2n1Yw {  
      width:40px;  
      height:40px;  
    }  
    #style-8rCpI.style-8rCpI {  
      height: auto;  
    }  
    #style-BBXPD.style-BBXPD {  
      border-radius:50%;  
    }  
    #style-doyMi.style-doyMi {  
      width:40px;  
      height:40px;  
    }  
    #style-i1J9N.style-i1J9N {  
      border-radius:50%;  
    }  
    #style-FD657.style-FD657 {  
      width:40px;  
      height:40px;  
    }  
    #style-DPdL6.style-DPdL6 {  
      height: 0px;  
    }  
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div class="_1tqo7r77 p-b-1 border-bottom snipcss-PiIjR">
        <div class="SyllabusModule">
          <div class="hidden-sm-down m-t-1 m-b-2">
            <div class="_1qfi0x77" data-test="duration-text-section">
              <div class="m-r-1" aria-hidden="true">
                <div class="_eo0j7w style-Prfyo" id="style-Prfyo">
                  <div class="_473mf9o style-2n1Yw" id="style-2n1Yw">
                    <svg aria-hidden="true" class="_ufjrdd" style="fill:#FFF;height:20px;width:20px" viewBox="0 0 48 48" role="img" aria-labelledby="Hourstocomplete78f65510-f923-4678-a803-506684238f53 Hourstocomplete78f65510-f923-4678-a803-506684238f53Desc" xmlns="http://www.w3.org/2000/svg">
                      <title id="Hourstocomplete78f65510-f923-4678-a803-506684238f53">
                        Hours to complete
                      </title>
                      <path d="M24 47C11.318375 47 1 36.681625 1 24S11.318375 1 24 1s23 10.318375 23 23-10.318375 23-23 23zM2.91666667 24c0 11.6255417 9.45779163 21.0833333 21.08333333 21.0833333S45.0833333 35.6255417 45.0833333 24 35.6255417 2.91666667 24 2.91666667 2.91666667 12.3744583 2.91666667 24zm19.12500003 1.9166667V6.70833333h2.9166666V23H35.5v2.9166667H22.0416667z" role="presentation">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <strong class="cds-33 text-secondary css-1j071wf cds-35">
                <span>
                  2 hours to complete
                </span>
              </strong>
            </div>
          </div>
          <h3 class="headline-2-text bold m-b-2 ">
            Misconceptions about happiness
          </h3>
          <span class="cds-33 css-1j071wf cds-35">
            <div class="rc-TogglableContent rc-module-description-text collapsed">
              <div class="content style-8rCpI" aria-hidden="true" id="style-8rCpI">
                <div class="content-inner">
                  <p>
                    In this module, you will learn what it means to be happy and why pursuing happiness is not a pointless endeavor. Dr. Santos addresses how our minds lie to us and how the science shows that our misconceptions about money, grades, and social media are holding us back from implementing the techniques studied in positive psychology.
                  </p>
                </div>
              </div>
            </div>
          </span>
          <div class="hidden-sm-up m-t-1">
            <div class="_1qfi0x77" data-test="duration-text-section">
              <div class="m-r-1" aria-hidden="true">
                <div class="_eo0j7w style-BBXPD" id="style-BBXPD">
                  <div class="_473mf9o style-doyMi" id="style-doyMi">
                    <svg aria-hidden="true" class="_ufjrdd" style="fill:#FFF;height:20px;width:20px" viewBox="0 0 48 48" role="img" aria-labelledby="Hourstocomplete76fe11a0-f974-4978-e419-ecda283f4025 Hourstocomplete76fe11a0-f974-4978-e419-ecda283f4025Desc" xmlns="http://www.w3.org/2000/svg">
                      <title id="Hourstocomplete76fe11a0-f974-4978-e419-ecda283f4025">
                        Hours to complete
                      </title>
                      <path d="M24 47C11.318375 47 1 36.681625 1 24S11.318375 1 24 1s23 10.318375 23 23-10.318375 23-23 23zM2.91666667 24c0 11.6255417 9.45779163 21.0833333 21.08333333 21.0833333S45.0833333 35.6255417 45.0833333 24 35.6255417 2.91666667 24 2.91666667 2.91666667 12.3744583 2.91666667 24zm19.12500003 1.9166667V6.70833333h2.9166666V23H35.5v2.9166667H22.0416667z" role="presentation">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <strong class="cds-33 text-secondary css-1j071wf cds-35">
                <span>
                  2 hours to complete
                </span>
              </strong>
            </div>
          </div>
          <div class="_1qfi0x77 m-b-2">
            <div class="_1qfi0x77 p-y-1">
              <div class="m-r-1">
                <div class="_u2c01j style-i1J9N" id="style-i1J9N">
                  <div class="_473mf9o style-FD657" id="style-FD657">
                    <svg aria-hidden="true" class="_ufjrdd" style="fill:#FFF;height:20px;width:20px" viewBox="0 0 48 48" role="img" aria-labelledby="Reading2bcbf1b6-9748-4f5b-ff39-0f373c57d77f Reading2bcbf1b6-9748-4f5b-ff39-0f373c57d77fDesc" xmlns="http://www.w3.org/2000/svg">
                      <title id="Reading2bcbf1b6-9748-4f5b-ff39-0f373c57d77f">
                        Reading
                      </title>
                      <path d="M28.67 14H38v19.68h-9.34c-4 0-4.08 2.32-4.08 2.32H23.4s-.05-2.32-4.03-2.32h-9.33l-.04-.53V14h9.34c1.96 0 3.76 1.1 4.66 2.83.9-1.74 2.7-2.83 4.67-2.83zm-.3 18H36V16h-7.64c-1 0-2 .56-2.7 1.25-.73.7-.66 1.6-.66 2.7h-1.98c0-.98.05-2-.67-2.7-.72-.7-1.66-1.26-2.68-1.25h-7.64L12 32h7.67c1.84 0 2.8.1 3.35 1V19.97H25V33c.55-.9 1.5-1 3.36-1zM24 47C11.3 47 1 36.7 1 24S11.3 1 24 1s23 10.3 23 23-10.3 23-23 23zm0-1.84c11.7 0 21.16-9.47 21.16-21.16C45.16 12.3 35.7 2.84 24 2.84 12.3 2.84 2.84 12.3 2.84 24c0 11.7 9.47 21.16 21.16 21.16z" role="presentation">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="_wmgtrl9 m-x-1s text-secondary">
                <span>
                  <span>
                    9 videos 
                    <span>
                      (Total 55 min)
                    </span>
                  </span>
                  <span>
                    , 3 readings
                  </span>
                  <span>
                    , 1 quiz
                  </span>
                </span>
              </div>
            </div>
            <button class="cds-30 cds-1 cds-3  css-1am3j7n cds-12 cds-button-disableElevation" tabindex="0" type="button" data-test="show-module-details-btn" aria-label="See all modules in Misconceptions about happiness" data-track="true" data-track-app="xdp_v1" data-track-page="xdp" data-track-action="[object Object]" data-track-component="syllabus_week_see_all">
              <span class="cds-2 cds-button-label">
                See All
              </span>
            </button>
          </div>
          <div class="overflow-hidden style-DPdL6" aria-hidden="true" id="style-DPdL6">
            <div class="visibility-hidden">
              <div class="SyllabusModuleDetails">
                <div class="ItemGroupView border-top p-t-2">
                  <div class="items">
                    <div class="_1qfi0x77">
                      <svg aria-hidden="true" class="_ufjrdd" style="fill:#2A73CC;height:24px;width:24px" viewBox="0 0 48 48" role="img" aria-labelledby="Video8dbe7d5c-a89f-4ab4-b16b-8161499036c1 Video8dbe7d5c-a89f-4ab4-b16b-8161499036c1Desc" xmlns="http://www.w3.org/2000/svg">
                        <title id="Video8dbe7d5c-a89f-4ab4-b16b-8161499036c1">
                          Video
                        </title>
                        <path d="M19 33.94V15l15 9.47-15 9.47zM24 47C11.3 47 1 36.7 1 24S11.3 1 24 1s23 10.3 23 23-10.3 23-23 23zm0-1.84c11.7 0 21.16-9.47 21.16-21.16C45.16 12.3 35.7 2.84 24 2.84 12.3 2.84 2.84 12.3 2.84 24c0 11.7 9.47 21.16 21.16 21.16z" role="presentation">
                        </path>
                      </svg>
                      <strong class="cds-33 m-x-1 learning-item css-1j071wf cds-35">
                        <span>
                          9 videos
                        </span>
                      </strong>
                    </div>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      <a data-click-key="xdp_v1.xdp.click.syllabus_item_link" data-click-value="{&quot;courseId&quot;:&quot;CrTQ-HcpEe24qw7yCbSVjw&quot;,&quot;href&quot;:&quot;/lecture/the-science-of-well-being-for-teens/why-take-yales-most-popular-course-nl1S0&quot;,&quot;name&quot;:&quot;Why Take Yale's Most Popular Course?&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;xdp_v1&quot;,&quot;component&quot;:&quot;syllabus_item_link&quot;,&quot;page&quot;:&quot;xdp&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="xdp_v1" data-track-page="xdp" data-track-action="click" data-track-component="syllabus_item_link" data-track-href="/lecture/the-science-of-well-being-for-teens/why-take-yales-most-popular-course-nl1S0" href="/lecture/the-science-of-well-being-for-teens/why-take-yales-most-popular-course-nl1S0" to="/lecture/the-science-of-well-being-for-teens/why-take-yales-most-popular-course-nl1S0" class="text-primary link-no-style" target="_blank" rel="noopener noreferrer" data-test="lecture-item-link">
                        Why Take Yale's Most Popular Course?
                      </a>
                      <span class="duration-text m-x-1s">
                        <span>
                          11m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      What Does It Even Mean to Be Happy?
                      <span class="duration-text m-x-1s">
                        <span>
                          8m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Is Becoming Happier a Selfish Thing to Do?
                      <span class="duration-text m-x-1s">
                        <span>
                          5m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Do Life Circumstances Determine Happiness?
                      <span class="duration-text m-x-1s">
                        <span>
                          3m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      What Are the Benefits of Being Happier?
                      <span class="duration-text m-x-1s">
                        <span>
                          6m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Our Mind Lies to Us About Happiness
                      <span class="duration-text m-x-1s">
                        <span>
                          2m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Misconceptions #1: Money &amp; Awesome Stuff
                      <span class="duration-text m-x-1s">
                        <span>
                          6m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Misconceptions #2: Grades &amp; College Admissions
                      <span class="duration-text m-x-1s">
                        <span>
                          4m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Misconceptions #3: Screen Time &amp; Social Media
                      <span class="duration-text m-x-1s">
                        <span>
                          5m
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="ItemGroupView border-top p-t-2">
                  <div class="items">
                    <div class="_1qfi0x77">
                      <svg aria-hidden="true" class="_ufjrdd" style="fill:#1F8354;height:24px;width:24px" viewBox="0 0 48 48" role="img" aria-labelledby="Reading894dfafa-47b5-4c8d-93c4-3466aea04e11 Reading894dfafa-47b5-4c8d-93c4-3466aea04e11Desc" xmlns="http://www.w3.org/2000/svg">
                        <title id="Reading894dfafa-47b5-4c8d-93c4-3466aea04e11">
                          Reading
                        </title>
                        <path d="M28.67 14H38v19.68h-9.34c-4 0-4.08 2.32-4.08 2.32H23.4s-.05-2.32-4.03-2.32h-9.33l-.04-.53V14h9.34c1.96 0 3.76 1.1 4.66 2.83.9-1.74 2.7-2.83 4.67-2.83zm-.3 18H36V16h-7.64c-1 0-2 .56-2.7 1.25-.73.7-.66 1.6-.66 2.7h-1.98c0-.98.05-2-.67-2.7-.72-.7-1.66-1.26-2.68-1.25h-7.64L12 32h7.67c1.84 0 2.8.1 3.35 1V19.97H25V33c.55-.9 1.5-1 3.36-1zM24 47C11.3 47 1 36.7 1 24S11.3 1 24 1s23 10.3 23 23-10.3 23-23 23zm0-1.84c11.7 0 21.16-9.47 21.16-21.16C45.16 12.3 35.7 2.84 24 2.84 12.3 2.84 2.84 12.3 2.84 24c0 11.7 9.47 21.16 21.16 21.16z" role="presentation">
                        </path>
                      </svg>
                      <strong class="cds-33 m-x-1 learning-item css-1j071wf cds-35">
                        <span>
                          3 readings
                        </span>
                      </strong>
                    </div>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Happiness Homework
                      <span class="duration-text m-x-1s">
                        <span>
                          10m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Welcome Letter from Laurie
                      <span class="duration-text m-x-1s">
                        <span>
                          10m
                        </span>
                      </span>
                    </span>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Key Terms
                      <span class="duration-text m-x-1s">
                        <span>
                          10m
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="ItemGroupView border-top p-t-2">
                  <div class="items">
                    <div class="_1qfi0x77">
                      <svg aria-hidden="true" class="_ufjrdd" style="fill:#0156B8;height:24px;width:24px" viewBox="0 0 48 48" role="img" aria-labelledby="Quiz36c18c2b-eb03-44dd-9338-1771321911a8 Quiz36c18c2b-eb03-44dd-9338-1771321911a8Desc" xmlns="http://www.w3.org/2000/svg">
                        <title id="Quiz36c18c2b-eb03-44dd-9338-1771321911a8">
                          Quiz
                        </title>
                        <path d="M24 47C11.3 47 1 36.7 1 24S11.3 1 24 1s23 10.3 23 23-10.3 23-23 23zm0-1.84c11.7 0 21.16-9.47 21.16-21.16C45.16 12.3 35.7 2.84 24 2.84 12.3 2.84 2.84 12.3 2.84 24c0 11.7 9.47 21.16 21.16 21.16zM21 17h10v2H21v-2zm0 6h10v2H21v-2zm0 6h10v2H21v-2zm-3-10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-5-21h22v28H13V10zm2 2v24h18V12H15z" role="presentation">
                        </path>
                      </svg>
                      <strong class="cds-33 m-x-1 learning-item css-1j071wf cds-35">
                        <span>
                          1 practice exercise
                        </span>
                      </strong>
                    </div>
                    <span class="cds-33 m-y-2 css-1j071wf cds-35 cds-62" data-test-id="item-view">
                      Module 1 Quiz
                      <span class="duration-text m-x-1s">
                        <span>
                          30m
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('project-3', Project3);