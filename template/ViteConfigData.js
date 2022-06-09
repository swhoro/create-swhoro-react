import ejs from 'ejs';

const getVirtualHtmlPages = (mode) => {
  const render = (m, d) => {
    return ejs.render(m, d);
  };

  const pages = {
    index: {
      template: '/public/index.html',
      data: {
        script: '<script type="module" src="/src/index.tsx"></script>',
        cdn: []
      },
      render
    }
  };

  const cdn = [
    '<script src="https://cdn.bootcdn.net/ajax/libs/react/18.1.0/umd/react.production.min.js"></script>',
    '<script src="https://cdn.bootcdn.net/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js"></script>'
  ];

  if (mode === 'production') {
    for (let k in pages) {
      pages[k].data.cdn = cdn;
    }
    return pages;
  }
  if (mode === 'development') {
    console.log(pages);
    return pages;
  }
};

export {getVirtualHtmlPages};