export const addListing = (newListing) => {
    return {
      type: "ADD_LISTING",
      payload: newListing
    }
  }
  
  export const removeListing = (index) => {
    return{
      type: "REMOVE_LISTING",
      payload: index
    }
  }
  
  export const setUser = (newUser) => {
    return {
      type: "SET_USER",
      payload: newUser
    }
  }
  
  export const unsetUser = (index) => {
    return {
      type: "UNSET_USER",
      payload: index
    }
  }
  
  export const setLoggedInBool = (bool) => {
    return {
      type: "SET_LOGGEDINBOOL",
      payload: bool
    }
  }