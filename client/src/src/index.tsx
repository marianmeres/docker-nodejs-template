
const component = () => {
    const element = document.createElement('div');
    element.innerHTML = ['Hello', 'World', new Date().toISOString()].join(' ');
    return element;
};

document.body.appendChild(component());
