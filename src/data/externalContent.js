import axios from "axios";
// const dotenv = require('dotenv');
// dotenv.config();
export async function getProducts() {
    try {
        const result = await axios.post("http://localhost:8850/api/v1/eco/get-products");
        console.log(result.data);
        return result.data;

    } catch (error) {
      console.log(error);
    }
}