const accountValidate = (values) => {
    const errors = {};

    // FIRST name validation
    if (!values.firstName){
        errors.firstName = 'First name is required'
    }else if (values.firstName.length < 2){
        errors.firstName = 'First name must be atleast 2 characters'
    }

    //Last name validation
    if (!values.lastName){
        errors.lastName = 'Last name is required'
    }else if (values.lastName.length < 2){
        errors.lastName = 'Last name must be atleast 2 characters'
    }

    //Email validation
    if (!values.email){
        errors.email = 'Email is required';
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email address is invalid'
    }else if (values.email === "jersain@gmail.com"){
        errors.email ='This email is already in use'
    }else if (!/[A-Z]/.test(values.password)){
        errors.password = 'Password must include a capital letter';
    }

    //Password validation
    const passwordErrors = validatePassword(values.password);
    if (passwordErrors.password) {
        errors.password = passwordErrors.password;
    }

    if (!values.confirmPassword){
        errors.confirmPassword = 'This field is required'
    }else if(values.confirmPassword !== values.password){
        errors.confirmPassword = 'Password does not match'
    }

    

    return errors
}

export const validatePassword = (password) => {
    const errors = {};
    if (!password) {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    } else if (!/\d/.test(password)) {
        errors.password = 'Password must include a number';
    }
    return errors;
};

export default accountValidate;