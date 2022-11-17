let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};
let container = document.getElementById('container');

const createTree = (containerElement, treeData) => {
    if (Object.keys(treeData).length > 0) {
        const ulElement = document.createElement('ul');
        containerElement.append(ulElement);
        Object.keys(treeData).forEach(item => {
            const liElement = document.createElement("li");
            liElement.innerText = item;
            ulElement.append(liElement)
            createTree(liElement, treeData[item]);
        })
    }
};

createTree(container, data);