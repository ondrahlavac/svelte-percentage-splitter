import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Page from './+page.svelte';


describe('/+page.svelte', () => {
    test('should calculate default parts correctly', () => {
        render(Page);

        const partA = screen.getByTestId('part-a');
        const partB = screen.getByTestId('part-b');
        const total = screen.getByTestId('total');
        const percentage = screen.getByTestId('percentage');

        expect(partA).toHaveValue(150000);
        expect(partB).toHaveValue(150000);
        expect(total).toHaveValue(300000);
        expect(percentage).toHaveValue('50');
    });
});
/* describe('/+page.svelte', () => {
    test('should calculate 60/40 split correctly', () => {
        render(Page);

        const partA = screen.getByTestId('part-a');
        const total = screen.getByTestId('total');
        const percentage = screen.getByTestId('percentage');

        //Check default values
        expect(partA).toHaveValue(150000);
        
        // Set division percentage to 60
        fireEvent.change(percentage, { target: { value: 60 } });
        expect(percentage).toHaveValue('60');

        const partB = screen.getByTestId('part-b');
        expect(partB).toHaveValue(100000); // 150000 / (60/100) * (1-60/100) = 100000
        expect(total).toHaveValue(250000); // 150000 + 100000 = 250000
    });
}); */

describe('/+page.svelte', () => {
    test('should calculate 60/40 split correctly using slider', async () => {
        render(Page);

        const partA = screen.getByTestId('part-a');
        const total = screen.getByTestId('total');
        const percentage = screen.getByTestId('percentage');

        // Check default values
        expect(partA).toHaveValue(150000);
        
        // Set division percentage to 60 using slider
        await fireEvent.input(percentage, { target: { value: 60 } });
        expect(percentage).toHaveValue('60');

        const partB = screen.getByTestId('part-b');
        expect(partB).toHaveValue(100000); // 150000 / (60/100) * (1-60/100) = 100000
        expect(total).toHaveValue(250000); // 150000 + 100000 = 250000
    });
});