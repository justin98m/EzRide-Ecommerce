//Main class used to inject html  given some constructors
class fetchInject {
  constructor(createNode, containerNode) {
    //function used to create generic node for page
    this.createNode = createNode;
    //node to add created nodes to
    this.containerNode = containerNode  }
  getFile(jsonFile){
    fetch(jsonFile)
    .then(response => response.json())    
    .then(data => this.run(Object.values(data)[0]))
  }
  injectHtml(node){
    this.containerNode.appendChild(node);
  }
  run(data){
    let itemArr =  data;
    //creates node for each json object , then adds to html
    itemArr.forEach(item => {
      let node = this.createNode(item);
      this.injectHtml(node);
    })
  }

}
export  {fetchInject};
