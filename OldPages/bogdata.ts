export type BlogType = {
    title: string;
    content?: string;
    image: string;
    summary?: string;
    slug: string;
    author?: string;
    date?: string;
    readTime?: string;
  };
  
  
  const blogs: BlogType[] = [
    {
      slug: "understanding-react-hooks",
      title: "Understanding React Hooks",
      summary: "Learn how React hooks can simplify your components...",
      content: `
      <h2>Understanding React Hooks</h2>
  <p><strong>React hooks</strong> are functions that let you use state and other React features in functional components. Hooks simplify the way we handle state, side effects, and other functionalities, making functional components more powerful.</p>
  
  <h3>1. useState</h3>
  <p>The <strong>useState</strong> hook allows you to add state to functional components. It returns a state variable and a function to update it.</p>
  <pre><code>const [count, setCount] = useState(0);</code></pre>
  <ul>
    <li><strong>count</strong>: The current value of the state.</li>
    <li><strong>setCount</strong>: A function to update the value of <code>count</code>.</li>
  </ul>
  
  <h3>2. useEffect</h3>
  <p>The <strong>useEffect</strong> hook lets you perform side effects in functional components, such as:</p>
  <ul>
    <li>Fetching data from an API.</li>
    <li>Manually changing the DOM.</li>
    <li>Setting up subscriptions or event listeners.</li>
  </ul>
  <p>It runs after the first render and after every update, by default.</p>
  <pre><code>useEffect(() => {
    // Code to run after the component renders or updates
  }, []);</code></pre>
  
  <h4>useEffect with Dependencies</h4>
  <p>You can control when <code>useEffect</code> is triggered by passing a second argument, which is an array of dependencies. The effect will only run when one of the dependencies changes:</p>
  <pre><code>useEffect(() => {
    // Code that only runs when count changes
  }, [count]);</code></pre>
  
  <h4>Cleaning Up in useEffect</h4>
  <p>Sometimes, side effects require cleanup, such as canceling a subscription or clearing a timer. You can return a function from <code>useEffect</code> to handle cleanup when the component unmounts or before the effect re-runs:</p>
  <pre><code>useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  
    // Cleanup function
    return () => clearTimeout(timer);
  }, [count]);</code></pre>
  
  <h3>3. useContext</h3>
  <p>The <strong>useContext</strong> hook allows you to access the value of a context directly within your functional component without the need for a wrapper component.</p>
  <pre><code>const value = useContext(MyContext);</code></pre>
  <p>This hook simplifies the usage of React's Context API and makes it easier to share data across components.</p>
  
  <h3>4. useReducer</h3>
  <p>The <strong>useReducer</strong> hook is an alternative to <code>useState</code> for managing more complex state logic. It works similarly to how Redux reducers operate:</p>
  <pre><code>const [state, dispatch] = useReducer(reducer, initialState);</code></pre>
  <p>Instead of updating state directly, you dispatch actions, which the reducer function handles to determine how the state changes. This is useful for managing state that depends on previous state values or multiple state variables.</p>
  
  <h3>5. Custom Hooks</h3>
  <p>Custom hooks allow you to extract and reuse logic across multiple components. By prefixing a function with "use", you can create your own hooks for handling common logic.</p>
  <pre><code>function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return width;
  }</code></pre>
  <p>Custom hooks make your code more reusable and readable by separating the logic from the component itself.</p>
  
  <h3>Hooks vs. Class-based Lifecycle Methods</h3>
  <p>Before hooks, managing state and side effects in React required class components and lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>. Hooks offer a simpler and more intuitive way to achieve the same functionality:</p>
  <ul>
    <li><strong>useState</strong>: Replaces managing state via <code>this.state</code> and <code>this.setState</code>.</li>
    <li><strong>useEffect</strong>: Combines the logic of lifecycle methods like <code>componentDidMount</code> and <code>componentWillUnmount</code>.</li>
  </ul>
  
  <p>Hooks eliminate the need to manage "this" and bind functions, which makes functional components with hooks much easier to understand and work with than class components.</p>
  
  <h3>Benefits of Using Hooks</h3>
  <ul>
    <li><strong>Simplifies State Management</strong>: You can add and manage component state with less boilerplate.</li>
    <li><strong>Code Reusability</strong>: Extract reusable logic into custom hooks.</li>
    <li><strong>Functional Components</strong>: All components can be functional, which simplifies the component structure.</li>
    <li><strong>Easier to Test</strong>: Hooks-based components are simpler to unit test as they rely on pure functions rather than lifecycle methods.</li>
  </ul>
  
  <h3>Best Practices with Hooks</h3>
  <p>While hooks can simplify development, there are best practices to follow:</p>
  <ul>
    <li>Always declare hooks at the top level of your function. Do not call them conditionally or inside loops.</li>
    <li>Break down complex logic into custom hooks to make your components cleaner.</li>
    <li>Use <strong>useReducer</strong> over <strong>useState</strong> when managing complex state.</li>
  </ul>
  
  <p>React hooks have become an essential part of the React ecosystem, providing developers with easier, more readable, and maintainable code. Understanding and mastering hooks will allow you to write more efficient React applications.</p>
      `,
      image: "/assets/blog/React_Hooks.webp",
      author: "John Doe",
      date: "2024-10-20",
      readTime: "6 min read",
    },
    {
      slug: "next-js-routing-explained",
      title: "Next.js Routing Explained",
      summary:
        "A deep dive into routing in Next.js for building modern web apps...",
      content: `
          <p><strong>Next.js</strong> offers a powerful and simple routing system that lets you create pages by just creating files in the <strong>pages</strong> directory. This file-based routing makes it easy to add new pages.</p>
          <h3>Static Routing</h3>
          <p>Each file you create in the <strong>pages</strong> directory becomes a route:</p>
          <ul>
          <li><strong>/index.js</strong> → <strong>/</strong> (Homepage)</li>
          <li><strong>/about.js</strong> → <strong>/about</strong></li>
          </ul>
  
          <h3>Dynamic Routing</h3>
          <p>For <strong>dynamic routes</strong>, use brackets (<code>[param]</code>). For example:</p>
          <pre>
          <code class="language-jsx">
          // File: /pages/post/[id].js
          import { useRouter } from 'next/router';
  
          const Post = () => {
          const { id } = useRouter().query;
          return &lt;div&gt;Post ID: {id}&lt;/div&gt;;
          };
  
          export default Post;
          </code>
          </pre>
          <p>This route will match URLs like <strong>/post/1</strong> or <strong>/post/hello</strong>, giving you flexibility.</p>
  
          <h3>API Routes</h3>
          <p>You can create <strong>API routes</strong> by adding files to the <strong>pages/api</strong> directory. For example:</p>
          <pre>
          <code class="language-jsx">
          export default function handler(req, res) {
          res.status(200).json({ message: "Hello, World!" });
          }
          </code>
          </pre>
  
          <h3>Link Component</h3>
          <p>Use the <strong>Link</strong> component for navigation without reloading the page:</p>
          <pre>
          <code class="language-jsx">
          import Link from 'next/link';
  
          export default function Home() {
          return (
          &lt;Link href="/about"&gt;
          &lt;a&gt;Go to About Page&lt;/a&gt;
          &lt;/Link&gt;
          );
          }
          </code>
          </pre>
          <p>Linking without reload improves user experience by making navigation faster.</p>
  
          <h3>Benefits of Next.js Routing</h3>
          <ul>
          <li><strong>Automatic Code Splitting</strong>: Pages load only when needed, improving performance.</li>
          <li><strong>SEO-friendly</strong>: Static pages enhance search engine optimization.</li>
          <li><strong>Simplified Routing</strong>: Just create a file, and it becomes a route.</li>
          </ul>
  
          <p>Next.js provides a simple yet powerful routing system for modern web applications.</p>
  
        `,
      image: "/assets/blog/NextJs_Route.webp",
      author: "Jane Smith",
      date: "2024-10-19",
      readTime: "5 min read",
    },
    {
      slug: "css-grid-vs-flexbox",
      title: "CSS Grid vs. Flexbox",
      summary:
        "Discover the key differences between CSS Grid and Flexbox layout systems.",
      content: `
        <h2>CSS Grid vs. Flexbox: Which Layout System Should You Use?</h2>
        <p>Both <strong>CSS Grid</strong> and <strong>Flexbox</strong> are powerful layout systems available in CSS. Each has its own strengths and best use cases. In this post, we'll explore the key differences between the two and help you decide which one to use in different scenarios.</p>
    
        <h3>1. What is Flexbox?</h3>
        <p><strong>Flexbox</strong> (Flexible Box Layout) is a one-dimensional layout system that is designed to distribute space along a single axis — either a row or a column. It’s great for aligning items in a container and distributing space between them.</p>
        <pre><code>
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        </code></pre>
    
        <h3>2. What is CSS Grid?</h3>
        <p><strong>CSS Grid</strong> is a two-dimensional layout system, which means it can handle both rows and columns at the same time. It’s perfect for more complex layouts where you need full control over both dimensions.</p>
        <pre><code>
        .grid-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
        }
        </code></pre>
    
        <h3>3. Key Differences</h3>
        <ul>
          <li><strong>1D vs. 2D</strong>: Flexbox is great for one-dimensional layouts (row OR column), while Grid is best for two-dimensional layouts (both row AND column).</li>
          <li><strong>Content vs. Layout</strong>: Flexbox is primarily content-driven, meaning the layout adapts to the size of the items. Grid is more layout-driven, offering more precise control over the overall structure.</li>
          <li><strong>Alignment</strong>: Flexbox excels in item alignment along a single axis, while Grid offers more complex alignment options across both axes.</li>
        </ul>
    
        <h3>4. When to Use Flexbox?</h3>
        <p>Use Flexbox when you have a simple layout or need to align items along a single axis. Common use cases include:</p>
        <ul>
          <li>Navigation bars</li>
          <li>Horizontal or vertical centering of elements</li>
          <li>Distributing items evenly in a container</li>
        </ul>
    
        <h3>5. When to Use CSS Grid?</h3>
        <p>Use CSS Grid for more complex layouts where you need to control both rows and columns. Grid is perfect for:</p>
        <ul>
          <li>Creating full-page layouts</li>
          <li>Designing multi-column layouts</li>
          <li>Aligning items in both horizontal and vertical directions</li>
        </ul>
    
        <h3>6. Can You Combine Flexbox and Grid?</h3>
        <p>Yes! In fact, combining the two layout systems can often lead to the best results. You might use Grid for the overall page structure and Flexbox inside components where you need finer control over alignment and space distribution.</p>
    
        <h3>Conclusion</h3>
        <p>Both CSS Grid and Flexbox are essential tools in modern web development. Use Flexbox for simpler, one-dimensional layouts, and use CSS Grid when you need a more robust, two-dimensional layout. By understanding their differences and strengths, you can use them together to create responsive, flexible layouts that work across all screen sizes.</p>
      `,
      image: "/assets/blog/flexBox_vs_cssGrid.webp",
      author: "Alice Johnson",
      date: "Sep 28, 2024",
      readTime: "6 min read",
    },
    {
      slug: "building-restful-apis-with-nodejs",
      title: "Building RESTful APIs with Node.js",
      summary:
        "Comprehensive guide on creating RESTful APIs using Node.js and the Express framework effectively.",
      content: `
        <h2>Building RESTful APIs with Node.js and Express</h2>
        <p>RESTful APIs are a fundamental part of modern web development. They provide a way for different services and systems to communicate over the web. In this guide, we’ll walk through how to create a RESTful API using <strong>Node.js</strong> and the <strong>Express</strong> framework.</p>
    
        <h3>1. Setting Up Node.js and Express</h3>
        <p>To begin building a RESTful API, you need to have <strong>Node.js</strong> installed. Express is a lightweight and flexible framework that helps in building APIs quickly. You can install it via npm:</p>
        <pre><code>npm install express</code></pre>
    
        <h3>2. Creating the Basic Express App</h3>
        <p>Once Express is installed, you can create a basic Express app that will serve as the backbone of your API:</p>
        <pre><code>
        const express = require('express');
        const app = express();
        const PORT = process.env.PORT || 3000;
    
        app.get('/', (req, res) => {
          res.send('Welcome to our RESTful API');
        });
    
        app.listen(PORT, () => {
          console.log(\`Server is running on port \${PORT}\`);
        });
        </code></pre>
        <p>In this code, we define a simple GET request that responds with a message. The app listens on port 3000 or whatever port is set in your environment.</p>
    
        <h3>3. Building CRUD Operations</h3>
        <p>RESTful APIs typically allow for four basic operations, known as CRUD: <strong>Create</strong>, <strong>Read</strong>, <strong>Update</strong>, and <strong>Delete</strong>. Here’s how you can implement each operation in your Express app:</p>
        
        <h4>Creating Data (POST)</h4>
        <p>To handle POST requests for creating new data, you can use the following:</p>
        <pre><code>
        app.use(express.json());
    
        app.post('/api/items', (req, res) => {
          const newItem = req.body;
          // Save the new item to your database (mocked here)
          res.status(201).send(newItem);
        });
        </code></pre>
        
        <h4>Reading Data (GET)</h4>
        <p>You can use GET requests to retrieve data:</p>
        <pre><code>
        app.get('/api/items', (req, res) => {
          // Fetch data from the database (mocked here)
          const items = [{ id: 1, name: 'Item 1' }];
          res.send(items);
        });
        </code></pre>
    
        <h4>Updating Data (PUT)</h4>
        <p>For updating an existing resource, you can use PUT:</p>
        <pre><code>
        app.put('/api/items/:id', (req, res) => {
          const { id } = req.params;
          const updatedItem = req.body;
          // Update the item in your database (mocked here)
          res.send({ id, ...updatedItem });
        });
        </code></pre>
    
        <h4>Deleting Data (DELETE)</h4>
        <p>To delete data, you can implement the DELETE request:</p>
        <pre><code>
        app.delete('/api/items/:id', (req, res) => {
          const { id } = req.params;
          // Remove the item from your database (mocked here)
          res.status(204).send();
        });
        </code></pre>
    
        <h3>4. Middleware in Express</h3>
        <p><strong>Middleware</strong> functions are functions that have access to the request object (<code>req</code>), the response object (<code>res</code>), and the next middleware function in the application’s request-response cycle. For example, you can log requests to the console:</p>
        <pre><code>
        app.use((req, res, next) => {
          console.log(\`\${req.method} request to \${req.url}\`);
          next();
        });
        </code></pre>
    
        <h3>5. Error Handling</h3>
        <p>Good error handling is crucial in a RESTful API. You can create a middleware to handle errors:</p>
        <pre><code>
        app.use((err, req, res, next) => {
          console.error(err.stack);
          res.status(500).send('Something went wrong!');
        });
        </code></pre>
    
        <h3>Conclusion</h3>
        <p>Building a RESTful API with Node.js and Express is straightforward and efficient. By setting up routes and handling CRUD operations, you can create an API that powers modern web applications. With tools like Express, you can scale your API and integrate additional features such as authentication, database connections, and more.</p>
      `,
      image: "/assets/blog/rest-api-in-nodejs.webp",
      author: "Jane Smith",
      date: "Sep 29, 2024",
      readTime: "4 min read",
    },
    {
      title: "An Introduction to TypeScript",
      summary:
        "Learn the essential basics of TypeScript and its significant advantages over traditional JavaScript.",
      slug: "introduction-to-typescript",
      image: "/assets/blog/intro-to-typescript.webp",
      author: "Jane Smith",
      date: "Sep 29, 2024",
      readTime: "4 min read",
    },
    {
      title: "Deploying a Next.js Application",
      summary:
        "Follow these essential steps to successfully deploy your Next.js application with ease.",
      slug: "deploying-nextjs-application",
      image: "/assets/blog/deploy-next-js.webp",
      author: "Jane Smith",
      date: "Sep 29, 2024",
      readTime: "4 min read",
    },
    {
      title: "State Management in React",
      summary:
        "Learn about JavaScript promises and how to manage asynchronous operations.",
      slug: "state-management-in-react",
      image: "/assets/blog/deploy-next-js.webp",
      author: "Jane Smith",
      date: "Sep 29, 2024",
      readTime: "4 min read",
    },
    {
      title: "Understanding Promises in JavaScript",
      summary:
        "Learn about JavaScript promises and how to manage asynchronous operations.",
      slug: "understanding-promises-in-javascript",
      image: "/assets/blog/deploy-next-js.webp",
      author: "Jane Smith",
      date: "Sep 29, 2024",
      readTime: "4 min read",
    },
    {
      title: "Creating a Responsive Navbar with Tailwind CSS",
      summary:
        "Build a responsive navbar using Tailwind CSS for modern applications.",
      slug: "responsive-navbar-tailwind-css",
      image: "/assets/blog/deploy-next-js.webp",
      author: "Jane Smith",
      date: "Sep 29, 2024",
      readTime: "4 min read",
    },
  ];
  
  export default blogs;
  