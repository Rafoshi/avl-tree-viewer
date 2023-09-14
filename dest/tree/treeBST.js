class TreeNode {
    constructor(value, right = null, left = null, height = 0) {
        this.right = null;
        this.left = null;
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class TreeBST {
    constructor(root = null) {
        this.root = null;
        this.root = root;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertMany(values) {
        values.forEach(value => {
            this.insert(value);
        });
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (!root.right) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    inOrderTraversal(root) {
        let values = [];
        this.inOrderTraversalNode(root, values);
        return values;
    }
    inOrderTraversalNode(root, values) {
        if (root === null)
            return;
        this.inOrderTraversalNode(root === null || root === void 0 ? void 0 : root.left, values);
        values.push({ value: String(root === null || root === void 0 ? void 0 : root.value), layer: 0 });
        this.inOrderTraversalNode(root === null || root === void 0 ? void 0 : root.right, values);
    }
    breadthFirstTraversal(root) {
        if (root === null)
            return null;
        let values = [];
        let queue = [{ value: root, layer: 1 }];
        while (queue.length > 0) {
            let current = queue.shift();
            values.push({ value: String(current === null || current === void 0 ? void 0 : current.value.value), layer: current === null || current === void 0 ? void 0 : current.layer });
            if (current === null || current === void 0 ? void 0 : current.value.left)
                queue.push({ value: current.value.left, layer: current.layer + 1 });
            if (current === null || current === void 0 ? void 0 : current.value.right)
                queue.push({ value: current.value.right, layer: current.layer + 1 });
        }
        return values;
    }
}
export default TreeBST;
