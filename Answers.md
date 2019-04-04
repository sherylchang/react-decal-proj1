# Answers!
Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project.


# Question 1.1
ReactDOM.render is displaying a Cart component on the page at the place in the HTML where the div with the id "root" is.

# Question 1.2
Advantages: not having to write any of the CSS yourself, getting to use beautiful styling
Disadvantages: it's hard to customize the styling from the UI library, difficulties adding in unique elements to your page

# Question 1.3
We need to wrap addToCart with another function here for the same reason we needed to wrap onClick with another function in the demo Ethan showed in class. If we write onClick={addToCart}, by default, the first argument that gets passed into addToCart will be the event object, which is not what we want. If we write onClick={addToCart(counter)}, the function will only be evaluated once when Javascript runs, not every time we click the "Add to Cart" button.

# Question 1.4a
Using the map function!

# Question 1.4b
Pulling the data in from an object is both more sustainable and more efficient, especially if our store has a large number of items.


# Part 2

# Question 2.0
The like/react button on Facebook -- this component needs state because when a user likes or reacts to a post, the UI has to update in real time to show that the user has liked or reacted to the post. React has to re-render the component based on the user input!

# Question 2.1
Parent-to-child communication is accomplished by passing down props from parent to child, and child-to-parent communication is accomplished by passing down a callback function from parent to child through props. They can't be the same because if the same method for parent-to-child communication is used for child-to-parent communication, then the parent won't know what the child is doing or how the child is changing.

# Question 2.2
In our Product.js file, we could initialize our state with one variable, "num," to keep track of how many of that particular product we have in our cart. Again, in our Product.js file, we could create a function called add() that would increase "this.state.num" by 1. Then, this number would be passed in as an argument to the callback function, addToCart(), that was passed in as props to the Product. In the addToCart() function, if the Product is already in the cartItems list, then the function would just change the count of the Product in the list. If the Product isn't in the cartItems list, then the function would create a new object with the Product name, its price, and its count and add it to cartItems. The process of removing an item from the cart would just be the opposite. 
