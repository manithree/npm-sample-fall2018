describe ('addition', ()=>{
    it('should add 2 numbers', () => {
        let randomNumbers = Math.floor((Math.random() * 11) + 1);
        let totalOfNumbers = randomNumbers + randomNumbers;
        expect(totalOfNumbers).not.toBe(0);
        expect(totalOfNumbers).toBeGreaterThan(0);
        expect(totalOfNumbers).not.toBe(11);
    });
});