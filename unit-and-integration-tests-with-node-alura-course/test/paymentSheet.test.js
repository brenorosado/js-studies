import { addExtraHour, calculateDiscounts } from '..';

describe('payment calculation tests', () => {
  it('Must return the sum of extra hours', () => {
    const expected = 2500;
    const returned = addExtraHour(2000, 500);

    expect(expected).toBe(returned);
  });

  it('Must discount the value from wage', () => {
    const expected = 2300;
    const returned = calculateDiscounts(2500, 200);

    expect(expected).toBe(returned);
  });
});
