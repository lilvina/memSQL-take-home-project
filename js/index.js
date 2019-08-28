$(document).ready(function() {
  let email = $('#email')
  let option = $('select#size')
  let input = document.getElementsByName('indicator')
  let service

  $(input).click(function() {
    for(let i = 0, length = input.length; i < length; i++) {
      if(input[i].checked) {
        service = input[i].value
        break
      }
    }
  })

  function emailValidate(value) {
    let regEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return regEmail.test(value)
  }

  $('button').click(function() {
    let isEmail = 0
    let isSize = 0
    let isService = 0

    if(!emailValidate(email.val())) {
      $('#emailrequire').html('Email not valid')
      $('#email').removeClass('success')
      $('#email').addClass('inputerror')
      isEmail = 1
    } else {
      $('#emailrequire').toggle()
      $('#email').removeClass('inputerror')
      $('#email').addClass('success')
      isEmail = 0
    }

    if(option.val() == 'Please Select'){
      $('#sizeerror').html('Please select valid business size')
      $('#size').removeClass('inputerror')
      $('#size').addClass('success')
      isSize = 1
    } else {
      $('#sizeerror').hide()
      $('#size').removeClass('inputerror')
      $('#size').addClass('success')
      isSize = 0
    }

    if(service == undefined) {
      $('#radioerror').html("Please select any one of the options above")
      isService = 1
    } else {
      $('#radioerror').hide()
      isService = 0
    }

    if(isEmail == 1 || isService == 1 || isSize == 1) {
      //navigate to the next page
    } else {
      if((option.val() == '1=10') || service == 'Price' || service == 'Document Storage' || service == 'Full Text Search') {
        window.location.href = "unqualified.html"
      } else {
        window.location.href = "qualified.html"
      }
    }
  })
})

