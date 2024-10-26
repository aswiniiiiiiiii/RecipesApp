import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRecipes = createAsyncThunk('recipes/fetchAllRecipes',async()=>{
   const result = await axios.get('https://dummyjson.com/recipes')
//    console.log(result);  
//session storage
  sessionStorage.setItem("allRecipe",JSON.stringify(result.data.recipes))
  return result.data.recipes
  
})
const recipeSlice = createSlice({
    name:"recipes",
    initialState:{
        allRecipe:[],
        dummyAllRecipes:[],
        loading:false,
        error:""
    },
    reducers:{
        searchRecipe:(state,seachKeyFromHeader)=>{
            
           state.allRecipe = state.dummyAllRecipes.filter(item=>item.cuisine.toLowerCase().includes(seachKeyFromHeader.payload) )
        }
    },
    extraReducers:(bulider)=>{
        bulider.addCase(fetchAllRecipes.fulfilled,(state,apiResult)=>{
            state.allRecipe = apiResult.payload
            state.dummyAllRecipes = apiResult.payload
            state.loading = false
            state.error = ""
        })
        bulider.addCase(fetchAllRecipes.pending,(state,apiResult)=>{
            state.allRecipe = []
            state.dummyAllRecipes = []
            state.loading = true
            state.error = ""
        })
        bulider.addCase(fetchAllRecipes.rejected,(state,apiResult)=>{
            state.allRecipe = []
            state.dummyAllRecipes = []
            state.loading = false
            state.error = "API Call failed"
        })
    }
})

export const {searchRecipe} = recipeSlice.actions
export default recipeSlice.reducer
