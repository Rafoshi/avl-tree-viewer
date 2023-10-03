class TreeNode {
    value: number;
    right: TreeNode | null = null;
    left: TreeNode | null = null;
    height: number = 1;

    constructor(value: number, right: TreeNode | null = null, left: TreeNode | null = null, height: number = 1) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = height;
    }
}

class AVLTree {
    root: TreeNode | null = null;

    constructor() { }

    init() {
        this.root = null;
        return this.root;
    }


    insert(node: TreeNode, item: number): TreeNode {
        let newNode = new TreeNode(item);
        if (node == null) return newNode;

        if (item < node.value) {
            node.left = this.insert(node.left!, item);
            node.left.height = this.getHeight(node.left);
        }


        if (item > node.value) {
            node.right = this.insert(node.right!, item);
            node.right.height = this.getHeight(node.right);
        }

        node = this.balance(node);
        this.updateHeight(node);
        return node;
    }

    delete(node: TreeNode | null, item: number): TreeNode | null {
        //Finding the node
        if (node == null) return node;
        else if (item < node.value) node.left = this.delete(node.left!, item);
        else if (item > node.value) node.right = this.delete(node.right!, item);
        else {
            //Case 1: No child
            if (node.left == null && node.right == null) {
                node = null;
                console.log('case 1');
                return node;
            } else if (node.left == null) {
                //Case 2: One child
                node = node.right;
                console.log('case 2');
            } else if (node.right == null) {
                //Case 2: One child
                node = node.left;
                console.log('case 2');
            } else {
                //Case 3: Two children
                console.log('case 3');
                let min = this.findMinValue(node.right);
                node.value = min;
                node.right = this.delete(node.right, min);
            }
        }

        this.updateHeight(node);
        node = this.balance(node!);
        this.updateHeight(node);

        return node;
    }

    private findMinValue(node: TreeNode): number {
        while (node.left != null) {
            node = node.left;
        }
        return node.value;
    }

    private getHeight(node: TreeNode | null): number {
        if (node == null) return 0;
        return Math.max(node.left?.height ?? 0, node.right?.height ?? 0) + 1;
    }

    private updateHeight(node: TreeNode | null) {
        if (node == null) return;

        this.updateHeight(node.left);
        this.updateHeight(node.right);
        node.height = this.getHeight(node);
    }

    private balanceFactor(node: TreeNode | null | undefined): number {
        const left = node?.left?.height ?? 0;
        const right = node?.right?.height ?? 0;
        return left - right;

    }

    private balance(node: TreeNode): TreeNode {
        const bf = this.balanceFactor(node);

        if (bf > 1) {
            if (this.balanceFactor(node.left) < 0)
                node.left = this.leftRotation(node.left!);

            node = this.rightRotation(node);
        }

        if (bf < -1) {
            if (this.balanceFactor(node.right) > 0)
                node.right = this.rightRotation(node.right!);

            node = this.leftRotation(node);
        }

        return node;
    }

    private rightRotation(node: TreeNode): TreeNode {
        const left = node.left!;
        const center = left.right;
        left.right = node;
        node.left = center;
        return left;
    }

    private leftRotation(node: TreeNode): TreeNode {
        const right = node.right!;
        const center = right.left;
        right.left = node;
        node.right = center;
        return right;
    }

    inOrder(node: TreeNode | null) {
        if (node == null) return;
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    breadthFirstTraversal(node: TreeNode | null): TreeNode[] | null{
        if (node == null) return null;

        let queue = [node];
        let values: TreeNode[] = [];

        while(queue.length > 0){
            let current = queue.shift();
            values.push(current!);
            
            if(current?.left != null) queue.push(current.left);
            if(current?.right != null) queue.push(current.right);
        }

        return values;
    }
}

export { AVLTree, TreeNode };
