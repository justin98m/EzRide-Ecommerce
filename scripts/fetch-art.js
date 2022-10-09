import  {fetchInject} from './fetch-json.js';

 const TEMPLATE_NODE =  document.querySelector('#template');
//Copy template node and manipulate attribute and text based on json data
function createArtworkNode(artwork){
  let artworkNode = TEMPLATE_NODE.cloneNode(true);
  artworkNode.removeAttribute('id');
  artworkNode.querySelector('.artworkImage').src = artwork.imgPath;
  artworkNode.querySelector('.artworkImage').alt = artwork.alt;

  return artworkNode;
}


let artworkInject = new fetchInject(
  createArtworkNode,
  document.querySelector('.artworkContainer'),
)
artworkInject.getFile('/json/artworks.json')
