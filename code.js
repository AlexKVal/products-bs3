(function() {

  angular.module('productsTable', [])

  .controller('FilterableTableController', function($scope){
    var lastCategory = null;
    $scope.rows = [];
    data.forEach(function(product){
      if (lastCategory !== product.category) {
        $scope.rows.push({category: true, name: product.category});
        lastCategory = product.category;
      }
      $scope.rows.push({product: true, name: product.name, price: product.price});
    });
    // console.log(JSON.stringify($scope.rows));
  })
  .directive('productsTable', function(){
    return {
      resctrict: 'E',
      replace: true,
      templateUrl: 'templates/directives/products-table.html'
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
