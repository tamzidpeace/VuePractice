<template>
    <div>
        {{ name }}
        <br>
        <input v-model="name" type="text">
        <br>
        <select v-model="selectedOption.value">
            <option v-for="option in options" :key="option.value" :value="option.value"> {{ option.label }} </option>
        </select>
        <br>
        <input type="date" v-model="date" @change="(e) => handleDateChange(e)">
        <br>
        {{ date }}
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const name = ref('');
const selectedOption = { value: '1', label: 'Option 1' };
const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: '7', label: 'Option 7' },
    { value: '8', label: 'Option 8' },
    { value: '9', label: 'Option 9' },
    { value: '10', label: 'Option 10' },
];

const date = ref('');

const handleDateChange = (e: Event) => {
    console.log(e.target?.value);

}

</script>

<style scoped></style>