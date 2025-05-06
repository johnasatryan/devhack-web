// let a = setTimeout(() => console.log('setTimeout'), 0);




fetch('https://picsartacademy.am').then((response) => {
  return response.text();
}).then((data) => {
  console.log(data);
});


  





