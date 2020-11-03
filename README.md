# myQ

Welcome to myQ! This is a JS (JavaScript) Library that is made to help you with Queues

# How to Use:

Here are some functions that you can use for this-

1. enQ(item)- This takes the argument passed and puts it into the Queue
2. dQ(error)- This function removes the first element of the Queue. You can pass in the error message you want to display if there are no items in the Queue.
3. front(error)- This function displays the element at the front of the Queue. Same as dQ, you can pass in your own error message if there are no items in the Queue.
4. isEmpty()- This returns true if the Queue is empty.
5. printQ(error)- This returns the full Queue. You can insert your own error message if Queue is empty
6. length()- This return the length of the Queue

To actually use this:  
Copy the script from myQ.js and paste it in your project. Now, you can use browserify to require() it in your main js file.

Examples are given in the index.js file. Happy Queueing!! 😀
