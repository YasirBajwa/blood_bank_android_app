
let INITIAL_STATE ={
//    users: [
//        {
//         name :'Yasir Bajwa',
//         email: 'yasirbajwa369@gmail.com'
//     },
//     {
//         name :'jhon',
//         email: 'jhon@gmail.com'
//     },
//      ],
     app_dat:[]
    
}


export default (state = INITIAL_STATE,action) =>{

              console.log('action in reducer ===>',action) 
            //  switch (action.type) {
            //      case 'SET_DATA':
            //       return({
            //           ...state,
            //           users: [...state.users,action.data]   
            //       })
                  
            //       default:
            //         return state;

                     
            //  } 
             
}