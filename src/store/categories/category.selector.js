import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
  // console.log('selector 1 is fired!');
  return state.category;
}

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=>{
    // console.log('selector 2 is fired!');
    return categoriesSlice.categories;
  }
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories)=> {
    // console.log('selector 3 is fired');
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice)=>{
    return categoriesSlice.isLoading;
  }
  
  );



