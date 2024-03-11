'use strict';
import Inventory from 'ansible-inventory-reader';

let filepath = __dirname + '/inventories';

let inventory = new Inventory(filepath);
console.log(JSON.stringify(inventory, null, 2));
