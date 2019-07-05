var printBill = require('../src/printBill');
var plays = require('../data/plays.json');
var invoices = require('../data/invoices.json');

describe('Read data for printBill', () => {
  it('should data from invoices.json', () => {
    expect(invoices.customer).toBe('BigCo');
  });

  it('should data from plays.json', () => {
    expect(plays.hamlet.name).toBe('Hamlet');
  });
});

describe('Process data on printBill', () => {
  it('should print the bill', () => {
    result = printBill(invoices, plays);
    expect(result).toBe(
      'Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n'
    );
  });
});
