import  {fetchInject} from './fetch-json.js';

 const TEMPLATE_NODE =  document.querySelector('#template');
//Copy template node and manipulate attribute and text based on json data
function createProductNode(product){
  let productNode = TEMPLATE_NODE.cloneNode(true);
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
productInject.getFile('/json/products.json')
