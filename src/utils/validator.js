export const validator = (email, password, name='name') => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isValidPassword  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidEmail) {
        return "Email Id is not valid";
    }

    if(!isValidPassword) {
        return "Password is not valid."
    }

    if(!name.trim()) {
        return "Name cannot be empty.";
    }

    return null;
}