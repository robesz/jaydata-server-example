$data.Entity.extend('NorthwindModel.Category', {
    CategoryID: { key: true, type: 'id', nullable: false, computed: true },
    CategoryName: { type: 'string', nullable: false, required: true, maxLength: 15 },
    Description: { type: 'string', maxLength: Number.POSITIVE_INFINITY },
    Picture: { type: 'blob', maxLength: Number.POSITIVE_INFINITY },
    Products: { type: 'Array', elementType: 'NorthwindModel.Product', inverseProperty: 'Category' }
});

$data.Entity.extend('NorthwindModel.Customer', {
    CustomerID: { key: true, type: 'string', nullable: false, required: true, maxLength: 5 },
    CompanyName: { type: 'string', nullable: false, required: true, maxLength: 40 },
    ContactName: { type: 'string', maxLength: 30 },
    ContactTitle: { type: 'string', maxLength: 30 },
    Address: { type: 'string', maxLength: 60 },
    City: { type: 'string', maxLength: 15 },
    Region: { type: 'string', maxLength: 15 },
    PostalCode: { type: 'string', maxLength: 10 },
    Country: { type: 'string', maxLength: 15 },
    Phone: { type: 'string', maxLength: 24 },
    Fax: { type: 'string', maxLength: 24 },
    Orders: { type: 'Array', elementType: 'NorthwindModel.Order', inverseProperty: 'Customer' }
});

$data.Entity.extend('NorthwindModel.Employee', {
    EmployeeID: { key: true, type: 'id', nullable: false, computed: true },
    LastName: { type: 'string', nullable: false, required: true, maxLength: 20 },
    FirstName: { type: 'string', nullable: false, required: true, maxLength: 10 },
    Title: { type: 'string', maxLength: 30 },
    BirthDate: { type: 'datetime' },
    HireDate: { type: 'datetime' },
    Address: { type: 'string', maxLength: 60 },
    City: { type: 'string', maxLength: 15 },
    Region: { type: 'string', maxLength: 15 },
    PostalCode: { type: 'string', maxLength: 10 },
    Country: { type: 'string', maxLength: 15 },
    HomePhone: { type: 'string', maxLength: 24 },
    Extension: { type: 'string', maxLength: 4 },
    Photo: { type: 'blob', maxLength: Number.POSITIVE_INFINITY },
    Notes: { type: 'string', maxLength: Number.POSITIVE_INFINITY },
    ReportsTo: { type: 'int' },
    Orders: { type: 'Array', elementType: 'NorthwindModel.Order', inverseProperty: 'Employee' }
});

$data.Entity.extend('NorthwindModel.Order_Detail', {
    OrderID: { key: true, type: 'id', nullable: false, required: true },
    ProductID: { key: true, type: 'id', nullable: false, required: true },
    UnitPrice: { type: 'decimal', nullable: false, required: true },
    Quantity: { type: 'int', nullable: false, required: true },
    Discount: { type: 'number', nullable: false, required: true },
    Product: { type: 'NorthwindModel.Product', required: true, inverseProperty: 'Order_Details' },
    Order: { type: 'NorthwindModel.Order', required: true, inverseProperty: 'Order_Details' }
});

$data.Entity.extend('NorthwindModel.Order', {
    OrderID: { key: true, type: 'id', nullable: false, required: true },
    ShipName: { type: 'string', maxLength: 40 },
    ShipAddress: { type: 'string', maxLength: 60 },
    ShipCity: { type: 'string', maxLength: 15 },
    ShipRegion: { type: 'string', maxLength: 15 },
    ShipPostalCode: { type: 'string', maxLength: 10 },
    ShipCountry: { type: 'string', maxLength: 15 },
    OrderDate: { type: 'datetime' },
    RequiredDate: { type: 'datetime' },
    ShippedDate: { type: 'datetime' },
    Freight: { type: 'decimal' },
    Customer: { type: 'NorthwindModel.Customer', required: true, inverseProperty: 'Orders' },
    Employee: { type: 'NorthwindModel.Employee', inverseProperty: 'Orders' },
    Order_Details: { type: 'Array', elementType: 'NorthwindModel.Order_Detail', inverseProperty: 'Order' },
    Shipper: { type: 'NorthwindModel.Shipper', inverseProperty: 'Orders' }
});

