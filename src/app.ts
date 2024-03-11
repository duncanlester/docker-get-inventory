'use strict';
import Inventory from 'ansible-inventory-reader';
import jp from 'jsonpath';

let filepath = __dirname + '/inventories/cn1a/hosts.cn1a';

let inventory = new Inventory(filepath);
var ddf_zkpr_nodes = jp.query(inventory, '$["ddf-zookeeper-nodes"].children[*].host');
console.log(JSON.stringify(ddf_zkpr_nodes, null, 2));
