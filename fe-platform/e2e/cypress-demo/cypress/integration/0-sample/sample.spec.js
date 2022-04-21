// unit test
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true);
//   })
// })

// describe('My Second Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

// e2e test

describe('My Third Test', () => {
  it('search the cypress', () => {
    cy.visit('https://www.baidu.com/');

    cy.get('#kw').type('cypress');
    cy.get('#su').click();

  });
})