$data.Entity.extend('NorthwindModel.Product', {
    ProductID: { key: true, type: 'id', nullable: false, computed: true },
    ProductName: { type: 'string', nullable: false, required: true, maxLength: 40 },
    EnglishName: { type: 'string', maxLength: 40 },
    QuantityPerUnit: { type: 'string', maxLength: 20 },
    UnitPrice: { type: 'decimal' },
    UnitsInStock: { type: 'int' },
    UnitsOnOrder: { type: 'int' },
    ReorderLevel: { type: 'int' },
    Discontinued: { type: 'bool', nullable: false, required: true },
    Category: { type: 'NorthwindModel.Category', inverseProperty: 'Products' },
    Order_Details: { type: 'Array', elementType: 'NorthwindModel.Order_Detail', inverseProperty: 'Product' },
    Supplier: { type: 'NorthwindModel.Supplier', inverseProperty: 'Products' }
});

$data.Entity.extend('NorthwindModel.Shipper', {
    ShipperID: { key: true, type: 'id', nullable: false, computed: true },
    CompanyName: { type: 'string', nullable: false, required: true, maxLength: 40 },
    Orders: { type: 'Array', elementType: 'NorthwindModel.Order', inverseProperty: 'Shipper' }
});

$data.Entity.extend('NorthwindModel.Supplier', {
    SupplierID: { key: true, type: 'id', nullable: false, computed: true },
    CompanyName: { type: 'string', nullable: false, required: true, maxLength: 40 },
    ContactName: { type: 'string', maxLength: 30 },
    ContactTitle: { type: 'string', maxLength: 30 },
    Address: { type: 'string', maxLength: 60 },
    City: { type: 'string', maxLength: 15 },
    Region: { type: 'string', maxLength: 15 },
    PostalCode: { type: 'string', maxLength: 10 },
    Country: { type: 'string', maxLength: 15 },
    Phone: { type: 'string', maxLength: 24 },
    Fax: { type: 'string', maxLength: 24 },
    Products: { type: 'Array', elementType: 'NorthwindModel.Product', inverseProperty: 'Supplier' }
});

