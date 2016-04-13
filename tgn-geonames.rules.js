module.exports = {
  geonames: [
    {
      types: {
        from: 'hg:Place',
        to: 'hg:Place'
      },
      geoDistance: 5000,
      textDistance: 3,
      relation: 'hg:sameAs',
      filter: (pit) => {
        // Do not use TGN term objects
        return pit.uri.indexOf('term') === -1
      }
    },

    {
      types: {
        from: 'hg:Borough',
        to: 'hg:Borough'
      },
      geoDistance: 10000,
      textDistance: 3,
      relation: 'hg:sameAs'
    },

    {
      types: {
        from: 'hg:County',
        to: 'hg:County'
      },
      geoDistance: 5000,
      textDistance: 3,
      relation: 'hg:sameAs'
    },

    {
      types: {
        from: 'hg:Neighbourhood',
        to: 'hg:Neighbourhood'
      },
      geoDistance: 2000,
      textDistance: 3,
      relation: 'hg:sameAs'
    }
  ]
}
