testapp.controller('ParentController', function($scope) {
  $scope.init = function() {
    $scope.myValue = 'Ola is India’s largest mobility platform and one of the world’s largest ride-hailing companies, serving 250+ cities across India, Australia, New Zealand, and the UK. The Ola app offers mobility solutions by connecting customers to drivers and a wide range of vehicles across bikes, auto-rickshaws, metered taxis, and cabs, enabling convenience and transparency for hundreds of millions of consumers and over 1.5 million driver-partners..';
    $scope.myObject = {
      value: "Ola’s core mobility offering in India is supplemented by its electric-vehicle arm, Ola Electric; India’s largest fleet management business, Ola Fleet Technologies and Ola Skilling, that aims to enable millions of livelihood opportunities for India's youth. With its acquisition of Ridlr, India’s leading public transportation app and investment in Vogo, a dockless scooter sharing solution, Ola is looking to build mobility for the next billion Indians."
    }
  } 
  
  $scope.init();
});

