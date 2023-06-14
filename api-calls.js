import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_KEY = "AIzaSyDOI5owICVszKfksbNqLRRwHFh-RFQbeV0";
import { ip } from "./App";

export async function authenticateLogin(
  mode,
  email,
  password,
  setUserConnect,
  setUserDetails
) {
  console.log("ip is : " + ip);
  const url = `http://${ip}:4000/auth/${mode}`;

  await axios
    .post(url, {
      email: email,
      password: password,
      returnSecureToken: true,
    })
    .then(async (response) => {
      if (response.status === 200) {
        console.log("test200");
        saveData("email", email);

        setUserConnect(true);
        setUserDetails(email);
        return response.status;
      }
    })
    .catch(async (error) => {
      if (error.response && error.response.status === 400) {
        console.log("test400");
        if (setUserConnect) setUserConnect(false); // Update context
        console.log(error.response.status);
        throw error.response.status;
      }
    });
}

export async function authenticateRegister(
  mode,
  email,
  password,
  name,
  lastname,
  gender,
  age,
  setUserConnect,
  setUserDetails
) {
  const url = `http://${ip}:4000/auth/${mode}`;

  await axios
    .post(url, {
      email: email,
      password: password,
      name: name,
      lastname: lastname,
      gender: gender,
      age: age,
      returnSecureToken: true,
    })
    .then(async (response) => {
      if (response.status === 200) {
        await AsyncStorage.setItem("successRegister", "true");
        saveData("email", email);
        setUserConnect(true);
        setUserDetails(email);
        return response.status;
      }
    })
    .catch(async (error) => {
      if (error.response && error.response.status === 400) {
        console.log(error.response.status);
        if (setUserConnect) setUserConnect(false); // Update context
        throw error.response.status;
      }
    });
}

export async function login(email, password, setUserConnect, setUserDetails) {
  return await authenticateLogin(
    "login",
    email,
    password,
    setUserConnect,
    setUserDetails
  );
}

export async function register(
  email,
  password,
  name,
  lastname,
  gender,
  age,
  setUserConnect,
  setUserDetails
) {
  return await authenticateRegister(
    "register",
    email,
    password,
    name,
    lastname,
    gender,
    age,
    setUserConnect,
    setUserDetails
  );
}

const saveData = async (key, value) => {
  //key "email" , value email
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Data saved successfully in the local memory .");
  } catch (error) {
    console.log("Error saving data in the local memory :", error);
  }
};