$data.EntityContext.extend('Northwind', {
    Categories: { type: $data.EntitySet, elementType: NorthwindModel.Category },
    Customers: { type: $data.EntitySet, elementType: NorthwindModel.Customer },
    Employees: { type: $data.EntitySet, elementType: NorthwindModel.Employee },
    Order_Details: { type: $data.EntitySet, elementType: NorthwindModel.Order_Detail },
    Orders: { type: $data.EntitySet, elementType: NorthwindModel.Order },
    Products: { type: $data.EntitySet, elementType: NorthwindModel.Product },
    Shippers: { type: $data.EntitySet, elementType: NorthwindModel.Shipper },
    Suppliers: { type: $data.EntitySet, elementType: NorthwindModel.Supplier }, 

    /* The legendary helloWorld service method with JayData Server*/
    helloWorld: function(){
        ///<returns type="string"/>
        return 'Hello World!';
    },

    /*
    You can use function params by
    annotating the function in VSDoc type.
    */
    addNumbers: function(a, b){
        ///<returns type="number"/>
        ///<param name="a" type="number"/>
        ///<param name="b" type="number"/>
        return a + b;
    },

    /*
    You can use complex types as the result,
    like an array...
    */
    randomNumbers: function(cnt){
        ///<returns type="Array" elementType="integer"/>
        ///<param name="cnt" type="integer"/>
        var arr = [];
        for (var i = 0; i < cnt; i++){
            arr.push(Math.floor(Math.random() * 100));
        }
        return arr;
    },

    /*
    ...or a JavaScript object.
    */
    lengthOfWords: function(str){
        ///<returns type="Object"/>
        ///<param name="str" type="string"/>
        var words = str.split(' ');
        var low = {};
        for (var i = 0; i < words.length; i++){
            low[words[i]] = words[i].length;
        }
        return low;
    },

    /*
    You can use async functions by returning
    a handler function and calling success at the end.
    */
    delayedHello: function(){
        ///<returns type="string"/>
        return function(success, error){
            setTimeout(function(){
                success('Hello World!');
            }, 5000);
        };
    },

    /*
    We can use our defined complex type
    to give a typed result as response.
    */
getEmployee: function(){
    ///<returns type="NorthwindModel.Employee"/>
    return new NorthwindModel.Employee({
        FirstName: 'John',
        LastName: 'Doe',
        Age: 42,
        WorksFrom: new Date(),
        Salary: 9999
    });
},

    /*
    Accessing database with service operation is easy using JSLQ syntax
    The JayData context is available through 'this'. It's recommended to 
    reference it using a different variable name.

    */
getCheapProducts: function () {
    ///<returns type="Array" elementType="NorthwindModel.Product"/>
    var db = this;
    return function (success, error) {
        db.Products
            .filter(function (e) {
                return e.UnitPrice <= 20 })
            .toArray(success)
            .fail(error);
    };
},
    /*
    You can hijack the response and do anything you want
    like omitting the OData response handler.
    */
getResponse: function(){
    ///<method type="GET"/>
    var res = this.executionContext.response;
    var txt = 'This is a HTTP response.';
    res.write(txt);
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.setHeader('content-length', txt.length);
    res.end();
},
   
    /*
    You can even throw errors at the users.
    */
    error: function(){
        ///<returns type="string"/>
        throw 'Ohno! Failed.';
    },

    /*
    Test data generator service method. 
    */
    generateTestData: function () {
        ///<returns type="int"/>
        return function (success, error) {
            var category1 = new NorthwindModel.Category({ CategoryName: 'Beverages', Description: 'Soft drinks, coffees, teas, beer, and ale' });
            var category2 = new NorthwindModel.Category({ CategoryName: 'Condiments', Description: 'Sweet and savory sauces, relishes, spreads, and seasonings' });
            var category3 = new NorthwindModel.Category({ CategoryName: 'Confections', Description: 'Desserts, candies, sweetbreads' });
            var category4 = new NorthwindModel.Category({ CategoryName: 'Dairy Products', Description: 'Cheeses' });
            var category5 = new NorthwindModel.Category({ CategoryName: 'Grains/Cereals', Description: 'Breads, crackers, pasta, and cereal' });
            var category6 = new NorthwindModel.Category({ CategoryName: 'Meat/Poultry', Description: 'Prepared meats' });
            var category7 = new NorthwindModel.Category({ CategoryName: 'Produce', Description: 'Dried fruit and bean curd' });
            var category8 = new NorthwindModel.Category({ CategoryName: 'Seafood', Description: 'Seaweed and fish' });

            this.Categories.add(category1);
            this.Categories.add(category2);
            this.Categories.add(category3);
            this.Categories.add(category4);
            this.Categories.add(category5);
            this.Categories.add(category6);
            this.Categories.add(category7);
            this.Categories.add(category8);

            this.Products.add(new NorthwindModel.Product({ ProductName: 'Ipoh Coffee', EnglishName: 'Malaysian Coffee', UnitPrice: 46, UnitsInStock: 17, Discontinued: false, Category: category1 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Outback Lager', EnglishName: 'Outback Lager', UnitPrice: 15, UnitsInStock: 15, Discontinued: false, Category: category1 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Mozzarella di Giovanni', EnglishName: 'Giovanni\'s Mozzarella', UnitPrice: 34.1, UnitsInStock: 15, Discontinued: false, Category: category1 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Chef Anton\'s Cajun Seasoning', EnglishName: 'Chef Anton\'s Cajun Seasoning', UnitPrice: 22, UnitsInStock: 50, Discontinued: false, Category: category2 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Genen Shouyu', EnglishName: 'Lite Sodium Soy Sauce', UnitPrice: 22, UnitsInStock: 50, Discontinued: false, Category: category2 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Gula Malacca', EnglishName: 'Malacca Dark Brown Sugar', UnitPrice: 85, UnitsInStock: 50, Discontinued: false, Category: category2 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Sirop d\'érable', EnglishName: 'Maple Syrup', UnitPrice: 28.5, UnitsInStock: 50, Discontinued: false, Category: category2 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Vegie-spread', EnglishName: 'Vegetable Sandwich Spread', UnitPrice: 43.9, UnitsInStock: 50, Discontinued: false, Category: category2 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Louisiana Fiery Hot Pepper Sauce', EnglishName: 'Louisiana Fiery Hot Pepper Sauce', UnitPrice: 21.05, UnitsInStock: 43, Discontinued: false, Category: category2 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Aniseed Syrup', EnglishName: 'Licorice Syrup', UnitPrice: 10, UnitsInStock: 50, Discontinued: false, Category: category3 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Northwoods Cranberry Sauce', EnglishName: 'Northwoods Cranberry Sauce', UnitPrice: 40, UnitsInStock: 50, Discontinued: false, Category: category3 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Pavlova', EnglishName: 'Pavlova Meringue Dessert', UnitPrice: 17.45, UnitsInStock: 50, Discontinued: false, Category: category3 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Teatime Chocolate Biscuits', EnglishName: 'Teatime Chocolate Biscuits', UnitPrice: 9.2, UnitsInStock: 25, Discontinued: false, Category: category3 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Gumbär Gummibärchen', EnglishName: 'Gumbär Gummibärchen', UnitPrice: 31.23, UnitsInStock: 15, Discontinued: false, Category: category3 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Schoggi Schokolade', EnglishName: 'Schoggi Chocolate', UnitPrice: 43.9, UnitsInStock: 49, Discontinued: false, Category: category3 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Chocolade', EnglishName: 'Dutch Chocolate', UnitPrice: 12.75, UnitsInStock: 49, Discontinued: false, Category: category3 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Mascarpone Fabioli', EnglishName: 'Mascarpone Fabioli', UnitPrice: 32, UnitsInStock: 49, Discontinued: false, Category: category4 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Camembert Pierrot', EnglishName: 'Pierrot Camembert', UnitPrice: 34, UnitsInStock: 49, Discontinued: false, Category: category4 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Chef Anton\'s Gumbo Mix', EnglishName: 'Chef Anton\'s Gumbo Mix', UnitPrice: 20.35, UnitsInStock: 49, Discontinued: false, Category: category5 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Thüringer Rostbratwurst', EnglishName: 'Thüringer Rostbratwurst', UnitPrice: 123, UnitsInStock: 49, Discontinued: false, Category: category6 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Perth Pasties', EnglishName: 'Perth Meat Pies', UnitPrice: 32.8, UnitsInStock: 49, Discontinued: false, Category: category6 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Tourtière', EnglishName: 'Pork Pie', UnitPrice: 7.45, UnitsInStock: 49, Discontinued: false, Category: category6 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Chang', EnglishName: 'Tibetan Barley Beer', UnitPrice: 19, UnitsInStock: 18, Discontinued: false, Category: category6 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Tofu', EnglishName: 'Bean Curd', UnitPrice: 23.25, UnitsInStock: 18, Discontinued: false, Category: category7 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Longlife Tofu', EnglishName: 'Longlife Bean Curd', UnitPrice: 10, UnitsInStock: 18, Discontinued: false, Category: category7 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Ikura', EnglishName: 'Fish Roe', UnitPrice: 31, UnitsInStock: 18, Discontinued: false, Category: category8 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Carnarvon Tigers', EnglishName: 'Carnarvon Tiger Prawns', UnitPrice: 62.5, UnitsInStock: 18, Discontinued: false, Category: category8 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Blö Kaviar', EnglishName: 'Blö Kaviar', UnitPrice: 15, UnitsInStock: 18, Discontinued: false, Category: category8 }));
            this.Products.add(new NorthwindModel.Product({ ProductName: 'Boston Crab Meat', EnglishName: 'Boston Crab Meat', UnitPrice: 18.4, UnitsInStock: 18, Discontinued: false, Category: category8 }));


            this.saveChanges(function (count) {
                success(count);
            });
        }
 }});
 

   


module.exports = exports = Northwind;
