class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }
   insertNode(node, newNode){
       if(newNode.val<node.val){
           if(node.left ===null){
               node.left = newNode;
           } else{
               this.insertNode(node.left,newNode)
           }
       } else{
           if(node.right === null){
               node.right = newNode;
           } else{
               this.insertNode(node.right, newNode)
           }
       }
   }
   insert(val) {
    let newNode = new TreeNode(val);
       if(this.root === null) {
           this.root = new TreeNode(val);
           return this.root;
       } else{
        this.insertNode(this.root, newNode)
       }
    }

    search(node, val){
        if(node === null){
            return false;
        }  else if(val < node.val){
            return this.searchRecur(this.left, val);
        } else if (val > node.val){
            return this.searchRecur(this.right, val);
        } else{
            return true;
        }
    }



    // search(node, val){
        
    //      if(val < node.val){
    //         return this.searchRecur(this.left, val);
    //     } else if (val > node.val){
    //         return this.searchRecur(this.right, val);
    //     } else{
    //         return true;
    //     }
    // }

    // searchRecur(val){
    //     let node = this.root;
    //     if(node === null){
    //         return false;
    //     }
    //     this.search(node, val);
    // }
}
let test = new BST();
console.log(test.insert(3));
console.log(test.insert(2));
console.log(test.insert(1))

module.exports = {
    TreeNode,
    BST
};