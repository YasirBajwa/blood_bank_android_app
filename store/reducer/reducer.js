
let INITIAL_STATE ={
  users: [{
    name:'Yasir',
    email:'yasirbajwa369@gmail.com'
  }] ,
  check_user : false,
  product_data : []
    
}


export default (state = INITIAL_STATE,action) =>{

  switch(action.type){

    case 'PRODUCT_PAGE' : 
    return {
            ...state,
            product_data : action.payload
    } 
  }
  return state;       
}