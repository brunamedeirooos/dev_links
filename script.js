function toggleMode(){
  const html= document.documentElement //pegando o body

   if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }  ///verificando se no body contem a lista de classe light - html na lista de classe , contem light?
  
  
  //html.classList.toggle('light');
}