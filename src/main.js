import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import Object from './js/object.js';
// import Post from './js/post.js';
import DinoName from './js/dinoName.js';

//function clearFields()  {
  //$('#surname').val("");
  //$('#output').text("");
  //$('#showerror').text("");
//}

$(document).ready(function()  {
  $('#form').submit(function(event)  {
    event.preventDefault();
    // clearFields();
    let lastname = $('#surname').val();
    let promise = DinoName.getDinoName();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#output').text(`How does the name ${body[0][0]} ${body[0][1]} ${lastname} sound for your baby dinosour?`);
    },  function(error) {
      $('#show-errors').text(`There was an error processing your request: ${error}`);
    });
  });
});