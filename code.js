(function() {

  angular.module('productsTable', [])

  .controller('FilterableTableController', function($scope){
    $scope.products = data;
    var lastCategory = null;
    $scope.isNewCategoryFor = function(product) {
      var result = lastCategory !== product.category;
      if (result) { lastCategory = product.category; }
      return result;
    };
  });


  var data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
})();
