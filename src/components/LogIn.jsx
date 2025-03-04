import { useForm } from "react-hook-form"

async function logIn(formData) {
    await fetch("api/auth/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams({
            username: formData.username, 
            password: formData.password,
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

function LogIn() {
    const { register, handleSubmit, reset, watch, formState: {errors} } = useForm();

    const onSubmitLogIn = async (data) => {
        try {
            logIn(data)
            // logIn(data)
            // reset({
            //     username: "",
            //     password: "",
            //   })
        } catch (e) {
            // handle your error
        }
    }

    return (
        <>

        <form onSubmit={handleSubmit(onSubmitLogIn)}>
            log in
            username
            <input {...register("username")} />
            password
            <input {...register("password")} />
            <input type="submit" value="submit" />
        </form>
        </>
    )
}

export default LogIn