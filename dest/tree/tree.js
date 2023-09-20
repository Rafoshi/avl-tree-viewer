class TreeNode {
    constructor(value, right = null, left = null, height = 1) {
        this.right = null;
        this.left = null;
        this.height = 1;
        this.value = value;
        this.left = left;
        this.right = right;
        this.height = height;
    }
}
class AVLTree {
    constructor() {
        this.root = null;
    }
    init() {
        this.root = null;
        return this.root;
    }
    insert(node, item) {
        let newNode = new TreeNode(item);
        if (node == null)
            return newNode;
        if (item < node.value) {
            node.left = this.insert(node.left, item);
            node.left.height = this.getHeight(node.left);
        }
        if (item > node.value) {
            node.right = this.insert(node.right, item);
            node.right.height = this.getHeight(node.right);
        }
        node = this.balance(node);
        this.updateHeight(node);
        return node;
    }
    delete(node, item) {
        let nodeTemp = this.deleteNode(node, item);
        if (nodeTemp == null)
            return null;
        node = nodeTemp;
        this.updateHeight(node);
        this.updateHeightBalance(node);
        return node;
    }
    deleteNode(node, item) {
        if (node == null) {
            return node;
        }
        if (item < node.value) {
            node.left = this.deleteNode(node.left, item);
        }
        else if (item > node.value) {
            node.right = this.deleteNode(node.right, item);
        }
        else {
            if (node.left == null) {
                return node.right;
            }
            else if (node.right == null) {
                return node.left;
            }
            node.value = this.findMinValue(node.right);
            node.right = this.deleteNode(node.right, node.value);
        }
        return node;
    }
    findMinValue(node) {
        while (node.left != null) {
            node = node.left;
        }
        return node.value;
    }
    getHeight(node) {
        var _a, _b, _c, _d;
        if (node == null)
            return 0;
        return Math.max((_b = (_a = node.left) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0, (_d = (_c = node.right) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 0) + 1;
    }
    updateHeight(node) {
        if (node == null)
            return;
        this.updateHeight(node.left);
        this.updateHeight(node.right);
        node.height = this.getHeight(node);
    }
    updateHeightBalance(node) {
        if (node == null)
            return;
        this.updateHeightBalance(node.left);
        this.updateHeightBalance(node.right);
        node = this.balance(node);
    }
    balanceFactor(node) {
        var _a, _b, _c, _d;
        const left = (_b = (_a = node === null || node === void 0 ? void 0 : node.left) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 0;
        const right = (_d = (_c = node === null || node === void 0 ? void 0 : node.right) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 0;
        return left - right;
    }
    balance(node) {
        const bf = this.balanceFactor(node);
        if (bf > 1) {
            if (this.balanceFactor(node.left) < 0)
                node.left = this.leftRotation(node.left);
            node = this.rightRotation(node);
        }
        if (bf < -1) {
            if (this.balanceFactor(node.right) > 0)
                node.right = this.rightRotation(node.right);
            node = this.leftRotation(node);
        }
        return node;
    }
    rightRotation(node) {
        const left = node.left;
        const center = left.right;
        left.right = node;
        node.left = center;
        return left;
    }
    leftRotation(node) {
        const right = node.right;
        const center = right.left;
        right.left = node;
        node.right = center;
        return right;
    }
}
export { AVLTree, TreeNode };
