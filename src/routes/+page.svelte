<script>
    import { onMount } from "svelte";

    let partA = 150000;
    let divisionPercentage = 50;
    let partB = 0;
    let partC = 0;

    function calculateValues() {
    let divisionRatio = divisionPercentage / 100;
        partB = Math.floor(partA * (1 - divisionRatio) / divisionRatio);
        partC = Math.floor(partA + partB);
    }

    onMount(calculateValues);
</script>

<main class="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
    <label class="flex flex-col">
        <span class="text-gray-700 font-semibold">Part A:</span>
        <input type="number" bind:value={partA} on:input={calculateValues} 
               class="border rounded-md p-2 mt-1 focus:ring focus:ring-indigo-300"
               data-testId="part-a" />
    </label>
    
    <label class="flex flex-col">
        <span class="text-gray-700 font-semibold">Division Ratio: {divisionPercentage}%</span>
        <input type="range" min="1" max="100" bind:value={divisionPercentage} on:input={calculateValues} 
               class="mt-2 cursor-pointer"
               data-testId="percentage" />
    </label>
    
    <label class="flex flex-col">
        <span class="text-gray-700 font-semibold">Part B:</span>
        <input type="number" bind:value={partB} readonly 
               class="border rounded-md p-2 mt-1 bg-gray-100 text-gray-700"
               data-testId="part-b" />
    </label>
    
    <label class="flex flex-col">
        <span class="text-gray-700 font-semibold">Total (C):</span>
        <input type="number" bind:value={partC} readonly 
               class="border rounded-md p-2 mt-1 bg-gray-100 text-gray-700"
               data-testId="total" />
    </label>
</main>

<style>
    body {
        background-color: #f3f4f6;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>