describe('MVP Test', () => {

  const url = 'http://localhost:3000/pizza'
  const nameInput = () => cy.get('input[name=name]')
  const sizeDropdown = () => cy.get('select[name=size]')
  const pepperoniCheckbox = () => cy.get('input[name=pepperoni]')
  const sausageCheckbox = () => cy.get('input[name=sausage]')
  const mushroomsCheckbox = () => cy.get('input[name=mushrooms]')
  const pineappleCheckbox = () => cy.get('input[name=pineapple]')
  const specialInput = () => cy.get('input[name=special]')
  const submitButton = () => cy.get('button[id=order-button]')

  it('loaded', () => {
    cy.visit('http://localhost:3000/pizza')
  })
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  it('name input', () => {
    nameInput()
      .should('exist')
      .should('have.value', '')
      .type('test')
      .should('have.value', 'test')
  }
  )
  it('size dropdown', () => {
    sizeDropdown()
      .should('exist')
      .should('have.value', '')
      .select('small')
      .should('have.value', 'small')
  }
  )
  it('pepperoni checkbox', () => {
    pepperoniCheckbox()
      .should('exist')
      .should('not.be.checked')
      .check()
      .should('be.checked')
  }
  )
  it('multi checkboxes', () => {
    pepperoniCheckbox()
      .should('exist')
      .should('not.be.checked')
      .check()
      .should('be.checked')
    sausageCheckbox()
      .should('exist')
      .should('not.be.checked')
      .check()
      .should('be.checked')
    mushroomsCheckbox()
      .should('exist')
      .should('not.be.checked')
      .check()
      .should('be.checked')
    pineappleCheckbox()
      .should('exist')
      .should('not.be.checked')
      .check()
      .should('be.checked')
  }
  )
  it('can submit', () => {
    nameInput().type('test')
    sizeDropdown().select('small')
    pepperoniCheckbox().check()
    sausageCheckbox().check()
    mushroomsCheckbox().check()
    pineappleCheckbox().check()
    specialInput().type('test')
    submitButton().click()
  })
  



})