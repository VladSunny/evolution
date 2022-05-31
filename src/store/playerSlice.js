import { createSlice } from '@reduxjs/toolkit';
import { type } from '@testing-library/user-event/dist/type';

const initialState = {
    hp: 99,
    food: 99,
    water: 99,
    strength: 1,
    dexterity: 1,
    intelligence: 1,
    DNA: 100,
};

export const playerSlice = createSlice({
    name: 'Player',
    initialState: initialState,
    reducers: {
        setHp: function (state, action) {
            state.hp = action.payload;
        },
        setFood: function (state, action) {
            state.food = action.payload;
        },
        setWater: function (state, action) {
            state.water = action.payload;
        },
        setStrength: function (state, action) {
            state.strength = action.payload;
        },
        setDexterity: function (state, action) {
            state.dexterity = action.payload;
        },
        setIntelligence: function (state, action) {
            state.intelligence = action.payload;
        },
        setDNA: function (state, action) {
            state.DNA = action.payload;
        },
    },
});

export const {
    setHp,
    setFood,
    setDexterity,
    setIntelligence,
    setStrength,
    setWater,
    setDNA,
} = playerSlice.actions;

export function getHp(state) {
    return state.player.hp;
}
export function getFood(state) {
    return state.player.food;
}
export function getWater(state) {
    return state.player.water;
}
export function getStrength(state) {
    return state.player.strength;
}
export function getDexterity(state) {
    return state.player.dexterity;
}
export function getIntelligence(state) {
    return state.player.intelligence;
}
export function getDNA(state) {
    return state.player.DNA;
}
