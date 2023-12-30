
const validation = (values)=>{

    let errors = {};

    if(values.name=='')
    {
        errors.name =  "Name is required"
    }

    if(values.email=='')
    {
        errors.email = "Email is required"
    }
    else if(!/\S+@\gmail+\.\S+/.test(values.email))
    {
        errors.email = "Email is invalid"
    }

    if(values.mobile=='')
    {
        errors.mobile = 'number cant be empty'
    }
    else if(values.mobile.length<10)
    {
        errors.mobile = 'number need to be 10 charecter'
    }
    else if(values.mobile.length>10)
    {
        errors.mobile = 'number need to be 10 charecter'
    }

    if(values.password=='')
    {
        errors.password = 'Password cant be empty'
    }
    else if(values.password.length < 6)
    {
        errors.password = 'Password need to be more than 6 charecter'
    }

    return errors;
}

export default validation