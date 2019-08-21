/**
 * Written by Jonathan Ward
 * 
 * The following is an example of importing the baseAxios file and using it correctly.
 * Ideally you should remove this file, at least from your program's execution.
 */

import { axios, errorLogger } from "./utils/baseAxios";

//the following is the object model way to do your axios call
axios({
    url: '/posts', //needed, remember it is appended to the baseURL you are importing from
    method: 'GET', //needed
    params: { 'id': 1 } //optional, change as needed
}).then(response => {
    console.log(response.data) // do something with data, here for example only
})
    .catch(error => { // debugging aid
        errorLogger(error); //imported
    });

/* the following is less writing than the object model way, the method is a function and the url doesn't need to be
in an object */
axios.get('/posts', {
    params: { 'id': 1 }
}).then(response => {
    console.log(response.data) // do something with data, here for example only
})
    .catch(error => { // debugging aid
        errorLogger(error);
    });