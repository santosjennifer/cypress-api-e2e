describe("Test on Spotify API", ()=> {
  
  before(() => {
    cy.login(); 
    cy.saveLocalStorage();  
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  it('Search artist with Id',()=>{
    const idArtist = '6KImCVD70vtIoJWnq6nGn3'
    cy.getArtist(idArtist).as('response')   
    cy.get('@response').should((response)=>{      
       expect(response.status).to.equal(200),
       expect(response.body.name).to.equal("Harry Styles")
    })
  })

  it('Search artist playlist',()=>{
    const type = 'playlist'
    const q = 'Taylor Swift'
    cy.getSearch(type,q).as('response')
    cy.get('@response').should((response)=>{
       expect(response.status).to.equal(200)
    })
  })

  it('Search artist with name',()=>{
    const type = 'artist'
    const q = 'Taylor Swift'
    cy.getSearch(type,q).as('response')
    cy.log('@response')
    cy.get('@response').should((response)=>{
       expect(response.status).to.equal(200),
       expect(response.body.artists.items[0].name).to.equal("Taylor Swift")
    })
  })

  it('Search artist with invalid Id',()=>{
    const idArtist = '123test'
    cy.getArtist(idArtist).as('response')
    cy.get('@response').should((response)=>{
       expect(response.status).to.equal(400), 
       expect(response.body.error.message).to.equal("invalid id")
    })
  })

  it('Search with invalid type',()=>{
    const type = 'test'
    const q = 'test'
    cy.getSearch(type,q).as('response')
    cy.log('@response')
    cy.get('@response').should((response)=>{
       expect(response.status).to.equal(400), 
       expect(response.body.error.message).to.equal("Bad search type field test")
    })
  })

});
