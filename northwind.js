require('odata-server');

console.log('Starting Northwind OData server.');

$data.createODataServer({
    type: require('./northwind/context.js')
    
}, '/Northwind.svc', 52999, 'localhost');

console.log('Northwind OData server listening on http://localhost:52999/Northwind.svc');
