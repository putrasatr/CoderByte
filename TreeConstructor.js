function TreeConstructor(strArr) {  
  let log = console.log;
  let nodeArr = strArr.map(a => a.match(/[0-9]+/g).map(a => Number(a)));
  let result = 0;

  let node = {
    value:0,
    left:null,
    right:null,
    parent:null
  };
  
  function newNode(v, l, r, p){
    let n = Object.create(node);
    n.value = v;
    n.left = l;
    n.right = r;
    n.parent = p;
    return n;
  }
  function findNode(v, arr){
    for(let i = 0, max = arr.length; i < max; i++){
      if(arr[i].value === v)
        return arr[i];
    }
    return null;
  }
  
  let setNode = new Set();
  for(let i = 0, max = nodeArr.length; i < max; i++){
    setNode.add(nodeArr[i][0]);
    setNode.add(nodeArr[i][1]);
  }
  setNode = [...setNode];

  let treeNode = [];
  for(let i = 0, max = setNode.length; i < max; i++){
    let v = setNode[i];
    treeNode.push(newNode(v, null, null, null));
  }
  
  for(let i = 0, max = nodeArr.length; i < max; i++){
    let n = nodeArr[i];
    let ch = findNode(n[0], treeNode);
    let pa = findNode(n[1], treeNode);
    ch.parent = pa;
    
    if(pa.value < ch.value){
      pa.right = ch;
    }else if(pa.value > ch.value){
      pa.left = ch;
    }else if(pa.right !== null && pa.left !== null){
      result = false;
      return result;
    }
  }
  
  // find root 
  let root = null;
  let rootCnt = 0;
  for(let i = 0, max = treeNode.length; i < max; i++){
    if(treeNode[i].parent === null){
      root = treeNode[i];
      rootCnt += 1;
    }
  }
  
  if(rootCnt >= 2){
    return false;
  }

  // traverse
  let traverseNode = [];
  function traverse(n){
    if(n === null) return;
    traverseNode.push(n.value);
    traverse(n.left);
    traverse(n.right);
  }
  traverse(root);
  
  traverseNode.sort((a,b) => a-b);
  setNode.sort((a,b) => a-b);
  // code goes here  
  return traverseNode.join('') === setNode.join(''); 
}
   
// keep this function call here 
console.log(TreeConstructor(12));
