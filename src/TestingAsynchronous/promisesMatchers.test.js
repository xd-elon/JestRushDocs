test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });