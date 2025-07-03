const htmlString = '<div>Hello, world!</div>';

const parser = new DOMParser();
const doc = parser.parseFromString(htmlString, 'text/html')

const htmlStrings = [
  '<div class="item">Item 1</div>',
  '<div class="item">Item 2</div>',
  '<div class="item">Item 3</div>'
];

// Step 1: Create a container element
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

// Step 2: Deserialize and append each HTML string to the container
htmlStrings.forEach(htmlString => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  const element = doc.body.firstChild; // Get the deserialized element
  container.appendChild(element); // Append it to the container
});
console.log(document);



