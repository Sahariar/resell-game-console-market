<h1 align="center">Welcome to resell-game-console-market 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
</p>

### 🏠 [Homepage](https://resell-game-console-market.web.app/)

### Implementation of unique Features
 * On HomePage have a navbar , a banner, Advertised items, second-hand product categories section , stats,testimonial, apply section and a realistic footer,
 * When the user clicks on a category on the home page, they will be redirected to the /category/:id route, where they will see second-hand products under that category only. The /category/:id page will have a column(s) of cards. It can be 1,2, or 3 columns. Each card will have a picture, name, location, resale price, original price, years of use, the time when it got posted, the seller's name; if the seller is verified, there will be a blue tick next to their name and a Book now button. Please note, category:/id will be a private route.,
 * clicking the Book now button, a form in a modal will popup with the logged-in user name and email address, item name, and price(item name, price, and user information is not be editable) by default. You will give your phone number and meeting location, and lastly, there is be a submit button. After clicking the submit button, you will have to inform the buyer with a modal/toast that the item is booked.,
 * navbar have a login button. Implemented email/password-based authentication and  one social login(google) authentication. Created an extra field for options. There is be two options:  a dropdown. If the user creates a seller account, he will choose the seller option. Otherwise, a normal user will have the user option selected by default. Users logged in by using social media will be considered as buyers.,
 *  user(buyer/seller/admin) is logged in, they will see logout (should be working) and another option on the header called Dashboard. The dashboard routes will change based on the users,
 * Add A Product route, create a form that will have fields for product name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), product category (every product should be under a category), description, price, Year of purchase and other relevant information. After submitting the form, a modal/toast with a message will pop up to inform the user. Please remember, they must be a seller to add a product (think about the verification process for the admin access). After adding the product, you will then be redirected to the My Products Page,
 * the My Products page, display sales status (available or sold), price, and any other relevant information you want to show. A seller will be able to delete any of his/her product. Please note there will be a special button for each unsold/available product where the seller can hit the button to advertise.,
 * The advertised items will appear on the home page. Please note if there are no items marked as advertised, the advertised items section won't be displayed on the home page. The advertised section will only appear if there is one or more available (unsold items) are marked to be advertised.
 * a meaningful 404 page (not found page) added .
 * WishList in the /category/:id route. A buyer can make a product to his/her wishlist or report an item by clicking a relevant button. If you have implemented the wishlist feature, show them in the buyer's Dashboard in a separate route, "My WishList." A user should be able to purchase the item from the wishlist page. (Just redirect the user to the purchase page)
 * implemented the "report to admin" feature, show the reported items in the admin dashboard in a separate route, "Reported Items" (tips: create a separate collection for the wish list and filter by user email address). An admin will be able to delete a reported item.
 * Implement the basic version of the JWT token for email/password-based authentication. Upon social login, registration, and login, you will create a JWT token and store it on the client side. You will send the token for my orders, buyers, and advertisements routes and verify the user

 * The all-sellers route will have a name, email address, delete button, and verify button. Admin will be able to verify a seller. When clicked on the verify button, the seller's status will change from unverified to verified(show a blue tick when the seller is verified), and this status will be shown on the products added by a verified seller.
 * My Orders route will have a table/cards. Each card/ table row will be an order having an image, title, price, and a pay button. On clicking the pay button, to take the user the payment page with fields for card details will pop up, or the user will be taken to a route where there is a form for filling up card details. Save the payment information in the database and inform the user via a modal/toast. Don't forget to update the button text to "paid" after payment. Please note, payment is done by Stripe.
 * Once an item is paid, it won't be displayed on the advertised item or on the category page. Only available items will be displayed to be purchased.

 * Used react query API calls also used Axios for at API call.

### Common Feature
 * SPA site,
 * Api Fetch,
 * 404 page,
 * Authentication,
 * Responsive site,
 * React,
 * Firebase,
 * Data Server
 * Mongodb
 * React query
 * Axios


### Uses Framework and Library
   * tailwindCss,
   * daisyui
   * firebase
   * react,
   * react-dom,
   * react-icons,
   * react-router-dom,
   * react-Hook-From,
   * react-Photo-View,
   * react-toastify,
   * readme-md-generator,
   * Mongodb
   * Node.Js
   * React query
   * Axios

## Install

```sh
npm install
```

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_