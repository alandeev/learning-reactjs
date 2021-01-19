module.exports =  { 
  clickButtonRequest: function(){ 
    return { type: "BUTTON_CLICKED_REQUEST" }
  },
  clickButtonFailure: function(){ 
    return { type: "BUTTON_CLICKED_FAILURE" }
  },
  clickButtonSuccess: function(){ 
    return { type: "BUTTON_CLICKED_SUCCESS" }
  }
}