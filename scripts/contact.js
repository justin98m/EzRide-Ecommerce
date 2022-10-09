// Uses FetchInject class which manipulates html based on json given to it
import  {fetchInject} from './fetch-json.js';
//Html node to use as a template for json objects
const TEMPLATE_NODE =  document.querySelector('#template');
//Copy template node and manipulate attributes on json data
function createArtworkNode(faq){
  let faqNode = TEMPLATE_NODE.cloneNode(true);
  //id is used to hide the original template node so remove it
  faqNode.removeAttribute('id');
  faqNode.querySelector('.question').innerText = faq.question;
  faqNode.querySelector('.answer').innerText = faq.answer;

  return faqNode;
}


let faqInject = new fetchInject(
  createArtworkNode,
  document.querySelector('.faqContainer'),
)
//upot completion will run inject function
faqInject.getFile('/json/faq.json')
