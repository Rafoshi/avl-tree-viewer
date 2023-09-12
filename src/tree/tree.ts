import TreeReturn from "./treeReturn.js";

type QueueTree = {
    value: TreeNode;
    layer: number;
}

class TreeNode {
    value: number;
    right: TreeNode | null = null;
    left: TreeNode | null = null;

    constructor(value: number, right: TreeNode | null = null, left: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class AVLTree {
    root: TreeNode | null = null;

    constructor(root: TreeNode | null = null) {
        this.root = root;
    }

    insert(value: number) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertMany(values: number[]) {
        values.forEach(value => {
            this.insert(value);
        })
    }

    private insertNode(root: TreeNode, newNode: TreeNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    inOrderTraversal(root: TreeNode | null): TreeReturn[] | null {
        let values: TreeReturn[] = [];
        this.inOrderTraversalNode(root, values);
        return values;
    }

    private inOrderTraversalNode(root: TreeNode | null, values: TreeReturn[]) {
        if (root === null)
            return;
        this.inOrderTraversalNode(root.left, values);
        values.push({ value: String(root.value), layer: 0 });
        this.inOrderTraversalNode(root.right, values);
    }

    breadthFirstTraversal(root: TreeNode | null) {
        if (root === null)
            return null

        let values: TreeReturn[] = [];
        let queue: QueueTree[] = [{ value: root, layer: 1 }];

        while (queue.length > 0) {
            let current = queue.shift();
            values.push({ value: String(current?.value.value), layer: current?.layer })

            if (current?.value.left) queue.push({ value: current.value.left, layer: current.layer + 1 });
            if (current?.value.right) queue.push({ value: current.value.right, layer: current.layer + 1 });
        }

        return values;
    }

}

export default AVLTree;