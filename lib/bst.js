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

   insert(val) {
       if(this.root === null) {
           this.root = new TreeNode(val);
           return this.root;
       } 
       if(!this.root.left && !this.root.right) {
           if(val < this.root.val) {
               this.root.left = new TreeNode(val);
               return this.root;
           } else {
               this.root.right = new TreeNode(val);
               return this.root;
           }
       }
    //    let current = this.root;
    //    while(current.left || current.right) {
    //        if(val < current.val) {
    //            current = current.left;
    //            return this.root
    //        } else {
    //           current = current.right;
    //            return this.root
    //        }
        
    //    }
    //    current = new TreeNode(val);

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