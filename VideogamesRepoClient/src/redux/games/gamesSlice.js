import {createSlice} from '@reduxjs/toolkit';

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        games:[],
        genres:[],
        consoles:[],
        own_games:[],
        genre_filter:{
            poke: 1,
            list: []
        },
        alfabetical_filter:{
            poke: 1,
            value:'',
        },
        origin_filter: 'Todos'
    },
    reducers:{
        get_games: (state, action) => {
            state.games = action.payload;
        },
        get_own_games: (state, action) => {
            state.own_games = action.payload;
        },
        get_genres: (state, action) => {
            state.genres = action.payload;
        },
        get_consoles: (state, action) => {
            state.consoles = action.payload;
        },
        set_genre_filter: (state, action) => {
            state.genre_filter = action.payload;
        },
        set_alfabetical_filter: (state, action) => {
            state.alfabetical_filter = action.payload;
        },
        set_origin_filter: (state, action) => {
            state.origin_filter = action.payload;
        },
    }
});

export const {
    get_games, 
    get_own_games, 
    get_genres, 
    get_consoles, 
    set_genre_filter, 
    set_alfabetical_filter, 
    set_origin_filter} = gamesSlice.actions;

export default gamesSlice.reducer;