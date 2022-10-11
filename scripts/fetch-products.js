// Uses FetchInject class which manipulates html based on json given to it
import  {fetchInject} from './fetch-json.js';
//Html node to use as a template for json objects
const TEMPLATE_NODE =  document.querySelector('#template');
//Copy template node and manipulate attribute and text based on json data
function createProductNode(product){
  let productNode = TEMPLATE_NODE.cloneNode(true);
  //id is used to hide the original template node so remove it
  productNode.removeAttribute('id');
  productNode.querySelector('.productImage').src = product.imgPath;
  productNode.querySelector('.productImage').alt = product.alt;
  productNode.querySelector('.productName').innerText = product.name;
  productNode.querySelector('.productDescription').innerText = product.description;
  productNode.querySelector('.productPrice').innerText = '$' + product.price;
  return productNode;
}


let productInject = new fetchInject(
  createProductNode,
  document.querySelector('.productContainer'),
)
productInject.getFile('../json/products.json')
