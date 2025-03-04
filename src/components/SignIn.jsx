import { useForm } from "react-hook-form"



async function signUp(formData) {
    await fetch("api/auth/signup", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: formData.username, 
            password: formData.password,
            match_password: formData.confirm_password
        })
    })
    .then((response) => {
        response.json().then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err);
        })
    })
}


function SignIn() {
    
    const { register, handleSubmit, reset, watch, formState: {errors} } = useForm();
    
    const onSubmit = async (data) => {
        try {
            signUp(data)
            reset({
                username: "",
                password: "",
                confirm_password: ""
              })
        } catch (e) {
            // handle your error
        }
    }

    const validateUsername = (value) => {
        let reg = value.match("^[a-z*][a-z0-9*_-]+$")
        if (reg == null) {
            return "Invalid username"
        }
        return true
    }

    const validatePassword = (value) => {
        if (watch("confirm_password") != value) {
            return "Passwords do not match"
        }
        return true
    }

    

    return (
        <>
        <h1>
            sing in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            sign up
            username
            <input {...register("username", {
                required: true, 
                minLength: {value: 4, message: "Username should be at least 4 characters long"}, 
                validate: validateUsername
            }) } />
            <br />
            <p>
                {errors.username?.message}
            </p>
            password
            <input type="password" {...register("password", {
                required: true, 
                minLength: {value: 6, message: "Password should be at least 6 characters long"},
                validate: validatePassword
            }) }/>
            confirm password
            <input type="password" {...register("confirm_password", {required: true, minLength: 6}) }/>
            <input type="submit" value="submit" />
        </form>
        <hr />
        
        </>
    )
}



export default SignIn