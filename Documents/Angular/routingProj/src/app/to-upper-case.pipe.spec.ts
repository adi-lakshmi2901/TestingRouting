import { ToUpperCasePipe } from './to-upper-case.pipe';
describe('ToUpperCasePipe', () => {
  let pipe: ToUpperCasePipe;
  it('create an instance', () => {
    pipe = new ToUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
  it('transforms "abc" to "ABC"', () => {
    pipe = new ToUpperCasePipe();
    expect(pipe.transform('abc')).toBe('ABC');
  });
});