describe('Operations', () => {
    it('is an addition!', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('div.touch[data-value="1"]').click();
      cy.get('div.touch[data-value="+"]').click();
      cy.get('div.touch[data-value="1"]').click();
      cy.get('div.touch[data-value="="]').click();
  
      cy.get('div.result').invoke('text').then(el => {
        expect(el).to.equal("2");
      });
    });
  
    it('is an substraction!', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('div.touch[data-value="2"]').click();
      cy.get('div.touch[data-value="-"]').click();
      cy.get('div.touch[data-value="1"]').click();
      cy.get('div.touch[data-value="="]').click();
  
      cy.get('div.result').invoke('text').then(el => {
        expect(el).to.equal("1");
      });
    });
  
    it('It is a division!', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('div.touch[data-value="2"]').click();
      cy.get('div.touch[data-value="/"]').click();
      cy.get('div.touch[data-value="2"]').click();
      cy.get('div.touch[data-value="="]').click();
  
      cy.get('div.result').invoke('text').then(el => {
        expect(el).to.equal("1");
      });
    });
  
    it('It is a modulo!', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('div.touch[data-value="5"]').click();
      cy.get('div.touch[data-value="%"]').click();
      cy.get('div.touch[data-value="3"]').click();
      cy.get('div.touch[data-value="="]').click();
  
      cy.get('div.result').invoke('text').then(el => {
        expect(el).to.equal("2");
      });
    });
  
    it('It is  a square!', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('div.touch[data-value="2"]').click();
      cy.get('div.touch[data-value="5"]').click();
      cy.get('div.touch[data-value="√x"]').click();
      cy.get('div.touch[data-value="="]').click();
  
      cy.get('div.result').invoke('text').then(el => {
        expect(el).to.equal("5");
      });
    });
  
    it('Clear result!', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('div.touch[data-value="9"]').click();
      cy.get('div.touch[data-value="9"]').click();
      cy.get('div.touch[data-value="C"]').click();
  
      cy.get('div.result').invoke('text').then(el => {
        expect(el).to.equal("");
      });
    });
  })