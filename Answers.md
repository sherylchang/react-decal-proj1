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
