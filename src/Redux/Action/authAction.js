import axios from 'axios'
import { Add_Category, Load_User, User_Loading_Attempt, User_Loading_False, User_Loading_True, User_Login, User_Logout, User_Password_Change } from '../Types'


// Login Function
export let login = (option) => async (dispatch) => {

    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.post('http://localhost:5000/user/login', option)
        console.log(mylog)
        // loaduser
        localStorage.setItem("token", mylog.data.token)
        // loaduser

        dispatch({ type: User_Login, payload: mylog.data.data })
        dispatch({ type: User_Loading_True })

    } catch (error) {
        dispatch({ type: User_Loading_False })

    }
}

// Signup Function
export let signup = (option) => async (dispatch) => {

    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.post('http://localhost:5000/user/signup', option)
        console.log(mylog)
        dispatch({ type: User_Loading_True })


    } catch (error) {
        console.log(error)
        dispatch({ type: User_Loading_False, payload: error.response.data })

    }
}

// Logout Function

export let logout = () => async (dispatch) => {
    // loaduser
    localStorage.removeItem("token")
    // loaduser
    dispatch({ type: User_Loading_Attempt })
    dispatch({ type: User_Logout })
    dispatch({ type: User_Loading_True })

}


// Loaduser Function
export let loaduser = () => async (dispatch) => {

    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.get('http://localhost:5000/user/')
        console.log(mylog)
        dispatch({ type: Load_User, payload: mylog.data.data })
        dispatch({ type: User_Loading_True })


    } catch (error) {
        console.log(error)
        dispatch({ type: User_Loading_False, payload: error.response.data })

    }
}
// Change Password Function
export let changepassword = (option) => async (dispatch) => {

    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.post('http://localhost:5000/user/passwordchange', option)
        console.log(mylog)
        dispatch({ type: User_Password_Change, payload: mylog.data })
        dispatch({ type: User_Loading_True })


    } catch (error) {
        console.log(error)
        // error
        dispatch({ type: User_Password_Change, payload: error.response.data })
        // error
        dispatch({ type: User_Loading_False, payload: error.response.data })

    }
}

// Category Controller
export let addcategory = (option) => async (dispatch) => {

    try {
        dispatch({ type: User_Loading_Attempt })
        let mylog = await axios.post('http://localhost:5000/catagery/addcatagery', option)
        console.log(mylog)
        dispatch({ type: User_Login, payload: mylog.data.data })
        dispatch({type:Add_Category})
        dispatch({ type: User_Loading_True })

    } catch (error) {
        dispatch({ type: User_Loading_False })

    }
}