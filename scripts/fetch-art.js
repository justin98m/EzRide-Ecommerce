// Uses FetchInject class which manipulates html based on json given to it
import  {fetchInject} from './fetch-json.js';
//Html node to use as a template for json objects
const TEMPLATE_NODE =  document.querySelector('#template');
//Copy template node and manipulate attributes on json data
function createArtworkNode(artwork){
  let artworkNode = TEMPLATE_NODE.cloneNode(true);
  //id is used to hide the original template node so remove it
  artworkNode.removeAttribute('id');
  artworkNode.querySelector('.artworkImage').src = artwork.imgPath;
  artworkNode.querySelector('.artworkImage').alt = artwork.alt;

  return artworkNode;
}


let artworkInject = new fetchInject(
  createArtworkNode,
  document.querySelector('.artworkContainer'),
)
//upot completion will run inject function
artworkInject.getFile('/json/artworks.json')
