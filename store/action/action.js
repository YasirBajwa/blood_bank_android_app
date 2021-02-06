// import { GoogleSignin,GoogleSigninButton,statusCodes,} 
// from '@react-native-community/google-signin';

// const sign_in = (history) => {
//     return(dispatch) =>{
//         try {
//             await GoogleSignin.hasPlayServices();
//             const userInfo = await GoogleSignin.signIn();
//             let create_user ={
//                 name : userInfo.name,
//                 id : userInfo.id,
//                 email : userInfo.email
//             }
//             console.log('user====>',create_user);
//             dispatch({type:'SET_USER', payload : create_user })
//             if(userInfo !== ''){
//                 props.history('/DetailPage');
//             }
//              console.log('userinfo==>',userInfo)
//           } catch (error) {
//               console.log('error==>',error);
//           }
//         // dispatch({type:'SET_DATA',data: data})
//         // console.log('Action===>',data)
//     }
// }

// export {
//     set_data,
// }

const product_page = (data) =>{
    return(dispatch) =>{
        dispatch({type:'PRODUCT_PAGE',payload: data});
        // history.push('/product');
        console.log('productDispatch==>',data)
    }
}


export {
    product_page,
}