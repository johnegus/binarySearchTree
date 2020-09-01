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

    // searchRecur(val, root = this.root){
    //     if(!this.root){
    //         return false;
    //     }  else if(val < root.val){
    //         return this.searchRecur(val, this.left);
    //     } else if (val > root.val){
    //         return this.searchRecur(val, this.right);
    //     } else{
    //         return true;
    //     }
    // }

    searchIter(val){
        if(!this.root) return false;
        let current = this.root
        let found = false;
        while(current && !found){
            if(val <  current.val) current = current.left;
            else if (val> current.val) current = current.right;
            else found = true;
        }
        return found;
    }



  

    searchRecur(val, node = this.root,){
        if(node === null){
            return false;
        }
        if(val < node.val){
            return this.searchRecur(val, node.left);
        } else if (val > node.val){
            return this.searchRecur(val, node.right);
        } else{
            return true;
        }
    }
}
let test = new BST();
console.log(test.insert(3));
console.log(test.insert(2));
console.log(test.insert(1))

module.exports = {
    TreeNode,
    BST
};