The solution is to ensure the `useParams` hook is called within a component that is rendered by a route.  This component will then have access to the route parameters. 

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  // id will now be defined
  return <div>The ID is: {id}</div>;
}

// ... other code to use the component within a Route
```