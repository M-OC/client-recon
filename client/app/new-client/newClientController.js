// TO DO:
// 1. Detect UserID from the AppState and put it in the ClientsApi.addOne()


angular.module('client-recon.new-client', [])
.controller('NewClientController', function ($scope, $timeout, ClientsApi, AppState, $state) {
  // TEMPLATE FOR DATA
  this.data = {
    name:'',
    email: '',
    birthday: '',
    company: ''
  };

  var successfulPost = this.success;

  var newClient = this.data;

  this.postClient = function () {
    //DETECT USER ID FROM APP STATE
    console.log('about to post new client to server');
    ClientsApi.addOne(1,newClient).then(function(res){
      // CALLED AFTER SUCCESSFUL POST
      console.log(res);
      successfulPost = true;
      newClient.name = '';
      newClient.email = '';
      newClient.birthday = '';
      newClient.company = '';
      newClient.interests = '';

      // THE PURPOSE OF THE BELOW IS TO HAVE THE SUCCESSFUL POST 
      // NOTIFICATION ONLY SHOW FOR A FEW SECONDS AND DISAPPEAR
      $timeout(function(){
        successfulPost = false;
        $state.go('dashboard');
      }, 2000);

    })

  };


  });
