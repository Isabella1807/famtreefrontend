import { ref, Ref } from 'vue';
import { defineStore } from 'pinia';

interface Fruit {
    id: string,
    name: string,
}

export const useFruitStore = defineStore('fruits', () => {

    const list: Ref<Fruit[]> = ref([
        {
            id: 'aaaa',
            name: 'Ananas'
        },
        {
            id: 'bbbb',
            name: 'Orange'
        },
        {
            id: 'cccc',
            name: 'Melon'
        },
        {
            id: 'dddd',
            name: 'Strawberry'
        },
    ]);

    const add = (fruitName: string) => {
        list.value.push({
            id: Math.random().toString(),
            name: fruitName,
        });
    };

    const remove = (fruitId: string) => {
        list.value = list.value.filter((fruit) => {
            return fruit.id !== fruitId;
        });
    };

    const update = (fruitId: string, newFruitName: string) => {
        const fruit = list.value.find((fruit) => fruit.id === fruitId);
        if (fruit) fruit.name = newFruitName;
    }

    const clearAll = () => {
        list.value = [];
    };

    return {
        list,
        add,
        remove,
        update,
        clearAll,
    };
});
