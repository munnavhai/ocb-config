Bahmni.Registration.customValidator = {
    "Date depistage": {
        method: function (name,value,personAttributeDetails) {
             return value <= new Date();
        },
     errorMessage: "REGISTRATION_HIV_DATE_ERROR_KEY"
    },
    "Date de naissance_Dep": {
        method: function (name,value,personAttributeDetails) {
             return value <= new Date();
        },
     errorMessage: "REGISTRATION_HIV_DATE_ERROR_KEY"
     },


   "Date de conversion": {
        method:function (name,value,personAttributeDetails) {
              return value <= new Date();
        },
      errorMessage: "REGISTRATION_DATE_OF_CONVERSION_CP_ERROR_KEY"

    }

};
