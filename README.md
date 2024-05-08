# Lab 5 - Starter
Angie Nguyen, Jessica Qu

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, a unit test is not ideal unless we want to test some smaller part of the message feature. To test the message feature as a whole, this would involve multiple components interacting with each other as a user sends content to another user. This was noted as a limitation of unit tests in the cons section.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. This is a small feature that could be easily covered by a unit test. Max message length does not affect or interact with any other components, as we only need to check the message in question. 

https://qujessica2048.github.io/Lab5_Starter/explore.html
https://qujessica2048.github.io/Lab5_Starter/expose.html