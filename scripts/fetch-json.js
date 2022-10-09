
class fetchInject {
  constructor(createNode, containerNode) {
    this.createNode = createNode;
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
    console.log(data[0]);
    let itemArr =  data;
    itemArr.forEach(item => {
      let node = this.createNode(item);
      this.injectHtml(node);
    })
  }

}
export  {fetchInject};
