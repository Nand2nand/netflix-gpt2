export const checkValidData = (email, password) => {
// const isNameValid = /^[a-z]{3}[0-9]{1,2}$/.test(name);
const isEmailValid = /^[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
// if(isNameValid) return "Name is not valid";
if(!isEmailValid) return "Email is not valid";
if(!passwordValid) return "Password is not valid";
return null;
}