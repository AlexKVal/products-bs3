(function() {

  angular.module('productsTable', [])

  .directive('filterableTable', function(){
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: "<div class='well filterable-table' ng-transclude></div>",
      link: function(scope, element, attrs){
        scope.categories = [];

        var lastCategory = {name: null};
        data.forEach(function(product){
          if (lastCategory.name !== product.category) { // new category
            var newCategory = { name: product.category, products: [product]};

            scope.categories.push(newCategory);
            lastCategory = newCategory;
          } else {
            lastCategory.products.push(product);
          }
        });
        // console.log(JSON.stringify(scope.categories));
      }
    };
  })

  .directive('productsTable', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/directives/products-table.html'
    };
  })

  .directive('searchBar', function(){
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/directives/search-bar.html'
    };
  });;


  var data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
})();
